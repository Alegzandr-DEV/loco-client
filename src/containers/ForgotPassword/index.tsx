import { useRef } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../contexts/AuthContext';
import SigninCard from '../../components/SigninCard';
import RulesCard from '../../components/RulesCard';

const ForgotPassword = () => {
  const { t }: { t: any } = useTranslation('auth');
  const { resetPassword, user } = useAuth();
  const emailRef = useRef<any>();

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
            <label htmlFor="email"><i className="fas fa-envelope"></i></label>
            <input
              type="email"
              placeholder={t('email')}
              ref={emailRef}
              required
            />
            <br />

            <button
              className="btn-c2a long"
              onClick={async () => { await resetPassword(emailRef.current.value); alert(t('emailSent')); }}
            >
              {t('find')}
            </button>
          </form>
        </div>

        <RulesCard />
      </div>
  </div>
  );
};

export default ForgotPassword;
