import React from "react";

const Home = ({ onLogout }) => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  return (
    <div>
      <h2>Chào mừng, {user?.username}!</h2>
      <button onClick={onLogout}>Đăng xuất</button>
    </div>
  );
};

export default Home;
