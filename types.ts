
export enum AppView {
  HOME = 'home',
  SCANNER = 'scanner',
  EDUCATION = 'education',
  REPORTS = 'reports',
  REFERRALS = 'referrals',
  HELP = 'help',
  LOGIN = 'login'
}

export interface AnalysisResult {
  diagnosis: string;
  probability: string;
  symptoms: string[];
  recommendations: string[];
  severity: 'Low' | 'Moderate' | 'High' | 'Critical';
  timestamp: number;
}

export interface LiverDisease {
  id: string;
  name: string;
  description: string;
  symptoms: string[];
  precautions: string[];
  treatment: string;
}

export interface Referral {
  id: string;
  name: string;
  specialty: string;
  location: string;
  contact: string;
}
