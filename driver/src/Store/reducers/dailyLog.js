import * as actionTypes from '../actions/actionTypes';

const initialState = {
  dailyLog:{
      binIds:[]
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
