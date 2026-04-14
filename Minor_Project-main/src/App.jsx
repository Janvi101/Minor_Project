import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import DashboardLayout from './layouts/DashboardLayout'
import Dashboard from './pages/Dashboard'
import './index.css'
import Complaints from './pages/Complaints';

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
