import React, {Component} from 'react';
import {Form, Row, Col, Avatar, Icon, Steps, Input, Button, Radio} from "antd";
import './forms.css';

class FormsComp extends Component {

  state = {
    current: 0
  };

  prev() {
    const current = this.state.current - 1;
    this.setState({current});
  }

  next() {
    const current = this.state.current + 1;
    this.setState({current});
  }


  render() {

    const {getFieldDecorator} = this.props.form;

    const steps = [
      {
        content:
          <Form>
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{
                  required: true,
                  message: 'Please input your username!'
                }]
              })(
                <Input placeholder="Username must be unique"/>
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('email', {
                rules: [{
                  required: true,
                  message: 'Please input your username!'
                }]
              })(
                <Input placeholder="Email(eg:example@example.com)"/>
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{
                  required: true,
                  message: 'Please input your username!'
                }]
              })(
                <Input placeholder="Enter a password"/>
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('repeatPassword', {
                rules: [{
                  required: true,
                  message: 'Please input your username!'
                }]
              })(
                <Input placeholder="Passwords must match"/>
              )}
            </Form.Item>
          </Form>
      },
      {
        content: <Form>
          <Form.Item>
            {getFieldDecorator('firstName', {
              rules: [{
                required: true,
                message: 'Please input your first name!'
              }]
            })(
              <Input placeholder="First Name"/>
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('lastName', {
              rules: [{
                required: true,
                message: 'Please input your last name!'
              }]
            })(
              <Input placeholder="Last Name"/>
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('company', {
              rules: [{
                required: true,
                message: 'Please input your company!'
              }]
            })(
              <Input placeholder="Company"/>
            )}
          </Form.Item>
          <Form.Item label="Member Type" labelCol={{span: 5}}>
            <Radio.Group defaultValue="free" onChange={(e) => console.log(e.target.value)}>
              <Radio.Button value="free">Free</Radio.Button>
              <Radio.Button value="personal">Personal</Radio.Button>
              <Radio.Button value="gold">Gold</Radio.Button>
            </Radio.Group>
          </Form.Item>
        </Form>
      },
      {
        content: <Form>
          <Form.Item>
            {getFieldDecorator('phone', {
              rules: [{
                required: true,
                message: 'Please input your phone number!'
              }]
            })(
              <Input placeholder="Phone Number"/>
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('address', {
              rules: [{
                required: true,
                message: 'Please input your address!'
              }]
            })(
              <Input placeholder="Address"/>
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('city', {
              rules: [{
                required: true,
                message: 'Please input your City!'
              }]
            })(
              <Input placeholder="City"/>
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('zipCode', {
              rules: [{
                required: true,
                message: 'Please input Zip Code!'
              }]
            })(
              <Input placeholder="Zip Code"/>
            )}
          </Form.Item>
        </Form>
      },
      {
        content:
          <div className="finish">
            <h2><Icon type="check"/>Success</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cum debitis delectus eligendi error ex
              illo, illum iure libero magnam maiores natus officiis repellat sapiente sunt temporibus unde, ut
              voluptates.</p>
          </div>
      }
    ];

    return (
      <div className="page-wrapper page-forms">
        <Row>
          <Col span={12}>
            <div className="special-offer">
              <h2>Register Today</h2>
              <Avatar className="special-offer-icon" icon="gift"/>
              <p className="special-offer-desc">Members get <b>50%</b> more points, so register today and start earning
                points for savings on great
                rewards!</p>
              <a className="special-offer-link" href="/faq"><Icon type="arrow-right"/> Learn More...</a>
            </div>
          </Col>
          <Col span={12}>
            <Steps className="steps" labelPlacement="vertical" size="small" current={this.state.current}>
              <Steps.Step icon={<Icon type="info"/>} title="Account" onClick={() => this.setState({current: 0})}/>
              <Steps.Step icon={<Icon type="user"/>} title="Profile" onClick={() => this.setState({current: 1})}/>
              <Steps.Step icon={<Icon type="home"/>} title="Address" onClick={() => this.setState({current: 2})}/>
              <Steps.Step icon={<Icon type="check"/>} title="Finish" onClick={() => this.setState({current: 3})}/>
            </Steps>
            <div className="steps-content">
              {steps[this.state.current].content}
            </div>
            <div className="steps-toolbar">
              <Button htmlType="button" type="primary" disabled={this.state.current === 0}
                      onClick={() => this.prev()}>Back</Button>
              <Button htmlType="button" type="primary" disabled={this.state.current === 3}
                      onClick={() => this.next()}>Next</Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

const Forms = Form.create()(FormsComp);

export default Forms;
