import React from "react";
import withAxios from "../../hoc/withAxios/withAxios";
import axios from "axios";
import classes from "./Autho.module.css";
import Button from "../UI/Button/Button";
import { start, autho } from "../../store/actions/autho";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../UI/Spinner/Spinner";

export default withAxios(() => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.autho);

  const formSubmitted = (event) => {
    start(dispatch);

    const data = new FormData(event.target);
    autho(dispatch, data.get("email"), data.get("password"));

    event.preventDefault();
  };

  let formOutput = <Spinner />;
  if (!loading) {
    formOutput = (
      <form onSubmit={formSubmitted}>
        <h1>Welcome!</h1>
        <input type="email" placeholder="Email" name="email" required />
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
          minLength="7"
        />
        <Button green>Submit</Button>
      </form>
    );
  }

  return <div className={classes.Autho}>{formOutput}</div>;
}, axios);
