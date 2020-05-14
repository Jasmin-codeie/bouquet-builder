import React from "react";
import classes from "./OrderSummary.module.css";
import Button from "../../UI/Button/Button";

const LABELS = {
  roses: "Roses",
  jasmine: "Jasmine",
  daisies: "Daisies",
  lilies: "Lilies",
  irises: "Irises",
  liliesOfTheValley: "Lilies Of The Valley",
};

export default ({ flowers, cancelOrder, finishOrder, price }) => {
  const flowersOutput = Object.keys(flowers)
    .filter((flower) => flowers[flower] > 0)
    .map((flower) => (
      <li key={flowers}>
        {LABELS[flower]}: {flowers[flower]}{" "}
      </li>
    ));

  return (
    <div className={classes.OrderSummary}>
      <h2>Congratulations! </h2>
      <p>Here is the composition of your bouquet:</p>
      <ul>{flowersOutput}</ul>
      <p>Total price: {price} som.</p>
      <p>Would you like to checkout? </p>
      <Button green click={finishOrder}>
        Checkout
      </Button>
      <Button red click={cancelOrder}>
        Cancel
      </Button>
    </div>
  );
};
