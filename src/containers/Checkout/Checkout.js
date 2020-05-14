import React from "react";
import classes from "./Checkout.module.css";
import CheckoutSummary from "../../components/Checkout/CheckoutSummary/CheckoutSummary";
import { useHistory } from "react-router-dom";

export default () => {
  const history = useHistory();
  const flowers = {
    roses: 1,
    jasmine: 1,
    daisies: 1,
    lilies: 1,
    irises: 1,
    liliesOfTheValley: 1,
  };
  const price = 123;

  function checkoutCancel() {
    history.push("/builder");
  }

  function checkoutContinue() {
    history.push("/checkout/finish");
  }
  return (
    <div className={classes.Checkout}>
      <CheckoutSummary
        flowers={flowers}
        price={price}
        checkoutCancel={checkoutCancel}
        checkoutContinue={checkoutContinue}
      />
    </div>
  );
};
