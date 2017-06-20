import * as types from '../actions/actionTypes';
import { assign } from 'lodash';


export default function carProfileReducer(state = {}, action) {
  switch (action.type) {
    case types.SET_CAR_PROFILE:
      return assign({}, state, {carData: action.carData, currentComponentKey: 'create-car-profile'});
    default:
      return state;
  }
}
