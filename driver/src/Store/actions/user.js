import axios from "axios";
import * as urls from "../urls";
import * as actionTypes from "./actionTypes";


export const getSingleUser = (id) => (dispatch) => {
  axios
    .get(urls.SINGLE_USER + id)
    .then((res) => {
      console.log("sINGLE User Fetched");
      dispatch({
        type: actionTypes.SINGLE_USER,
        data: res.data.payload,
      });
    })
    .catch((err) => {
      dispatch({ type: "Error", error: err });
    });
};
