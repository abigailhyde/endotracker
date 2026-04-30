import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";
import type { Observation } from "fhir/r4";

const client = new Anthropic({ apiKey: process.env.CLAUDE_API_KEY });

export async function POST(req: NextRequest) {
    const { observations }: { observations: Observation[] } = await req.json();

    const logLines = observations.map((obs) => {
        const date = obs.effectiveDateTime?.split("T")[0] ?? "Unknown date";
        const symptoms = obs.component
            ?.map((c) => c.code?.coding?.[0]?.display ?? c.code?.coding?.[0]?.code)
            .filter(Boolean)
            .join(", ");
        return `${date}: ${symptoms ?? "No symptoms recorded"}`;
    }).join("\n");

    const prompt = `You are a compassionate assistant helping a patient with endometriosis understand their symptoms and predict flare-ups.
Analyze the symptom log below. Identify patterns, note any clusters or recurring combinations, and predict when flareups may be likely. Be concise and patient-friendly. Do not ask for or prompt a response. Don't mention codes, only the name of the symptom logged, even if it doesn't match. Do not use any bold text, italics, or other markdown. Do not include a title or headings, keep it conversational. Less than 100 words.

Symptom Log (most recent first):
${logLines}`;

    const message = await client.messages.create({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 1024,
        messages: [{ role: "user", content: prompt }],
    });

    const insights = message.content[0].type === "text" ? message.content[0].text : "";
    return NextResponse.json({ insights });
}