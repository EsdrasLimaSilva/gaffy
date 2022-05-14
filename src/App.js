import React, { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "core-js/stable";
import "regenerator-runtime";

//pages
const Home = React.lazy(() => import("./container/Home"));
const GamePage = React.lazy(() => import("./container/GamePage"));

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={""}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<GamePage />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </Provider>
  );
}

export default App;
