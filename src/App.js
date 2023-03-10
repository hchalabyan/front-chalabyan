import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Slider from "./components/slider/slider";
import Home from "./components/home/home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/slider" element={<Slider />} />
      </Routes>
    </div>
  );
}

export default App;
