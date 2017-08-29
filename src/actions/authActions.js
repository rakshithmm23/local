import * as types from './actionTypes';
import * as API_END_POINTS from '../constants/api.js';
import axios from 'axios';
import queryString from 'query-string';

export function signInUser (signInData, dispatch, fromSignup) {
  axios.post(API_END_POINTS.SIGNIN, JSON.stringify(signInData), {
      headers: {
        'Accept': 'application/json,',
        'Content-Type': 'application/json'
      },
      withCredentials:true
    })
    .then((response) => {
      if (response.status === 200) {
        let responseData = response.data.user;
        responseData['token'] = response.data.token;
        localStorage.setItem('accessToken', responseData.token);
        localStorage.setItem('authData', JSON.stringify(responseData));
        localStorage.setItem('userId', JSON.stringify(responseData.id));
        if (responseData.token) {
          axios.defaults.headers.common['x-access-token'] = responseData.token;
        }
        if (responseData.phone && (!responseData.phoneVerified)) {
          dispatch({
            type: types.SHOW_VERIFY_OTP_PAGE,
            fromSignIn: fromSignup? false : true,
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
          statusMessage: (err.response.status === 400 || err.response.status === 401) ? err.response.data && err.response.data.message ? err.response.data.message : 'Invalid Email/Password' : 'Unknown error occurred please try again'
        });
      } else {
        dispatch({
          type: types.SHOW_ERROR_MESSAGE,
          statusMessage: 'Unknown error occurred please try again'
        });
      }
    });
}
export function signInAction(signInData, dispatch, fromSignup) {
  if (fromSignup) {
    signInData.usertype = 'customer';
    signInUser(signInData, dispatch, fromSignup);
  } else {
    return (dispatch) => {
      signInUser(signInData, dispatch);
    };
  }
}

export function socialAuth(accessToken, provider) {
  return (dispatch) => {
    const authPostData = {
      "provider": provider,
      "type": "customer",
      "userType": "customer",
      "accessToken": accessToken
    };
    axios.post(API_END_POINTS.SOCIAL_AUTH, JSON.stringify(authPostData), {
      headers: {
        'Accept': 'application/json,',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      if (response.status === 200) {
        let responseData = response.data.user;
        responseData['token'] = response.data.token;
        localStorage.setItem('accessToken', responseData.token);
        localStorage.setItem('authData', JSON.stringify(responseData));
        localStorage.setItem('userId', JSON.stringify(responseData.id));
        if (responseData.token) {
          axios.defaults.headers.common['x-access-token'] = responseData.token;
        }
        if (responseData.phone && (!responseData.phoneVerified)) {
          dispatch({
            type: types.SHOW_SEND_OTP_PAGE,
            authData: responseData
          });
        } else {
          dispatch({
            type: (responseData.phone && responseData.phoneVerified) ? responseData.hasVehicleProfile ? types.SHOW_DASHBOARD : types.SHOW_WELCOME_PAGE : types.SHOW_SEND_OTP_PAGE,
            authData: responseData
          });
        }
      } else {
        dispatch({
          type: types.SHOW_ERROR_MESSAGE,
          statusMessage: "Unable to authenticate using facebook, please try again"
        });
        dispatch({
          type: types.SAVE_LOG,
          appLog: 'Calling SignIn API ' + API_END_POINTS.SIGNIN + ' Login Success, Response:  ' + response.data
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: types.SHOW_ERROR_MESSAGE,
        statusMessage: (err && err.message) ? err.message : "Unable to authenticate using facebook, please try again"
      });
    })
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
          statusMessage: err.response.data && err.response.data.message ? err.response.data.message : 'Unknown error occurred please try again'
        });
      } else if (err.response.status === 409) {
        dispatch({
          type: types.SHOW_ERROR_MESSAGE,
          statusMessage: 'This email id is already in use. Do you already have an account?'
        });
      } else {
        dispatch({
          type: types.SHOW_ERROR_MESSAGE,
          statusMessage: 'Unknown error occurred please try again'
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
          const authData = localStorage.getItem('authData') ? JSON.parse(localStorage.getItem('authData')) : {};
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
          dispatch({
            type: types.SHOW_ERROR_MESSAGE,
            statusMessage: err.response && err.response.data && err.response.data.message ? err.response.data.message : 'Unknown error occurred please try again'
          });
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

export function showErrorMessage(error){
  return (dispatch) => {
    dispatch({
      type: types.SHOW_ERROR_MESSAGE,
      statusMessage: error,
    });
  };
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
          statusMessage: 'Unknown error occurred please try again'
        });
    });
  };
}

export function resendOTP(phoneNumber, userTriggeredAPI){
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
        if (userTriggeredAPI) {
          window.alert('OTP has been send to ' + phoneNumber);
        }
        const authData = localStorage.getItem('authData') ? JSON.parse(localStorage.getItem('authData')) : '';
        dispatch({
          type: types.SHOW_VERIFY_OTP_PAGE,
          authData: authData
        });
      } else {
        dispatch({
          type: types.SHOW_ERROR_MESSAGE,
          statusMessage: response.data && response.data.message ? response.data.message : "Unknown error occurred please try again"
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: types.SHOW_ERROR_MESSAGE,
        statusMessage: err && err.response && err.response.data && err.response.data.message ? err.response.data.message : 'Unknown error occurred please try again'
      });
    });
  };
}

export function logout() {
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
        window.location.pathname = '';
      }
    })
    .catch(() => {
        localStorage.clear();
        window.location.pathname = '';
    });
  };
}

export function forgotPassword(emailId) {
  return (dispatch) => {
    axios.post(API_END_POINTS.FORGOT_PASSWORD, JSON.stringify({'email': emailId}), {
      headers: {
        'Accept': 'application/json,',
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        if (response.status == 200) {
          dispatch({
            type: types.SHOW_RESET_EMAIL_CONFIRMATION,
            email: emailId
          });
        } else {
          dispatch({
            type: types.SHOW_ERROR_MESSAGE,
            statusMessage: "Unknown error occurred please try again"
          });
        }
      })
      .catch((err) => {
        if(err && err.response && err.response.status == 404) {
          dispatch({
            type: types.SHOW_ERROR_MESSAGE,
            statusMessage: "Email id not found, enter valid email id"
          });
        } else {
          dispatch({
            type: types.SHOW_ERROR_MESSAGE,
            statusMessage: "Unknown error occurred please try again"
          });
        }
      })
  }
}

export function resetPassword(verificationCode, password) {
  return (dispatch) => {
    axios.post(API_END_POINTS.RESET_PASSWORD, JSON.stringify({'code': verificationCode, password: password}), {
      headers: {
        'Accept': 'application/json,',
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        if (response.status == 200) {
          dispatch({
            type: types.RESET_PASSWORD_CODE_VERIFIED
          });
        } else {
          dispatch({
            type: types.SHOW_ERROR_MESSAGE,
            statusMessage: "Unknown error occurred please try again"
          });
        }
      })
      .catch((err) => {
        if (err && err.response && err.response.status == '410') {
          dispatch({
            type: types.SHOW_ERROR_MESSAGE,
            statusMessage: "Verification code expired, please try resetting again"
          });
        } else {
          dispatch({
            type: types.SHOW_ERROR_MESSAGE,
            statusMessage: "Unknown error occurred please try again"
          });
        }
      })
  }
}

export function verifyEmail(code) {
  return (dispatch) => {
    axios.get(API_END_POINTS.VERIFY_EMAIL, {
      params: {
        'type': 'email',
        'code': code
      },
      headers: {
        'Accept': 'application/json,',
        'Content-Type': 'application/json',
      },
      withCredentials:true
    })
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: types.EMAIL_VERIFIED,
        });
      } else {
        dispatch({
          type: types.SHOW_ERROR_MESSAGE,
          statusMessage: (response.status === 401  || response.status === 410 )? "Wrong verification code" : "Unable to verify email id, please try again"
        });
      }
    })
    .catch((err) => {
      if (err.response.status === 404 || err.response.status === 401 || err.response.status === 410) {
        dispatch({
          type: types.SHOW_ERROR_MESSAGE,
          statusMessage: (err.response.status === 401  || err.response.status === 410 )? "Wrong verification code" : "Unable to verify email id, please try again"
        });
      } else {
        dispatch({
          type: types.SHOW_ERROR_MESSAGE,
          statusMessage: 'Unknown error occurred please try again'
        });
      }
    });
  }
}

export function clearComponentKey() {
  return (dispatch) => {
    dispatch({
      type: types.CLEAR_COMPONENT_KEY
    })
  }
}
