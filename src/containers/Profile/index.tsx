import { useTranslation } from 'react-i18next';
import { useAuth } from '../../contexts/AuthContext';
import PrivateRoute from '../../components/PrivateRoute';

const Profile = () => {
  const { t } = useTranslation('profile');
  const { user } = useAuth();

  return(
    <PrivateRoute user={user}>
      <div className="profile">

      </div>
    </PrivateRoute>
  );
};

export default Profile;
