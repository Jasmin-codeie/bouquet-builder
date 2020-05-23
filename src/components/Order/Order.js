import React from "react";
import classes from "./Order.module.css";

const CONTROLS = {
  roses: "Roses",
  jasmine: "Jasmine",
  daisies: "Daisies",
  lilies: "Lilies",
  irises: "Irises",
  liliesOfTheValley: "Lilies Of The Valley",
};
export default ({ price, flowers, details }) => {
  const flowersOutput = Object.keys(flowers).map((key) => (
    <span key={key} className={classes.flower}>
      {CONTROLS[key]}({flowers[key]})
    </span>
  ));

  const detailsOutput = (
    <div className={classes.details}>
      {details
        ? details.name +
          "," +
          details.phone +
          "," +
          details.city +
          "," +
          details.address
        : "No details available!"}
    </div>
  );

  return (
    <div className={classes.Order}>
      {detailsOutput}
      <div className={classes.price}>{price} som</div>
      <div className={classes.flowers}>{flowersOutput}</div>
    </div>
  );
};
