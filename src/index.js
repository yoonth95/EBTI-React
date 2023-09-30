import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById('root'));

window.Kakao.init(process.env.REACT_APP_KAKAO_API);
window.Kakao.isInitialized();

root.render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
reportWebVitals();
