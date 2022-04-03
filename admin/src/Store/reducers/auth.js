import * as actionTypes from "../actions/actionTypes";

const initialState = {
  user: null,
  token: null,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOADING:
      return {
        ...state,
        loading: action.data,
      };

    case actionTypes.USER_LOGIN:
      return {
        ...state,
        user: action.data,
      };

    case actionTypes.USER_TOKEN:
      return {
        ...state,
        token: action.data,
      };

    case actionTypes.USER_LOGOUT:
      localStorage.removeItem("token");

      return {
        ...state,
        user: null,
        token: null,
      };

    default:
      return state;
  }
};

export default reducer;
