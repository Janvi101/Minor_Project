import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import DashboardLayout from './layouts/DashboardLayout'
import Dashboard from './pages/Dashboard'
import './index.css'

// Placeholder pages
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

const Complaints = () => (
  <div className="glass p-6">
    <h2 className="mb-4">Public Complaint Portal</h2>
    <p className="text-muted mb-4">View and track citizen reports of water pollution.</p>
    <div style={{ overflowX: 'auto', width: '100%' }}>
      <table className="w-full text-left" style={{ borderCollapse: 'collapse', minWidth: '600px' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid var(--border-color)' }}>
          <th className="p-3 text-sm font-medium text-muted">Date</th>
          <th className="p-3 text-sm font-medium text-muted">Location</th>
          <th className="p-3 text-sm font-medium text-muted">Issue</th>
          <th className="p-3 text-sm font-medium text-muted">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
          <td className="p-3 text-sm">Today, 10:30 AM</td>
          <td className="p-3 text-sm font-medium">Sirpur Lake</td>
          <td className="p-3 text-sm text-muted">Foul smell and dead fish</td>
          <td className="p-3 text-sm"><span className="text-danger font-medium">Pending Investigation</span></td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
);

const Alerts = () => (
  <div className="glass p-6">
    <h2 className="mb-4 text-danger" style={{ color: 'var(--accent-danger)' }}>Danger Zone Alerts</h2>
    <p className="text-muted">Currently active danger zones prohibiting public entry.</p>
  </div>
);

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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Protected Routes Wrapper (Mock) */}
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="analytics" element={<AIAnalytics />} />
          <Route path="complaints" element={<Complaints />} />
          <Route path="alerts" element={<Alerts />} />
          <Route path="operations" element={<Operations />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
