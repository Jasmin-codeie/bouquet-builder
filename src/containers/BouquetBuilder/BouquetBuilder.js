import React, { useState, useEffect } from "react";
import Bouquet from "../../components/BouquetBuilder/Bouquet/Bouquet";
import classes from "./BouquetBuilder.module.css";
import BouquetControls from "../../components/BouquetBuilder/BouquetControls/BouquetControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/BouquetBuilder/OrderSummary/OrderSummary";
import axios from "../../axios";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHadler/withErrorHadler";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export default withErrorHandler(() => {
  const { flowers, price } = useSelector((state) => state);
  const [canOrder, setCanOrder] = useState(false);
  const [isOrdering, setIsOrdering] = useState(false);
  const history = useHistory();

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
    const queryParams = Object.keys(flowers).map(
      (flower) =>
        encodeURIComponent(flower) + "=" + encodeURIComponent(flowers[flower])
    );
    queryParams.push("price=" + encodeURIComponent(price));

    history.push({
      pathname: "/checkout",
      search: queryParams.join("&"),
    });
  }

  function addFlowers(type) {
    const newFlowers = { ...flowers };
    newFlowers[type]++;
    //setFlowers(newFlowers);
    checkCanOrder(newFlowers);

    //const newPrice = price + PRICES[type];
    //setPrice(newPrice);
  }

  function removeFlowers(type) {
    if (flowers[type] >= 1) {
      const newFlowers = { ...flowers };
      newFlowers[type]--;
      //setFlowers(newFlowers);
      checkCanOrder(newFlowers);

      //const newPrice = price - PRICES[type];
      //setPrice(newPrice);
    }
  }
  /*
  useEffect(() => {
    axios
      .get("/flowers.json")
      .then((response) => setFlowers(response.data))
      .catch((error) => {});
  }, []);
*/
  let output = <Spinner />;
  if (flowers) {
    output = (
      <>
        <Bouquet price={price} flowers={flowers} />
        <BouquetControls
          startOrder={startOrder}
          canOrder={canOrder}
          flowers={flowers}
          addFlowers={addFlowers}
          removeFlowers={removeFlowers}
        />
      </>
    );
  }
  let orderSummary = <Spinner />;
  if (isOrdering) {
    orderSummary = (
      <OrderSummary
        cancelOrder={cancelOrder}
        finishOrder={finishOrder}
        flowers={flowers}
        price={price}
      />
    );
  }

  return (
    <div className={classes.BouquetBuilder}>
      {output}
      <Modal show={isOrdering} hideCallBack={cancelOrder}>
        {orderSummary}
      </Modal>
    </div>
  );
}, axios);
