import React, {Component} from 'react';
// import PropType from 'prop-types';
import {Input, Icon, Button, Row, Col, List, Avatar} from 'antd';
import './profile.css';
import avatar from '../../assets/images/1000001.png'

class Profile extends Component {

  state = {
    comments: [
      {id: 1, title: 'Jackson', content: ''},
      {id: 2, title: 'Dora', content: ''},
      {id: 3, title: 'David', content: ''},
      {id: 4, title: 'Jeff', content: ''},
      {id: 5, title: 'Tim', content: ''}
    ]
  };

  render() {
    const {comments} = this.state;
    return (
      <div className="page-wrapper">
        <div className="share-panel">
          <div className="share-panel-body">
            <Input.TextArea className="share-input-box" placeholder="What`s on your mind?"/>
          </div>
          <div className="share-panel-toolbar">
            <ul className="tools">
              <li><Icon type="video-camera"/></li>
              <li><Icon type="camera-o"/></li>
              <li><Icon type="file"/></li>
            </ul>
            <Button className="right" type="primary" htmlType="button">Share</Button>
          </div>
        </div>
        <Row gutter={20}>
          <Col span={12}>
            <div className="user-profile">
              <div className="avatar">
                <img src={avatar} alt=""/>
              </div>
              <h3>张三</h3>
              <p>CO-FOUNDER, CEO</p>
              <ul className="contracts">
                <li><Icon type="facebook"/></li>
                <li><Icon type="twitter"/></li>
                <li><Icon type="google-plus"/></li>
                <li><Icon type="mail"/></li>
              </ul>
              <Button className="follow-btn" type="primary" htmlType="button">Follow</Button>
            </div>
          </Col>
          <Col span={12}>
            <div className="user-profile-desc">
              <p>
                <Icon type="home" style={{marginRight: '.5em'}}/>San Jose, CA
              </p>
              <p><Icon type="dashboard" style={{marginRight: '.5em'}}/>Member since 1 years ago</p>
              <p><Icon type="global" style={{marginRight: '.5em'}}/><a href="#">http://www.sencha-dash.com/</a></p>
              <hr/>
              <h3><Icon type="user" style={{marginRight: '.5em'}}/>About Me</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, pariatur, recusandae. Autem commodi
                deserunt dolore doloribus ea eveniet fugit illo illum, libero molestias mollitia possimus quod suscipit
                totam veritatis. Dolorum.</p>
              <hr/>
              <Row className="user-profile-desc-foot">
                <Col span={12}>
                  <Row>
                    <Col span={12}>
                      <Icon type="like"/>
                    </Col>
                    <Col span={12}>
                      <p className="likes-value">523</p>
                      <p className="likes-label">Likes</p>
                    </Col>
                  </Row>
                </Col>
                <Col span={12}>
                  <Row>
                    <Col span={12}>
                      <Icon type="user-add"/>
                    </Col>
                    <Col span={12}>
                      <p className="friends-value">734</p>
                      <p className="friends-label">Friends</p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row gutter={20}>
          <Col span={12}>
            <div className="comments">
              <List itemLayout="horizontal" dataSource={comments}
                    renderItem={item => (
                      <List.Item className="comment-item">
                        <List.Item.Meta
                          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                          title={<div>
                            <a href="https://ant.design">{item.title}</a>
                            <span className="right"><Icon type="dashboard"/> 3 Hours Ago</span></div>}
                          description={<div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae
                              consectetur, consequatur consequuntur distinctio earum, eos et id itaque, libero minus
                              modinihil quibusdam reiciendis sapiente temporibus vel voluptate voluptatibus.</p>
                            <div className="text-right">
                              <ul className="comment-actions">
                                <li><Icon type="like"/></li>
                                <li><Icon type="dislike"/></li>
                                <li><Icon type="message"/></li>
                              </ul>
                            </div>
                            <div className="sub-comments">
                              <List itemLayout="horizontal" dataSource={comments}
                                    renderItem={item => (
                                      <List.Item className="comment-item">
                                        <List.Item.Meta
                                          avatar={<Avatar
                                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                                          title={<div>
                                            <a href="https://ant.design">{item.title}</a>
                                            <span className="right"><Icon type="dashboard"/> 3 Hours Ago</span></div>}
                                          description={<div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae
                                              consectetur, consequatur consequuntur distinctio earum, eos et id itaque,
                                              libero minus
                                              modinihil quibusdam reiciendis sapiente temporibus vel voluptate
                                              voluptatibus.</p>
                                            <div className="text-right">
                                              <ul className="comment-actions">
                                                <li><Icon type="like"/></li>
                                                <li><Icon type="dislike"/></li>
                                                <li><Icon type="message"/></li>
                                              </ul>
                                            </div>
                                          </div>}
                                        />
                                      </List.Item>
                                    )}
                              />
                            </div>
                          </div>}
                        />
                      </List.Item>
                    )}
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="timeline">
              <div className="timeline-item">
                <div className="profile-pic-wrap">
                  <Avatar
                    src="http://examples.sencha.com/extjs/6.2.0/examples/admin-dashboard/resources/images/user-profile/6.png"/>
                  <p>30 Minutes ago</p>
                </div>
                <div className="line-wrap">
                  <div className="contents-wrap">
                    <div className="shared-by">
                      <a href="#">Marion Williams</a> shared an image
                    </div>
                    <img className="shared-img"
                      src="http://examples.sencha.com/extjs/6.2.0/examples/admin-dashboard/resources/images/img2.jpg"/>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Profile;
