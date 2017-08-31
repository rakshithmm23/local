import { combineReducers } from 'redux';
import dashboardReducer from './dashboardReducer';
import authReducer from './authReducer';
import carProfileReducer from './carProfileReducer';

import {routerReducer} from 'react-router-redux';

 const appReducer = combineReducers({
     dashboardReducer,
     authReducer,
     routing: routerReducer,
     carProfileReducer
});
const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined
  }
  return appReducer(state, action)
}
export default rootReducer;
