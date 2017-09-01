import * as types from '../actions/actionTypes';

export default function bookServiceReducers(state = {}, action) {
  switch (action.type) {
    case types.GET_ALL_SERVICES:
      return {
        ...state,
        getAllServices: action.getAllServices,
        selecetedCarProfileId: action.selecetedCarProfileId,
      };

    default:
      return state;
  }
}
