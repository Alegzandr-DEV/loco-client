import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom'; 
import { UserContext } from './UserProvider';

function PrivateRoute({ children, isAuthenticated, ...rest }: any) {
  let { auth } = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
