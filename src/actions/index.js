import * as dashboardActions from './dashboardActions';
import * as authActions from './authActions';
import { assign } from 'lodash';

export const ActionCreators = assign({},
  dashboardActions,
  authActions
);
