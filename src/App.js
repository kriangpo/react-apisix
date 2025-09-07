import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Index from './components/Index';
import Login from './components/Login';
import CallbackHandler from './components/CallbackHandler';

const App = () => {
  return (
    <BrowserRouter>
      <nav style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
        <Link to="/react-apisix/">หน้าหลัก</Link> | <Link to="/react-apisix/login">ล็อกอิน</Link>
      </nav>
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/react-apisix" element={<Index />} />
          <Route path="/react-apisix/login" element={<Login />} />
          <Route path="/react-apisix/callback" element={<CallbackHandler />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;