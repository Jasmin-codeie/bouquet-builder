import React from "react";
import classes from "./OrderSummary.module.css";
import Button from "../../UI/Button/Button";

export default ({ flowers, cancelOrder, finishOrder, price }) => {
  const flowersOutput = Object.keys(flowers)
    .filter((flower) => flowers[flower].quantity > 0)
    .map((flower) => (
      <li key={flowers}>
        {flowers[flower].label}: {flowers[flower].quantity}
      </li>
    ));

  return (
    <div className={classes.OrderSummary}>
      <h2>Congratulations! </h2>
      <p>Here is the composition of your bouquet:</p>
      <ul>{flowersOutput}</ul>
      <p>Total price: {price} som.</p>
      <p>Would you like to checkout? </p>
      <Button click={finishOrder} green>
        Checkout
      </Button>
      <Button click={cancelOrder} red>
        Cancel
      </Button>
    </div>
  );
};
