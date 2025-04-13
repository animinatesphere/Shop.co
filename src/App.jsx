import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import ProductDetail from "./Productdetails/ProductDetail";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
};

export default App;
