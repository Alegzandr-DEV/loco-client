import { useEffect, useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import background from '../card-bg.svg';
import avatars from '../common/avatars';
import GuestAvatar from './GuestAvatar';
import { UserContext } from '../common/UserProvider';
import { instance } from '../common/api';

function GuestCard() {
  const { t } = useTranslation('home');

  const { authGuest } = useContext(UserContext);
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

  const { handleSubmit } = useForm();
  const onSubmit = handleSubmit(async () => {
    await instance.post('/guests', { avatar: avatar }).then(response => {
      instance.post('/auth/guest', response.data).then(response => {
        authGuest({
          id: response.data._id,
          avatar: response.data.avatar,
          username: response.data.username
        });
      });
    });
  });

  return(
    <div style={{ backgroundImage: `url(${ background })` }}>
      <div>
        <GuestAvatar avatar={ avatar } />
        <a href="#" onClick={ () => getAvatar() } className="roll" id="random-avatar">
          <i className="fas fa-redo"></i>
        </a>
      </div>

      <div>
        <form onSubmit={ onSubmit }>
          <input type="submit" value={ t('play').toString() } className="btn-c2a" />
        </form>
      </div>
    </div>
  );
}

export default GuestCard;
