import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import background from '../find-game.svg';

function GameCards() {
  const { t } = useTranslation('home');

  return(
    <div className="find">
      <a href="#">
        <div style={{ backgroundImage: `url(${ background })` }}>
          <i className="fas fa-users"></i>
          <h2>{ t('matchmaking.title') }</h2>
          <p>{ t('matchmaking.description') }</p>
        </div>
      </a>

      <a href="#">
        <div style={{ backgroundImage: `url(${ background })` }}>
          <i className="fas fa-user-plus"></i>
          <h2>{ t('createLobby.title') }</h2>
          <p>{ t('createLobby.description') }</p>
        </div>
      </a>
    </div>
  );
}

export default GameCards;
