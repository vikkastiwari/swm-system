import * as actionTypes from '../actions/actionTypes';

const initialState = {
  overview: {
    bin: 0,
    vehicle: 0,
    user: { driver: 0, admin: 0 },
  },
  dailyLog: {
    binIds: [],
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OVERVIEW:
      return {
        ...state,
        overview: action.data,
      };

    case actionTypes.GET_DAILY_LOG:
      return {
        ...state,
        dailyLog: action.data,
      };

    default:
      return state;
  }
};

export default reducer;
