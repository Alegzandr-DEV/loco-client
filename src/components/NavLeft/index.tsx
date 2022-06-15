import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { User } from 'firebase/auth';

type NavLeftProps = {
  user: User | null | undefined
};

const NavLeft = (props: NavLeftProps) => {
  const { t } = useTranslation('home');

  // TODO: Replace uid by username inside Link tag
  if (props.user)
    return(
      <div>
        <ul>
          <li><Link to={ `/user/${ props.user.uid }` } className="btn">{ props.user.uid }</Link></li>
          <li><a href="#" className="btn">Shop</a></li>
        </ul>
      </div>
    );

  return(
    <div></div>
  );
};

export default NavLeft;
