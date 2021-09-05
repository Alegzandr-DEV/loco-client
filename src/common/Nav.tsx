import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { UserContext } from './UserProvider';

export function NavLeft(props: any) {
  const { t } = useTranslation('home');
  const { id, username } = useContext(UserContext);

  if (props.auth)
    return(
      <div>
        <ul>
          <li><Link to={ `/user/${ id }` } className="btn">{ username }</Link></li>
          <li><a href="#" className="btn">Shop</a></li>
        </ul>
      </div>
    );

  return(
    <div></div>
  );
}

export function NavRight(props: any) {
  const { t } = useTranslation('home');
  const { signout } = useContext(UserContext);

  if (props.auth)
    return(
      <div>
        <ul>
          <li>
            <button onClick={ () => { signout(); window.location.reload(); } } className="btn">
              <i className="fas fa-sign-out-alt"></i>
            </button>
          </li>
        </ul>
      </div>
    );

  return(
    <div></div>
  );
}
