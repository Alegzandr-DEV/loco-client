import { Link } from 'react-router-dom';
import { User } from 'firebase/auth';
import NavLeft from '../NavLeft';
import NavRight from '../NavRight';

type HeaderProps = {
  user: User | null | undefined
};

const Header = (props: HeaderProps) => {
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
