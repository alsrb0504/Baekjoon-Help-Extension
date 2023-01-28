import React from "react";
import ReactDOM from "react-dom/client";
import Popup from "./popup";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
