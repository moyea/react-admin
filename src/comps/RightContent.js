import React, {Component} from 'react';
import {Route} from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import Email from "../pages/email/Email";
import Profile from "../pages/profile/Profile";
import SearchResult from "../pages/search-result/SearchResult";

class RightContent extends Component {

  render() {
    return (
      <div>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/email" component={Email}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/search-result" component={SearchResult}/>
        {/*<Route path="/dashboard" component={Dashboard}/>*/}
        {/*<Route path="/dashboard" component={Dashboard}/>*/}
        {/*<Route path="/dashboard" component={Dashboard}/>*/}
        {/*<Route path="/dashboard" component={Dashboard}/>*/}
        {/*<Route path="/dashboard" component={Dashboard}/>*/}
        {/*<Route path="/dashboard" component={Dashboard}/>*/}
        {/*<Route path="/dashboard" component={Dashboard}/>*/}
      </div>
    );
  }
}

export default RightContent;
