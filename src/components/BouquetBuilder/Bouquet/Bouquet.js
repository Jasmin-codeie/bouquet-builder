import React from "react";
import Sushi from "./Flower/Flower";
import classes from "./Bouquet.module.css";

export default ({ price, flowers }) => {
  let flowersOutput = [];

  Object.keys(
      flowers).forEach((type) => {
    for (let i = 0; i < flowers[type]; i++) {
      flowersOutput.push(<Flower key={type + i} type={type} />);
    }
  });

  return (
    <div className={classes.Bouquet}>
      <div className={classes.bento}>{flowersOutput}</div>
      <div className={classes.price}>Total price: {price} som</div>
    </div>
  );
};