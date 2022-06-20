import { useAuth } from '../../contexts/AuthContext';
import SigninCard from '../../components/SigninCard';
import GuestCard from '../../components/GuestCard';
import RulesCard from '../../components/RulesCard';
import GameCards from '../../components/GameCards';

const Home = () => {
  const { user } = useAuth();

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
