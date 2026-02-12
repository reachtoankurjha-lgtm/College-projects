
import { LiverDisease, Referral } from './types';

export const LIVER_DISEASES: LiverDisease[] = [
  {
    id: '1',
    name: 'Hepatitis (A, B, C)',
    description: 'Inflammation of the liver usually caused by a viral infection or exposure to harmful substances like alcohol.',
    symptoms: ['Jaundice', 'Fatigue', 'Abdominal pain', 'Dark urine'],
    precautions: ['Get vaccinated (A & B)', 'Practice safe hygiene', 'Avoid contaminated needles'],
    treatment: 'Antiviral medications, rest, and fluid intake. Chronic cases may need long-term therapy.'
  },
  {
    id: '2',
    name: 'Cirrhosis',
    description: 'Late-stage scarring (fibrosis) of the liver caused by many forms of liver diseases and conditions.',
    symptoms: ['Easy bruising', 'Swelling in legs', 'Weight loss', 'Confusion'],
    precautions: ['Limit alcohol consumption', 'Maintain healthy weight', 'Protect from Hepatitis'],
    treatment: 'Treating the underlying cause, lifestyle changes, and potentially liver transplant.'
  },
  {
    id: '3',
    name: 'Fatty Liver Disease (NAFLD)',
    description: 'An accumulation of fat in the liver that isn\'t caused by alcohol consumption.',
    symptoms: ['Often asymptomatic', 'Fatigue', 'Pain in upper right abdomen'],
    precautions: ['Healthy diet', 'Regular exercise', 'Control blood sugar'],
    treatment: 'Weight loss, diet management, and managing diabetes/cholesterol.'
  }
];

export const REFERRALS: Referral[] = [
  {
    id: 'r1',
    name: 'Dr. Sarah Mitchell',
    specialty: 'Hepatologist',
    location: 'Downtown Medical Center',
    contact: '(555) 123-4567'
  },
  {
    id: 'r2',
    name: 'Dr. James Wilson',
    specialty: 'Gastroenterologist',
    location: 'Westside Clinic',
    contact: '(555) 987-6543'
  }
];
