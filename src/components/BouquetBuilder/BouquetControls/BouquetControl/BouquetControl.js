import React from "react";
import classes from "./BouquetControl.module.css";
import { useDispatch } from "react-redux";
import { remove, add } from "../../../../store/actions/builder";

export default ({ label, flower, disabled }) => {
  const dispatch = useDispatch();
  return (
    <div className={classes.BouquetControl}>
      <button
        className={classes.less}
        onClick={() => remove(dispatch, flower)}
        disabled={disabled}
      >
        -
      </button>
      <span className={classes.label}>{label}</span>
      <button className={classes.more} onClick={() => add(dispatch, flower)}>
        +
      </button>
    </div>
  );
};
