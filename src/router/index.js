/*
 * @Author: 韩卿
 * @Date: 2017-11-17 18:36:52
 * @Last Modified by: 韩卿
 * @Last Modified time: 2017-11-18 19:04:25
 */

import React, { Component } from 'react'
import { Router, Route, IndexRoute, Redirect } from 'react-router'
import App from '@struct/app'
import Login from '@businessComponents/login'
import Home from 'pages/home'
import hashHistory from '@history'

export default () => (
  <Router history={hashHistory} >
    <Route path="/" component={App}>
      <Route path="home" component={Home} />
      {/* <Route path="home" component={Home} />
      <Route path="home1" component={Home1} /> */}
    </Route>
    <Route path="/login" component={Login} />
  </Router>
)
