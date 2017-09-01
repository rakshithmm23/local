import * as dashboardActions from './dashboardActions';
import * as authActions from './authActions';
import * as carProfileActions from './carProfileActions';
import* as bookServiceActions from './bookServiceActions';
import { assign } from 'lodash';

export const ActionCreators = assign({},
  dashboardActions,
  authActions,
  carProfileActions,
  bookServiceActions
);
