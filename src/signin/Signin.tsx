import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import SigninCard from '../home/SigninCard';
import RulesCard from '../home/RulesCard';
import { instance } from '../common/api';

function Signin() {
  const { t }: { t: any } = useTranslation('auth');
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    await instance.post('/auth/signin', data);
  });

  return(
    <div className="auth">
      <div className="overlay"></div>
      <div className="cards">
        <SigninCard />
        
        <div>
          <Link to="/"><i className="fas fa-chevron-left previous"></i></Link>
          
          <div className="logo">
            <img src="/img/logos/logo-white.svg" alt="Loco" />
            <h1>Loco</h1>
          </div>

          <form onSubmit={ onSubmit }>
            <label htmlFor="username"><i className="fas fa-user-alt"></i></label>
            <input
              { ...register('username', { required: true }) }
              type="text"
              name="username"
              placeholder={ t('usermail') }
            />

            <br />
            { errors.username && <span>{ t('usermailRequired') }<br /></span> }

            <label htmlFor="password"><i className="fas fa-lock"></i></label>
            <input
              { ...register('password', { required: true }) }
              type="password"
              name="password"
              placeholder={ t('password') }
            />

            <br />
            { errors.password && <span>{ t('passwordRequired') }<br /></span> }

            <div className="align-r">
              <Link to="/forgot-password">{ t('forgot') }</Link>
              <br />
            </div>

            <input type="submit" value={ t('signIn') } className='btn-c2a' />

            <br />
            
            <div className="register">
              { t('noAccount') } &nbsp;
              <Link to="/register" className="text-secondary">
                { t('register') }
              </Link>
            </div>
          </form>
        </div>

        <RulesCard />
      </div>
    </div>
  );
}

export default Signin;
