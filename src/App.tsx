import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Routes/Home';
import Search from './Routes/Search';
import Tv from './Routes/Tv';
import Setting from './Routes/Setting';
import Sign from './Routes/Sign';
import { useEffect, useState } from 'react';
import authService from './login';
function App() {
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
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/multiflix">
          <Home />
        </Route>
        <Route path="/tv">
          <Tv />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/profile">
          <Home />
        </Route>
        {isSignIn ? (
          <Route path="/setting">
            <Setting />
          </Route>
        ) : (
          <Route path="/setting">
            <Sign />
          </Route>
        )}

        <Sign />

        <Route path={['/', '/movies/:movieId']}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
