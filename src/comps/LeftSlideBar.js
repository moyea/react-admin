import React, {Component} from 'react';
// eslint-disable-next-line
import PropType from 'prop-types';
import {Menu, Icon} from 'antd';
import {Link} from 'react-router-dom';
import './LeftSlideBar.css';

class LeftSlideBar extends Component {

  render() {
    const {collapsed} = this.props;
    return (
      <Menu mode="inline" theme="dark" inlineCollapsed={collapsed} defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Icon type="dashboard"/>
          <span>
            <Link to="/dashboard">DashBoard</Link>
          </span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="mail"/>
          <span><Link to="/email">Email</Link></span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="user"/>
          <span><Link to="/profile">Profile</Link></span>
        </Menu.Item>
        <Menu.Item key="4">
          <Icon type="search"/>
          <span><Link to="/search-result">Search Results</Link></span>
        </Menu.Item>
        <Menu.Item key="5">
          <Icon type="question"/>
          <span><Link to="/faq">FAQ</Link></span>
        </Menu.Item>
        <Menu.SubMenu key="sub1" title={
          <span>
            <Icon type="folder-add"/>
            <span>Pages</span>
          </span>}>
          <Menu.Item key="5">
            <Icon type="file"/>
            <span><Link to="/blank">Blank Page</Link></span>
          </Menu.Item>
          <Menu.Item key="6">
            <Icon type="exclamation"/>
            <span><Link to="/404">404 Error</Link></span>
          </Menu.Item>
          <Menu.Item key="7">
            <Icon type="close"/>
            <span><Link to="/500">500 Error</Link></span>
          </Menu.Item>
          <Menu.Item key="8">
            <Icon type="lock"/>
            <span><Link to="/lock">Lock Screen</Link></span>
          </Menu.Item>
          <Menu.Item key="9">
            <Icon type="check"/>
            <span><Link to="/login">Login</Link></span>
          </Menu.Item>
          <Menu.Item key="10">
            <Icon type="edit"/>
            <span><Link to="/register">Register</Link></span>
          </Menu.Item>
          <Menu.Item key="11">
            <Icon type="bulb"/>
            <span><Link to="/reset-pwd">Password Reset</Link></span>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="12">
          <Icon type="filter"/>
          <span><Link to="/widgets">Widgets</Link></span>
        </Menu.Item>
        <Menu.Item key="13">
          <Icon type="form"/>
          <span><Link to="/forms">Forms</Link></span>
        </Menu.Item>
        <Menu.Item key="14">
          <Icon type="pie-chart"/>
          <span><Link to="/charts">Charts</Link></span>
        </Menu.Item>
      </Menu>
    );
  }
}

export default LeftSlideBar;
