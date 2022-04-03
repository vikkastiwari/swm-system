import axios from 'axios';
import * as urls from '../urls';
import * as actionTypes from './actionTypes';

export const overview = () => async (dispatch) => {
  axios
    .get(urls.OVERVIEW)
    .then((res) => {
      dispatch({
        type: actionTypes.OVERVIEW,
        data: res.data.payload,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: 'Error', error: err });
    });
};


export const updateLocation = (body) => async (dispatch) => {
  axios
    .post(urls.UPDATE_LOCATION, body)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
      // dispatch({ type: 'Error', error: err });
    });
};
