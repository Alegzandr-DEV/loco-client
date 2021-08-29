import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
//import { io } from 'socket.io-client';
import Home from './home/Home';
import SignIn from './signIn/SignIn';
import Register from './register/Register';
import ForgotPassword from './forgotPassword/ForgotPassword';
import Game from './game/Game';
import Profile from './profile/Profile';
import TermsOfService from './termsOfService/TermsOfService';
import Privacy from './privacy/Privacy';
import Contact from './contact/Contact';
import { instance } from './common/api';

function App() {
  //const socket = io('http://localhost:9000');
  const { i18n, t } = useTranslation('home');
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  i18n.on('languageChanged', (lng) => { document.documentElement.setAttribute('lang', lng); })

  instance.interceptors.response.use((response) => { return response; }, (error) => {
    const status = error.response ? error.response.status : null;

    if (status === 418)
      return instance.request(error.config);
  
    return Promise.reject(error);
  });

  return (
    <Router>
      <div className="App">
        <header className="py-1 bg-dark">
          <div className="container">
            <nav className="row flex-nowrap justify-content-between align-items-center">
              <div className="col-4 pt-1">
                <button type="button" onClick={ () => changeLanguage('en') }>
                  en
                </button>
                <button type="button" onClick={ () => changeLanguage('fr') }>
                  fr
                </button>
              </div>

              <div className="col-4 text-center">
                <Link to="/" className="logo">
                  <img src="/img/logos/logo-white.svg" alt="logo" />
                  <span>LOCO</span>
                </Link>
              </div>

              <div className="col-4 d-flex justify-content-end align-items-center"></div>
            </nav>
          </div>
        </header>

        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/privacy">
            <Privacy />
          </Route>
          <Route path="/terms-of-service">
            <TermsOfService />
          </Route>
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

        <footer>
          <Link to="/terms-of-service">{ t('termsOfService') }</Link> |&nbsp;
          <Link to="/privacy">{ t('privacy') }</Link> |&nbsp;
          <Link to="/contact">{ t('contact') }</Link>
        </footer>
      </div>
    </Router>
  );
}

export default App;
