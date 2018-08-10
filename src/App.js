import React, {Component} from 'react';
import './App.css';
import HeaderBar from "./comps/HeaderBar";
import LeftSlideBar from "./comps/LeftSlideBar";
import RightContent from "./comps/RightContent";
import {Layout} from "antd";

class App extends Component {
  state = {
    collapsed: false
  };

  toggle() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const {collapsed} = this.state;
    return (
      <Layout className="gb-page-wrapper">
        <Layout.Header>
          <HeaderBar toggle={() => this.toggle()}/>
        </Layout.Header>
        <Layout>
          <Layout.Sider collapsible collapsed={collapsed} trigger={null}>
            <LeftSlideBar collapsed={collapsed}/>
          </Layout.Sider>
          <Layout.Content className="gb-page-body">
            <RightContent/>
          </Layout.Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
