import React from "react";
import NavItem from "./NavItem/NavItem";
import classes from "./Nav.module.css";
import { useSelector } from "react-redux";

export default () => {
  const isAuthenticated = useSelector((state) => state.autho.token != null);
  return (
    <ul className={classes.Nav}>
      <NavItem url="/builder">Bouquet Builder</NavItem>
      {isAuthenticated ? <NavItem url="/orders">Orders</NavItem> : null}
      {!isAuthenticated ? <NavItem url="/autho">Authentication</NavItem> : null}
      {isAuthenticated ? <NavItem url="/logout">Logout</NavItem> : null}
    </ul>
  );
};
