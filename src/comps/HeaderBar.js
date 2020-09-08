import React, {Component} from 'react';
import {Icon, Avatar} from 'antd';
import {Link} from "react-router-dom";
import avatar from '../assets/images/2.png';
import './header-bar.css';

class HeaderBar extends Component {

  state = {
    sliderActive: false
  };

  render() {
    const {toggle} = this.props;
    return (
      <div className="header-bar">
        <div className="main-logo">
          <Icon type="yuque"/>
          <span>React Admin</span>
        </div>
        <button className="btn-layout" onClick={() => {
          this.setState({sliderActive: !this.state.sliderActive});
          toggle()
        }}>
          <i className="iconfont icon-menu"/>
        </button>
        <div className="right">
          <ul className="nav">
            <li className="nav-item"><Link to="/search-result"><Icon type="search"/></Link></li>
            <li className="nav-item"><Link to="/email"><Icon type="mail"/></Link></li>
            <li className="nav-item"><Link to="/faq"><Icon type="question"/></Link></li>
            <li className="nav-item"><Link to="/dashboard"><Icon type="appstore"/></Link></li>
          </ul>
          <div className="main-user">Goff Smith <Avatar src={avatar}/></div>
        </div>
      </div>
    );
  }
}

export default HeaderBar;
