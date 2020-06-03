import { AUTH_FAIL, AUTH_SUCCESS, AUTH_START } from "./types";
import axios from "axios";

export const start = (dispatch, data) =>
  dispatch({
    type: AUTH_START,
    data,
  });

export const success = (dispatch, data) =>
  dispatch({
    type: AUTH_SUCCESS,
    data,
  });

export const fail = (dispatch, errors) =>
  dispatch({
    type: AUTH_FAIL,
    errors,
  });

export const autho = (dispatch, email, password) =>
  axios
    .post()
    .then(({ data }) => success(dispatch, data))
    .catch((error) => fail(dispatch, error));
