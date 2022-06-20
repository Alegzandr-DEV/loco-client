import { useRef } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../contexts/AuthContext'
import SigninCard from '../../components/SigninCard';
import RulesCard from '../../components/RulesCard';

const Register = () => {
  const { t }: { t: any } = useTranslation('auth');
  const { signUp, user } = useAuth();
  const usernameRef = useRef<any>();
  const emailRef = useRef<any>();
  const passwordRef = useRef<any>();
  const confirmPasswordRef = useRef<any>();
  const acceptTermsRef = useRef<any>();


  const register = () => {
    if (passwordRef.current.value !== confirmPasswordRef.current.value)
      return alert(t('confirmRequired'));

    if (acceptTermsRef.current.value === '')
      return alert(t('acceptRequired'));
    
    return signUp(emailRef.current.value, passwordRef.current.value);
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
              placeholder={t('username')}
              ref={usernameRef}
              required
            />
            <br />

            <label htmlFor="email"><i className="fas fa-envelope"></i></label>
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

            <label htmlFor="confirm"><i className="fas fa-lock"></i></label>
            <input
              type="password"
              placeholder={t('confirm')}
              ref={confirmPasswordRef}
              required
            />
            <br />

            <input 
              type="checkbox"
              ref={acceptTermsRef}
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
