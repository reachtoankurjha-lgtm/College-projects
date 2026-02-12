
import React from 'react';
import { AnalysisResult } from '../types';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { Calendar, ChevronRight, Activity, AlertCircle } from 'lucide-react';

interface ReportsProps {
  history: AnalysisResult[];
}

const Reports: React.FC<ReportsProps> = ({ history }) => {
  if (history.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-4">
        <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
          <Activity size={40} />
        </div>
        <h2 className="text-2xl font-bold">No reports found</h2>
        <p className="text-slate-500 max-w-sm">You haven't performed any scans yet. Complete a scan to see your health analysis here.</p>
      </div>
    );
  }

  // Sample data for visual interest
  const chartData = history.map(h => ({
    time: new Date(h.timestamp).toLocaleDateString(),
    score: parseInt(h.probability) || 0
  }));

  const getSeverityColor = (sev: string) => {
    switch(sev.toLowerCase()) {
      case 'low': return 'text-emerald-600 bg-emerald-50 border-emerald-100';
      case 'moderate': return 'text-amber-600 bg-amber-50 border-amber-100';
      case 'high': return 'text-orange-600 bg-orange-50 border-orange-100';
      case 'critical': return 'text-red-600 bg-red-50 border-red-100';
      default: return 'text-slate-600 bg-slate-50 border-slate-100';
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold">Health Reports</h2>
          <p className="text-slate-500">Track your liver health indicators over time.</p>
        </div>
      </div>

      {/* Trend Chart */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
        <h3 className="font-bold mb-6 flex items-center gap-2">
          <Activity className="text-blue-600" size={20} />
          Probability Trend
        </h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="time" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} unit="%" />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
              <Area type="monotone" dataKey="score" stroke="#2563eb" strokeWidth={3} fillOpacity={1} fill="url(#colorScore)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Report History List */}
      <div className="space-y-4">
        <h3 className="font-bold text-lg">Detailed History</h3>
        {history.sort((a,b) => b.timestamp - a.timestamp).map((report, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-200 transition-colors group cursor-pointer">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl border flex-shrink-0 ${getSeverityColor(report.severity)}`}>
                  <AlertCircle size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">{report.diagnosis}</h4>
                  <div className="flex items-center gap-4 text-sm text-slate-500 mt-1">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {new Date(report.timestamp).toLocaleDateString()}
                    </span>
                    <span className="font-semibold text-blue-600">
                      {report.probability} Confidence
                    </span>
                  </div>
                </div>
              </div>
              <button className="flex items-center gap-1 text-slate-400 font-medium text-sm group-hover:text-blue-600 transition-colors">
                View Details
                <ChevronRight size={18} />
              </button>
            </div>
            
            <div className="mt-4 pt-4 border-t border-slate-50">
              <p className="text-sm text-slate-600 line-clamp-2">
                <span className="font-semibold">Symptoms:</span> {report.symptoms.join(', ')}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;
