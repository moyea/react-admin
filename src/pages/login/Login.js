import React, {Component} from 'react';
import {Form, Input, Button, Icon, Checkbox} from 'antd';
import './login.css';

class LoginForm extends Component {

  handleSubmit() {

  }

  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <div className="page-login">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item className="form-title">
            Sign into your account
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{
                required: true,
                message: 'Please input your username!'
              }]
            })(
              <Input prefix={<Icon type="user"/>} placeholder="Username"/>
            )}
          </Form.Item>
          <Form.Item>
            {
              getFieldDecorator('password', {
                rules: [{required: true, message: 'Please input your password!'}]
              })(
                <Input prefix={<Icon type="lock"/>} type="password" placeholder="Password"/>
              )}
          </Form.Item>
          <Form.Item>
            {
              getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true
              })(
                <Checkbox>Remember Me</Checkbox>
              )
            }
            <a className="login-form-forget">Forgot password</a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Login <Icon type="right" className="right" style={{lineHeight: '24px'}}/>
            </Button>
          </Form.Item>
          <Form.Item className="last-form-item">
            <Button type="primary" className="login-form-button" disabled>
              Create Account <Icon type="user-add" className="right" style={{lineHeight: '24px'}}/>
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const Login = Form.create()(LoginForm);

export default Login;
