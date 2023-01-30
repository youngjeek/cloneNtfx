import authService from '../login';
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { useEffect, useState } from 'react';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newAccount, setNewAccount] = useState(false);
  const [error, setError] = useState('');

  //sign-in
  const [isSignIn, setSignIn] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setSignIn(true);
      } else {
        setSignIn(false);
      }
    });
  });

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      if (newAccount) {
        //create New Account
        await createUserWithEmailAndPassword(authService, email, password);
      } else {
        //Sign In
        await signInWithEmailAndPassword(authService, email, password);
      }
    } catch (error) {
      setError(error.code + ':' + error.message);
    }
  };

  const toggleAccount = () => setNewAccount((prev) => !prev);
  //Social sign-in option
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === 'google') {
      provider = new GoogleAuthProvider();
    } else if (name === 'github') {
      provider = new GithubAuthProvider();
    }
    const data = await signInWithPopup(authService, provider);
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          value={email}
          type="email"
          placeholder="email"
          required
          onChange={onChange}
        />
        <input
          name="password"
          value={password}
          type="password"
          placeholder="password"
          minLength={6}
          required
          onChange={onChange}
        />
        <input type="submit" value={newAccount ? 'Sign-up' : 'Sign-In'} />
        {error}
      </form>
      <span onClick={toggleAccount}>
        {newAccount ? (
          <button style={{ width: '400px' }} name="sign-In">
            Back to Sign-In
          </button>
        ) : (
          'New to Multiflix : Sign up now!'
        )}
      </span>
      <div>
        Get Started with
        <button name="google" onClick={onSocialClick}>
          Google
        </button>
        <button name="github" onClick={onSocialClick}>
          gitHub
        </button>
      </div>
    </div>
  );
};
export default Auth;
