import * as types from '../actions/actionTypes';
import { assign } from 'lodash';

const initialState = {
  signUpModalVisible: false
};
export default function authenticationReducer(state = initialState, action) {
  switch (action.type) {
    case types.SHOW_SIGNUP_PAGE:
      return assign({}, state, {signUpModalVisible: false, currentComponentKey: 'sign-up'});
    case types.SHOW_SIGNIN_PAGE:
      return assign({}, state, {currentComponentKey: 'sign-in', isLoaded: true, showErrorMessage: false});
    case types.SHOW_VERIFY_OTP_PAGE:
      return assign({}, state, {currentComponentKey: 'verify-otp', authData: action.authData, isLoaded: true, showErrorMessage: false});
    case types.SHOW_DASHBOARD:
      return assign({}, state, {currentComponentKey: 'dashboard', authData: action.authData, isLoaded: true, showErrorMessage: false});
    case types.VERIFY_OTP_PAGE:
      return assign({}, state, {authData: action.authData, currentComponentKey: 'verify-otp'});
    case types.VERIFY_OTP:
      return assign({}, state, {authData: action.authData});
    case types.SHOW_SEND_OTP_PAGE:
      return assign({}, state, {authData: action.authData, currentComponentKey: 'send-otp'});
    case types.SHOW_WELCOME_PAGE:
      return assign({}, state, {currentComponentKey: 'dashboard'});
    case types.SHOW_ERROR_MESSAGE:
      return assign({}, state, {currentComponentKey: '', showErrorMessage: true, statusMessage: action.statusMessage, isLoaded: false});
    case types.HIDE_ERROR_MESSAGE:
      return assign({}, state, {currentComponentKey: '', showErrorMessage: false});
    case types.LOGOUT:
      return assign({}, state, {authData: ''});
    default:
      return state;
  }
}
