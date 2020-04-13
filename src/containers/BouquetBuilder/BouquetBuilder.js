import React, { useState } from "react";
import Bouquet from "../../components/BouquetBuilder/Bouquet/Bouquet";
import classes from "./BouquetBuilder.module.css";
import BouquetControls from "../../components/BouquetBuilder/BouquetControls/BouquetControls";

const PRICES = {
    roses: 7,
    tulips: 10,
    daisies: 8,
    lilies: 11,
    irises: 15,
    chrysanthemums: 12,
};

export default () => {
  const [flowers, setFlowers] = useState({
    roses: 0,
    tulips: 0,
    daisies: 0,
    lilies: 0,
    irises: 0,
    chrysanthemums: 0,
  });
  const [price, setPrice] = useState(80);

  function addFlowers(type) {
    const newFlowers = { ...flowers };
    newFlowers[type]++;
    setFlowers(newFlowers);

    const newPrice = price + PRICES[type];
    setPrice(newPrice);
  }

  function removeFlowers(type) {
    if (flowers[type] >= 1) {
      const newFlowers = { ...flowers };
      newFlowers[type]--;
      setFlowers(newFlowers);

      const newPrice = price - PRICES[type];
      setPrice(newPrice);
    }
  }

  return (
    <div className={classes.BouquetBuilder}>
      <Bouquet price={price} flowers={flowers} />
      <BouquetControls
        flowers={flowers}
        addFlowers={addFlowers}
        removeFlowers={removeFlowers}
      />
    </div>
  );
};