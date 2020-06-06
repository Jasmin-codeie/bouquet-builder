import React, { useState } from "react";
import axios from "axios";
import { start, autho } from "../../store/actions/autho";
import withAxios from "../../hoc/withAxios/withAxios";
import classes from "./Autho.module.css";
import Button from "../UI/Button/Button";
import Spinner from "../UI/Spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";

export default withAxios(() => {
  const dispatch = useDispatch();
  const [method, setMethod] = useState(null);
  const { loading, error } = useSelector((state) => state.autho);

  const formSubmitted = (event) => {
    start(dispatch);
    const data = new FormData(event.target);
    autho(dispatch, method, data.get("email"), data.get("password"));
    event.preventDefault();
  };

  let formOutput = <Spinner />;
  if (!loading) {
    formOutput = (
      <form onSubmit={formSubmitted}>
        <h1>Welcome</h1>
        <input type="email" placeholder="E-mail" name="email" required />
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
          minLength="7"
        />
        <Button click={() => setMethod("signin")} green>
          Sign in
        </Button>
        <Button click={() => setMethod("signup")} red>
          Sign up
        </Button>
      </form>
    );
  }

  let errorOutput = null;
  if (error) {
    errorOutput = <h4 className={classes.error}>{error.message}</h4>;
  }

  return (
    <div className={classes.Autho}>
      {errorOutput}
      {formOutput}
    </div>
  );
}, axios);
