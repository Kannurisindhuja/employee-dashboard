import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css'; // your CSS with login-background & card

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = () => {
    if (credentials.username === "test" && credentials.password === "123456") {
      localStorage.setItem("auth", "true");
      navigate("/list");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-background">
      <div className="login-card">
        <h2 className="login-title">Welcome Back</h2>

        <input
          type="text"
          placeholder="Username (test)"
          value={credentials.username}
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
          style={{
            padding: '12px',
            fontSize: '16px',
            borderRadius: '6px',
            border: '1px solid #ccc'
          }}
        />

        <input
          type="password"
          placeholder="Password (123456)"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
          style={{
            padding: '12px',
            fontSize: '16px',
            borderRadius: '6px',
            border: '1px solid #ccc'
          }}
        />

        <button
          className="login-button"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;