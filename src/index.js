import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./firebase/firebaseInit";
import reportWebVitals from "./reportWebVitals";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
window.Kakao.init(process.env.REACT_APP_KAKAO_API);
window.Kakao.isInitialized();

root.render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
reportWebVitals();
