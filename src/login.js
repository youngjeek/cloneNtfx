import { getAuth } from 'firebase/auth';

import { initializeApp } from 'firebase/app';
const firebaseConfig = {
  apiKey: 'AIzaSyADg0YPyFxuh-wseVmby8_lUj5reDjqBq0',
  authDomain: 'multiflixxx.firebaseapp.com',
  projectId: 'multiflixxx',
  storageBucket: 'multiflixxx.appspot.com',
  messagingSenderId: '637497209628',
  appId: '1:637497209628:web:4ca3079cc87d1fb7bfc0d9',
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_ID,
  // appId: process.env.REACT_APP_APP_ID,
};
// Initialize Firebase
export const appFirebase = initializeApp(firebaseConfig);

// Authentication and get a reference to the service
const authService = getAuth(appFirebase);

export default authService;
