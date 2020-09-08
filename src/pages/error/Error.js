import React, {Component} from 'react';
import './error.css';

class Error extends Component {

  render() {
    return (
      <div className="page-wrapper page-500">
        <div className="inner">
          <h1>500</h1>
          <p>Something went wrong and server could not process your request.</p>
          <p>Try going back to <a href="/">Home Page</a></p>
        </div>
      </div>
    );
  }
}

export default Error;
