import { Navigate } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';

function AuthRoute({ children }) {
  const access_token = window.localStorage.getItem('access_token')

  if(!access_token) {
    return <Navigate to="/login" />
  }

  return (
    <>
      {children}
    </>
  )
}
AuthRoute.propTypes = {
 
  children: PropTypes.node
};
export default AuthRoute