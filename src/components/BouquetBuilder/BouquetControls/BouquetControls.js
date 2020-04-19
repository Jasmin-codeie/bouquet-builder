import React from "react";
import classes from "./BouquetControls.module.css";
import BouquetControl from "./BouquetControl/BouquetControl";

const CONTROLS = [
  { label: "Roses", type: "roses" },
  { label: "Jasmine", type: "jasmine" },
  { label: "Daisies", type: "daisies" },
  { label: "Lilies", type: "lilies" },
  { label: "Irises", type: "irises" },
  { label: "Lilies Of The Valley", type: "liliesOfTheValley" },
];

export default ({ canOrder, flowers, addFlowers, removeFlowers }) => {
  const controlsOutput = CONTROLS.map((control) => (
    <BouquetControl
      key={control.type}
      control={control}
      addFlowers={addFlowers}
      removeFlowers={removeFlowers}
      disabled={flowers[control.type] === 0}
    />
  ));

  return (
    <div className={classes.BouquetControls}>
      {controlsOutput}
      <button disabled={!canOrder} className={classes.orderButton}>
        Order
      </button>
    </div>
  );
};