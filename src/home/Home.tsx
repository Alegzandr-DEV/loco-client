import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import '../styles/pages/home.scss';
import background from '../card-bg.svg';

function Home() {
  const { t } = useTranslation('home');

  return(
    <div className="cards">
      <div style={{ backgroundImage: `url(${ background })` }}>
        <a href="#"><button><FontAwesomeIcon icon={ faGoogle } /></button></a>
        <span>{ t('signInGoogle') }</span><br />

        <a href="#"><button><FontAwesomeIcon icon={ faApple } /></button></a>
        <span>{ t('signInApple') }</span><br />

        <Link to="/signin"><button><FontAwesomeIcon icon={ faUserCircle } /></button></Link>
        <span>{ t('signInAccount') }</span><br />
      </div>

      <div style={{ backgroundImage: `url(${ background })` }}></div>

      <div style={{ backgroundImage: `url(${ background })` }}></div>
    </div>
  );
}


export default Home;
