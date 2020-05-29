import React from "react";
import Flower from "./Flower/Flower";
import classes from "./Bouquet.module.css";

export default ({ price, flowers }) => {
  let flowersOutput = [];

  Object.keys(flowers).forEach((flower) => {
    for (let i = 0; i < flowers[flower].quantity; i++) {
      flowersOutput.push(<Flower key={flower + i} type={flower} />);
    }
  });

  return (
    <div className={classes.Bouquet}>
      <div className={classes.bento}>
        <div className={classes.flowerBento}>{flowersOutput}</div>
      </div>
      <div className={classes.price}> {price} som</div>
    </div>
  );
};
