import React from "react";
import classes from "./CheckoutSummary.module.css";
import Button from "../../UI/Button/Button";
import Bouquet from "../../BouquetBuilder/Bouquet/Bouquet";

export default ({ price, flowers }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <Bouquet price={price} flowers={flowers} />
      <Button green>Continue</Button>
      <Button red>Cancel</Button>
    </div>
  );
};
