import * as actions from "./actions";

const initialState = {
  flowers: {
    roses: 0,
    jasmine: 0,
    daisies: 0,
    lilies: 0,
    irises: 0,
    liliesOfTheValley: 0,
  },
  price: 80,
};

const PRICES = {
  roses: 7,
  jasmine: 10,
  daisies: 8,
  lilies: 11,
  irises: 15,
  liliesOfTheValley: 12,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_FLOWERS:
      return {
        ...state,
        flowers: {
          ...state.flowers,
          [action.flower]: state.flowers[action.flower] + 1,
        },
        price: state.price + PRICES[action.flower],
      };

    case actions.REMOVE_FLOWERS:
      return {
        ...state,
        flowers: {
          ...state.flowers,
          [action.flower]: state.flowers[action.flower] - 1,
        },

        price: state.price - PRICES[action.flower],
      };

    default:
      return state;
  }
};
