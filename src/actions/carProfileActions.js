import * as types from './actionTypes';
import * as API_END_POINTS from '../constants/api.js';
import axios from 'axios';
import {keyBy} from 'lodash';

export function setCarProfileAction(carData, isEditProfile, profileId){
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
  const postMethod = (isEditProfile && profileId) ? axios.put : axios.post;
  postMethod(isEditProfile && profileId? (API_END_POINTS.EDIT_CAR_PROFILES + profileId) : API_END_POINTS.CREATE_CAR_PROFILE, formData, {
      withCredentials:true
    })
    .then((response) => {
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
          localStorage[response.data.id] = JSON.stringify(carProfiles);
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

export function getCarProfileList(router) {
  return (dispatch) => {
    axios.get(API_END_POINTS.LIST_CAR_PROFILES, {withCredentials: true})
      .then((response) => {
        if (response.status === 200){
          const carProfiles = keyBy(response.data, 'id');
          dispatch({
            type: types.LIST_CAR_PROFILES,
            carProfiles: carProfiles
          })
        } else {
          dispatch({
            type: types.SHOW_ERROR_MESSAGE,
            statusMessage: 'Unable to fetch the car list'
          })
        }
      }).catch((err) => {
        if (err.response.status === 403) {
          dispatch({
            type: types.LOGOUT
          });
          router.push('/');
        } else if (err.response.status === 404 || err.response.status === 401 || err.response.status === 410) {
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
  }
}

export function getCarProfileDetails(carProfileID) {
  return (dispatch) => {
    axios.get(API_END_POINTS.GET_CAR_PROFILE_DETAILS + carProfileID, {withCredentials: true})
      .then((response) => {
        if (response.status == 200) {
          dispatch({
            type: types.VIEW_CAR_PROFILE,
            carProfile: response.data
          })
        } else {
          dispatch({
            type: types.VIEW_CAR_PROFILE,
          })
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: types.VIEW_CAR_PROFILE,
        })
      });
  }

}

export function deleteCarProfile(carProfileID) {
  return (dispatch) => {
    axios.delete(API_END_POINTS.DELETE_CAR_PROFILE + carProfileID, {withCredentials: true})
      .then((response) => {
        if (response.status == 200) {
          dispatch({
            type: types.DELETE_CAR_PROFILE,
            carProfileID: carProfileID
          })
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }
}
