import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockChartData = [
    { name: 'Mon', bodies: 140, safe: 80, polluted: 30 },
    { name: 'Tue', bodies: 140, safe: 82, polluted: 28 },
    { name: 'Wed', bodies: 142, safe: 81, polluted: 29 },
    { name: 'Thu', bodies: 142, safe: 85, polluted: 27 },
    { name: 'Fri', bodies: 142, safe: 84, polluted: 27 },
];

const Dashboard = () => {
    return (
        <div>

            {/* KPI Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                <div className="glass p-6 glass-hover">
                    <p className="text-muted" style={{ marginBottom: '0.5rem' }}>Total Water Bodies Monitored</p>
                    <div className="flex items-center justify-between">
                        <h2 style={{ fontSize: '2rem', margin: 0 }}>142</h2>
                        <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>+3</span>
                    </div>
                </div>

                <div className="glass p-6 glass-hover">
                    <p className="text-muted" style={{ marginBottom: '0.5rem' }}>Safe to Use (Class A & B)</p>
                    <div className="flex items-center justify-between">
                        <h2 style={{ fontSize: '2rem', margin: 0, color: 'var(--accent-safe)' }}>84</h2>
                        <span style={{ color: 'var(--accent-safe)', fontWeight: 600 }}>59%</span>
                    </div>
                </div>

                <div className="glass p-6 glass-hover">
                    <p className="text-muted" style={{ marginBottom: '0.5rem' }}>Polluted / Danger Zones</p>
                    <div className="flex items-center justify-between">
                        <h2 style={{ fontSize: '2rem', margin: 0, color: 'var(--accent-danger)' }}>27</h2>
                        <span style={{ color: 'var(--accent-danger)', fontWeight: 600 }}>Active</span>
                    </div>
                </div>

                <div className="glass p-6 glass-hover">
                    <p className="text-muted" style={{ marginBottom: '0.5rem' }}>New Public Complaints</p>
                    <div className="flex items-center justify-between">
                        <h2 style={{ fontSize: '2rem', margin: 0, color: 'var(--accent-warning)' }}>12</h2>
                        <span style={{ color: 'var(--accent-warning)', fontWeight: 600 }}>Pending</span>
                    </div>
                </div>
            </div>

            {/* Chart and Alerts */}
            <div className="grid-responsive">
                <div className="glass p-6" style={{ minWidth: 0 }}>
                    <h3 style={{ marginBottom: '1rem' }}>Overall Water Quality Trends</h3>
                    <div style={{ height: '300px', width: '100%', borderRadius: '8px' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={mockChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.05)" />
                                <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#64748b' }} axisLine={false} tickLine={false} />
                                <YAxis tick={{ fontSize: 12, fill: '#64748b' }} axisLine={false} tickLine={false} />
                                <Tooltip
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}
                                    cursor={{ stroke: 'rgba(0,0,0,0.05)', strokeWidth: 2 }}
                                />
                                <Line type="monotone" dataKey="safe" name="Safe Bodies" stroke="var(--accent-safe)" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} />
                                <Line type="monotone" dataKey="polluted" name="Polluted Bodies" stroke="var(--accent-danger)" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="glass p-6">
                    <h3 style={{ marginBottom: '1rem' }}>Active Alerts</h3>
                    <div className="flex col gap-2" style={{ flexDirection: 'column' }}>
                        {[1, 2, 3].map(i => (
                            <div key={i} className="p-3" style={{ background: 'rgba(239, 68, 68, 0.1)', borderRadius: '8px', borderLeft: '4px solid var(--accent-danger)' }}>
                                <p style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--accent-danger)', margin: 0 }}>High BOD Level Detected</p>
                                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: '0.25rem 0 0 0' }}>Kahn River - Scheme 78</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Dashboard;
