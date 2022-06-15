import { useTranslation } from 'react-i18next';
import { auth } from '../../utilities/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import PrivateRoute from '../../components/PrivateRoute';

const Game = () => {
  const { t } = useTranslation('game');
  const [user] = useAuthState(auth);

  return(
    <PrivateRoute user={user}>
      <div className="game">

      </div>
    </PrivateRoute>
  );
};

export default Game;
