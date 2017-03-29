import React from 'react';
import { Route } from 'react-router';

// Containers
import DashboardContainer from './containers/DashboardContainer';

// Components
import Dashboard from './components/Dashboard';

import Home from './components/Home';

export default (
  <Route path="/" component={Home}>
    <Route path="dashboard" component={DashboardContainer(Dashboard)}/>
  </Route>
);
