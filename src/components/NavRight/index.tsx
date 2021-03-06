import { useTranslation } from 'react-i18next';
import { User, signOut } from 'firebase/auth';
import { auth } from '../../utilities/firebase';

interface IProps {
  user: User | null | undefined
};

const NavRight = (props: IProps) => {
  const { t } = useTranslation('home');

  if (props.user)
    return(
      <div>
        <ul>
          <li>
            <button onClick={ () => { signOut(auth); window.location.reload(); } } className="btn">
              <i className="fas fa-sign-out-alt"></i>
            </button>
          </li>
        </ul>
      </div>
    );

  return(
    <div></div>
  );
};

export default NavRight;
