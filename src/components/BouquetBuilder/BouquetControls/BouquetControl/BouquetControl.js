import React from "react";
import classes from "./BouquetControl.module.css";
import { useDispatch } from "react-redux";
import { ADD_FLOWERS, REMOVE_FLOWERS } from "../../../../store/actions/types";

export default ({ control, disabled }) => {
  const dispatch = useDispatch();
  return (
    <div className={classes.BouquetControl}>
      <button
        className={classes.less}
        onClick={() => dispatch({ type: REMOVE_FLOWERS, flower: control.type })}
        disabled={disabled}
      >
        -
      </button>
      <span className={classes.label}>{control.label}</span>
      <button
        className={classes.more}
        onClick={() => dispatch({ type: ADD_FLOWERS, flower: control.type })}
      >
        +
      </button>
    </div>
  );
};
