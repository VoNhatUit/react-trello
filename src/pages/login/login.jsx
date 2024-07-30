import { useNavigate } from 'react-router-dom';
import React from 'react';
import { useAppContext } from '../../contexts/app-context';
import { Button, Checkbox, Form, Input } from 'antd';
import {LockOutlined, UserOutlined } from '@ant-design/icons';
function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const { isLogin } = useAppContext();

    function onLogin() {
        // call api login -> return token -> save localstorage & redirect to home
        const access_token = '123456';

        if(access_token) {
            window.localStorage.setItem('access_token', access_token);
            navigate('/')
        }
    }

    const handleSubmit = ()=> {
        const checkUser = isLogin(username, password);
        if (checkUser) {
          window.localStorage.setItem('access_token', Date.now());
          navigate('/');
        } else {
          alert('Invalid account, please try again');
        }
      };
    return (
        <section className="md:container">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0]">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8 font-sans	">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-xl] text-center">
                        Sign in to your account
                    </h1>
                     <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={handleSubmit}
                        >
                        <Form.Item
                            name="username"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} 
                                placeholder="Username" 
                                type='text'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}/>
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                            ]}
                        >
                            <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Item>

                        <Form.Item>
                            <div className="flex justify-between items-center">
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                                <a href="">Forgot password</a>
                            </div>
                        </Form.Item>

                        <Form.Item className="flex flex-col items-center">
                            <Button type="primary" htmlType="submit" className="p-5 w-60 mb-1 text-lg">
                                Log in
                            </Button>
                            <div>
                                Or <a href="">register now!</a>
                            </div>
                        </Form.Item>
        </Form>
                </div>
            </div>
        </div>
           
        </section>
    )
}

export default Login