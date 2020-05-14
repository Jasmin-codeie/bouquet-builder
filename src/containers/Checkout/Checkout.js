import React from "react";
import classes from "./Checkout.module.css";
import CheckoutSummary from "../../components/Checkout/CheckoutSummary/CheckoutSummary";

export default () => {
  const flowers = {};
  const price = 123;
  return (
    <div className={classes.Checkout}>
      <CheckoutSummary />
    </div>
  );
};
