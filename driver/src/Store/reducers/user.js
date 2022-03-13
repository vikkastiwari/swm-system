import * as actionTypes from '../actions/actionTypes';
const initialState = {
  userData: {
    vehicleId: [],
    binIds: [],
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SINGLE_USER:
      return {
        ...state,
        userData: action.data,
      };

   
    default:
      return state;
  }
};

export default reducer;
