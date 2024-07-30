
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import Register from './pages/register';

import User from './pages/user';
import UserAccount from './pages/user/user-account';
import UserDetail from './pages/user/user-detail';
import UserProfile from './pages/user/user-profile';

import GuestRoute from './routes/guest-route';
import AuthRoute from './routes/auth-route';
import NavigateButton from './components/navigate-button';
import React from 'react';
import { Link, Routes, Route, NavLink, useNavigate } from "react-router-dom";
import { UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, Space, Menu } from 'antd';

function App() {
  const [isLogIn, setIsLogIn] = React.useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLogIn(false);
    navigate('/');
  };
  const items = [
    {
      key: '0',
      label: isLogIn ? <NavLink to="/profile">Profile</NavLink> : <NavLink to="/login">Login</NavLink>
    },
    {
      key: '1',
      label: isLogIn ? 'Logout' : <NavLink to="/register">Register</NavLink>,
    
    }]


  
  return (
    <>

      <header className='flex'>
        <div className="header__container">
          <div className="header__logo" />
          <div className="header__right">
          <Dropdown  menu={{ items }} trigger={['hover']}>
          <a className="text-white mr-4" onClick={e => e.preventDefault()}>
            <UserOutlined className=''/> Account
          </a>
          </Dropdown>
            {/* <NavigateButton to="/login" text="Login"/>
            <div className="header__avatar">
              <img src="src/assets/images/avatar.png" alt="Avatar" />
            </div> */}
          </div>
        </div>
      </header>
      <main id="main">
        <Routes>
          
            <Route path="/" element={<Dashboard /> }/>
            <Route path="/login" element={<GuestRoute> <Login /> </GuestRoute>}/>
            <Route path="/register" element={<Register /> }/>

            <Route path="/user" element={<AuthRoute> <User/> </AuthRoute>}>
              <Route path="account" element={<UserAccount />} />
              <Route path="profile" element={<UserProfile />} />
              <Route path="profile/:userId" element={<UserDetail />} />
            </Route>

        </Routes>
      </main>
    </>
  )
}

export default App
