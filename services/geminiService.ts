
import { GoogleGenAI, Type } from "@google/genai";
import { AnalysisResult } from "../types";

// Fix: Always use process.env.API_KEY directly in the constructor configuration.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzeSymptoms = async (
  imageB64?: string, 
  textSymptoms?: string
): Promise<AnalysisResult> => {
  // Fix: Selecting 'gemini-3-pro-preview' for complex reasoning/medical analysis tasks.
  const model = 'gemini-3-pro-preview';
  
  const systemInstruction = `
    You are an expert Hepatology assistant. 
    Analyze the provided physical symptoms (image and/or text).
    Assess potential liver diseases. 
    Return a structured JSON response.
    DISCLAIMER: State clearly that this is NOT a medical diagnosis.
  `;

  const prompt = `
    Analyze these symptoms:
    ${textSymptoms ? `Text input: ${textSymptoms}` : "No text input provided."}
    ${imageB64 ? "Image provided for visual analysis." : "No image provided."}
    
    Look for: Jaundice (yellowing of eyes/skin), swelling (ascites), skin rashes (spider angiomas), or palm redness.
    
    Output JSON format:
    {
      "diagnosis": "Most likely condition",
      "probability": "Percentage string",
      "symptoms": ["list of identified symptoms"],
      "recommendations": ["next steps"],
      "severity": "Low|Moderate|High|Critical"
    }
  `;

  const parts: any[] = [{ text: prompt }];
  if (imageB64) {
    parts.push({
      inlineData: {
        mimeType: "image/jpeg",
        data: imageB64.split(',')[1] || imageB64
      }
    });
  }

  const response = await ai.models.generateContent({
    model,
    contents: { parts },
    config: {
      systemInstruction,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          diagnosis: { type: Type.STRING },
          probability: { type: Type.STRING },
          symptoms: { type: Type.ARRAY, items: { type: Type.STRING } },
          recommendations: { type: Type.ARRAY, items: { type: Type.STRING } },
          severity: { type: Type.STRING }
        },
        required: ["diagnosis", "probability", "symptoms", "recommendations", "severity"]
      }
    }
  });

  // Fix: response.text is a property, not a method.
  const result = JSON.parse(response.text || '{}');
  return {
    ...result,
    timestamp: Date.now()
  };
};
