import React, { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

//pages
import Home from "./container/Home";

function App() {
  return (
    <Suspense fallback={""}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<h2>Game</h2>} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
