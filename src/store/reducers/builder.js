import * as types from "../actions/types";

const initialState = {
  flowers: {
    roses: { quantity: 0, price: 7, label: "Roses" },
    jasmine: { quantity: 0, price: 10, label: "Jasmine" },
    daisies: { quantity: 0, price: 8, label: "Daisies" },
    lilies: { quantity: 0, price: 11, label: "Lilies" },
    irises: { quantity: 0, price: 15, label: "Irises" },
    liliesOfTheValley: {
      quantity: 0,
      price: 12,
      label: "Lilies of the Valley",
    },
  },
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

    default:
      return state;
  }
};
