import { createContext, useState, FC } from 'react';
import { UserContextState } from './types';
import { instance } from './api';

const contextDefaultValues: UserContextState = {
  id: '',
  avatar: '',
  email: '',
  username: '',
  auth: false,
  signin: () => {},
  signout: () => {},
  authGuest: () => {}
};

export const UserContext = createContext<UserContextState>(
  contextDefaultValues
);

const UserProvider: FC = ({ children }) => {
  const [id, setId] = useState(contextDefaultValues.id);
  const [avatar, setAvatar] = useState(contextDefaultValues.avatar);
  const [email, setEmail] = useState(contextDefaultValues.email);
  const [username, setUsername] = useState(contextDefaultValues.username);
  const [auth, setAuth] = useState(contextDefaultValues.auth);

  const signin = () => {
    instance.post('/auth/me').then(response => {
      setId(response.data.id);
      setAvatar(response.data.avatar);
      setEmail(response.data.email);
      setUsername(response.data.username);
      setAuth(true);
     });
  };

  const signout = () => {
    instance.post('/auth/signout').then(() => {
      setId('');
      setAvatar('');
      setEmail('');
      setUsername('');
      setAuth(false);
     });
  };

  const authGuest = (user: { id: string, avatar: string, username: string }) => {
    setId(user.id);
    setAvatar(user.avatar);
    setUsername(user.username);
    setAuth(true);
  };

  return (
    <UserContext.Provider value={{ id, avatar, email, username, auth, signin, signout, authGuest }}>
      { children }
    </UserContext.Provider>
  );
};

export default UserProvider;
