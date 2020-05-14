import React from "react";
import "./App.css";
import BouquetBuilder from "./containers/BouquetBuilder/BouquetBuilder";
import Layout from "./containers/Layout/Layout";
import Checkout from "./containers/Checkout/Checkout";
import { Route, Switch, Redirect } from "react-router-dom";

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
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
