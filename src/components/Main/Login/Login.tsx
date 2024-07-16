import './style.css'
import React, { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useAppDispatch } from '../../../store';
import { loginUser } from '../../../store/auth/actionCreators';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); 

  const onFinish = () => {
    dispatch(loginUser({ username, password }));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <Form
          name="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <p className="form-title">Welcome back</p>
          <p>Login to the Dashboard</p>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password 
              placeholder="Password"
              autoComplete=''
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Link to="/admin" > 
            <Button type="primary" onClick={onFinish}  htmlType="submit" className="login-form-button">
              LOGIN
            </Button>
            </Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
