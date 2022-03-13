import axios from "axios";
import * as urls from "../urls";
import * as actionTypes from "./actionTypes";

export const getSingle = (data) => (dispatch) => {
  axios
    .get(urls[data.type] + data.id)
    .then((res) => {
      dispatch({ type: actionTypes[data.type], singleData: res.data.payload });
    })
    .catch((err) => {
      dispatch({ type: "Error", error: err });
    });
};

export const getData = (data) => (dispatch) => {
  axios
    .get(urls[data.type])
    .then((res) => {
      console.log(res.data);
      dispatch({ type: actionTypes[data.type], data: res.data.payload });
    })
    .catch((err) => {
      dispatch({ type: "Error", error: err });
    });
};

export const createData = (data) => (dispatch) => {
  console.log("Branch Create Action");
  axios
    .post(urls[data.type], data.body)
    .then((res) => {
      console.log("Created Branch : " + res);
      const [, resource] = data.type.split("_");
      // dispatch({ type: actionTypes[data.type], data: res.data });
      axios
        .get(urls["GET_" + resource])
        .then((res2) => {
          console.log(res2);
          dispatch({
            type: actionTypes['GET_' + resource],
            data: res2.data.payload,
          });
        })
        .catch((err) => {
          dispatch({ type: "Error", error: err });
        });
    })
    .catch((err) => {
      dispatch({ type: "Error", error: err });
    });
};

export const updateData = (data) => (dispatch) => {
  axios
    .put(urls[data.type] + data.id, data.body)
    .then((res) => {
      const [, resource] = data.type.split("_");
      // dispatch({ type: actionTypes[data.type], data: res.data });
      axios
        .get(urls["GET_" + resource])
        .then((res2) => {
          dispatch({
            type: actionTypes['GET_' + resource],
            data: res2.data.payload,
          });
        })
        .catch((err) => {
          dispatch({ type: "Error", error: err });
        });
    })
    .catch((err) => {
      dispatch({ type: "Error", error: err });
    });
};

export const deleteData = (data) => (dispatch) => {
  axios
    .delete(urls[data.type] + data.id)
    .then((res) => {
      const [, resource] = data.type.split("_");
      // dispatch({ type: actionTypes[data.type], data: res.data });
      axios
        .get(urls["GET_" + resource])
        .then((res2) => {
          dispatch({
            type: actionTypes['GET_' + resource],
            data: res2.data.payload,
          });
        })
        .catch((err) => {
          dispatch({ type: "Error", error: err });
        });
    })
    .catch((err) => {
      dispatch({ type: "Error", error: err });
    });
};
