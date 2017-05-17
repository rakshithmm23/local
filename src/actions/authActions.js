import * as types from './actionTypes';
import * as API_END_POINTS from '../constants/api.js';
import axios from 'axios';
import Cookies from 'universal-cookie';
import {decryptCookie} from '../helpers';
import {escape} from 'lodash';
const cookies = new Cookies();

export function signInAction(signInData) {
  return (dispatch) => {
    axios.post(API_END_POINTS.SIGNIN, JSON.stringify(signInData), {
      headers: {
        'Accept': 'application/json,',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      if (response.status === 200) {
        const responseData = response.data;
        const cookieObj = decryptCookie(response.headers.authorization);
        cookies.set('carauth', cookieObj.carauth, { path: cookieObj.Path, expires: new Date(cookieObj.Expires)});
        if (responseData.phone && (!responseData.phoneVerified)) {
          const carauth = 'carauth='+ escape(cookieObj.carauth);
          axios.post(API_END_POINTS.REQUEST_OTP, JSON.stringify({ "phone": responseData.phone}), {
            headers: {
              'Accept': 'application/json,',
              'Content-Type': 'application/json',
              'Cookie': carauth
            }
          })
          .then((response) => {
            if (response.status === 200) {
              dispatch({
                type: types.SHOW_SEND_OTP_PAGE,
                authData: responseData
              });
            } else {
              dispatch({
                type: types.SHOW_ERROR_MESSAGE,
                statusMessage: "Unknown error occurred please try again"
              });
            }
          })
          .catch((err) => {
            console.log(err);
            dispatch({
              type: types.SHOW_ERROR_MESSAGE,
              statusMessage: 'Unknown error occurred please try again'
            });
          });
        } else {
          dispatch({
            type: types.SHOW_DASHBOARD,
            authData: responseData
          });
        }
      } else {
        dispatch({
          type: types.SHOW_ERROR_MESSAGE,
          statusMessage: "Unknown error occurred please try again"
        });
      }
    })
    .catch((err) => {
      if (err.response.status === 400 || err.response.status === 401 || err.response.status === 403) {
        dispatch({
          type: types.SHOW_ERROR_MESSAGE,
          statusMessage: err.response.status === 401 ? 'Invalid Email/Password' : err.response.data
        });
      } else {
        dispatch({
          type: types.SHOW_ERROR_MESSAGE,
          statusMessage: 'System error, please try later'
        });
      }
    });
  };
}

export function showSendOTPPage(signUpData) {
  return (dispatch) => {
    axios.post(API_END_POINTS.SIGNUP, JSON.stringify(signUpData), {
      headers: {
        'Accept': 'application/json,',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      if (response.status === 200) {
        const responseData = response.data;
        dispatch({
          type: responseData.verified ? types.SHOW_WELCOME_PAGE : types.SHOW_SEND_OTP_PAGE,
          signUpData: responseData
        });
      } else {
        dispatch({
          type: types.SHOW_ERROR_MESSAGE,
          statusMessage: "Unknown error occurred please try again"
        });
      }
    })
    .catch((err) => {
      if (err.response.status === 400 || err.response.status === 401 || err.response.status === 403) {
        dispatch({
          type: types.SHOW_ERROR_MESSAGE,
          statusMessage: err.response.data
        });
      } else if (err.response.status === 409) {
        dispatch({
          type: types.SHOW_ERROR_MESSAGE,
          statusMessage: 'User already registered please login'
        });
      } else {
        dispatch({
          type: types.SHOW_ERROR_MESSAGE,
          statusMessage: 'System error, please try later'
        });
      }
    });
  };
}

export function showWelcomePage(otp, phone, userId) {
  if (userId) {
    return (dispatch) => {
      axios.get(API_END_POINTS.VERIFY_OTP, {
        params: {
          type: 'phone',
          code: otp
        },
        headers: {
          'Accept': 'application/json,',
          'Content-Type': 'application/json',
        }
      })
      .then((response) => {
        dispatch({
          type: types.SHOW_WELCOME_PAGE,
        });
        if (response.status === 200) {
          dispatch({
            type: types.SHOW_WELCOME_PAGE,
          });
        } else {
          dispatch({
            type: types.SHOW_ERROR_MESSAGE,
            statusMessage: "Unknown error occurred please try again"
          });
        }
      })
      .catch((err) => {
        if (err.response.status === 404 || err.response.status === 401 || err.response.status === 410) {
          dispatch({
            type: types.SHOW_ERROR_MESSAGE,
            statusMessage: (err.response.status === 401  || err.response.status === 410 )? "Wrong verification code" : 'Mobile number not found'
          });
        } else {
          dispatch({
            type: types.SHOW_ERROR_MESSAGE,
            statusMessage: 'System error, please try later'
          });
        }
      });
    }
  } else {
    return (dispatch) => {
      dispatch({
        type: types.SHOW_WELCOME_PAGE,
      });
    }
  }
}

export function hideErrorMessage() {
  return (dispatch) => {
    dispatch({
      type: types.HIDE_ERROR_MESSAGE
    });
  }
}
