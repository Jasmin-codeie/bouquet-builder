import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../UI/Logo/Logo";
import Navigation from "./Navigation/Navigation";

export default () => (
  <div className={classes.Toolbar}>
    <Logo />
    <nav>
      <Navigation />
    </nav>
  </div>
);

//let className = [classes.Toolbar, classes.Red.join(' ')];
