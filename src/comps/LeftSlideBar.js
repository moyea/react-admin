import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Menu, Icon} from 'antd';
import {withRouter} from 'react-router';
import {Link} from 'react-router-dom';
import './LeftSlideBar.css';

class LeftSlideBarComp extends Component {

  static props = {
    collapsed: PropTypes.bool,
    subMenuChange: PropTypes.func
  };


  state = {
    menuList: [
      {id: 'dashboard', icon: <Icon type="dashboard"/>, path: '/dashboard', label: 'DashBoard', subMenuList: []},
      {id: 'email', icon: <Icon type="mail"/>, path: '/email', label: 'Email', subMenuList: []},
      {id: 'profile', icon: <Icon type="user"/>, path: '/profile', label: 'Profile', subMenuList: []},
      {
        id: 'search-result',
        icon: <Icon type="search"/>,
        path: '/search-result',
        label: 'Search Results',
        subMenuList: []
      },
      {id: 'faq', icon: <Icon type="question"/>, path: '/faq', label: 'FAQ', subMenuList: []},
      {
        id: 'sub-1', icon: <Icon type="folder-add"/>, path: '', label: 'Pages',
        subMenuList: [
          {id: 'blank', icon: <Icon type="file"/>, path: '/blank', label: 'Blank Page'},
          {id: '404', icon: <Icon type="exclamation"/>, path: '/404', label: '404 Error'},
          {id: '500', icon: <Icon type="close"/>, path: '/500', label: '500 Error'},
          {id: 'lock', icon: <Icon type="lock"/>, path: '/lock', label: 'Lock Screen'},
          {id: 'login', icon: <Icon type="check"/>, path: '/login', label: 'Login'},
          {id: 'register', icon: <Icon type="edit"/>, path: '/register', label: 'Register'},
          {id: 'reset-pwd', icon: <Icon type="bulb"/>, path: '/reset-pwd', label: 'Password Reset'}
        ]
      },
      {id: 'widgets', icon: <Icon type="filter"/>, path: '/widgets', label: 'Widgets', subMenuList: []},
      {id: 'forms', icon: <Icon type="form"/>, path: '/forms', label: 'Forms', subMenuList: []},
      {id: 'charts', icon: <Icon type="pie-chart"/>, path: '/charts', label: 'Charts', subMenuList: []}
    ]
  };


  // componentWillReceiveProps(nextProps) {
  // let selectedKeys = [];
  // this.state.menuList.forEach(item => {
  //   if (item.path === nextProps.location.pathname) {
  //     selectedKeys.push(item.id);
  //   }
  //   (item.subMenuList || []).forEach(subMenuItem => {
  //     if (subMenuItem.path === nextProps.location.pathname) {
  //       selectedKeys.push(subMenuItem.id);
  //     }
  //   });
  // });
  // this.setState({
  //   _defaultSelectedKeys: selectedKeys
  // });
  // }

  render() {
    const {collapsed, subMenuChange, location} = this.props;
    const currentPath = location.pathname;
    const {menuList} = this.state;
    return (
      <Menu mode="inline" theme="dark" inlineCollapsed={collapsed} inlineIndent={30}
            onOpenChange={(openKeys) => subMenuChange && subMenuChange(openKeys)}>
        {menuList.map(menuItem => {
          if (menuItem.subMenuList && menuItem.subMenuList.length > 0) {
            return (
              <Menu.SubMenu key={menuItem.id} title={
                <span>{menuItem.icon}<span>{menuItem.label}</span></span>}>
                {
                  menuItem.subMenuList.map(subMenuItem => (
                    <Menu.Item key={subMenuItem.id}
                               className={subMenuItem.path === currentPath ? 'ant-menu-item-selected' : ''}>
                      <Link to={subMenuItem.path}>{subMenuItem.icon}<span>{subMenuItem.label}</span></Link>
                    </Menu.Item>
                  ))
                }
              </Menu.SubMenu>
            );
          } else {
            return (
              <Menu.Item key={menuItem.id} className={menuItem.path === currentPath ? 'ant-menu-item-selected' : ''}>
                <Link to={menuItem.path}>{menuItem.icon}<span>{menuItem.label}</span></Link>
              </Menu.Item>
            );
          }
        })}
      </Menu>
    );
  }
}

const LeftSlideBar = withRouter(LeftSlideBarComp);
export default LeftSlideBar;
