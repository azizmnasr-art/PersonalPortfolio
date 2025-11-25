import { GoogleGenAI, Chat } from "@google/genai";
import { PROJECTS, ARTICLES, SKILLS_DATA } from '../constants';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are the AI Assistant for a portfolio website.
The owner is a multidisciplinary engineer and designer with skills in: ${SKILLS_DATA.map(s => s.label).join(', ')}.

Here is a list of their key projects:
${JSON.stringify(PROJECTS.map(p => ({ title: p.title, description: p.description, tech: p.tags, category: p.category })))}

Here are some articles they have written:
${JSON.stringify(ARTICLES.map(a => ({ title: a.title, summary: a.excerpt, category: a.category })))}

Your goal is to answer visitor questions about the owner's skills, experience, and work.
Be professional, concise, and friendly.
If asked about contact info, suggest they use the contact form at the bottom of the page.
If asked about something not in the data, politely say you don't have that specific information but can tell them about the projects listed.
Keep answers under 3 sentences unless asked for a detailed explanation.
`;

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = getChatSession();
    const result = await chat.sendMessage({ message });
    return result.text || "I'm having trouble thinking right now. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I encountered an error connecting to my brain. Please try again later.";
  }
};
