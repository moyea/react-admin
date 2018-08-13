import React, {Component} from 'react';
import {Icon} from 'antd';
import './blank.css';

class Blank extends Component {

  render() {
    return (
      <div className="page-wrapper page-blank">
        <div className="inner">
          <Icon type="ant-design"/>
          <h1>Coming Soon!</h1>
          <p>Stay tuned for updates</p>
        </div>
      </div>
    );
  }
}

export default Blank;
