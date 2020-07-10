import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import HomePage from "./pages/homepage/Homepage.component";
import ShopPage from "./pages/shop/Shop.component";

function App() {
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={ShopPage} />
    </>
  );
}

export default App;
