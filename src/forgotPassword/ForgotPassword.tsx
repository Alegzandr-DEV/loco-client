import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/pages/home.scss';
import background from '../card-bg.svg';

function ForgotPassword() {
  const { t } = useTranslation('auth');

  return(
    <div className="cards">
      <div style={{ backgroundImage: `url(${ background })` }}></div>

      <div style={{ backgroundImage: `url(${ background })` }}>
        <form>
          <input type="email" name="email" placeholder={t('email')}></input><br />

          <button type="submit">{t('find')}</button>
        </form><br />
        <Link to="/signin">{t('previous')}</Link>
      </div>

      <div style={{ backgroundImage: `url(${ background })` }}></div>
    </div>
  );
}

export default ForgotPassword;
