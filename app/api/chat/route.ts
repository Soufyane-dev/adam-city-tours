import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { message, history } = await req.json();

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Gemini API key is missing. Please set GEMINI_API_KEY in .env.local" }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction: "You are Karim, a highly knowledgeable, polite, and eloquent AI tour guide for Mortours, a luxury travel agency in Morocco. Mortours offers premium guided tours, luxury desert camps, and unforgettable cultural journeys. Provide concise, friendly, and helpful answers (keep responses brief unless the user asks for a detailed itinerary or story). Gently encourage the user to book tours. Default to English, but reply in the user's language if they speak another language."
    });

    const chat = model.startChat({
        history: history || [],
    });

    const result = await chat.sendMessage(message);
    const text = result.response.text();

    return NextResponse.json({ response: text });
  } catch (error: unknown) {
    console.error("Gemini API Error:", error);
    const message =
      error instanceof Error ? error.message : "Karim encountered an error while processing your request.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
