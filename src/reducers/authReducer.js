import * as types from '../actions/actionTypes';

const initialState = {
  signUpModalVisible: false
}
export default function authenticationReducer(state = initialState, action) {
  switch (action.type) {
    case types.SHOW_SIGNUP_PAGE:
      return Object.assign({}, state, {signUpModalVisible: false, currentComponentKey: 'sign-up'});
    case types.SHOW_SIGNIN_PAGE:
      return Object.assign({}, state, {currentComponentKey: 'sign-in', isLoaded: true, showErrorMessage: false});
    case types.SHOW_DASHBOARD:
      return Object.assign({}, state, {currentComponentKey: 'dashboard', authData: action.authData, isLoaded: true, showErrorMessage: false});
    case types.SHOW_SEND_OTP_PAGE:
      return Object.assign({}, state, {signUpData: action.signUpData, currentComponentKey: 'verify-otp'});
    case types.SHOW_WELCOME_PAGE:
      return Object.assign({}, state, {currentComponentKey: 'dashboard'});
    case types.SHOW_ERROR_MESSAGE:
      return Object.assign({}, state, {currentComponentKey: '', showErrorMessage: true, statusMessage: action.statusMessage});
    case types.HIDE_ERROR_MESSAGE:
      return Object.assign({}, state, {currentComponentKey: '', showErrorMessage: false});
    default:
      return state;
  }
}
