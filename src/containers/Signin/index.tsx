import { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { auth } from '../../utilities/firebase';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SigninCard from '../../components/SigninCard';
import RulesCard from '../../components/RulesCard';

const Signin = () => {
  const { t }: { t: any } = useTranslation('auth');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ signInWithEmailAndPassword, user ] = useSignInWithEmailAndPassword(auth);

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
          <Link to="/"><i className="fas fa-chevron-left previous"></i></Link>
          
          <div className="logo">
            <img src="/img/logos/logo-white.svg" alt="Loco" />
            <h1>Loco</h1>
          </div>

          <form>
            <label htmlFor="username"><i className="fas fa-user-alt"></i></label>
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

            <div className="align-r">
              <Link to="/forgot-password">{t('forgot')}</Link>
              <br />
            </div>

            <button
              className="btn-c2a"
              onClick={() => signInWithEmailAndPassword(email, password)}
            >
              {t('signIn')}
            </button>

            <br />
            
            <div className="register">
              {t('noAccount')} &nbsp;
              <Link to="/register" className="text-secondary">
                {t('register')}
              </Link>
            </div>
          </form>
        </div>

        <RulesCard />
      </div>
    </div>
  );
};

export default Signin;
