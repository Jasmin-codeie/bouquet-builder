import React from "react";
import withAxios from "../../hoc/withAxios/withAxios";
import axios from "axios";
import classes from "./Autho.module.css";
import Button from "../UI/Button/Button";

export default withAxios(() => {
  return (
    <div className={classes.Autho}>
      <form>
        <h1>Sign up</h1>
        <input type="text" placeholder="Email" name="email" required />
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
