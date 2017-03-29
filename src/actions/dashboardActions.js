import * as types from '../constants/actionTypes';

export function test() {
  return function (dispatch) {
    dispatch({'type': types.TEST, 'test': 'test'});
  };
}
