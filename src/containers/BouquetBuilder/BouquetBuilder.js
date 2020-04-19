import React, { useState } from "react";
import Bouquet from "../../components/BouquetBuilder/Bouquet/Bouquet";
import classes from "./BouquetBuilder.module.css";
import BouquetControls from "../../components/BouquetBuilder/BouquetControls/BouquetControls";

const PRICES = {
  roses: 7,
  jasmine: 10,
  daisies: 8,
  lilies: 11,
  irises: 15,
  liliesOfTheValley: 12,
};

export default () => {
  const [flowers, setFlowers] = useState({
    roses: 0,
    jasmine: 0,
    daisies: 0,
    lilies: 0,
    irises: 0,
    liliesOfTheValley: 0,
  });
  const [price, setPrice] = useState(80);
  const [canOrder, setCanOrder] = useState(false);

  function checkCanOrder(flowers) {
    const total = Object.keys(flowers).reduce((total, flower)=> {
      return total + flowers[flower];
    }, 0);
    setCanOrder(total > 0);
  }

  function addFlowers(type) {
    const newFlowers = { ...flowers };
    newFlowers[type]++;
    setFlowers(newFlowers);
    checkCanOrder(newFlowers);

    const newPrice = price + PRICES[type];
    setPrice(newPrice);
   
  }

  function removeFlowers(type) {
    if (flowers[type] >= 1) {
      const newFlowers = { ...flowers };
      newFlowers[type]--;
      setFlowers(newFlowers);
      checkCanOrder(newFlowers);

      const newPrice = price - PRICES[type];
      setPrice(newPrice);
      
    }
  }

  return (
    <div className={classes.BouquetBuilder}>
      <Bouquet price={price} flowers={flowers} />
      <BouquetControls
        canOrder={canOrder}
        flowers={flowers}
        addFlowers={addFlowers}
        removeFlowers={removeFlowers}
      />
    </div>
  );
};