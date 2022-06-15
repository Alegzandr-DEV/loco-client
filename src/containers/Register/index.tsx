import { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { auth } from '../../utilities/firebase';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SigninCard from '../../components/SigninCard';
import RulesCard from '../../components/RulesCard';

const Register = () => {
  const { t }: { t: any } = useTranslation('auth');
  const [ username, setUsername ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ confirmPassword , setConfirmPassword ] = useState('');
  const [ acceptTerms, setAcceptTerms ] = useState('');
  const [ createUserWithEmailAndPassword, user ] = useCreateUserWithEmailAndPassword(
    auth, { sendEmailVerification: true }
  );

  const register = () => {
    if (password !== confirmPassword)
      return alert(t('confirmRequired'));

    if (acceptTerms === '')
      return alert(t('acceptRequired'));
    
    return createUserWithEmailAndPassword(email, password);
    // TODO: Add username to user in database
  };

  if (user) {
    return(
      <Navigate replace to="/" />
    );
  }

  return(
    <div className="auth">
      <div className="overlay"></div>
      <div className="cards">
        <SigninCard />

        <div>
          <Link to="/signin"><i className="fas fa-chevron-left previous"></i></Link>

          <div className="logo">
            <img src="/img/logos/logo-white.svg" alt="Loco" />
            <h1>Loco</h1>
          </div>

          <form>
            <label htmlFor="username"><i className="fas fa-user-alt"></i></label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder={t('username')}
              required
            />
            <br />

            <label htmlFor="email"><i className="fas fa-envelope"></i></label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('email')}
              required
            />
            <br />

            <label htmlFor="password"><i className="fas fa-lock"></i></label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={t('password')}
              required
            />
            <br />

            <label htmlFor="confirm"><i className="fas fa-lock"></i></label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder={t('confirm')}
              required
            />
            <br />

            <input 
              type="checkbox"
              value={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.value)}
            />
            <span> {t('accept')}</span>
            <br />

            <button
              className="btn-c2a"
              onClick={register}
            >
              {t('register')}
            </button>
          </form>
        </div>

        <RulesCard />
      </div>
    </div>
  );
};

export default Register;
