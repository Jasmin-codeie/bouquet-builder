import React from "react";
import classes from "./Checkout.module.css";
import CheckoutSummary from "../../components/Checkout/CheckoutSummary/CheckoutSummary";

export default () => {
  const flowers = {
    roses: 1,
    jasmine: 1,
    daisies: 1,
    lilies: 1,
    irises: 1,
    liliesOfTheValley: 1,
  };
  const price = 123;
  return (
    <div className={classes.Checkout}>
      <CheckoutSummary flowers={flowers} price={price} />
    </div>
  );
};
