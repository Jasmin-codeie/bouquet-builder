import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import BouquetBuilder from "./containers/BouquetBuilder/BouquetBuilder";
import Checkout from "./components/Checkout/Checkout";
import Orders from "./components/Order/Orders";
import Autho from "./components/Autho/Autho";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/builder" />
          </Route>
          <Route path="/builder">
            <BouquetBuilder />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/autho">
            <Autho />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
