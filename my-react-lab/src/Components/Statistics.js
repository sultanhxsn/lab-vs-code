import React from 'react';
import '../Styles/Statistics.css';

function Statistics(stats) {
const { totalUsers, activeUsers, newSignups, activePercentage } = stats;
return (
    <div className="statistics-container">
      <h2 className="statistics-title">User Statistics</h2>

      <div className="stat-item">
        <div className="stat-label">Total Users:</div>
        <div className="stat-value">{totalUsers}</div>
      </div>

      <div className="stat-item">
        <div className="stat-label">Active Users:</div>
        <div className="stat-value">{activeUsers}</div>
      </div>

      <div className="stat-item">
        <div className="stat-label">New Sign-Ups:</div>
        <div className="stat-value">{newSignups}</div>
      </div>

      <div className="progress-bar-section">
        <div className="progress-bar-label">Active Users Percentage:</div>
        <div className="progress-bar-container">
          <div
            className="progress-bar-fill"
            style={{ width: activePercentage }}
          ></div>
        </div>
        <div className="progress-bar-text">{activePercentage}</div>
      </div>
    </div>

);
}
export default Statistics;