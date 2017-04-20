import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import configureStore from './store/configureStore';

import './styles/bootstrap.min.css';
import './styles/button.css';
import './styles/badge.css';
import './styles/materialdesignicons.min.css';
import './styles/form.css';
import './styles/style.css';
import './styles/header.css';
import './styles/dropdown.css';
import './styles/sidebar.css';
import './styles/extra.css';
import './styles/login.css';
import './styles/typography.css';
import './styles/jobcard.css';
import './styles/dashboard.css';
import './styles/jobcard.css';
import './styles/deals.css';
import './styles/status.css';
import './styles/applink.css';
import './styles/footer.css';
import './styles/mobileNotification.css';

export const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>, document.getElementById('app')
);

