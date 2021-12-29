import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, useLocation,Route,Navigate } from 'react-router';
import useAuth from '../component/Hooks/useAuth';

const PrivateRoute = ({children,...rest}) => {
    const {user,isLoading}=useAuth();
    const location=useLocation()
    if(isLoading){
      return <div className='text-center'>
        <Spinner animation="border" variant="warning" />
      </div>
    }

    return ( 
      user ? children :<Navigate to='/signin' state={{from:location}}  />
      )
   
    // return (
    //     <Route
    //     {...rest}
    //     render={({ location }) =>
    //       user ? (
    //         children
    //       ) : (
    //         <Redirect
    //           to={{
    //             pathname: "/signin",
    //             state: { from: location }
    //           }}
    //         />
    //       )
    //     }
    //   />
    // );
};

export default PrivateRoute;