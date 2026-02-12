
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Scanner from './pages/Scanner';
import Education from './pages/Education';
import Reports from './pages/Reports';
import Referrals from './pages/Referrals';
import Help from './pages/Help';
import Login from './pages/Login';
import { AppView, AnalysisResult } from './types';
import { CheckCircle, ArrowLeft } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.HOME);
  const [user, setUser] = useState<{ name: string } | null>(null);
  const [history, setHistory] = useState<AnalysisResult[]>([]);
  const [lastResult, setLastResult] = useState<AnalysisResult | null>(null);

  // Persistence
  useEffect(() => {
    const saved = localStorage.getItem('hepati_history');
    if (saved) setHistory(JSON.parse(saved));
  }, []);

  const handleScanResult = (result: AnalysisResult) => {
    const newHistory = [...history, result];
    setHistory(newHistory);
    localStorage.setItem('hepati_history', JSON.stringify(newHistory));
    setLastResult(result);
  };

  const handleLogin = (userData: { name: string }) => {
    setUser(userData);
    setCurrentView(AppView.HOME);
  };

  const renderResult = () => (
    <div className="max-w-2xl mx-auto animate-in zoom-in-95 duration-500">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
        <div className="bg-emerald-600 p-8 text-white text-center relative">
          <CheckCircle size={64} className="mx-auto mb-4 opacity-20 absolute -top-4 -right-4" />
          <h2 className="text-2xl font-bold mb-1">Analysis Complete</h2>
          <p className="text-emerald-100">AI assessment generated successfully</p>
        </div>

        <div className="p-8 space-y-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Likely Condition</span>
              <span className="font-bold text-slate-800">{lastResult?.diagnosis}</span>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Confidence Score</span>
              <span className="font-bold text-blue-600">{lastResult?.probability}</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-slate-800 flex items-center gap-2">Detected Indicators</h3>
            <div className="flex flex-wrap gap-2">
              {lastResult?.symptoms.map((s, idx) => (
                <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg text-sm font-medium border border-blue-100">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-slate-800">Recommended Steps</h3>
            <ul className="space-y-3">
              {lastResult?.recommendations.map((r, idx) => (
                <li key={idx} className="flex gap-3 text-sm text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-[10px]">
                    {idx + 1}
                  </div>
                  {r}
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 border-t border-slate-100 flex flex-col md:flex-row gap-3">
            <button 
              onClick={() => setCurrentView(AppView.REFERRALS)}
              className="flex-1 bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg"
            >
              Find a Specialist
            </button>
            <button 
              onClick={() => {setLastResult(null); setCurrentView(AppView.HOME);}}
              className="flex-1 bg-white text-slate-600 border border-slate-200 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all"
            >
              Done
            </button>
          </div>
          
          <p className="text-[10px] text-slate-400 text-center uppercase tracking-widest font-bold">
            Medical ID: {lastResult?.timestamp.toString().slice(-6)}
          </p>
        </div>
      </div>
    </div>
  );

  const renderView = () => {
    if (lastResult) return renderResult();

    switch (currentView) {
      case AppView.HOME:
        return <Home onStartScan={() => setCurrentView(AppView.SCANNER)} setView={setCurrentView} />;
      case AppView.SCANNER:
        return <Scanner onResult={handleScanResult} />;
      case AppView.EDUCATION:
        return <Education />;
      case AppView.REPORTS:
        return <Reports history={history} />;
      case AppView.REFERRALS:
        return <Referrals />;
      case AppView.HELP:
        return <Help />;
      case AppView.LOGIN:
        return <Login onLogin={handleLogin} />;
      default:
        return <Home onStartScan={() => setCurrentView(AppView.SCANNER)} setView={setCurrentView} />;
    }
  };

  return (
    <Layout currentView={currentView} setView={setCurrentView} user={user}>
      {/* Back button for sub-views on mobile */}
      {currentView !== AppView.HOME && !lastResult && (
        <button 
          onClick={() => setCurrentView(AppView.HOME)}
          className="md:hidden flex items-center gap-2 text-slate-500 font-medium mb-6 hover:text-slate-800 transition-colors"
        >
          <ArrowLeft size={18} />
          Back to Home
        </button>
      )}
      {renderView()}
    </Layout>
  );
};

export default App;
