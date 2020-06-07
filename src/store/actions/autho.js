import { AUTHO_FAIL, AUTHO_SUCCESS, AUTHO_START, AUTHO_LOGOUT } from "./types";
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

export const logout = (dispatch) =>
  dispatch({
    type: AUTHO_LOGOUT,
  });

export const timeout = (dispatch, seconds) =>
  setTimeout(() => logout(dispatch), seconds * 1000);

const key = "AIzaSyDkDT_-Dt86HpTEcN9TAZUNTyNVQVrKr5g";
const signInUrl =
  "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
  key;
const signUpUrl =
  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + key;
export const autho = (dispatch, method, email, password) =>
  axios
    .post(method === "signin" ? signInUrl : signUpUrl, {
      email,
      password,
      returnSecureToken: true,
    })
    .then(({ data }) => {
      success(dispatch, data);
      timeout(dispatch, +data.expiresIn);
    })
    .catch((error) => fail(dispatch, error));
