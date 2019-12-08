import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Signin from './pages/containers/Signin';
import Signup from './pages/containers/Signup';
import Feed from './pages/Feed';
import Profile from './pages/containers/Profile';

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <main>
        <Switch>
          <Route path="/home" component={Home} exact />
          <Route path="/signin" component={Signin} exact />
          <Route path="/signup" component={Signup} exact />
          <Route path="/feed" component={Feed} />
          <Route path="/profile" component={Profile} />
          <Route path="/" render={() => <Redirect to="/home" />} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
