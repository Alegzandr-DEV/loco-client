import { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { auth } from '../../utilities/firebase';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import SigninCard from '../../components/SigninCard';
import RulesCard from '../../components/RulesCard';

const ForgotPassword = () => {
  const { t }: { t: any } = useTranslation('auth');
  const [ email, setEmail ] = useState('');
  const [ sendPasswordResetEmail, user ] = useSendPasswordResetEmail(auth);

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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('email')}
              required
            />
            <br />

            <button
              className="btn-c2a long"
              onClick={async () => { await sendPasswordResetEmail(email); alert(t('emailSent')); }}
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
