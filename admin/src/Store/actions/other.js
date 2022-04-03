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

export const getDailyLog = (id) => async (dispatch) => {
  axios
    .get(urls.GET_DAILY_LOG + id)
    .then((res) => {
      dispatch({
        type: actionTypes.GET_DAILY_LOG,
        data: res.data.payload,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: 'Error', error: err });
    });
};