import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';

type FormValues = {
  name: string;
  email: string;
  password: string;
};

function Register() {
  const { t }: { t: any } = useTranslation('auth');
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = handleSubmit(async (data) => {
    Object.assign(data, { avatar: 'avatar1' }); // temporary
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
        <form onSubmit={onSubmit}>
          <input { ...register('name', { required: true }) } type="text" name="name" placeholder={t('username')}></input><br />
          { errors.name && <span>Username is required.<br /></span> }
          <input { ...register('email', { required: true }) } type="email" name="email" placeholder={t('email')}></input><br />
          { errors.email && <span>Email is required.<br /></span> }
          <input { ...register('password', { required: true }) } type="password" name="password" placeholder={t('password')}></input><br />
          { errors.password && <span>Password is required.<br /></span> }

          <input type="submit" value={t('signup')}></input>
        </form><br />
        <Link to="/login">{t('previous')}</Link>
      </main>
    </div>
  );
}

export default Register;
