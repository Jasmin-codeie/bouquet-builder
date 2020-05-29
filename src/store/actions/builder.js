import { ADD_FLOWERS, REMOVE_FLOWERS } from "./types";

export const add = (dispatch, flower) =>
  dispatch({ type: ADD_FLOWERS, flower });

export const remove = (dispatch, flower) =>
  dispatch({ type: REMOVE_FLOWERS, flower });
