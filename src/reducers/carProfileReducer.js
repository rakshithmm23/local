import * as types from '../actions/actionTypes';
import { assign } from 'lodash';


export default function carProfileReducer(state = {}, action) {
  switch (action.type) {
    case types.SET_CAR_PROFILE:
      return assign({}, state, {carData: action.carData, currentComponentKey: 'car-list'});
    case types.LIST_CAR_PROFILES:
      if (action.carProfiles) {
        const userId = localStorage.getItem('userId');
        const carProfilesById = 'carProfiles-' + userId;
        localStorage[carProfilesById] = JSON.stringify(action.carProfiles);
        return assign({}, state, {carProfiles: action.carProfiles, currentComponentKey: ''});
      } else {
        return assign({}, state, {noCarProfiles: true, currentComponentKey: ''});
      }
    case types.VIEW_CAR_PROFILE: {
      if (action.carProfile) {
        const userId = localStorage.getItem('userId');
        const carProfilesById = 'carProfiles-' + userId;
        let carProfiles = localStorage[carProfilesById];
        carProfiles = carProfiles ? JSON.parse(carProfiles) : {};
        carProfiles[action.carProfile.id] = action.carProfile;
        localStorage[carProfilesById] = JSON.stringify(carProfiles);
        return assign({}, state, {carProfiles: carProfiles, currentCarProfile: action.carProfile, currentComponentKey: '', isLoaded: false});
      } else {
        return assign({}, state, {currentComponentKey: '', isLoaded: false});
      }
    }
    case types.DELETE_CAR_PROFILE: {
      const userId = localStorage.getItem('userId');
      const carProfilesById = 'carProfiles-' + userId;
      let carProfiles = localStorage[carProfilesById];
      carProfiles = JSON.parse(carProfiles);
      delete carProfiles[action.carProfileID];
      localStorage[carProfilesById] = JSON.stringify(carProfiles);
      return assign({}, state, {currentComponentKey: '/car-profiles'})
    }
    case types.CAR_MAKE_AND_MODELS: {
      return assign({}, state, {carMakeAndModels: action.carMakeAndModels, currentComponentKey: ''});
    }
    default:
      return state;
  }
}
