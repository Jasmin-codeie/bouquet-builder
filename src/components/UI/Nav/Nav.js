import React from "react";
import NavItem from "./NavItem/NavItem";
import classes from "./Nav.module.css";

export default () => (
  <ul className={classes.Nav}>
    <NavItem url="/builder">Bouquet Builder</NavItem>
    <NavItem url="/orders">Orders</NavItem>
    <NavItem url="/autho">Authentication</NavItem>
  </ul>
);
