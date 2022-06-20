import { useRef } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../contexts/AuthContext';
import SigninCard from '../../components/SigninCard';
import RulesCard from '../../components/RulesCard';

const Signin = () => {
  const { t }: { t: any } = useTranslation('auth');
  const { signIn, user } = useAuth();
  const emailRef = useRef<any>();
  const passwordRef = useRef<any>();

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
              placeholder={t('email')}
              ref={emailRef}
              required
            />
            <br />

            <label htmlFor="password"><i className="fas fa-lock"></i></label>
            <input
              type="password"
              placeholder={t('password')}
              ref={passwordRef}
              required
            />
            <br />

            <div className="align-r">
              <Link to="/forgot-password">{t('forgot')}</Link>
              <br />
            </div>

            <button
              className="btn-c2a"
              onClick={() => signIn(emailRef.current.value, passwordRef.current.value)}
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
