import React, { useState } from "react";

const Register = ({ onRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (!username || !password) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    // Kiểm tra xem username đã tồn tại chưa
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.find((user) => user.username === username)) {
      alert("Tên tài khoản đã tồn tại!");
      return;
    }

    // Lưu vào localStorage
    const newUser = { username, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Đăng ký thành công!");
    onRegister(); // Điều hướng sang trang đăng nhập
  };

  return (
    <div>
      <h2>Đăng ký</h2>
      <input type="text" placeholder="Tên đăng nhập" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Mật khẩu" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Đăng ký</button>
    </div>
  );
};

export default Register;
