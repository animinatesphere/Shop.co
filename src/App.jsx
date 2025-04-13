import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import ProductDetail from "./Productdetails/ProductDetail";
import NewArrivalsViewMore from "./newarrival/NewArrivalsViewMore";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/more-new-arrival" element={<NewArrivalsViewMore />} />
      </Routes>
    </>
  );
};

export default App;
