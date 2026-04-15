import React from 'react';

const Alerts = () => (
  <div className="glass p-6">
    <h2 className="mb-4 text-danger" style={{ color: 'var(--accent-danger)' }}>Danger Zone Alerts</h2>
    <p className="text-muted">Currently active danger zones prohibiting public entry.</p>
  </div>
);

export default Alerts;
