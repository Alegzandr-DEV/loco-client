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
          <a href="#"><button><FontAwesomeIcon icon={ faGoogle } /></button></a>
          <span>{ t('signInGoogle') }</span><br />

          <a href="#"><button><FontAwesomeIcon icon={ faApple } /></button></a>
          <span>{ t('signInApple') }</span><br />

          <Link to="/signin"><button><FontAwesomeIcon icon={ faUserCircle } /></button></Link>
          <span>{ t('signInAccount') }</span><br />
        </div>
      </main>
    </div>
  );
}


export default Home;
