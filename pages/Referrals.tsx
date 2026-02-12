
import React from 'react';
import { REFERRALS } from '../constants';
import { Phone, MapPin, Star, ExternalLink, Search } from 'lucide-react';

const Referrals: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold">Recommended Specialists</h2>
        <p className="text-slate-500">Based on your location and health profile, we've identified highly-rated hepatologists and clinics in your area.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input 
            type="text" 
            placeholder="Search by name, specialty, or clinic..." 
            className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all shadow-sm"
          />
        </div>
        <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
          Find Nearby
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {REFERRALS.map((doctor) => (
          <div key={doctor.id} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl overflow-hidden">
                  <img src={`https://picsum.photos/seed/${doctor.id}/200`} alt={doctor.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex items-center gap-1 bg-amber-50 text-amber-600 px-3 py-1 rounded-full text-sm font-bold">
                  <Star size={14} fill="currentColor" />
                  4.9
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-800">{doctor.name}</h3>
              <p className="text-blue-600 font-semibold text-sm mb-4">{doctor.specialty}</p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-slate-500 text-sm">
                  <MapPin size={16} />
                  {doctor.location}
                </div>
                <div className="flex items-center gap-3 text-slate-500 text-sm">
                  <Phone size={16} />
                  {doctor.contact}
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-4 border-t border-slate-50">
              <button className="flex-1 bg-blue-50 text-blue-600 py-3 rounded-xl font-bold text-sm hover:bg-blue-100 transition-colors">
                Call Now
              </button>
              <button className="flex-1 bg-slate-900 text-white py-3 rounded-xl font-bold text-sm hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                Book Appointment
                <ExternalLink size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-blue-900 mb-2">Need Urgent Assistance?</h3>
          <p className="text-blue-700">If you are experiencing severe abdominal pain, persistent vomiting, or rapid swelling, please seek immediate emergency care.</p>
        </div>
        <button className="whitespace-nowrap bg-red-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-200">
          Emergency Services
        </button>
      </div>
    </div>
  );
};

export default Referrals;
