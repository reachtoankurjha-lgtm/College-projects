
import React from 'react';
import { AppView } from '../types';
import { 
  Home, 
  Camera, 
  BookOpen, 
  FileText, 
  UserPlus, 
  HelpCircle, 
  User,
  Activity
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentView: AppView;
  setView: (view: AppView) => void;
  user: { name: string } | null;
}

const Layout: React.FC<LayoutProps> = ({ children, currentView, setView, user }) => {
  const navItems = [
    { view: AppView.HOME, icon: Home, label: 'Home' },
    { view: AppView.SCANNER, icon: Camera, label: 'Scan' },
    { view: AppView.EDUCATION, icon: BookOpen, label: 'Learn' },
    { view: AppView.REPORTS, icon: FileText, label: 'Reports' },
    { view: AppView.REFERRALS, icon: UserPlus, label: 'Referrals' },
  ];

  return (
    <div className="min-h-screen flex flex-col pb-20 md:pb-0 md:pl-64">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-slate-200 fixed inset-y-0 left-0 z-50">
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
            <Activity size={24} />
          </div>
          <h1 className="text-xl font-bold text-slate-800">HepatiScan AI</h1>
        </div>
        
        <nav className="flex-1 px-4 space-y-2 mt-4">
          {navItems.map((item) => (
            <button
              key={item.view}
              onClick={() => setView(item.view)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                currentView === item.view 
                  ? 'bg-blue-50 text-blue-600 font-semibold' 
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <item.icon size={20} />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-100 space-y-2">
          <button 
            onClick={() => setView(AppView.HELP)}
            className="w-full flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-lg"
          >
            <HelpCircle size={20} />
            Help Center
          </button>
          <button 
            onClick={() => setView(AppView.LOGIN)}
            className="w-full flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-lg"
          >
            <User size={20} />
            {user ? user.name : 'Login'}
          </button>
        </div>
      </aside>

      {/* Header - Mobile */}
      <header className="md:hidden bg-white border-b border-slate-200 p-4 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-2">
          <Activity className="text-blue-600" size={24} />
          <span className="font-bold text-lg">HepatiScan</span>
        </div>
        <button onClick={() => setView(AppView.LOGIN)} className="p-2 bg-slate-100 rounded-full">
          <User size={20} />
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 max-w-5xl mx-auto w-full">
        {children}
      </main>

      {/* Tab Bar - Mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 flex justify-around p-2 z-50">
        {navItems.map((item) => (
          <button
            key={item.view}
            onClick={() => setView(item.view)}
            className={`flex flex-col items-center p-2 rounded-lg ${
              currentView === item.view ? 'text-blue-600' : 'text-slate-500'
            }`}
          >
            <item.icon size={24} />
            <span className="text-[10px] mt-1 uppercase font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Layout;
