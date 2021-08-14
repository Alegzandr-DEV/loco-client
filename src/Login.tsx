import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';

type FormValues = {
  name: string;
  email: string;
  password: string;
};

function Login() {
  const { t }: { t: any } = useTranslation('auth');
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await fetch('http://localhost:9000/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      console.log(await response.json());
    } catch (error) {
      console.error(error);
    }
  });

  return(
    <div>
      <main role="main">
        <form onSubmit={ onSubmit }>
          <input { ...register('name', { required: true }) } type="text" name="login" placeholder={ t('usermail') }></input><br />
          { errors.name && <span>{ t('usermailRequired') }<br /></span> }
          <input { ...register('password', { required: true }) } type="password" name="password" placeholder={ t('password') }></input><br />
          { errors.password && <span>{ t('passwordRequired') }<br /></span> }
          <Link to="/forgot-password">{ t('forgot') }</Link><br />

          <input type="submit" value={ t('login') }></input>
        </form><br />
        <Link to="/register">{ t('signup') }</Link>
      </main>
    </div>
  );
}

export default Login;
