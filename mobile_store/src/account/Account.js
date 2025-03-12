import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Account.css";


export default function Account() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [user, setUser] = useState({ username: "", password: "" });
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Kiểm tra nếu đã có tài khoản đăng nhập trong localStorage
    const savedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (savedUser) {
      setIsLoggedIn(true);
      setCurrentUser(savedUser);
    }
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    if (!user.username.trim() || !user.password.trim()) {
      alert("Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu!");
      return;
    }

    let storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    if (storedUsers.some((u) => u.username === user.username)) {
      alert("Tên đăng nhập đã tồn tại!");
      return;
    }

    storedUsers.push(user);
    localStorage.setItem("users", JSON.stringify(storedUsers));

    alert("Đăng ký thành công! Hãy đăng nhập.");
    setIsRegistering(false);
    setUser({ username: "", password: "" });
  };

  const handleLogin = () => {
    if (!user.username.trim() || !user.password.trim()) {
      alert("Vui lòng nhập tên đăng nhập và mật khẩu!");
      return;
    }

    let storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = storedUsers.find(
      (u) => u.username === user.username && u.password === user.password
    );

    if (foundUser) {
      localStorage.setItem("currentUser", JSON.stringify(foundUser)); // Lưu user hiện tại
      setIsLoggedIn(true);
      setCurrentUser(foundUser);
      alert("Đăng nhập thành công!");
      navigate("/home"); // Chuyển đến trang Home
    } else {
      alert("Sai thông tin đăng nhập");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    localStorage.removeItem("currentUser"); // Xóa user khỏi localStorage
  };

  return (
    <div className="account-container">
    <div className="account-box">
      <h1>{isLoggedIn ? `Xin chào, ${currentUser.username}!` : "Đăng nhập / Đăng ký"}</h1>

      {isLoggedIn ? (
        <div className="account-buttons">
          <button className="account-button logout-btn" onClick={handleLogout}>Đăng xuất</button>
          <Link to="/home" className="link-to-home">➡ Vào trang chủ</Link>
        </div>
      ) : (
        <div>
          <input
            type="text"
            name="username"
            placeholder="Tên đăng nhập"
            className="account-input"
            value={user.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Mật khẩu"
            className="account-input"
            value={user.password}
            onChange={handleChange}
          />
          <div className="account-buttons">
            {isRegistering ? (
              <button className="account-button register-btn" onClick={handleRegister}>Đăng ký</button>
            ) : (
              <>
                <button className="account-button login-btn" onClick={handleLogin}>Đăng nhập</button>
                <button className="link-to-home" onClick={() => setIsRegistering(true)}>Chưa có tài khoản? Đăng ký</button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  </div>
  );
}
