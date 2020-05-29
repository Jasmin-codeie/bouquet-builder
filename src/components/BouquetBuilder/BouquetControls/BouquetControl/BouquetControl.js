import React from "react";
import classes from "./BouquetControl.module.css";
import { useDispatch } from "react-redux";

export default ({ control, disabled }) => {
  const dispatch = useDispatch();
  return (
    <div className={classes.BouquetControl}>
      <button
        className={classes.less}
        onClick={() => remove(dispatch, control.type)}
        disabled={disabled}
      >
        -
      </button>
      <span className={classes.label}>{control.label}</span>
      <button
        className={classes.more}
        onClick={() => add(dispatch, control.type)}
      >
        +
      </button>
    </div>
  );
};
