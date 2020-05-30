import * as types from "../actions/types";

const initialState = {
  flowers: null,
  price: 80,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_FLOWERS:
      return {
        ...state,
        flowers: {
          ...state.flowers,
          [action.flower]: {
            ...state.flowers[action.flower],
            quantity: state.flowers[action.flower].quantity + 1,
          },
        },
        price: state.price + state.flowers[action.flower].price,
      };

    case types.REMOVE_FLOWERS:
      return {
        ...state,
        flowers: {
          ...state.flowers,
          [action.flower]: {
            ...state.flowers[action.flower],
            quantity: state.flowers[action.flower].quantity - 1,
          },
        },
        price: state.price - state.flowers[action.flower].price,
      };

    case types.SET_FLOWERS:
      return {
        ...state,
        flowers: action.flowers,
        price: initialState.price,
      };

    default:
      return state;
  }
};
