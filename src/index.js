import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { apiManagement } from "./apiManagement/apiManagement";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ApiProvider api={apiManagement}>
      <App />
    </ApiProvider>
  </>
);
