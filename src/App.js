import React, {Component} from 'react';
import {Layout} from "antd";
import PerfectScrollbar from 'react-perfect-scrollbar';
import HeaderBar from "./comps/HeaderBar";
import LeftSlideBar from "./comps/LeftSlideBar";
import RightContent from "./comps/RightContent";
import 'react-perfect-scrollbar/dist/css/styles.css';
import './App.css';

class App extends Component {
  state = {
    collapsed: false
  };

  _activeSubMenu = [];

  toggle() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  subMenuChange(openKeys) {
    if (openKeys.length < this._activeSubMenu.length) {
      this._scrollbarContainerRef.scrollTop = 0;
    }
    this._scrollbarRef.updateScroll();
    this._activeSubMenu = openKeys;
  }

  render() {
    const {collapsed} = this.state;
    return (
      <Layout className={'gb-page-wrapper ' + (collapsed ? 'sider-active' : '')}>
        <Layout.Header>
          <HeaderBar toggle={() => this.toggle()}/>
        </Layout.Header>
        <Layout>
          <Layout.Sider collapsible collapsed={collapsed} trigger={null}>
            <PerfectScrollbar option={{}} ref={ref => this._scrollbarRef = ref}
                              containerRef={ref => this._scrollbarContainerRef = ref}>
              <LeftSlideBar collapsed={collapsed} subMenuChange={(openKeys) => this.subMenuChange(openKeys)}/>
            </PerfectScrollbar>
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
