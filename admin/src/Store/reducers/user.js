import * as actionTypes from "../actions/actionTypes";
import Notification from "../../Components/Notification/Notification";
const initialState = {
  users: [],
  user: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER:
      return {
        ...state,
        users: action.data,
      };

    case actionTypes.SINGLE_USER:
      return {
        ...state,
        user: action.data,
      };
    case actionTypes.GET_USER_BY_TYPE:
      return {
        ...state,
        users: action.data,
      };
    case "Error":
      let message = "";
      if (action.error && action.error.response && action.error.response.data) {
        if (action.error.response.data.error) {
          message = action.error.response.data.error;
        } else {
          message = action.error.response.data;
        }
      }
      Notification(message, "danger");
      return state;
    case "Success":
      Notification(action.data, "success");
      return state;

    default:
      return state;
  }
};

export default reducer;
