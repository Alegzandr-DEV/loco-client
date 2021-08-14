import React, { Suspense } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import Game from './Game';
//import { io } from 'socket.io-client';
import { useTranslation } from 'react-i18next';
//const socket = io('http://localhost:9000');

function App() {
  const { i18n } = useTranslation('home');
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>

          <button type="button" onClick={ () => changeLanguage('en') }>
            en
          </button>
          <button type="button" onClick={ () => changeLanguage('fr') }>
            fr
          </button>
        </header>

        <Switch>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/forgot-password">
            <ForgotPassword />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
