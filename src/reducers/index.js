import { combineReducers } from 'redux';
import dashboardReducer from './dashboardReducer';

import {routerReducer} from 'react-router-redux';

 const rootReducer = combineReducers({
     dashboardReducer,
     routing: routerReducer
});
export default rootReducer;
