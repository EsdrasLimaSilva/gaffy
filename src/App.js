import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

//pages
import Home from "./container/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<h2>Game</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
