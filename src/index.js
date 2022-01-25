import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import LoadingPage from "./pages/LoadingPage";
const App = lazy(() => import("./App"));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<LoadingPage />}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
