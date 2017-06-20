import * as types from './actionTypes';
import * as API_END_POINTS from '../constants/api.js';
import axios from 'axios';
import {decryptCookie} from '../helpers';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export function setCarProfileAction(carData){
  return (dispatch) => {
    const formData = new FormData();

  let mandateFields = ['name', 'make', 'model', 'year', 'regNo'];

  Object.keys(carData).map((value, key)=>{
    if(carData[value] && mandateFields.indexOf(value) !== -1) {
      formData.append(value, carData[value]);
    }
  })

  axios.post(API_END_POINTS.CREATE_CAR_PROFILE, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials:true
    })
    .then((response) => {
      if(response.status === 200){
        dispatch({
          type: types.SET_CAR_PROFILE,
          carData: response.data
        });
      }

    }).catch((err) => {
      if (err.response.status === 404 || err.response.status === 401 || err.response.status === 410) {
        dispatch({
          type: types.SHOW_ERROR_MESSAGE,
          statusMessage: err.response.data
        });
      } else {
        dispatch({
          type: types.SHOW_ERROR_MESSAGE,
          statusMessage: 'System error, please try later'
        });
      }
    })
  }
}
