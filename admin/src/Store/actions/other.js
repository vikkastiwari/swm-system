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
