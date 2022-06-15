import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation('home');

  return(
    <footer className="desktop-content">
      <ul>
        <li><Link to="/terms-of-service">{ t('termsOfService') }</Link></li>
        <li><Link to="/privacy">{ t('privacy') }</Link></li>
        <li><Link to="/contact">{ t('contact') }</Link></li>
      </ul>
    </footer>
  );
};

export default Footer;
