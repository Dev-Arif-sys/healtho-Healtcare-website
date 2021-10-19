import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../component/Hooks/useAuth';

const PrivateRoute = ({children,...rest}) => {
    const {user,isLoading}=useAuth();
    if(isLoading){
      return <div className='text-center'>
        <Spinner animation="border" variant="warning" />
      </div>
    }
    return (
        <Route
        {...rest}
        render={({ location }) =>
          user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/signin",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;