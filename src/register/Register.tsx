import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import background from '../logo.svg';
import { instance } from '../common/api';

function Register() {
  const { t }: { t: any } = useTranslation('auth');
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = handleSubmit(async (data) => {
    Object.assign(data, { avatar: 'avatar1' }); // temporary
    await instance.post('/users', data
    ).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  });

  return(
    <div>
      <main role="main">
        <div className="card-home">
          <div style={{ backgroundImage: `url(${ background })` }}></div>

          <div style={{ backgroundImage: `url(${ background })` }}>
            <form onSubmit={ onSubmit }>
              <input { ...register('username', { required: true }) } type="text" name="username" placeholder={ t('username') }></input><br />
              { errors.username && <span>{ t('usernameRequired') }<br /></span> }
              <input { ...register('email', { required: true }) } type="email" name="email" placeholder={ t('email') }></input><br />
              { errors.email && <span>{ t('emailRequired') }<br /></span> }
              <input { ...register('password', { required: true }) } type="password" name="password" placeholder={ t('password') }></input><br />
              { errors.password && <span>{ t('passwordRequired') }<br /></span> }

              <input type="submit" value={ t('register') }></input>
            </form><br />
            <Link to="/signin">{ t('previous') }</Link>
          </div>

          <div style={{ backgroundImage: `url(${ background })` }}></div>
        </div>
      </main>
    </div>
  );
}

export default Register;
