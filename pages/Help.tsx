
import React from 'react';
import { HelpCircle, MessageSquare, Book, FileQuestion, ChevronRight } from 'lucide-react';

const Help: React.FC = () => {
  const faqs = [
    { q: "How accurate is the AI scan?", a: "Our AI model is trained on thousands of medical images but is strictly for informational purposes. It is not a clinical diagnosis tool." },
    { q: "When should I see a doctor?", a: "If you notice yellowing of the skin/eyes, persistent fatigue, or severe abdominal pain, you should consult a specialist immediately." },
    { q: "Is my data private?", a: "Yes, all scans are processed securely and we follow strict privacy guidelines regarding your health information." }
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-10 animate-in fade-in duration-500">
      <div className="text-center">
        <h2 className="text-3xl font-bold">How can we help?</h2>
        <p className="text-slate-500 mt-2">Find answers, learn how to use the app, or contact support.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button className="flex items-center gap-4 p-6 bg-white border border-slate-200 rounded-3xl hover:border-blue-300 hover:bg-blue-50/30 transition-all group">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
            <Book size={24} />
          </div>
          <div className="text-left">
            <h4 className="font-bold text-slate-800">User Guides</h4>
            <p className="text-slate-500 text-sm">Learn to take the best scan</p>
          </div>
        </button>
        <button className="flex items-center gap-4 p-6 bg-white border border-slate-200 rounded-3xl hover:border-emerald-300 hover:bg-emerald-50/30 transition-all group">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
            <MessageSquare size={24} />
          </div>
          <div className="text-left">
            <h4 className="font-bold text-slate-800">Support Chat</h4>
            <p className="text-slate-500 text-sm">Talk to our health assistants</p>
          </div>
        </button>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-bold flex items-center gap-2">
          <FileQuestion size={22} className="text-blue-600" />
          Frequently Asked Questions
        </h3>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details key={idx} className="group bg-white border border-slate-200 rounded-2xl overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="font-bold text-slate-800">{faq.q}</span>
                <ChevronRight size={20} className="text-slate-400 group-open:rotate-90 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>

      <div className="bg-slate-900 rounded-3xl p-8 text-white text-center">
        <HelpCircle size={40} className="mx-auto mb-4 text-blue-400" />
        <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
        <p className="text-white/60 mb-6">Our team is available 24/7 for technical and navigational support.</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold transition-all">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Help;
