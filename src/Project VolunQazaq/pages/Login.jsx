import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ setIsAdmin }) => {
    const [data, setData] = useState({ username: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();
  
    const handleLogin = (e) => {
      e.preventDefault();
      if (data.username === "mereyyermakhan111@gmail.com" && data.password === "Merey123") {
        setIsAdmin(true);
        localStorage.setItem("isAdmin", "true");
        setError("");
        navigate("/admin");
      } else {
        setError("Неверный логин или пароль");
      }
    };

  return (
    <div className="login-container">
      <div className="login-card">
        <form className="login-form" onSubmit={handleLogin}>
          <h2>Вход для администратора</h2>

          <label htmlFor="username">Имя пользователя</label>
          <input
            id="username"
            placeholder="Введите email"
            value={data.username}
            onChange={(e) => setData({ ...data, username: e.target.value })}
          />

          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            id="password"
            placeholder="Введите пароль"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />

          {error && <div className="login-error">{error}</div>}

          <button type="submit" className="login-btn">Войти</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
