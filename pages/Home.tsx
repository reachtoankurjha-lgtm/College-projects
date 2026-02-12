
import React from 'react';
import { Activity, ShieldCheck, Stethoscope, ArrowRight, BookOpen } from 'lucide-react';
import { AppView } from '../types';

interface HomeProps {
  onStartScan: () => void;
  setView: (view: AppView) => void;
}

const Home: React.FC<HomeProps> = ({ onStartScan, setView }) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl shadow-blue-200">
        <div className="relative z-10 max-w-xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">Your AI Guardian for Liver Health</h2>
          <p className="text-blue-100 text-lg mb-6">Analyze physical symptoms instantly using advanced AI imaging. Detect risks early, stay informed, and find the right care.</p>
          <button 
            onClick={onStartScan}
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-all flex items-center gap-2"
          >
            Start Scan Now <ArrowRight size={20} />
          </button>
        </div>
        <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-10 flex items-center justify-center">
          <Activity size={200} />
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
            <ShieldCheck size={24} />
          </div>
          <h3 className="font-bold text-lg mb-2">Early Detection</h3>
          <p className="text-slate-500 text-sm">Monitor subtle physical changes that might indicate liver distress before they become severe.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-4">
            {/* Fix: Added missing BookOpen import from lucide-react */}
            <BookOpen size={24} />
          </div>
          <h3 className="font-bold text-lg mb-2">Health Library</h3>
          <p className="text-slate-500 text-sm">Detailed information on conditions, treatments, and life-saving precautions.</p>
          <button onClick={() => setView(AppView.EDUCATION)} className="text-blue-600 text-sm font-semibold mt-4 hover:underline">Explore Wiki</button>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
            <Stethoscope size={24} />
          </div>
          <h3 className="font-bold text-lg mb-2">Care Referrals</h3>
          <p className="text-slate-500 text-sm">Connect with local specialists and hepatologists if your scan indicates any concerns.</p>
          <button onClick={() => setView(AppView.REFERRALS)} className="text-blue-600 text-sm font-semibold mt-4 hover:underline">Find Doctors</button>
        </div>
      </div>

      <section className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
        <h3 className="text-xl font-bold mb-6">Why Monitor Liver Health?</h3>
        <div className="space-y-4 text-slate-600">
          <p>The liver is your body's second largest organ. It performs hundreds of essential functions, including filtering toxins from your blood, managing cholesterol, and aiding digestion.</p>
          <p>Liver disease doesn't always cause noticeable signs and symptoms. If they do occur, they may include:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Skin and eyes that appear yellowish (jaundice)</li>
            <li>Abdominal pain and swelling</li>
            <li>Swelling in the legs and ankles</li>
            <li>Itchy skin</li>
            <li>Chronic fatigue</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;
