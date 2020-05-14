import React from "react";
import classes from "./CheckoutSummary.module.css";
import Bouquet from "../../BouquetBuilder/Bouquet/Bouquet";

export default () => {
  return (
    <div className={classes.CheckoutSummary}>
      <Bouquet />
    </div>
  );
};
