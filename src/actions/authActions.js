import * as types from './actionTypes';
import * as API_END_POINTS from '../constants/api.js';
import axios from 'axios';
import {decryptCookie} from '../helpers';
import Cookies from 'universal-cookie';
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
        const authCookie = decryptCookie(response.headers.authorization);
        cookies.set('carauth', authCookie.carauth, {
          domain: authCookie.Domain,
          expires: new Date(authCookie.Expires),
          path: authCookie.Path
        });
        localStorage.setItem('authData', JSON.stringify(responseData));
        if (responseData.phone && (!responseData.phoneVerified)) {
          dispatch({
            type: types.SHOW_VERIFY_OTP_PAGE,
            authData: responseData
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

export function showVerifyOTPPage(signUpData) {
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
        debugger;
        const authCookie = decryptCookie(response.headers.authorization);
        cookies.set('carauth', authCookie.carauth, {
          domain: authCookie.Domain,
          expires: new Date(authCookie.Expires),
          path: authCookie.Path
        });
        localStorage.setItem('authData', JSON.stringify(responseData));
        dispatch({
          type: responseData.verified ? types.SHOW_WELCOME_PAGE : types.SHOW_VERIFY_OTP_PAGE,
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
        if (response.status === 200) {
          const authData = JSON.parse(localStorage.getItem('authData'));
          authData.phoneVerified = true;
          localStorage.setItem('authData', JSON.stringify(authData));
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
    };
  } else {
    return (dispatch) => {
      dispatch({
        type: types.SHOW_WELCOME_PAGE,
      });
    };
  }
}

export function hideErrorMessage() {
  return (dispatch) => {
    dispatch({
      type: types.HIDE_ERROR_MESSAGE
    });
  }
}

export function fetchCurrentUserInfo(){
  return (dispatch) => {
    axios.get(API_END_POINTS.CURRENT_USER_DETAILS, {
      headers: {
        'Accept': 'application/json,',
        'Content-Type': 'application/json',
      },
      withCredentials:true
    })
    .then((response) => {
      if (response.status === 200) {
        const responseData = response.data;
        localStorage.setItem('authData', JSON.stringify(responseData));
        if (!responseData.phone) {
          dispatch({
            type: types.SHOW_SEND_OTP_PAGE,
            authData: responseData
          });
        }
        if (responseData.phone && (!responseData.phoneVerified)) {
          dispatch({
            type: types.SHOW_VERIFY_OTP_PAGE,
            authData: responseData
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
        console.log(err);
        dispatch({
          type: types.SHOW_ERROR_MESSAGE,
          statusMessage: 'System error, please try later'
        });
    });
  };
}

export function resendOTP(){
  return (dispatch) => {
    const authData = JSON.parse(localStorage.authData);
    if (authData.phone && (!authData.phoneVerified)) {
          axios.post(API_END_POINTS.REQUEST_OTP, JSON.stringify({ "phone": authData.phone}), {
            headers: {
              'Accept': 'application/json,',
              'Content-Type': 'application/json'
            },
            withCredentials:true
          })
          .then((response) => {
            if (response.status === 200) {
              dispatch({
                type: types.VERIFY_OTP,
                authData: authData
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
            authData: authData
          });
        }
  };
}

export function logout(router) {
  return (dispatch) => {
    axios.get(API_END_POINTS.LOGOUT, {
      headers: {
        'Accept': 'application/json,',
        'Content-Type': 'application/json',
      },
      withCredentials:true
    })
    .then((response) => {
      if (response.status == 200) {
        localStorage.clear();
        dispatch({
          type: types.LOGOUT,
        });
        router.push('/');
        // dispatch(push('/logout'));
      }
    })
    .catch((err) => {
        console.log(err);
    });
  };
}
