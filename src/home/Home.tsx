import { useContext } from 'react';
import SigninCard from './SigninCard';
import GuestCard from './GuestCard';
import RulesCard from './RulesCard';
import GameCards from './GameCards';
import { UserContext } from '../common/UserProvider';

function Home() {
  const { auth } = useContext(UserContext);

  if (auth)
    return(
      <div className="home">
        <GameCards />
      </div>
    );

  return(
    <div className="home">
      <div className="cards">
        <SigninCard />
        <GuestCard />
        <RulesCard />
      </div>
    </div>
  );
}

export default Home;
