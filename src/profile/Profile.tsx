import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { instance } from '../common/api';
import { useEffect, useState } from 'react';
import UserList from './UserList';

function getData() {
  instance.get('/users').then((response) => {
    console.log(response.data);
  }).catch((error) => {
    console.log(error);
  });
}

function Profile() {
  const { t } = useTranslation('profile');
  const [users, getUsers] = useState('');
  const getAllUsers = () => {
    instance.get('/users')
      .then((response) => {
        const allUsers = response.data;
        getUsers(allUsers);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => { getAllUsers(); }, []);

  return(
    <div>
      <UserList users={ users } />
    </div>
  );
}

export default Profile;
