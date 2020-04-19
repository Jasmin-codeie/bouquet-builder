import React, { useState } from "react";
import Bouquet from "../../components/BouquetBuilder/Bouquet/Bouquet";
import classes from "./BouquetBuilder.module.css";
import BouquetControls from "../../components/BouquetBuilder/BouquetControls/BouquetControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/BouquetBuilder/OrderSummary/OrderSummary";

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
  const [isOrdering, setIsOrdering] = useState(false);

  function checkCanOrder(flowers) {
    const total = Object.keys(flowers).reduce((total, flower) => {
      return total + flowers[flower];
    }, 0);
    setCanOrder(total > 0);
  }

  function startOrder() {
    setIsOrdering(true);
  }

  function cancelOrder() {
    setIsOrdering(false);
  }

  function finishOrder() {
    alert("Are you sure?");
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
        startOrder={startOrder}
        canOrder={canOrder}
        flowers={flowers}
        addFlowers={addFlowers}
        removeFlowers={removeFlowers}
      />
      <Modal show={isOrdering} hideCallBack={cancelOrder}>
        <OrderSummary
          cancelOrder={cancelOrder}
          finishOrder={finishOrder}
          flowers={flowers}
        />
      </Modal>
    </div>
  );
};
