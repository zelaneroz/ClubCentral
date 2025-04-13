import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import users from '../../mockUsers';
import './LoginPage.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      navigate('/dashboard');
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="logo">
          <img src="/logo.png" alt="ClubCentral Logo" />
          <h1>Club<span className="accent">Hub</span></h1>
        </div>
        <p className="tagline">Manage your campus org life, all in one place.</p>

        <form onSubmit={handleSubmit} className="login-form">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@case.edu"
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
          />

          <button type="submit">Log in</button>
          {error && <p className="error">{error}</p>}
        </form>
      </div>

      <div className="login-right">
        <img src="/login-photo.jpg" alt="Students" />
      </div>
    </div>
  );
}
