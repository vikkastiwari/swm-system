import axios from "axios";
import * as urls from "../urls";
import * as actionTypes from "./actionTypes";

const getUsers = (dispatch) => {
  axios
    .get(urls.GET_USER)
    .then((res) => {
      console.log("User Fetched");
      dispatch({
        type: actionTypes.GET_USER,
        data: res.data,
      });
      // dispatch({ type: "Success", data: "Users fetched successfully!" });
    })
    .catch((err) => {
      dispatch({ type: "Error", error: err });
    });
};

export const getUser = (body) => (dispatch) => {
  getUsers(dispatch);
};

export const getSingleUser = (id) => (dispatch) => {
  axios
    .get(urls.SINGLE_USER + id)
    .then((res) => {
      console.log("sINGLE User Fetched");
      dispatch({
        type: actionTypes.SINGLE_USER,
        data: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: "Error", error: err });
    });
};

const userByType = (type, dispatch) => {
  axios
    .get(urls.GET_USER_BY_TYPE + type)
    .then((res) => {
      console.log(" Users Fetched");
      dispatch({
        type: actionTypes.GET_USER_BY_TYPE,
        data: res.data,
      });
    })
    .catch((err) => {
      dispatch({ type: "Error", error: err });
    });
};

export const getUserByType = (type) => (dispatch) => {
  userByType(type, dispatch);
};

export const createUser = (body) => (dispatch) => {
  axios
    .post(urls.CREATE_USER, body)
    .then((res) => {
      console.log(res.data);
      console.log("User created");
      dispatch({
        type: actionTypes.CREATE_USER,
        data: res.data,
      });
      dispatch({
        type: "Success",
        data: "User has been created successfully!",
      });
    })
    .catch((err) => {
      dispatch({ type: "Error", error: err });
    });
};

export const assignBin = (body) => (dispatch) => {
  axios
    .post(urls.ASSIGN_BIN, body)
    .then((res) => {
      dispatch({
        type: "Success",
        data: "Bins assigned successfully!",
      });
      userByType("driver", dispatch);
    })
    .catch((err) => {
      dispatch({ type: "Error", error: err });
    });
};

export const updateUser =
  ({ type, userId, update }) =>
  (dispatch) => {
    axios
      .put(urls.UPDATE_USER + userId, update)
      .then((res) => {
        console.log("User updated");
        dispatch({
          type: actionTypes.UPDATE_USER,
          data: res.data,
        });
        userByType(type, dispatch);
        dispatch({
          type: "Success",
          data: "User data has been updated successfully!",
        });
      })
      .catch((err) => {
        dispatch({ type: "Error", error: err });
      });
  };

export const deleteUser =
  ({ userId, type }) =>
  (dispatch) => {
    axios
      .delete(urls.DELETE_USER + userId)
      .then((res) => {
        console.log("User deleted");
        dispatch({
          type: actionTypes.DELETE_USER,
          data: res.data,
        });
        userByType(type, dispatch);
        dispatch({
          type: "Success",
          data: "User has been deleted successfully!",
        });
      })
      .catch((err) => {
        dispatch({ type: "Error", error: err });
      });
  };
