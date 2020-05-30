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
  const flowersOutput = Object.keys(flowers).map((flower) => (
    <span key={flower} className={classes.flower}>
      {flowers[flower].label}({flowers[flower].quantity})
    </span>
  ));

  const detailsOutput = (
    <div className={classes.details}>
      {details
        ? details.name +
          ", " +
          details.phone +
          ", " +
          details.city +
          ", " +
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
