import React from "react";
import classes from "./BouquetControls.module.css";
import BouquetControl from "./BouquetControl/BouquetControl";
import Button from "../../UI/Button/Button";

const CONTROLS = [
  { label: "Roses", type: "roses" },
  { label: "Jasmine", type: "jasmine" },
  { label: "Daisies", type: "daisies" },
  { label: "Lilies", type: "lilies" },
  { label: "Irises", type: "irises" },
  { label: "Lilies Of The Valley", type: "liliesOfTheValley" },
];

export default ({ canOrder, flowers, startOrder }) => {
  const controlsOutput = CONTROLS.map((control) => (
    <BouquetControl
      key={control.type}
      control={control}
      disabled={flowers[control.type] === 0}
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
