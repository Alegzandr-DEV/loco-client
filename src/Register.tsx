import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Register() {
  const { t } = useTranslation('auth');

  return(
    <div>
      <main role="main">
        <form>
          <input type="text" name="login" placeholder={t('username')}></input><br />
          <input type="email" name="email" placeholder={t('email')}></input><br />
          <input type="password" name="password" placeholder={t('password')}></input><br />

          <button type="submit">{t('signup')}</button>
        </form><br />
        <Link to="/login">{t('previous')}</Link>
      </main>
    </div>
  );
}

export default Register;
