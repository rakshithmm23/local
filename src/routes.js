import React from 'react';
import { Route, IndexRoute } from 'react-router';
import axios from 'axios';

// Containers
import DashboardContainer from './containers/DashboardContainer';
import AuthContainer from './containers/AuthContainer';
import CarProfileContainer from './containers/CarProfileContainer';

// Auth Components
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import VerifyOTP from './components/Auth/VerifyOTP';
import SendOTP from './components/Auth/SendOTP';
import ForgotPassword from './components/Auth/ForgotPassword';
import EditMobileNo from './components/Auth/EditMobileNo';
import ResetPassword from './components/Auth/ResetPassword';
import Confirmed from './components/Auth/Confirmed';
import ResetEmailConfirmation from './components/Auth/ResetEmailConfirmation';
import EmailVerified from './components/Auth/EmailVerified';

if (localStorage.accessToken) {
  axios.defaults.headers.common['x-access-token'] = localStorage.accessToken;
}
// Dashboard Components
export const isLoggedIn = (nextState, replace) => {
  window.scrollTo(0, 0);
  const userId = localStorage.getItem('userId');
  const authData = localStorage.getItem('authData');
  if (!(userId && authData)) {
    replace({
      pathname: '/'
    });
  }
};
export const scrollToTop = () => {
  window.scrollTo(0, 0);
}

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
        <Route path="dashboard" onEnter={scrollToTop} component={DashboardContainer(Dashboard)}/>
        <Route path="sign-in" onEnter={scrollToTop} component={AuthContainer(SignIn)} />
        <Route path="forgot-password" onEnter={scrollToTop} component={AuthContainer(ForgotPassword)} />
        <Route path="edit-mobileno" onEnter={scrollToTop} component={AuthContainer(EditMobileNo)} />
        <Route path="send-otp" onEnter={scrollToTop} component={AuthContainer(SendOTP)}/>
        <Route path="verify-otp" onEnter={scrollToTop} component={AuthContainer(VerifyOTP)} />
        <Route path="reset-password" onEnter={scrollToTop} component={AuthContainer(ResetPassword)} />
        <Route path="confirmed" onEnter={scrollToTop} component={AuthContainer(Confirmed)} />
        <Route path="reset-email-confirmation" onEnter={scrollToTop} component={AuthContainer(ResetEmailConfirmation)} />
        <Route path="request(/:requestType)" onEnter={scrollToTop} component={AuthContainer(MyRequest)} />
        <Route path="car-profiles/create" onEnter={scrollToTop} component={CarProfileContainer(CreateCarProfile)} />
        <Route path="car-profiles" onEnter={scrollToTop} component={CarProfileContainer(BookService)} />
        <Route path="car-profiles/:id/view" onEnter={isLoggedIn} component={CarProfileContainer(CarTimeline)} />
        <Route path="car-profiles/:id/edit" onEnter={isLoggedIn} component={CarProfileContainer(CreateCarProfile)} />
        {/* <Route path="car-list" component={AuthContainer(BookService)} /> */}
        <Route path="timeline" onEnter={scrollToTop} component={AuthContainer(CarTimeline)} />
        <Route path="car-repair" onEnter={scrollToTop} component={AuthContainer(CarRepair)} />
        <Route path="car-wash" onEnter={scrollToTop} component={AuthContainer(CarWash)} />
        <Route path="car-service" onEnter={scrollToTop} component={AuthContainer(CarService)} />
        <Route path="messages" onEnter={scrollToTop} component={AuthContainer(Messages)} />
        <Route path="search-result" onEnter={scrollToTop} component={AuthContainer(SearchResult)} />
        <Route path="notification" onEnter={scrollToTop} component={AuthContainer(Notification)}  />
        <Route path="favourites" onEnter={scrollToTop} component={AuthContainer(Favourites)}  />
        <Route path="vendor-profile" onEnter={scrollToTop} component={AuthContainer(VendorProfile)}  />
        <Route path="terms" onEnter={scrollToTop} component={AuthContainer(Terms)}  />
        <Route path="verify" component={AuthContainer(EmailVerified)}  />
        <Route path="*" onEnter={scrollToTop} component={pageNotFound} />
  </Route>
);
