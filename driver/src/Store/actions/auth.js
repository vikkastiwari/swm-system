import axios from "axios";
import * as urls from "../urls";
import * as actionTypes from "./actionTypes";

export const userResetPassword = (erpId) => async (dispatch) => {
  axios
    .post(urls.USER_RESET_PASSWORD, { erpId: erpId })
    .then((res) => {
      dispatch({ type: "Success", data: res.data });
    })
    .catch((err) => {
      dispatch({ type: "Error", error: err });
    });
};

export const userChangePassword = (body) => async (dispatch) => {
  axios
    .post(urls.USER_CHANGE_PASSWORD, body)
    .then((res) => {
      dispatch({ type: "Success", data: res.data });
    })
    .catch((err) => {
      dispatch({ type: "Error", error: err });
    });
};

export const userLogin = (body) => async (dispatch) => {
  axios
    .post(urls.USER_LOGIN, body)
    .then((res) => {
      console.log(res);
      dispatch({
        type: actionTypes.USER_LOGIN,
        data: res.data.payload,
      });

      localStorage.setItem('token', res.headers['x-auth-token']);

      dispatch({
        type: actionTypes.USER_TOKEN,
        data: res.headers['x-auth-token'],
      });
    })
    .catch((err) => {
      dispatch({ type: 'Error', error: err });
    });
};

export const userLogout = () => async (dispatch) => {
  dispatch({ type: actionTypes.USER_LOGOUT });
};

export const userAutoLogin = () => async (dispatch) => {
  let token = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : null;

  console.log(token);

  if (token) {
    axios
      .get(urls.USER_ME, { headers: { "x-auth-token": token } })
      .then((res) => {
        dispatch({
          type: actionTypes.USER_LOGIN,
          data: res.data.payload,
        });

        dispatch({
          type: actionTypes.USER_TOKEN,
          data: res.headers["x-auth-token"]
            ? res.headers["x-auth-token"]
            : token,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: actionTypes.USER_LOGOUT });
        dispatch({ type: "Error", error: err });
      });
  }
};
