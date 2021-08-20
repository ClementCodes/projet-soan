import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthenticationService from './services/authentification-service';
  
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => {
    const isAuthenticated = AuthenticationService.isAuthenticated;
    if (!isAuthenticated) {    
      return <Redirect to={{ pathname: '/payment' }} />
    }
  
    return <Component {...props} />
  }} />
);
  
export default PrivateRoute;