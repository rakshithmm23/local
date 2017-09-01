import * as types from './actionTypes';
import * as API_END_POINTS from '../constants/api.js';
import axios from 'axios';

export function getAllServices(id) {
  return (dispatch) => {
    axios.get(API_END_POINTS.GET_ALL_SERVICES, {withCredentials: true})
      .then((response) => {
        if (response.status === 200){
          dispatch({
            type: types.GET_ALL_SERVICES,
            getAllServices:response.data,
            selecetedCarProfileId: id,
          });
        }
      }).catch((err) => {
        // if (err.response.status === 403) {
        //   dispatch({
        //     type: types.LOGOUT
        //   });
        // } else if (err.response.status === 404 || err.response.status === 401 || err.response.status === 410) {
        //   dispatch({
        //     type: types.SHOW_ERROR_MESSAGE,
        //     statusMessage: err.response.data
        //   });
        // } else {
        //   dispatch({
        //     type: types.SHOW_ERROR_MESSAGE,
        //     statusMessage: 'System error, please try later'
        //   });
        // }
      });
  };
}
