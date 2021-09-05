import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import background from '../card-bg.svg';

function GuestCard() {
  const { t } = useTranslation('home');

  return(
    <div style={{ backgroundImage: `url(${ background })` }}>
      <div>
        <img src="/img/avatars/default-1.jpg" alt="Avatar" className="avatar" />
        <a href="#" className="roll"><i className="fas fa-redo"></i></a>
      </div>

      <div>
        <a href="#">
          <button className="btn-c2a">{ t('play') }</button>
        </a>
      </div>
    </div>
  );
}

export default GuestCard;
