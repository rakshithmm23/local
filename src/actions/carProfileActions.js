import * as types from './actionTypes';
import * as API_END_POINTS from '../constants/api.js';
import axios from 'axios';

export function setCarProfileAction(carData){
  return (dispatch) => {
    dispatch({
      type: types.HIDE_ERROR_MESSAGE
    });
    const formData = new FormData();
    let mandateFields = ['name', 'make', 'model', 'year', 'plate_no', 'mileage', 'state', 'photos'];

  Object.keys(carData).map((value)=> {
    if(carData[value] && mandateFields.indexOf(value) !== -1) {
      if(value !== 'photos')
        formData.append(value, carData[value]);
      else {
        carData[value].forEach(imgElm => {
          formData.append(value, imgElm);
        });
      }
    }
  });
  
  axios.post(API_END_POINTS.CREATE_CAR_PROFILE, formData, {
      withCredentials:true
    })
    .then((response) => {
      console.log("Resp: ",response);
      if(response.status === 200){
        if (typeof(response.data) == 'string' && response.data.indexOf('<!DOCTYPE html>') > -1) {
          dispatch({
            type: types.SHOW_ERROR_MESSAGE,
            statusMessage: "Unknown error occurred"
          });
        } else {
          let carProfiles = localStorage.getItem('carProfiles') && 
                              JSON.parse(localStorage.getItem('carProfiles')) || [];
          console.log("carProfiles: ",carProfiles);
          carProfiles.push(response.data);
          localStorage.setItem('carProfiles', JSON.stringify(carProfiles));
          dispatch({
            type: types.SET_CAR_PROFILE,
            carData: response.data
          });
        }
      }

    }).catch((err) => {
      console.log("Error: ",err);
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
    });
  };
}
