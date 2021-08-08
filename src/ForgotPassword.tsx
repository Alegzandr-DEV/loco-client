import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function ForgotPassword() {
  const { t } = useTranslation('auth');

  return(
    <div>
      <main role="main">
        <form>
          <input type="email" name="email" placeholder={t('email')}></input><br />

          <button type="submit">{t('find')}</button>
        </form><br />
        <Link to="/login">{t('previous')}</Link>
      </main>
    </div>
  );
}

export default ForgotPassword;
