import React, { useEffect } from "react";
import axios from "../../axios";
import classes from "./Orders.module.css";
import Order from "../../components/Order/Order";
import withErrorHandler from "../../hoc/withErrorHadler/withErrorHadler";
import Spinner from "../../components/UI/Spinner/Spinner";
import { load } from "../../store/actions/orders";
import { useDispatch, useSelector } from "react-redux";

export default withErrorHandler(() => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.orders);

  useEffect(() => {
    load(dispatch);
  }, [dispatch]);

  let ordersOutput = <Spinner />;
  if (orders) {
    ordersOutput = Object.keys(orders).map((id) => (
      <Order key={id} {...orders[id]} />
    ));
  }
  if (orders === null) {
    ordersOutput = <h3>No orders found...</h3>;
  }

  return (
    <div className={classes.Orders}>
      <h1>Orders</h1>
      {ordersOutput}
    </div>
  );
}, axios);
