import React from "react";
import classes from "./BouquetControls.module.css";
import BouquetControl from "./BouquetControl/BouquetControl";
import Button from "../../UI/Button/Button";

export default ({ canOrder, flowers, startOrder }) => {
  const controlsOutput = Object.keys(flowers).map((flower) => (
    <BouquetControl
      key={flower}
      flower={flower}
      label={flowers[flower].label}
      disabled={flowers[flower].quantity === 0}
    />
  ));

  return (
    <div className={classes.BouquetControls}>
      {controlsOutput}
      <Button click={startOrder} enabled={canOrder}>
        Order
      </Button>
    </div>
  );
};
