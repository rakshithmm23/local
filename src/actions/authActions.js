import * as types from './actionTypes';
import * as API_END_POINTS from '../constants/api.js';
import axios from 'axios';
import {replace} from 'lodash';

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
        dispatch({
          type: types.SHOW_DASHBOARD,
          signInData: responseData
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
}

export function showWelcomePage(otp, mobile, userId) {
  if (userId) {
    return (dispatch) => {
      const otpURL = replace(API_END_POINTS.VERIFY_OTP, '${userid}', userId);
      axios.post(otpURL, JSON.stringify({code: otp, mobile: ('+' + mobile)}), {
        headers: {
          'Accept': 'application/json,',
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
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
        if (err.response.status === 404 || err.response.status === 401) {
          dispatch({
            type: types.SHOW_ERROR_MESSAGE,
            statusMessage: err.response.status === 401 ? "Wrong verification code" : 'Mobile number not found'
          });
        } else {
          dispatch({
            type: types.SHOW_ERROR_MESSAGE,
            statusMessage: 'System error, please try later'
          });
        }
      });
    }
  }
}
