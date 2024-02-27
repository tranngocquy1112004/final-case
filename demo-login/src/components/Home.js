// src/components/Home.js
import React from 'react';

const Home = ({ onLogout }) => {
  return (
    <div>
      <h2>Welcome Home!</h2>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Home;
