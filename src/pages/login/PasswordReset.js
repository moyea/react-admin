import React, { Component } from 'react';
import { Button, Form, Icon, Input } from 'antd';
import { Link } from 'react-router-dom';

class PasswordResetComp extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="page-login">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item className="form-title">Forgot Password</Form.Item>
          <Form.Item>
            {getFieldDecorator('email', {
              rules: [
                {
                  required: true,
                  message: 'Please input your email!',
                },
              ],
            })(
              <Input
                prefix={<Icon type="user" />}
                placeholder="example@example.com"
              />
            )}
          </Form.Item>
          <Form.Item className="last-form-item">
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Reset Password{' '}
              <Icon
                type="right"
                className="right"
                style={{ lineHeight: '24px' }}
              />
            </Button>
            <Link href="#">Back to Login</Link>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const PasswordReset = Form.create()(PasswordResetComp);

export default PasswordReset;
