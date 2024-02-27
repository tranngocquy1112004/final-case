// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';
import { Link, createBrowserRouter } from 'react-router-dom';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleSignup = (key) => {
    setLoggedIn(true);
    localStorage.setItem(key, JSON.stringify({ key }));
  };

  const handleLogin = (key) => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
          <Route
            path="/signup"
            render={() => (isLoggedIn ? <Link to="/home" /> : <SignupForm onSignup={handleSignup} />)}
          />
          <Route
            path="/login"
            render={() => (isLoggedIn ? <Link to="/home" /> : <LoginForm onLogin={handleLogin} />)}
          />
          <PrivateRoute
            path="/home"
            component={Home}
            isLoggedIn={isLoggedIn}
            onLogout={handleLogout}
          />
      </div>
    </Router>
  );
}

export default App;
