import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

function GuestRoute({ children }) {
  const access_token = window.localStorage.getItem('access_token')

  if(access_token) {
    return <Navigate to="/" />
  }

  return (
    <>
      {children}
    </>
  )
}
GuestRoute.propTypes = {
  
  children: PropTypes.node
};
export default GuestRoute