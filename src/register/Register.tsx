import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import '../styles/pages/home.scss';
import background from '../card-bg.svg';
import { instance } from '../common/api';

function Register() {
  const { t }: { t: any } = useTranslation('auth');
  const { register, watch, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = handleSubmit(async (data) => {
    Object.assign(data, { avatar: 'avatar1' }); // temporary
    delete data.confirm;

    await instance.post('/users', data
    ).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  });

  return(
    <div className="cards">
      <div style={{ backgroundImage: `url(${ background })` }}></div>

      <div style={{ backgroundImage: `url(${ background })` }}>
        <form onSubmit={ onSubmit }>
          <input { ...register('username', { required: true }) } type="text" name="username" placeholder={ t('username') } /><br />
          { errors.username && <span>{ t('usernameRequired') }<br /></span> }
          <input { ...register('email', { required: true }) } type="email" name="email" placeholder={ t('email') } /><br />
          { errors.email && <span>{ t('emailRequired') }<br /></span> }
          <input { ...register('password', { required: true }) } type="password" name="password" placeholder={ t('password') } /><br />
          { errors.password && <span>{ t('passwordRequired') }<br /></span> }
          <input {...register('confirm', { validate: (value) => value === watch('password') })} type="password" name="confirm" placeholder={ t('confirm') } /><br />
          { errors.confirm && <span>{ t('confirmRequired') }<br /></span> }

          <input type="submit" value={ t('register') }></input>
        </form><br />
        <Link to="/signin">{ t('previous') }</Link>
      </div>

      <div style={{ backgroundImage: `url(${ background })` }}></div>
    </div>
  );
}

export default Register;
