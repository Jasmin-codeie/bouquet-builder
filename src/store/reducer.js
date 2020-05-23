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

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_FLOWERS:
      return {
        ...state,
        flowers: {
          ...state.flowers,
          [action.flower]: state.flowers[action.flower] + 1,
        },
      };

    case actions.REMOVE_FLOWERS:
      return {
        ...state,
        flowers: {
          ...state.flowers,
          [action.flower]: state.flowers[action.flower] - 1,
        },
      };

    default:
      return state;
  }
};
