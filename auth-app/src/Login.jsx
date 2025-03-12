import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((user) => user.username === username && user.password === password);

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      alert("Đăng nhập thành công!");
      onLogin();
    } else {
      alert("Tên đăng nhập hoặc mật khẩu không đúng!");
    }
  };

  return (
    <div>
      <h2>Đăng nhập</h2>
      <input type="text" placeholder="Tên đăng nhập" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Mật khẩu" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Đăng nhập</button>
    </div>
  );
};

export default Login;
