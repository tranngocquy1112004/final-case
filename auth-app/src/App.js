import React, { useState } from "react";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("loggedInUser") !== null);
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      {isLoggedIn ? (
        <Home onLogout={() => {
          localStorage.removeItem("loggedInUser");
          setIsLoggedIn(false);
        }} />
      ) : showLogin ? (
        <Login onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <Register onRegister={() => setShowLogin(true)} />
      )}
      
      {!isLoggedIn && (
        <button onClick={() => setShowLogin(!showLogin)}>
          {showLogin ? "Chưa có tài khoản? Đăng ký" : "Đã có tài khoản? Đăng nhập"}
        </button>
      )}
    </div>
  );
};

export default App;
