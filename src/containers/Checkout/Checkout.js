import React, { useState } from "react";
import { useHistory, Route, Redirect } from "react-router-dom";
import axios from "../../axios";
import CheckoutSummary from "../../components/Checkout/CheckoutSummary/CheckoutSummary";
import classes from "./Checkout.module.css";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import withErrorHandler from "../../hoc/withErrorHadler/withErrorHadler";
import Spinner from "../../components/UI/Spinner/Spinner";
import { useSelector } from "react-redux";

export default withErrorHandler(() => {
  const history = useHistory();
  const { flowers, price } = useSelector((state) => state.builder);
  const [loading, setLoading] = useState(false);

  function checkoutCancel() {
    history.push("/builder");
  }

  function checkoutContinue() {
    history.push("/checkout/form");
  }

  function checkoutFinish(data) {
    setLoading(true);
    axios
      .post("/orders.json", {
        flowers,
        price,
        details: data,
      })
      .then((response) => {
        setLoading(false);
        history.replace("/");
      });
  }

  let formOutput = <Spinner />;
  if (!loading) {
    formOutput = <CheckoutForm checkoutFinish={checkoutFinish} />;
  }

  let summaryOutput = <Redirect to="/" />;
  if (flowers) {
    summaryOutput = (
      <CheckoutSummary
        flowers={flowers}
        price={price}
        checkoutCancel={checkoutCancel}
        checkoutContinue={checkoutContinue}
      />
    );
  }

  return (
    <div className={classes.Checkout}>
      {summaryOutput}
      <Route path="/checkout/form">{formOutput}</Route>
    </div>
  );
}, axios);
