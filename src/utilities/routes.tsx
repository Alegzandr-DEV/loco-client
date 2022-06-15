import Home from '../containers/Home';
import Signin from '../containers/Signin';
import Register from '../containers/Register';
import ForgotPassword from '../containers/ForgotPassword';
import Game from '../containers/Game';
import Profile from '../containers/Profile';
import TermsOfService from '../containers/TermsOfService';
import Privacy from '../containers/Privacy';
import Contact from '../containers/Contact';

const routes = [
  { name: 'Home', path: '/', element: <Home /> },
  { name: 'Signin', path: '/signin', element: <Signin /> },
  { name: 'Register', path: '/register', element: <Register /> },
  { name: 'ForgotPassword', path: '/forgot-password', element: <ForgotPassword /> },
  { name: 'Game', path: '/game', element: <Game /> },
  { name: 'Profile', path: '/user/:id', element: <Profile /> },
  { name: 'TermsOfService', path: '/terms-of-service', element: <TermsOfService /> },
  { name: 'Privacy', path: '/privacy', element: <Privacy /> },
  { name: 'Contact', path: '/contact', element: <Contact /> },
];

export default routes;
