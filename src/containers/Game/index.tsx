import { useTranslation } from 'react-i18next';
import { useAuth } from '../../contexts/AuthContext';
import PrivateRoute from '../../components/PrivateRoute';

const Game = () => {
  const { t } = useTranslation('game');
  const { user } = useAuth();

  return(
    <PrivateRoute user={user}>
      <div className="game">

      </div>
    </PrivateRoute>
  );
};

export default Game;
