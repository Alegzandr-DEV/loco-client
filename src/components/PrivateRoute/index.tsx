import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { User } from 'firebase/auth';

type PrivateRouteProps = {
  user: User | null | undefined,
  children?: ReactNode
};

const PrivateRoute = (props: PrivateRouteProps) => {
  if (!props.user) {
    return(
      <Navigate replace to="/" />
    );
  }

  return(
    <>
      {props.children}
    </>
  );
}

export default PrivateRoute;
