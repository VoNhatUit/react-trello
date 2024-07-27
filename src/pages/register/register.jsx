import { Form, Input, Button, Checkbox, Select, message } from 'antd';
import React from 'react';
import { UserOutlined, LockOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { useAppContext } from '../../contexts/app-context';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;

function Register(){
    const [form] = Form.useForm();
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');

    const { registerUser } = useAppContext();
    const navigate = useNavigate();

    const onFinish = () => {
        if (registerUser(username, email, password)) {
            navigate('/login');
          } else {
            alert('Register failed');
          }
        message.success('Registration successful!');
        form.resetFields();
    };
    return (
        <section className="md:container">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0]">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8 font-sans	">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-xl] text-center">
                            Register new account
                        </h1>

                        <Form
                            form={form}
                            name="register"
                            onFinish={onFinish}
                            scrollToFirstError
                            className="max-w-md mx-auto"
                            >
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!', whitespace: true }]}
                            >
                                <Input prefix={<UserOutlined />} 
                                    placeholder="Username" 
                                    type='text'
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}/>
                            </Form.Item>

                            <Form.Item
                                name="email"
                                rules={[
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                },
                                ]}
                            >
                                <Input prefix={<MailOutlined />} 
                                    placeholder="Email" 
                                    type="email"
                                    value={email}
                                    onChange={(e) => setPassword(e.target.value)}/>
                            </Form.Item>

                            <Form.Item
                                name="password"
                                rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                                ]}
                                hasFeedback
                            >
                                <Input.Password prefix={<LockOutlined />} 
                                                placeholder="Password" 
                                                type="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}/>
                            </Form.Item>

                            <Form.Item
                                name="confirm"
                                dependencies={['password']}
                                hasFeedback
                                rules={[
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                    },
                                }),
                                ]}
                            >
                                <Input.Password prefix={<LockOutlined />} placeholder="Confirm Password" />
                            </Form.Item>                     

                            {/* <Form.Item
                                name="phone"
                                rules={[{ required: true, message: 'Please input your phone number!' }]}
                            >
                                <Input prefix={<PhoneOutlined />} placeholder="Phone Number" />
                            </Form.Item>

                            <Form.Item
                                name="gender"
                                rules={[{ required: true, message: 'Please select gender!' }]}
                            >
                                <Select placeholder="Select your gender">
                                <Option value="male">Male</Option>
                                <Option value="female">Female</Option>
                                <Option value="other">Other</Option>
                                </Select>
                            </Form.Item> */}

                            <Form.Item
                                name="agreement"
                                valuePropName="checked"
                                rules={[
                                {
                                    validator: (_, value) =>
                                    value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                                },
                                ]}
                            >
                                <Checkbox>
                                I have read the <a href="">agreement</a>
                                </Checkbox>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="w-full">
                                    Register
                                </Button>
                            </Form.Item>
                        </Form>

                    </div>
                </div>
            </div>
        </section>
        
        
    )
}
export default Register