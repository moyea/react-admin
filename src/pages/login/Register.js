import React, {Component} from 'react';
import './login.css';
import {Button, Checkbox, Form, Icon, Input} from "antd";

class RegisterComp extends Component {

  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <div className="page-login">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item className="form-title">
            Create an Account
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
            {getFieldDecorator('email', {
              rules: [{
                required: true,
                message: 'Please input your email!'
              }]
            })(
              <Input prefix={<Icon type="mail"/>} placeholder="Email"/>
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
              getFieldDecorator('agree', {
                valuePropName: 'checked',
                initialValue: true
              })(
                <Checkbox>I agree the terms & conditions</Checkbox>
              )
            }
            <Button type="primary" htmlType="submit" className="login-form-button">
              Signup <Icon type="user-add" className="right" style={{lineHeight: '24px'}}/>
            </Button>
          </Form.Item>
          <Form.Item className="last-form-item">
            <Button type="primary" className="login-form-button" disabled>
              Login with GitHub <Icon type="github" className="right" style={{lineHeight: '24px'}}/>
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const Register = Form.create()(RegisterComp);

export default Register;
