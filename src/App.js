import React from 'react';
import './App.css';
import BouquetBuilder from './containers/BouquetBuilder/BouquetBuilder';

function App() {
  return (
    <div className="App">
      <Layout>
        <BouquetBuilder />
      </Layout>
    </div>
  );
}

export default App;
