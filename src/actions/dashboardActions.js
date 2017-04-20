import * as types from '../actions/actionTypes';

export function test() {
  return function (dispatch) {
    dispatch({'type': types.TEST, 'test': 'test'});
  };
}
