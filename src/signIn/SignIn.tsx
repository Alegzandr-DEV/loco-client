import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { instance } from '../common/api';

function SignIn() {
  const { t }: { t: any } = useTranslation('auth');
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    await instance.post('/auth/signin', data);
  });

  return(
    <div>
      <main role="main">
        <form onSubmit={ onSubmit }>
          <input { ...register('username', { required: true }) } type="text" name="username" placeholder={ t('usermail') }></input><br />
          { errors.username && <span>{ t('usermailRequired') }<br /></span> }
          <input { ...register('password', { required: true }) } type="password" name="password" placeholder={ t('password') }></input><br />
          { errors.password && <span>{ t('passwordRequired') }<br /></span> }
          <Link to="/forgot-password">{ t('forgot') }</Link><br />

          <input type="submit" value={ t('signIn') }></input>
        </form><br />
        <Link to="/register">{ t('register') }</Link><br />
        <Link to="/">{ t('previous') }</Link>
      </main>
    </div>
  );
}

export default SignIn;
