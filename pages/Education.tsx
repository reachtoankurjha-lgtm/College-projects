
import React from 'react';
import { LIVER_DISEASES } from '../constants';
import { Shield, Info, Activity } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Liver Disease Guide</h2>
        <p className="text-slate-500">Comprehensive information on common conditions, their symptoms, and how to manage them.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {LIVER_DISEASES.map((disease) => (
          <div key={disease.id} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-6">
              <h3 className="text-2xl font-bold text-slate-800">{disease.name}</h3>
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <Info size={20} />
              </div>
            </div>
            
            <p className="text-slate-600 mb-8 leading-relaxed">{disease.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-bold text-sm uppercase text-slate-400 tracking-wider">Common Symptoms</h4>
                <ul className="space-y-2">
                  {disease.symptoms.map((s, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-700 text-sm">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-sm uppercase text-slate-400 tracking-wider">Precautions</h4>
                <ul className="space-y-2">
                  {disease.precautions.map((p, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-emerald-700 text-sm">
                      <Shield size={14} className="text-emerald-500" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                <Activity size={18} className="text-blue-500" />
                Standard Treatment Approach
              </h4>
              <p className="text-slate-600 text-sm italic">{disease.treatment}</p>
            </div>
          </div>
        ))}
      </div>

      <section className="bg-slate-900 text-white rounded-3xl p-8 md:p-12">
        <div className="max-w-3xl">
          <h3 className="text-2xl font-bold mb-4">General Prevention Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white/10 p-6 rounded-2xl border border-white/10">
              <h4 className="font-bold mb-2">Healthy Diet</h4>
              <p className="text-white/70 text-sm">Focus on whole grains, fruits, and vegetables. Limit high-calorie, saturated fat meals.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl border border-white/10">
              <h4 className="font-bold mb-2">Moderate Alcohol</h4>
              <p className="text-white/70 text-sm">Reduce intake to prevent fatty liver and cirrhosis over time.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl border border-white/10">
              <h4 className="font-bold mb-2">Regular Exercise</h4>
              <p className="text-white/70 text-sm">Aids in burning triglycerides for fuel and can reduce liver fat.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl border border-white/10">
              <h4 className="font-bold mb-2">Safe Practices</h4>
              <p className="text-white/70 text-sm">Avoid sharing needles and practice safe sex to prevent Hepatitis B and C.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
