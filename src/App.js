import React from "react";
import Navbar from "../src/components/common/Navbar";
import "./App.css";
import { Switch } from "@material-ui/core";
import { Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/home/AboutPage";
import CarsPage from "./components/cars/CarsPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/cars" component={CarsPage} />
    </div>
  );
}

export default App;
