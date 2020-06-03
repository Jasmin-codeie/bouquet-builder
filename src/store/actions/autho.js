import { AUTH_FAIL, AUTH_SUCCESS, AUTH_START } from "./types";
import axios from "axios";

export const start = (dispatch, data) =>
  dispatch({
    type: AUTH_START,
    data,
  });

export const success = (dispatch, { idToken, localId }) =>
  dispatch({
    type: AUTH_SUCCESS,
    id: idToken,
    token: localId,
  });

export const fail = (dispatch, errors) =>
  dispatch({
    type: AUTH_FAIL,
    errors,
  });

export const autho = (dispatch, email, password) =>
  axios
    .post(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDkDT_-Dt86HpTEcN9TAZUNTyNVQVrKr5g",
      { email, password }
    )
    .then(({ data }) => success(dispatch, data))
    .catch((error) => fail(dispatch, error));
