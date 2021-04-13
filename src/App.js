import React, { useReducer } from "react";
import "./App.css";
import Product from "./Product";
import "bootstrap/dist/css/bootstrap.min.css";
import data from './MOCK_DATA.json';
function App() {
 
 
  return (
    <div>
        <h1>Products</h1>
        <Product list={data}></Product>
    </div>
  );
}

export default App;
