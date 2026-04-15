import React from 'react';

const AIAnalytics = () => (
  <div className="glass p-6">
    <h2 className="mb-4">AI Prediction System</h2>
    <p className="text-muted mb-4">Mock insights showing pollution predictions and cause analysis.</p>
    <div className="p-4 bg-slate-50 rounded-lg border" style={{ backgroundColor: 'rgba(59, 130, 246, 0.05)', borderColor: 'var(--border-color)', borderLeft: '4px solid var(--accent-primary)' }}>
      <h4 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>Prediction: Kahn River (Krishnapura)</h4>
      <p style={{ margin: 0 }}>Probability of high BOD in next 24h: <strong>85%</strong>. Primary predicted cause: Industrial discharge anomaly detected upstream.</p>
    </div>
  </div>
);

export default AIAnalytics;
