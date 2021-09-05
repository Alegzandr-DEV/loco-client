import { useContext } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
//import { io } from 'socket.io-client';
import './styles/main.scss';
import { instance } from './common/api';
import { UserContext } from './common/UserProvider';
import PrivateRoute from './common/PrivateRoute';
import Home from './home/Home';
import Signin from './signin/Signin';
import Register from './register/Register';
import ForgotPassword from './forgotPassword/ForgotPassword';
import Game from './game/Game';
import Profile from './profile/Profile';
import TermsOfService from './termsOfService/TermsOfService';
import Privacy from './privacy/Privacy';
import Contact from './contact/Contact';
import { NavLeft, NavRight } from './common/Nav';

function App() {
  //const socket = io('http://localhost:9000');
  // Translations
  const { i18n, t } = useTranslation('home');
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  i18n.on('languageChanged', (lng) => { document.documentElement.setAttribute('lang', lng); })

  // Cookie renewal
  instance.interceptors.response.use((response) => { return response; }, (error) => {
    const status = error.response ? error.response.status : null;

    if (status === 418)
      return instance.request(error.config);
  
    return Promise.reject(error);
  });

  // Auth
  const { auth, signin } = useContext(UserContext);
  signin();

  return (
    <Router>
      <header>
        <nav>
          <NavLeft auth={ auth } />

          <div>
            <Link to="/" className="logo">
              <img src="/img/logos/logo-white.svg" alt="logo" />
              <h1>Loco</h1>
            </Link>
          </div>

          <NavRight auth={ auth } />
        </nav>
      </header>

      <main>
        <div className="desktop-content">
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
            <PrivateRoute path="/user/:id">
              <Profile />
            </PrivateRoute>
            <PrivateRoute path="/game">
              <Game />
            </PrivateRoute>
            <Route path="/forgot-password">
              <ForgotPassword />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/signin">
              <Signin />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>

        <div className="mobile-content"></div>
      </main>

      <div className="language">
        <button type="button" onClick={ () => changeLanguage('en') }>
          en
        </button>
        <button type="button" onClick={ () => changeLanguage('fr') }>
          fr
        </button>
      </div>

      <footer className="desktop-content">
        <ul>
          <li><Link to="/terms-of-service">{ t('termsOfService') }</Link></li>
          <li><Link to="/privacy">{ t('privacy') }</Link></li>
          <li><Link to="/contact">{ t('contact') }</Link></li>
        </ul>
      </footer>
    </Router>
  );
}

export default App;
