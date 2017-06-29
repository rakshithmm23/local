import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

// Containers
import DashboardContainer from './containers/DashboardContainer';
import AuthContainer from './containers/AuthContainer';
import CarProfileContainer from './containers/CarProfileContainer'

// Auth Components
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import VerifyOTP from './components/Auth/VerifyOTP';
import SendOTP from './components/Auth/SendOTP';
import ForgotPassword from './components/Auth/ForgotPassword';
import EditMobileNo from './components/Auth/EditMobileNo';

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
import MyRequest from './components/MyRequest/MyRequest';
import CreateCarProfile from './components/CarProfile/CreateCarProfile';
import BookService from './components/BookService/BookService';
import CarTimeline from './components/CarTimeline/CarTimeline';
import CarRepair from './components/CarRepair/CarRepair';
import CarWash from './components/CarWash/CarWash';
import CarService from './components/CarService/CarService';
import Messages from './components/Messages/Messages';
import SearchResult from './components/SearchResult/SearchResult';
import Notification from './components/Notification/Notification';
import Favourites from './components/Favourites/Favourites';
import VendorProfile from './components/VendorProfile/VendorProfile';
import Terms from './components/Terms/Terms.jsx';
import pageNotFound from './components/pageNotFound/pageNotFound.jsx';


export default (
  <Route path="/" component={Home}>
    <IndexRoute component={AuthContainer(SignUp)}/>
    <Route path="dashboard" component={DashboardContainer(Dashboard)} />
    <Route path="sign-in" component={AuthContainer(SignIn)} />
    <Route path="forgot-password" component={AuthContainer(ForgotPassword)} />
    <Route path="edit-mobileno" component={AuthContainer(EditMobileNo)} />
    <Route path="send-otp" component={AuthContainer(SendOTP)}/>
    <Route path="verify-otp" component={AuthContainer(VerifyOTP)} />
    <Route path="request" component={AuthContainer(MyRequest)} />
    <Route path="book-service" component={AuthContainer(BookService)} />
    <Route path="car-profile" component={CarProfileContainer(CreateCarProfile)} />
    <Route path="car-list" component={AuthContainer(BookService)} />
    <Route path="timeline" component={AuthContainer(CarTimeline)} />
    <Route path="car-repair" component={AuthContainer(CarRepair)} />
    <Route path="car-wash" component={AuthContainer(CarWash)} />
    <Route path="car-service" component={AuthContainer(CarService)} />
    <Route path="messages" component={AuthContainer(Messages)} />
    <Route path="search-result" component={AuthContainer(SearchResult)} />
    <Route path="notification" component={AuthContainer(Notification)}  />
    <Route path="favourites" component={AuthContainer(Favourites)}  />
    <Route path="vendor-profile" component={AuthContainer(VendorProfile)}  />
    <Route path="terms" component={AuthContainer(Terms)}  />
    <Route path="404" component={AuthContainer(pageNotFound)}  />
  </Route>
);
