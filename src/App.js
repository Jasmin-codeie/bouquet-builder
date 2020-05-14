import React from "react";
import "./App.css";
import BouquetBuilder from "./containers/BouquetBuilder/BouquetBuilder";
import Layout from "./containers/Layout/Layout";
import Checkout from "./containers/Checkout/Checkout";

function App() {
  return (
    <div className="App">
      <Layout>
        <BouquetBuilder />
        <Checkout />
      </Layout>
    </div>
  );
}

export default App;
