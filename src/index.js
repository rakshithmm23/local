import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import configureStore from './store/configureStore';

import './styles/bootstrap.min.css';
import './styles/badge.css';
import './styles/button.css';
import './styles/dashboard.css';
import './styles/deals.css';
import './styles/dropdown.css';
import './styles/extra.css';
import './styles/footer.css';
import './styles/form.css';
import './styles/header.css';
import './styles/jobcard.css';
import './styles/login.css';
import './styles/materialdesignicons.min.css';
import './styles/mobileNotification.css';
import './styles/sidebar.css';
import './styles/status.css';
import './styles/style.css';
import './styles/typography.css';
import './styles/my-request.css';
import '../node_modules/slick-carousel/slick/slick.css';
import '../node_modules/slick-carousel/slick/slick-theme.css';
import '../node_modules/react-datepicker/dist/react-datepicker.css';
import '../node_modules/rc-time-picker/assets/index.css';
import '../node_modules/@trendmicro/react-toggle-switch/dist/react-toggle-switch.css';
import '../node_modules/react-input-range/lib/css/index.css';
import './styles/JobUpdateCard.css';
import './styles/gmaps.css';
import './styles/job-details.css';
import './styles/collapse-panel.css';
import './styles/book-service.css';
import './styles/timeline.css';
import './styles/modal.css';
import './styles/messages.css';
import './styles/search-result.css';
import './styles/notification.css';
import './styles/vendor-profile.css';
import './styles/vendordetail.css';
import './styles/terms.css';
import './styles/pageNotFound.css';

export const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>, document.getElementById('app')
);

