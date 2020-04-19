import React from "react";
import classes from "./OrderSummary.module.css";

const LABELS = {
  roses: "Roses",
  jasmine: "Jasmine",
  daisies: "Daisies",
  lilies: "Lilies",
  irises: "Irises",
  liliesOfTheValley: "Lilies Of The Valley",
};

export default ({ flowers }) => {
  const flowersOutput = Object.keys(flowers)
    .filter((flower) => flowers[flower] > 0)
    .map((flower) => (
      <li>
        {LABELS[flower]}: {flowers[flower]}{" "}
      </li>
    ));

  return (
    <div className={classes.OrderSummary}>
      <h2>Your order</h2>
      <p>Congratulations!</p>
      <ul>{flowersOutput}</ul>
    </div>
  );
};
