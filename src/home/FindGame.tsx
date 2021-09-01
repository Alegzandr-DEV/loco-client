import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import background from '../find-game.svg';

function FindGame() {
  const { t } = useTranslation('home');

  return(
    <div className="find">
      <a href="#">
        <div style={{ backgroundImage: `url(${ background })` }}>
          <i className="fas fa-users"></i>
          <h2>Matchmaking</h2>
          <p>Find random match online</p>
        </div>
      </a>

      <a href="#">
        <div style={{ backgroundImage: `url(${ background })` }}>
          <i className="fas fa-user-plus"></i>
          <h2>Create Lobby</h2>
          <p>Play with your friends !</p>
        </div>
      </a>
    </div>
  );
}

export default FindGame;
