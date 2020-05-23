import * as actions from "./actions";

const initialState = {
  flowers: null,
  price: 100,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_FLOWERS:
      return state;

    case actions.REMOVE_FLOWERS:
      return state;

    default:
      return state;
  }
};
