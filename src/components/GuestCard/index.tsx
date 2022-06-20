import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../contexts/AuthContext';
import background from '../../assets/card-bg.svg';
import avatars from '../../utilities/avatars';
import GuestAvatar from '../GuestAvatar';

const GuestCard = () => {
  const { t } = useTranslation('home');

  const { guestSignIn } = useAuth();

  const [avatar, getRandomAvatar] = useState('');
  const shuffledAvatars = avatars.sort(() => 0.5 - Math.random());
  let currentIndex = -1;

  const getAvatar = () => {
    if (currentIndex < shuffledAvatars.length) {
      currentIndex++;
      getRandomAvatar(shuffledAvatars[currentIndex]);
    } else {
      currentIndex = 0;
      getRandomAvatar(shuffledAvatars[currentIndex]);
    }
  };

  useEffect(() => { getAvatar(); }, []);

  // TODO: Store guest's avatar in db and change a by button
  return(
    <div style={{ backgroundImage: `url(${ background })` }}>
      <div>
        <GuestAvatar avatar={ avatar } />
        <a href="#" onClick={ () => getAvatar() } className="roll" id="random-avatar">
          <i className="fas fa-redo"></i>
        </a>
      </div>

      <div>
        <button
          className="btn-c2a"
          onClick={() => guestSignIn()}
        >
          {t('play')}
        </button>
      </div>
    </div>
  );
};

export default GuestCard;
