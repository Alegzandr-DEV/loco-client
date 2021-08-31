import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import background from '../card-bg.svg';

function SigninCard() {
  const { t } = useTranslation('home');

  return(
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
  );
}

export default SigninCard;
