import { auth } from '../../utilities/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

import SigninCard from '../../components/SigninCard';
import GuestCard from '../../components/GuestCard';
import RulesCard from '../../components/RulesCard';
import GameCards from '../../components/GameCards';

const Home = () => {
  const [user] = useAuthState(auth);

  return(
    <div className="home">
      {
        user ?
        <GameCards />
        :
        <div className="cards">
          {[ <SigninCard />, <GuestCard />, <RulesCard /> ]}
        </div>
      }
    </div>
  );
};

export default Home;
