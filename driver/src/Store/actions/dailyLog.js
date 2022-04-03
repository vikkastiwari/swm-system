import axios from 'axios';
import * as urls from '../urls';
import * as actionTypes from './actionTypes';

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

export const updateDailyLog = ({id, ...body}) => async (dispatch) => {
  axios
    .put(urls.UPDATE_DAILY_LOG + id, body)
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
