import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import background from '../card-bg.svg';
import SigninCard from './SigninCard';
import RulesCard from './RulesCard';
import FindGame from './FindGame';

function Home() {
  const { t } = useTranslation('home');

  return(
    <div className="home">
      <div className="cards">
        <SigninCard />

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

        <RulesCard />
      </div>
    </div>
  );
}


export default Home;
