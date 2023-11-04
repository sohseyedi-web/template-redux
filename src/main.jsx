import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ExamProvider from "./context/ExamProvider.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ExamProvider>
      <App />
    </ExamProvider>
  </React.StrictMode>
);
