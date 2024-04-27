import { Component } from "react";
import Navbar from "./Navbar";
import About from "./About";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Funds from "./Funds";

import Home from "./Home";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
