import { Navigate } from 'react-router-dom';
import React from 'react';
import { useAppContext } from '../contexts/app-context';
import PropTypes from 'prop-types';

function AuthRoute({ children }) {
  const access_token = window.localStorage.getItem('access_token')
  const { users } = React.useContext(useAppContext);

  if(!users) {
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