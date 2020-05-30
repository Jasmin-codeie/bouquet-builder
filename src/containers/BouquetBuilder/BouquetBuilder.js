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
import { useSelector, useDispatch } from "react-redux";
import { load } from "../../store/actions/builder";

export default withErrorHandler(() => {
  const { flowers, price } = useSelector((state) => state);
  const history = useHistory();
  const [isOrdering, setIsOrdering] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    load(dispatch);
  }, [dispatch]);

  let output = <Spinner />;
  if (flowers) {
    const canOrder = Object.values(flowers).reduce((canOrder, flower) => {
      return !canOrder ? flower.quantity > 0 : canOrder;
    }, false);

    output = (
      <>
        <Bouquet price={price} flowers={flowers} />
        <BouquetControls
          startOrder={() => setIsOrdering(true)}
          canOrder={canOrder}
          flowers={flowers}
        />
        <Modal show={isOrdering} hideCallback={() => setIsOrdering(false)}>
          <OrderSummary
            flowers={flowers}
            finishOrder={() => history.push("/checkout")}
            cancelOrder={() => setIsOrdering(false)}
            price={price}
          />
        </Modal>
      </>
    );
  }
  return <div className={classes.BouquetBuilder}>{output}</div>;
}, axios);
