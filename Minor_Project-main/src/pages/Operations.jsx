import React from 'react';

const Operations = () => (
  <div className="glass p-6">
    <h2 className="mb-4">Internal Operations</h2>
    <p className="text-muted mb-4">Worker notifications, maintenance tasks, and lab report uploads.</p>
    <div className="flex gap-4">
      <button className="btn btn-primary">Assign Cleaning Task</button>
      <button className="btn" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>Upload Lab Report</button>
    </div>
  </div>
);

export default Operations;
