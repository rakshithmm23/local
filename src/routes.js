import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Containers
import DashboardContainer from './containers/DashboardContainer';
import AuthContainer from './containers/AuthContainer';

// Components
import Dashboard from './components/Dashboard';
import Auth from './components/Auth';
import Home from './components/Home';
import MycarList from './components/MycarList';

export default (
  <Route path="/" component={Home}>
    <IndexRoute component={AuthContainer(Auth)}/>
    <Route path="dashboard" component={DashboardContainer(Dashboard)}/>
    <Route path="mycar-list" component={DashboardContainer(MycarList)}/>
    <Route path="auth" component={AuthContainer(Auth)}/>
  </Route>
);
