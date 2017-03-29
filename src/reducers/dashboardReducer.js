import * as types from '../constants/actionTypes';

export default function dashboardReducer(state = {}, action) {

  switch (action.type) {
    case types.TEST:
      return (Object.assign({}, state, {test: action.test}));
    default:
      return state;
  }
}
