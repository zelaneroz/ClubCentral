import React from 'react';
import './LoginPage.css';

export default function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-left">
        <div className="logo">
          <img src="/logo.png" alt="ClubCentral Logo" />
          <h1>Club<span className="accent">Central</span></h1>
        </div>
        <p className="tagline">Manage your campus org life, all in one place.</p>

        <form className="login-form">
          <label>Email</label>
          <input type="email" placeholder="you@case.edu" />

          <label>Password</label>
          <input type="password" placeholder="••••••••" />

          <button type="submit">Log in</button>
        </form>
      </div>

      <div className="login-right">
        <img src="/login-photo.jpg" alt="Students" />
      </div>
    </div>
  );
}
