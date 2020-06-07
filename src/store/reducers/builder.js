import * as types from "../actions/types";

const initialState = {
  flowers: null,
  price: 0,
};

export default (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case types.ADD_FLOWERS:
      newState.flowers[action.flower].quantity++;
      newState.price = state.price + state.flowers[action.flower].price;

      return newState;

    case types.REMOVE_FLOWERS:
      newState.flowers[action.flower].quantity--;
      newState.price = state.price - state.flowers[action.flower].price;

      return newState;

    case types.SET_FLOWERS:
      newState.flowers = action.flowers;
      newState.price = initialState.price;

      return newState;

    default:
      return newState;
  }
};
