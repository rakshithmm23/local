import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

// Containers
import DashboardContainer from './containers/DashboardContainer';
import AuthContainer from './containers/AuthContainer';

// Auth Components
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import VerifyOTP from './components/Auth/VerifyOTP';
import SendOTP from './components/Auth/SendOTP';

// Dashboard Components
export const isLoggedIn = (nextState, replace) => {
  const signedUserDataCookie = cookies.get('carauth');
  if (!signedUserDataCookie) {
    replace({
      pathname: '/'
    });
  }
};

import Dashboard from './components/Dashboard';
import Home from './components/Home';
import MyCarList from './components/MyCarList';
import MyRequest from './components/MyRequest/MyRequest';
import CreateCarProfile from './components/CarProfile/CreateCarProfile';
import BookService from './components/BookService/BookService';
import CarTimeline from './components/CarTimeline/CarTimeline';
import CarRepair from './components/CarRepair/CarRepair';
import CarWash from './components/CarWash/CarWash';

export default (
  <Route path="/" component={Home}>
    <IndexRoute component={AuthContainer(SignUp)}/>
    <Route path="dashboard" component={DashboardContainer(Dashboard)} onEnter={isLoggedIn}/>
    <Route path="mycar-list" component={DashboardContainer(MyCarList)} onEnter={isLoggedIn}/>
    <Route path="sign-in" component={AuthContainer(SignIn)}/>
    <Route path="send-otp" component={AuthContainer(SendOTP)} onEnter={isLoggedIn}/>
    <Route path="verify-otp" component={AuthContainer(VerifyOTP)} onEnter={isLoggedIn}/>
    <Route path="request" component={AuthContainer(MyRequest)} onEnter={isLoggedIn}/>
    <Route path="car-profile" component={AuthContainer(CreateCarProfile)} />
    <Route path="book-service" component={AuthContainer(BookService)} onEnter={isLoggedIn}/>
    <Route path="timeline" component={AuthContainer(CarTimeline)} onEnter={isLoggedIn}/>
    <Route path="car-repair" component={AuthContainer(CarRepair)} onEnter={isLoggedIn}/>
    <Route path="car-wash" component={AuthContainer(CarWash)} onEnter={isLoggedIn}/>
  </Route>
);
