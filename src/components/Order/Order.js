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
    <span className={classes.flower}>
      {CONTROLS[key]}({flowers[key]})
    </span>
  ));
  return (
    <div className={classes.Order}>
      <div className={classes.details}>
        {details.name}, {details.phone}, {details.city}, {details.address}
      </div>
      <div className={classes.price}>{price} som</div>
      <div className={classes.flowers}>{flowersOutput}</div>
    </div>
  );
};