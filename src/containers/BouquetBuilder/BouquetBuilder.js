import React, { useState } from "react";
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
  const history = useHistory();
  const [isOrdering, setIsOrdering] = useState(false);

  const canOrder = Object.values(flowers).reduce((canOrder, number) => {
    return !canOrder ? number > 0 : canOrder;
  }, false);

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
          startOrder={() => setIsOrdering(true)}
          canOrder={canOrder}
          flowers={flowers}
        />
      </>
    );
  }
  let orderSummary = <Spinner />;
  if (isOrdering) {
    orderSummary = (
      <OrderSummary
        cancelOrder={() => setIsOrdering(false)}
        finishOrder={() => history.push("/checkout")}
        flowers={flowers}
        price={price}
      />
    );
  }

  return (
    <div className={classes.BouquetBuilder}>
      {output}
      <Modal show={isOrdering} hideCallBack={() => setIsOrdering(false)}>
        {orderSummary}
      </Modal>
    </div>
  );
}, axios);
