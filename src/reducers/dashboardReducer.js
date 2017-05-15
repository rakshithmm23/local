import * as types from '../actions/actionTypes';
import { assign } from 'lodash';

export default function dashboardReducer(state = {}, action) {

  switch (action.type) {
    case types.TEST:
      return (assign({}, state, {test: action.test}));
    default:
      return state;
  }
}
