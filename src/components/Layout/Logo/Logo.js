import React from "react";
import logo from "../../../assets/logo.jpg";
import classes from "./Logo.module.css";

export default () => (
  <div className={classes.Logo}>
    <img src={logo} />
    <span>Bouquet Builder</span>
  </div>
);
