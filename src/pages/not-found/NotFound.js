import React, { Component } from 'react';
import notFoundSVG from './404.svg';
import './not-found.css';

class NotFound extends Component {
  render() {
    return (
      <div className="page-wrapper page-404">
        <div className="inner">
          <div className="not-found">
            <span>你在这里不管怎么找</span>
            <img className="content-img inline" src={notFoundSVG} alt="" />
            <span>也没有你要的东西呦</span>
          </div>
          <div className="redirect">
            <a href="/">回到首页</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;
