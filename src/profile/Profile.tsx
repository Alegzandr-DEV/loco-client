import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { instance } from '../common/api';
import { useEffect, useState } from 'react';
import User from './User';

type Params = {
  id: string;
};

function Profile() {
  const { t } = useTranslation('profile');
  const [userInfo, getUserInfo] = useState('');
  const { id } = useParams<Params>();

  const getUser = () => {
    instance.get('/users/' + id)
      .then((response) => {
        getUserInfo(response.data);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => { getUser(); }, []);

  return(
    <div className="profile">
      <User user={ userInfo } />
    </div>
  );
}

export default Profile;
