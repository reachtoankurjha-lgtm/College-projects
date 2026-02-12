
import React, { useState, useRef } from 'react';
import { Camera, Upload, Send, AlertTriangle, RefreshCw, XCircle } from 'lucide-react';
import { analyzeSymptoms } from '../services/geminiService';
import { AnalysisResult } from '../types';

interface ScannerProps {
  onResult: (result: AnalysisResult) => void;
}

const Scanner: React.FC<ScannerProps> = ({ onResult }) => {
  const [image, setImage] = useState<string | null>(null);
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showCamera, setShowCamera] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setShowCamera(true);
      }
    } catch (err) {
      setError('Unable to access camera. Please upload an image instead.');
    }
  };

  const capturePhoto = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx?.drawImage(videoRef.current, 0, 0);
      const dataUrl = canvas.toDataURL('image/jpeg');
      setImage(dataUrl);
      stopCamera();
    }
  };

  const stopCamera = () => {
    if (videoRef.current?.srcObject) {
      (videoRef.current.srcObject as MediaStream).getTracks().forEach(t => t.stop());
    }
    setShowCamera(false);
  };

  const handleSubmit = async () => {
    if (!image && !description) {
      setError('Please provide an image or describe your symptoms.');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const result = await analyzeSymptoms(image || undefined, description);
      onResult(result);
    } catch (err) {
      setError('Analysis failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Health Assessment</h2>
        <p className="text-slate-500">Scan physical indicators or describe what you're feeling.</p>
      </div>

      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        {/* Visual Input Area */}
        <div className="space-y-4">
          <label className="block text-sm font-semibold text-slate-700">Visual Indicator (Optional)</label>
          
          {!image && !showCamera && (
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={startCamera}
                className="flex flex-col items-center justify-center gap-3 border-2 border-dashed border-slate-200 rounded-2xl p-8 hover:bg-slate-50 hover:border-blue-300 transition-all text-slate-600"
              >
                <Camera size={32} />
                <span className="font-medium">Camera</span>
              </button>
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="flex flex-col items-center justify-center gap-3 border-2 border-dashed border-slate-200 rounded-2xl p-8 hover:bg-slate-50 hover:border-blue-300 transition-all text-slate-600"
              >
                <Upload size={32} />
                <span className="font-medium">Upload</span>
              </button>
            </div>
          )}

          {showCamera && (
            <div className="relative rounded-2xl overflow-hidden bg-black">
              <video ref={videoRef} autoPlay playsInline className="w-full aspect-square object-cover" />
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4">
                <button onClick={capturePhoto} className="bg-white text-slate-900 p-4 rounded-full shadow-lg">
                  <Camera size={24} />
                </button>
                <button onClick={stopCamera} className="bg-red-500 text-white p-4 rounded-full shadow-lg">
                  <XCircle size={24} />
                </button>
              </div>
            </div>
          )}

          {image && !showCamera && (
            <div className="relative rounded-2xl overflow-hidden group">
              <img src={image} alt="Symptom" className="w-full aspect-video object-cover" />
              <button 
                onClick={() => setImage(null)}
                className="absolute top-2 right-2 bg-black/50 text-white p-2 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <RefreshCw size={18} />
              </button>
            </div>
          )}

          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileUpload} 
            accept="image/*" 
            className="hidden" 
          />
        </div>

        {/* Text Input Area */}
        <div className="space-y-4">
          <label className="block text-sm font-semibold text-slate-700">Describe Symptoms</label>
          <textarea 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="e.g., Yellowing of the eyes, fatigue, swelling in ankles..."
            className="w-full min-h-[120px] p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          />
        </div>

        {error && (
          <div className="flex items-center gap-3 p-4 bg-red-50 text-red-700 rounded-xl border border-red-100 text-sm">
            <AlertTriangle size={18} />
            {error}
          </div>
        )}

        <button 
          onClick={handleSubmit}
          disabled={loading || (!image && !description)}
          className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all ${
            loading || (!image && !description)
              ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200 active:scale-[0.98]'
          }`}
        >
          {loading ? (
            <RefreshCw className="animate-spin" size={20} />
          ) : (
            <>
              <Send size={20} />
              Analyze Symptoms
            </>
          )}
        </button>

        <p className="text-[10px] text-slate-400 text-center italic">
          Disclaimer: This analysis is generated by AI and is not a medical diagnosis. Always consult a healthcare professional.
        </p>
      </div>
    </div>
  );
};

export default Scanner;
