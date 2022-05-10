import React, { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

//pages
const Home = React.lazy(() => import("./container/Home"));
const GamePage = React.lazy(() => import("./container/GamePage"));

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
