import React, { useState, useEffect } from 'react';
import { getUser, logout } from '../services/auth';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const [user, setUser] = useState(null);
  const [apiData, setApiData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const loggedInUser = await getUser();
      if (loggedInUser) {
        setUser(loggedInUser);
        fetchProtectedData(loggedInUser.access_token);
      } else {
        // ไม่มีผู้ใช้, Redirect ไปหน้า Login
        navigate('/login');
      }
    };
    checkUser();
  }, [navigate]);

  const fetchProtectedData = async (token) => {
    try {
      const response = await fetch('https://docker2.devops.esc.yipintsoigroup.com/api', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.status === 401) {
        // Token หมดอายุ, Logout และ Redirect
        await logout();
        navigate('/login');
        return;
      }
      const data = await response.json();
      setApiData(data);
    } catch (error) {
      console.error("Failed to fetch protected data:", error);
    }
  };

  const handleLogout = () => {
    logout();
  };

  if (!user) {
    return <div>Loading...</div>; // หรือ Redirect ไปหน้า Login
  }

  return (
    <div>
      <h2>ยินดีต้อนรับ, {user.profile.name}</h2>
      <button onClick={handleLogout}>Logout</button>
      <hr />
      <h3>ข้อมูลจาก Protected API</h3>
      {apiData ? (
        <pre>{JSON.stringify(apiData, null, 2)}</pre>
      ) : (
        <p>กำลังโหลดข้อมูล...</p>
      )}
    </div>
  );
};

export default Index;