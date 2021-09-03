import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import SigninCard from '../home/SigninCard';
import RulesCard from '../home/RulesCard';
import { instance } from '../common/api';

function Register() {
  const { t }: { t: any } = useTranslation('auth');
  const { register, watch, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = handleSubmit(async (data) => {
    Object.assign(data, { avatar: 'avatar1' }); // temporary
    delete data.confirm;
    delete data.accept;

    await instance.post('/auth/register', data
    ).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  });

  return(
    <div className="auth">
      <div className="overlay"></div>
      <div className="cards">
        <SigninCard />

        <div>
          <Link to="/signin"><i className="fas fa-chevron-left previous"></i></Link>

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
              placeholder={ t('username') }
            />

            <br />
            { errors.username && <span>{ t('usernameRequired') }<br /></span> }

            <label htmlFor="email"><i className="fas fa-envelope"></i></label>
            <input
              { ...register('email', { required: true }) }
              type="email"
              name="email"
              placeholder={ t('email') }
            />

            <br />
            { errors.email && <span>{ t('emailRequired') }<br /></span> }

            <label htmlFor="password"><i className="fas fa-lock"></i></label>
            <input
              { ...register('password', { required: true }) }
              type="password"
              name="password"
              placeholder={ t('password') }
            />
            
            <br />
            { errors.password && <span>{ t('passwordRequired') }<br /></span> }

            <label htmlFor="confirm"><i className="fas fa-lock"></i></label>
            <input
              {...register('confirm', { validate: (value) => value === watch('password') })}
              type="password"
              name="confirm"
              placeholder={ t('confirm') }
            />

            <br />
            { errors.confirm && <span>{ t('confirmRequired') }<br /></span> }

            <input 
              { ...register('acceptTerms', { validate: (value) => value === true }) }
              type="checkbox"
              name="acceptTerms"
            />
            <span> { t('accept') }</span>

            <br />
            { errors.acceptTerms && <span>{ t('acceptRequired') }<br /></span> }

            <input type="submit" value={ t('register') } className='btn-c2a' />
          </form>
        </div>

        <RulesCard />
      </div>
    </div>
  );
}

export default Register;
