import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import  AuthentificationService from './services/authentification-service';

const PrivateRoute = ({  Component, ...rest }) => (
  <Route {...rest} render={(props) => {
    const isAuthentificated = AuthentificationService.isAuthentificated;
    if (!isAuthentificated) {    
      return <Redirect to={{ pathname: '/' }} />
    }
  
    return <Component {...props} />
  }} />
);
  
export default PrivateRoute;