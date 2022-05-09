import React, { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

//pages
import Home from "./container/Home";
import GamePage from "./container/GamePage";

function App() {
  return (
    <Suspense fallback={""}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<GamePage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
