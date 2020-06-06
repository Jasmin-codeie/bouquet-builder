import { AUTHO_FAIL, AUTHO_SUCCESS, AUTHO_START } from "./types";
import axios from "axios";

export const start = (dispatch, data) =>
  dispatch({
    type: AUTHO_START,
    data,
  });

export const success = (dispatch, { idToken, localId }) =>
  dispatch({
    type: AUTHO_SUCCESS,
    id: idToken,
    token: localId,
  });

export const fail = (dispatch, error) =>
  dispatch({
    type: AUTHO_FAIL,
    error,
  });

export const autho = (dispatch, email, password) =>
  axios
    .post(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDkDT_-Dt86HpTEcN9TAZUNTyNVQVrKr5g",
      { email, password }
    )
    .then(({ data }) => success(dispatch, data))
    .catch((error) => fail(dispatch, error));
