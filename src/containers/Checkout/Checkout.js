import React from "react";
import classes from "./Checkout.module.css";
import CheckoutSummary from "../../components/Checkout/CheckoutSummary/CheckoutSummary";
import { useHistory, useLocation, Route } from "react-router-dom";

export default () => {
  const history = useHistory();
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  let price = 0;
  let flowers = {};
  query.forEach((value, key) => {
    if (key === "price") {
      price = +value;
    } else {
      flowers[key] = +value;
    }
  });

  function checkoutCancel() {
    history.push("/builder");
  }

  function checkoutContinue() {
    history.push("/checkout/contacts");
  }
  return (
    <div className={classes.Checkout}>
      <CheckoutSummary
        flowers={flowers}
        price={price}
        checkoutCancel={checkoutCancel}
        checkoutContinue={checkoutContinue}
      />
      <Route path="/checkout/contacts"></Route>
    </div>
  );
};
