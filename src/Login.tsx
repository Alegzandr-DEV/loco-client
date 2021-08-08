import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Login() {
  const { t } = useTranslation('auth');

  return(
    <div>
      <main role="main">
        <form>
          <input type="text" name="login" placeholder={t('usermail')}></input><br />
          <input type="password" name="password" placeholder={t('password')}></input><br />
          <Link to="/forgot-password">{t('forgot')}</Link><br />

          <button type="submit">{t('login')}</button>
        </form><br />
        <Link to="/register">{t('signup')}</Link>
      </main>
    </div>
  );
}

export default Login;
