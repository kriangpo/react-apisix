// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/react-apisix/" element={<App />} />
        <Route path="/react-apisix/callback" element={<App />} /> {/* เพิ่ม route นี้ */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);