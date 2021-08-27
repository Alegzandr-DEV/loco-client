import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
//import { io } from 'socket.io-client';
import logo from './logo.svg';
import './App.css';
import Home from './home/Home';
import SignIn from './signIn/SignIn';
import Register from './register/Register';
import ForgotPassword from './forgotPassword/ForgotPassword';
import Game from './game/Game';
import Profile from './profile/Profile';
import { instance } from './common/api';

function App() {
  //const socket = io('http://localhost:9000');
  const { i18n } = useTranslation('home');
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  instance.interceptors.response.use((response) => { return response; }, (error) => {
    const status = error.response ? error.response.status : null;

    if (status === 418)
      return instance.request(error.config);
  
    return Promise.reject(error);
  });

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
          <Route path="/user">
            <Profile />
          </Route>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/forgot-password">
            <ForgotPassword />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/signin">
            <SignIn />
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
