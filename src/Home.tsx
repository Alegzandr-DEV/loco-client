import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

function Home() {
  const { t } = useTranslation('home');

  return(
    <div>
      <main role="main">
        <div>
          <a href="#"><button><FontAwesomeIcon icon={faGoogle} /></button></a>
          <span>{t('loginGoogle')}</span><br />

          <a href="#"><button><FontAwesomeIcon icon={faApple} /></button></a>
          <span>{t('loginApple')}</span><br />

          <Link to="/login"><button><FontAwesomeIcon icon={faUserCircle} /></button></Link>
          <span>{t('loginAccount')}</span><br />
        </div>
      </main>
    </div>
  );
}


export default Home;
