import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/pages/home.scss';
import background from '../card-bg.svg';

function Home() {
  const { t } = useTranslation('home');

  return(
    <div className="cards">
      <div style={{ backgroundImage: `url(${ background })` }}>
        <div className="signin">
          <a href="#">
            <button id="google"><i className="fab fa-google"></i></button>
            <span>{ t('signInGoogle') }</span>
          </a>
        </div>

        <div className="signin">
          <a href="#">
            <button id="apple"><i className="fab fa-apple"></i></button>
            <span>{ t('signInApple') }</span>
          </a>
        </div>

        <div className="signin">
          <Link to="/signin">
            <button id="account"><i className="fas fa-user-circle"></i></button>
            <span>{ t('signInAccount') }</span>
          </Link>
        </div>
      </div>

      <div style={{ backgroundImage: `url(${ background })` }}>
        <div>
          <img src="/img/avatars/default-1.jpg" alt="Avatar" className="avatar" />
          <a href="#" className="roll"><i className="fas fa-redo"></i></a>
        </div>

        <div>
          <a href="#">
            <button className="call-to-action">Play</button>
          </a>
        </div>
      </div>

      <div style={{ backgroundImage: `url(${ background })` }}></div>
    </div>
  );
}


export default Home;
