import * as types from '../actions/actionTypes';

export default function dashboardReducer(state = {}, action) {

  switch (action.type) {
    case types.TEST:
      return (Object.assign({}, state, {test: action.test}));
    default:
      return state;
  }
}
