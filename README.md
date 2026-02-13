HepatiScan AI
<div align="center"> <img width="1200" alt="HepatiScan AI Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" /> </div>
HepatiScan AI is an intelligent health companion that uses AI to assess liver health risks based on physical symptoms and visual indicators. It provides users with instant analysis, educational resources, personalized recommendations, and a directory of specialists – all within a clean, mobile-friendly interface.

✨ Features
AI-Powered Symptom Analysis – Describe symptoms or upload images; the app (via Gemini API) returns a potential liver condition, confidence score, and detected indicators.

Personalized Recommendations – Get actionable next steps based on your assessment.

Educational Library – Learn about common liver diseases (Hepatitis, Cirrhosis, Fatty Liver) with symptoms, precautions, and treatments.

Reports History – Keep track of past analyses stored locally in your browser.

Specialist Referrals – Find hepatologists and gastroenterologists nearby (sample data).

Help & Support – Frequently asked questions and app guidance.

Login (Demo) – Simulated user authentication for a personalised experience.

Responsive Design – Optimised for both desktop and mobile devices.

🛠️ Tech Stack
Frontend Framework: React 19 with TypeScript

Build Tool: Vite

Styling: Tailwind CSS

Icons: Lucide React

Charts: Recharts

AI Integration: Google GenAI SDK (Gemini API)

Local Storage: Persists analysis history

🚀 Getting Started
Prerequisites
Node.js (v18 or later)

A Gemini API key from Google AI Studio

Installation
Clone the repository (if you haven't already):

bash
git clone <your-repo-url>
cd hepatiscan-ai
Install dependencies:

bash
npm install
Set up environment variables:

Create a .env.local file in the root directory.

Add your Gemini API key:

text
GEMINI_API_KEY=your_api_key_here
Run the development server:

bash
npm run dev
The app will be available at http://localhost:3000.

Build for production:

bash
npm run build
The output will be in the dist folder.

🔐 Environment Variables
Variable	Description	Required
GEMINI_API_KEY	Your Google Gemini API key	Yes
📁 Project Structure
text
hepatiscan-ai/
├── public/                 # Static assets (if any)
├── src/
│   ├── components/         # Reusable UI components (Layout, etc.)
│   ├── pages/              # Application views
│   │   ├── Home.tsx
│   │   ├── Scanner.tsx
│   │   ├── Education.tsx
│   │   ├── Reports.tsx
│   │   ├── Referrals.tsx
│   │   ├── Help.tsx
│   │   └── Login.tsx
│   ├── types.ts            # TypeScript interfaces and enums
│   ├── constants.ts        # Static data (diseases, referrals)
│   ├── App.tsx             # Main app component with routing logic
│   └── index.tsx           # Entry point
├── .env.local.example      # Example environment variables (create your own)
├── index.html              # HTML template
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
🧠 How It Works
Home Screen – Start a new scan or navigate to other sections.

Scanner – Enter symptoms or (if implemented) capture an image. The app sends the data to Gemini AI, which returns a structured analysis.

Results – View the likely condition, confidence, matched symptoms, and recommended steps.

Referrals – Browse a list of liver specialists (sample data; can be extended).

Reports – Review your previous analyses stored in local storage.

Education – Read about common liver diseases and their management.

📱 Camera Permissions
The app requests camera access to enable visual symptom analysis (e.g., jaundice detection). This permission is only used when you explicitly start a scan.

🔮 Future Enhancements
Real image upload/analysis via Gemini Vision

User accounts with cloud sync

Integration with real specialist directories

Multi-language support

Push notifications for health reminders

📄 License
This project is intended for demonstration and educational purposes. All rights reserved.

🙌 Acknowledgements
Built with Google AI Studio and the Gemini API.
Icons by Lucide.

