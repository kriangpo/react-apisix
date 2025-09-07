// src/components/CallbackHandler.js
import React, { useEffect } from 'react';
import { userManager } from '../services/auth';
import { useNavigate } from 'react-router-dom';

const CallbackHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    userManager.signinRedirectCallback().then(user => {
      // Callback สำเร็จ, Redirect ไปหน้าหลัก
      console.log("User signed in:", user);
      navigate('/');
    }).catch(error => {
      console.error("Callback failed:", error);
      navigate('/login');
    });
  }, []);

  return <div>Processing login...</div>;
};

export default CallbackHandler;