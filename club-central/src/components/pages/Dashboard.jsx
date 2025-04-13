import React from 'react';
import './Dashboard.css';

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome back 👋</h1>
        <p>Your campus org life, all in one place.</p>
      </header>

      <section className="dashboard-section">
        <h2>Your Clubs</h2>
        <ul className="club-list">
          <li className="club-card">Sustainability Circle</li>
          <li className="club-card">Theater Crew</li>
          <li className="club-card">Tech Guild</li>
        </ul>
      </section>

      <section className="dashboard-section">
        <h2>Upcoming Events</h2>
        <ul className="event-list">
          <li className="event-card">
            <strong>📍 Campus Cleanup</strong> — April 15, 4:00 PM
          </li>
          <li className="event-card">
            <strong>🎭 Improv Night</strong> — April 18, 7:00 PM
          </li>
        </ul>
      </section>
    </div>
  );
}
