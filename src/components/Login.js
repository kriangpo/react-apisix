import React, { useEffect, useState } from 'react';
import { login, getUser } from '../services/auth';

const Login = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // ดึงข้อมูลผู้ใช้จาก Session/Storage เมื่อ Component โหลด
    getUser().then(user => {
      setUser(user);
    });
  }, []);

  const handleLoginClick = () => {
    login();
  };

  if (user) {
    return (
      <div>
        <h2>คุณล็อกอินแล้ว</h2>
        <p>ยินดีต้อนรับ, {user.profile.name}!</p>
        <p>ถ้าต้องการดูหน้าหลัก ให้ไปที่ <a href="/react-apisix/">หน้าหลัก</a></p>
      </div>
    );
  }

  return (
    <div>
      <h2>กรุณาล็อกอิน</h2>
      <button onClick={handleLoginClick}>Login with Casdoor</button>
    </div>
  );
};

export default Login;