import * as types from './actionTypes';
import * as API_END_POINTS from '../constants/api.js';
import axios from 'axios';
import {decryptCookie} from '../helpers';
import Cookies from 'universal-cookie';
import queryString from 'query-string';
const cookies = new Cookies();

export function signInUser (signInData, dispatch) {
  axios.post(API_END_POINTS.SIGNIN, JSON.stringify(signInData), {
      headers: {
        'Accept': 'application/json,',
        'Content-Type': 'application/json'
      },
      withCredentials:true
    })
    .then((response) => {
      if (response.status === 200) {
        const responseData = response.data;
        const authCookie = decryptCookie(response.headers.authorization);
        cookies.set('carauth', authCookie.carauth, {
          domain: window.location.hostname,
          expires: new Date(authCookie.Expires),
          path: authCookie.Path
        });
        localStorage.setItem('authData', JSON.stringify(responseData));
        localStorage.setItem('userId', JSON.stringify(responseData.id));
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
}
export function signInAction(signInData, dispatch, fromSignup) {
  if (fromSignup) {
    signInUser(signInData, dispatch);
  } else {
    return (dispatch) => {
      signInUser(signInData, dispatch);
    };
  }
}

export function showVerifyOTPPage(signUpData) {
  return (dispatch) => {
    axios.post(API_END_POINTS.SIGNUP, queryString.stringify(signUpData), {
      headers: {
        'Accept': 'application/json,',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      withCredentials:true
    })
    .then((response) => {
      if (response.status === 200) {
        signInAction({
          'email': signUpData.email,
          'password': signUpData.password
        }, dispatch, true);
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
          statusMessage: 'This email id is already in use. Do you already have an account?'
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
        },
        withCredentials:true
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
  };
}

export function fetchCurrentUserInfo(router){
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
        if (responseData.phone) {
          if (!responseData.phoneVerified) {
            dispatch({
              type: types.SHOW_VERIFY_OTP_PAGE,
              authData: responseData
            });
            router.push('/verify-otp');
          }
        } else {
          dispatch({
            type: types.SHOW_SEND_OTP_PAGE,
            authData: responseData
          });
          router.push('/send-otp');
        }

      } else {
        dispatch({
          type: types.SHOW_ERROR_MESSAGE,
          statusMessage: "Unknown error occurred please try again"
        });
      }
    })
    .catch(() => {
        dispatch({
          type: types.SHOW_ERROR_MESSAGE,
          statusMessage: 'System error, please try later'
        });
    });
  };
}

export function resendOTP(phoneNumber){
  return (dispatch) => {
    axios.post(API_END_POINTS.REQUEST_OTP, JSON.stringify({ "phone": phoneNumber}), {
      headers: {
        'Accept': 'application/json,',
        'Content-Type': 'application/json'
      },
      withCredentials:true
    })
    .then((response) => {
      if (response.status === 200) {
        const authData = JSON.parse(localStorage.getItem('authData'));
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
    .catch(() => {
      dispatch({
        type: types.SHOW_ERROR_MESSAGE,
        statusMessage: 'Unknown error occurred please try again'
      });
    });
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
        document.cookie = "";
        localStorage.clear();
        dispatch({
          type: types.LOGOUT,
        });
        router.push('/');
      }
    })
    .catch(() => {
        localStorage.clear();
        router.push('/');
    });
  };
}
