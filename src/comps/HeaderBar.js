import React, {Component} from 'react';
// eslint-disable-next-line
import PropType from 'prop-types';
import {Menu, Button, Icon} from "antd";

class HeaderBar extends Component {
  render() {
    const {toggle} = this.props;
    return (
      <div className="header-bar">
        <Button ghost={true} onClick={toggle}>
          <Icon type="appstore"/>
        </Button>
        <Menu theme="dark" style={{float: "right"}}>
          <Menu.Item key="1">
            Nav
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default HeaderBar;
