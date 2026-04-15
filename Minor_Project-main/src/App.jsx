import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import DashboardLayout from './layouts/DashboardLayout'
import Dashboard from './pages/Dashboard'
import './index.css'
import Complaints from './pages/Complaints';

import AIAnalytics from './pages/AIAnalytics';
import Alerts from './pages/Alerts';
import Operations from './pages/Operations';

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
