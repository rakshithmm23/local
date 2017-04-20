import { combineReducers } from 'redux';
import dashboardReducer from './dashboardReducer';
import authReducer from './authReducer';

import {routerReducer} from 'react-router-redux';

 const rootReducer = combineReducers({
     dashboardReducer,
     authReducer,
     routing: routerReducer
});
export default rootReducer;
