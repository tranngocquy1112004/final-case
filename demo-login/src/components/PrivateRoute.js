// src/components/PrivateRoute.js
import React from 'react';
import { Route, Link } from 'react-router-dom';


const PrivateRoute = ({ component: Component, isLoggedIn, onLogout, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (isLoggedIn ? <Component {...props} onLogout={onLogout} /> : <Link to="/login" />)}
    />
  );
};

export default PrivateRoute;
