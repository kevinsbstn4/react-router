import React from "react";
import Navbar from "../src/components/common/Navbar";
import "./App.css";
import { Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/home/AboutPage";
import CarsPage from "./components/cars/CarsPage";
import ProductPage from "./components/product/ProductPage";
import PricePage from "./components/price/PricePage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/cars" component={CarsPage} />
      <Route path="/product" component={ProductPage} />
      <Route path="/price" component={PricePage} />
    </div>
  );
}

export default App;
