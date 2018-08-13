import React, {Component} from 'react';
import {Card, Avatar, Row, Col, Input, Button} from 'antd';
import './lock.css';
import avatar from '../../assets/images/2.png';

class Lock extends Component {

  render() {
    return (
      <div className='page-lock'>
        <Card style={{width: 380}} bordered={false}
              cover={<Row className="card-cover">
                <Col span={6}><Avatar className="avatar" src={avatar}/></Col>
                <Col span={18}>
                  <h4>Goff Smith</h4>
                  <p>Project Manager</p>
                </Col>
              </Row>}>
          <p>It`s been awhile. Please enter your password to resume.</p>
          <Input placeholder="Password"/>
          <Button type="primary" disabled>Login</Button>
          <a href="#">Sign in using a different account</a>
        </Card>
      </div>
    );
  }
}

export default Lock;
