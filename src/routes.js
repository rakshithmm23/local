import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Containers
import DashboardContainer from './containers/DashboardContainer';
import AuthContainer from './containers/AuthContainer';

// Auth Components
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import VerifyOTP from './components/Auth/VerifyOTP';
import SendOTP from './components/Auth/SendOTP';

// Dashboard Components

import Dashboard from './components/Dashboard';
import Home from './components/Home';
import MyCarList from './components/MyCarList';
import MyRequest from './components/MyRequest/MyRequest.jsx';

export default (
  <Route path="/" component={Home}>
    <IndexRoute component={AuthContainer(SignUp)}/>
    <Route path="dashboard" component={DashboardContainer(Dashboard)}/>
    <Route path="mycar-list" component={DashboardContainer(MyCarList)}/>
    <Route path="sign-up" component={AuthContainer(SignUp)}/>
    <Route path="sign-in" component={AuthContainer(SignIn)}/>
    <Route path="send-otp" component={AuthContainer(SendOTP)}/>
    <Route path="verify-otp" component={AuthContainer(VerifyOTP)}/>
    <Route path="request" component={AuthContainer(MyRequest)}/>
    
  </Route>
);
