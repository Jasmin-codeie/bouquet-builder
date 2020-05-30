import * as types from "../actions/types";

const initialState = {
  flowers: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_ORDERS:
      return {
        ...state,
        orders: action.orders,
      };

    default:
      return state;
  }
};
