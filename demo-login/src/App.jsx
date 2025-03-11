import React, { useState } from "react";

export default function AuthApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [user, setUser] = useState({ username: "", password: "" });
  const [storedUsers, setStoredUsers] = useState([]); // Đảm bảo khởi tạo là mảng
  const [currentUser, setCurrentUser] = useState(null);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    // Kiểm tra nếu storedUsers không phải là mảng, đặt lại giá trị mặc định
    if (!Array.isArray(storedUsers)) {
      setStoredUsers([]);
    }  // Đảm bảo storedUsers luôn là mảng
     // Kiểm tra nếu username hoặc password bị bỏ trống
    if (!user.username.trim() || !user.password.trim()) {
      alert("Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu!");
    return;
  }

    // Kiểm tra xem username đã tồn tại chưa
    if (storedUsers.some((u) => u.username === user.username)) {
      alert("Tên đăng nhập đã tồn tại!");
      return;
    }

    // Cập nhật danh sách người dùng
    setStoredUsers((prevUsers) => [...(prevUsers || []), user]);
    alert("Đăng ký thành công! Hãy đăng nhập.");
    setIsRegistering(false);
    setUser({ username: "", password: "" });
  };

  const handleLogin = () => {
    if (!user.username.trim() || !user.password.trim()) {
      alert("Vui lòng nhập tên đăng nhập và mật khẩu!");
      return;
    }
    // Đảm bảo storedUsers là một mảng
    if (!Array.isArray(storedUsers)) {
      setStoredUsers([]);
      alert("Không có tài khoản nào để đăng nhập.");
      return;
    }

    const foundUser = storedUsers.find(
      (u) => u.username === user.username && u.password === user.password
    );

    if (foundUser) {
      setIsLoggedIn(true);
      setCurrentUser(foundUser);
    } else {
      alert("Sai thông tin đăng nhập");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser({ username: "", password: "" });
    setCurrentUser(null);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">{isLoggedIn ? "Chào mừng!" : "Đăng nhập / Đăng ký"}</h1>
      
      {isLoggedIn ? (
        <div>
          <p className="mb-2">Xin chào, {currentUser?.username}!</p>
          <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={handleLogout}>
            Đăng xuất
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <input
            type="text"
            name="username"
            placeholder="Tên đăng nhập"
            className="border p-2"
            value={user.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Mật khẩu"
            className="border p-2"
            value={user.password}
            onChange={handleChange}
          />
          {isRegistering ? (
            <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleRegister}>
              Đăng ký
            </button>
          ) : (
            <>
              <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleLogin}>
                Đăng nhập
              </button>
              <button className="text-blue-500 mt-2" onClick={() => setIsRegistering(true)}>
                Chưa có tài khoản? Đăng ký
              </button>
            </>
          )}
        </div>
      )}
      
      {/* Hiển thị danh sách tài khoản đã đăng ký */}
      {!isLoggedIn && Array.isArray(storedUsers) && storedUsers.length > 0 && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Danh sách tài khoản đã đăng ký:</h2>
          <ul className="list-disc pl-6">
            {storedUsers.map((user, index) => (
              <li key={index}>{user.username}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
