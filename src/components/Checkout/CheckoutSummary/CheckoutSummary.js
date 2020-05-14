import React from "react";
import classes from "./CheckoutSummary.module.css";
import Button from "../../UI/Button/Button";
import Bouquet from "../../BouquetBuilder/Bouquet/Bouquet";
import { Route } from "react-router-dom";

export default ({ price, flowers, checkoutCancel, checkoutContinue }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <Bouquet price={price} flowers={flowers} />

      <Route path="/checkout" exact>
        <Button click={checkoutCancel} red>
          Cancel
        </Button>
        <Button click={checkoutContinue} green>
          Continue
        </Button>
      </Route>
    </div>
  );
};
