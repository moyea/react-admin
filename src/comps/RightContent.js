import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import Email from "../pages/email/Email";
import Profile from "../pages/profile/Profile";
import SearchResult from "../pages/search-result/SearchResult";
import FAQ from "../pages/faq/FAQ";
import Blank from "../pages/blank/Blank";
import NotFound from "../pages/not-found/NotFound";
import Error from "../pages/error/Error";
import Lock from "../pages/lock/Lock";
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";
import PasswordReset from "../pages/login/PasswordReset";

class RightContent extends Component {

  render() {
    return (
      <Switch>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/email" component={Email}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/search-result" component={SearchResult}/>
        <Route path="/faq" component={FAQ}/>
        <Route path="/blank" component={Blank}/>
        <Route path="/500" component={Error}/>
        <Route path="/lock" component={Lock}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/reset-pwd" component={PasswordReset}/>
        {/*<Route path="/dashboard" component={Dashboard}/>*/}
        {/*<Route path="/dashboard" component={Dashboard}/>*/}
        {/*<Route path="/dashboard" component={Dashboard}/>*/}
        {/*<Route path="/dashboard" component={Dashboard}/>*/}
        {/*<Route path="/dashboard" component={Dashboard}/>*/}
        <Route component={NotFound}/>
      </Switch>
    );
  }
}

export default RightContent;
