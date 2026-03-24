import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import {
    Home,
    AlertTriangle,
    MessageSquare,
    Activity,
    Users,
    Menu,
    X,
    Droplet
} from 'lucide-react';

const SidebarItem = ({ icon: Icon, label, path, active }) => (
    <Link
        to={path}
        className={`flex items-center gap-4 p-3 rounded-xl transition-all ${active
                ? 'bg-blue-50 text-blue-600 font-medium'
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`}
        style={active ? { background: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent-primary)' } : {}}
    >
        <Icon size={20} />
        <span>{label}</span>
    </Link>
);

const DashboardLayout = () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { label: 'Dashboard', path: '/', icon: Home },
        { label: 'AI Analytics', path: '/analytics', icon: Activity },
        { label: 'Alerts', path: '/alerts', icon: AlertTriangle },
        { label: 'Complaints', path: '/complaints', icon: MessageSquare },
        { label: 'Operations', path: '/operations', icon: Users },
    ];

    return (
        <div className="flex" style={{ height: '100vh', overflow: 'hidden' }}>
            {/* Mobile Sidebar Overlay */}
            {isMobileOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setIsMobileOpen(false)}
                    style={{ background: 'rgba(0,0,0,0.5)', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 40 }}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`glass ${isMobileOpen ? 'mobile-open' : ''}`}
                style={{
                    width: '280px',
                    height: '100%',
                    zIndex: 50,
                    borderRight: '1px solid var(--border-color)',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease',
                    borderRadius: 0,
                    boxShadow: 'none'
                }}
            >
                <div className="p-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="bg-blue-600 p-2 rounded-lg" style={{ background: 'var(--accent-primary)', color: 'white' }}>
                            <Droplet size={24} />
                        </div>
                        <div>
                            <h1 className="font-bold text-lg" style={{ margin: 0, color: 'var(--text-main)' }}>RTWQMS</h1>
                            <p className="text-xs" style={{ margin: 0, color: 'var(--text-muted)' }}>Indore Municipal Corporation</p>
                        </div>
                    </div>
                    <button
                        className="lg:hidden p-2 rounded-lg hover:bg-slate-100"
                        onClick={() => setIsMobileOpen(false)}
                        style={{ border: 'none', background: 'transparent', cursor: 'pointer', display: 'none' /* toggle via media query later */ }}
                    >
                        <X size={20} />
                    </button>
                </div>

                <nav className="flex-1 p-4 flex flex-col gap-2">
                    {navItems.map((item) => (
                        <SidebarItem
                            key={item.path}
                            {...item}
                            active={location.pathname === item.path}
                        />
                    ))}
                </nav>

                <div className="p-4 border-t" style={{ borderTop: '1px solid var(--border-color)' }}>
                    <div className="flex items-center gap-3 p-2">
                        <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600" style={{ background: '#e2e8f0', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            A
                        </div>
                        <div>
                            <p className="font-medium text-sm" style={{ margin: 0 }}>Admin User</p>
                            <p className="text-xs text-slate-500" style={{ margin: 0, color: 'var(--text-muted)' }}>admin@rtwqms.gov.in</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col" style={{ height: '100%', overflow: 'hidden' }}>
                <header className="glass p-4 flex items-center justify-between" style={{ borderRadius: 0, borderBottom: '1px solid var(--border-color)', boxShadow: 'none' }}>
                    <div className="flex items-center gap-4">
                        <button
                            className="p-2 rounded-lg hover:bg-slate-100 lg:hidden"
                            onClick={() => setIsMobileOpen(true)}
                            style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}
                        >
                            <Menu size={24} />
                        </button>
                        <h2 className="font-semibold text-xl" style={{ margin: 0 }}>
                            {navItems.find(i => i.path === location.pathname)?.label || 'Overview'}
                        </h2>
                    </div>
                    <div className="flex items-center gap-4">
                        {/* Logout button removed for now */}
                    </div>
                </header>

                <div className="bg-danger text-white px-4 py-1 flex items-center overflow-hidden" style={{ fontSize: '0.875rem' }}>
                    <div className="marquee-content whitespace-nowrap">
                        🚨 ALERT: High BOD levels detected at Kahn River (Krishnapura). Immediate action required. | Maintenance scheduled for Pipliyapala Water Treatment Plant tomorrow at 10 AM. 🚨
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-6" style={{ background: 'var(--bg-primary)' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <Outlet />
                    </div>
                </div>
            </main>

            {/* Basic media query for layout responsiveness handled mostly via inline logic and standard CSS if needed */}
            <style dangerouslySetInnerHTML={{
                __html: `
        @media (min-width: 1024px) {
          .lg\\:hidden { display: none !important; }
        }
        @media (max-width: 1024px) {
          aside { position: fixed !important; top: 0; left: 0; transform: translateX(-100%) !important; background: var(--bg-secondary); }
          aside.mobile-open { transform: translateX(0) !important; }
        }
      `}} />
        </div>
    );
};

export default DashboardLayout;
