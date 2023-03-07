import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({
  component: Component,
  isLogin: { isLogin }
}) => {
 
  if (isLogin) return <Component />;

  return <Navigate to="/login" />;
};


export default PrivateRoute;
