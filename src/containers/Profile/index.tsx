import { useTranslation } from 'react-i18next';
import { auth } from '../../utilities/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import PrivateRoute from '../../components/PrivateRoute';

const Profile = () => {
  const { t } = useTranslation('profile');
  const [user] = useAuthState(auth);

  return(
    <PrivateRoute user={user}>
      <div className="profile">

      </div>
    </PrivateRoute>
  );
};

export default Profile;
