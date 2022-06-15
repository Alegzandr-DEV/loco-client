import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { signInAnonymously } from 'firebase/auth';
import { auth } from '../../utilities/firebase';
import background from '../../assets/card-bg.svg';
import avatars from '../../utilities/avatars';
import GuestAvatar from '../GuestAvatar';

const GuestCard = () => {
  const { t } = useTranslation('home');

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

  // TODO: Store guest's avatar in db
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
          onClick={() => signInAnonymously(auth)}
        >
          {t('play')}
        </button>
      </div>
    </div>
  );
};

export default GuestCard;
