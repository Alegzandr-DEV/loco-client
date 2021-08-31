import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import SigninCard from '../home/SigninCard';
import RulesCard from '../home/RulesCard';
import { instance } from '../common/api';

function ForgotPassword() {
  const { t }: { t: any } = useTranslation('auth');
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = handleSubmit(async (data) => {
    await instance.post('/auth/forgot-password', data
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
            <label htmlFor="email"><i className="fas fa-envelope"></i></label>
            <input
              { ...register('email', { required: true }) }
              type="email"
              name="email"
              placeholder={ t('email') }
            />
            <br />
            { errors.email && <span>{ t('emailRequired') }<br /></span> }

            <input type="submit" value={ t('find') } className='btn-c2a long' />
          </form>
        </div>

        <RulesCard />
      </div>
    </div>
  );
}

export default ForgotPassword;
