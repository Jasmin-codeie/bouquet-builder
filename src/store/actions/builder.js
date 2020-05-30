import axios from "../../axios";
import { ADD_FLOWERS, REMOVE_FLOWERS, SET_FLOWERS } from "./types";

export const add = (dispatch, flower) =>
  dispatch({ type: ADD_FLOWERS, flower });

export const remove = (dispatch, flower) =>
  dispatch({ type: REMOVE_FLOWERS, flower });

export const set = (dispatch, flowers) =>
  dispatch({
    type: SET_FLOWERS,
    flowers,
  });

export const load = (dispatch) =>
  axios
    .get("/flowers.json")
    .then(({ data }) => set(dispatch, data))
    .catch(() => {});
