import { GoogleGenAI } from '@google/genai';

const GEMINI_MODEL = "gemini-2.5-flash";
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const chatGemini = async (req, res) => {
    const { conversation } = req.body;

    try {
        if (!Array.isArray(conversation)) {
            throw new Error('Messages must be an array!');
        }

        const contents = conversation.map(({ role, text }) => ({
            role: role === 'user' ? 'user' : 'model',
            parts: [{ text }]
        }));

        const result = await ai.models.generateContent({
            model: GEMINI_MODEL,
            contents,
            systemInstruction: `Anda adalah asisten ahli edukasi Internet of Things (IoT). 
            Tugas Anda adalah membantu pengguna memahami konsep sensor, konektivitas, cloud, dan implementasi IoT.
            Gunakan bahasa Indonesia yang formal, sopan, dan edukatif.
            
            FITUR REKOMENDASI: 
            Di akhir setiap jawaban, berikan satu rekomendasi topik terkait atau proyek sederhana 
            yang bisa dipelajari pengguna selanjutnya untuk memperdalam materi tersebut.`,
            generationConfig: {
                temperature: 0.7,
                topP: 0.95,
            }
        });

        const responseText = result.text;
        res.status(200).json({ result: responseText });

    } catch (e) {
        console.error("Error pada chatGemini:", e);
        res.status(500).json({ error: e.message });
    }
};