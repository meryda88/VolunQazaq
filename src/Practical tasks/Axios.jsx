import React, { useState } from 'react';
import './Axios.css';

function Login({ setCurrentPage }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [errors, setErrors] = useState({});
  const [res, setRes] = useState('');

  const validate = () => {
    const newErrors = {};

    if (!email.includes('@')) {
      newErrors.email = 'Email must contain @';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    }

    if (!role) {
      newErrors.role = 'Please select a role';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = () => {
    if (!validate()) return;

    localStorage.setItem('currentRole', role);
    setRes('Login successful!');

    if (role === 'admin') {
      setCurrentPage('admin');
    } else {
      setCurrentPage('user');
    }
  };

  const handleRemove = () => {
    localStorage.removeItem('currentRole');
    setRes('Role removed.');
  };

  return (
    <div className="container">
      <h2>Log in to Emirates</h2>

      <input
        type="text"
        value={email}
        placeholder="Email or Emirates Skywards number"
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.email && <p className="error">{errors.email}</p>}

      <input
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      {errors.password && <p className="error">{errors.password}</p>}

      <div className="role-selection">
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">Choose a role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        {errors.role && <p className="error">{errors.role}</p>}
      </div>

      <button onClick={handleLogin}>Register</button>
      <button onClick={handleRemove}>Remove All Users</button>
      {res && <p>{res}</p>}
    </div>
  );
}

export default Login;
