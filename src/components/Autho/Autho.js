import React from "react";
import withAxios from "../../hoc/withAxios/withAxios";
import axios from "axios";
import classes from "./Autho.module.css";
import Button from "../UI/Button/Button";
import { start, autho } from "../../store/actions/autho";
import { useDispatch } from "react-redux";

export default withAxios(() => {
  const dispatch = useDispatch();

  const formSubmitted = (event) => {
    start(dispatch);

    const data = new FormData(event.target);
    autho(dispatch, data.get("email"), data.get("password"));

    event.preventDefault();
  };

  return (
    <div className={classes.Autho}>
      <form onSubmit={formSubmitted}>
        <h1>Sign up</h1>
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
    </div>
  );
}, axios);
