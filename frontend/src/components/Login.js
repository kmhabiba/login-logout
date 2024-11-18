import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Dashboard';
 
function Login({ setToken, setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/api/auth/login', { email, password });
      const { token, username } = response.data;
 
      localStorage.setItem('token', token);
 
      setToken(token);
      setUser(username);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please check your credentials.');
    }
  };
 
  return (
<div className="auth-container">
<h2>Login</h2>
      {error && <p className="auth-error">{error}</p>}
<form onSubmit={handleSubmit} className="auth-form">
<input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="auth-input"
          required
        />
<input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="auth-input"
          required
        />
<button type="submit" className="auth-button">Login</button>
</form>
</div>
  );
}
 
export default Login;