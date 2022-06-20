import { Link } from 'react-router-dom';
import { User } from 'firebase/auth';
import NavLeft from '../NavLeft';
import NavRight from '../NavRight';

interface IProps {
  user: User | null | undefined
};

const Header = (props: IProps) => {
  return(
    <header>
      <nav>
        <NavLeft user={props.user} />

        <div>
          <Link to="/" className="logo">
            <img src="/img/logos/logo-white.svg" alt="logo" />
            <h1>Loco</h1>
          </Link>
        </div>

        <NavRight user={props.user} />
      </nav>
    </header>
  );
};

export default Header;
