import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export interface QuotePayload {
  full_name: string;
  company?: string;
  email: string;
  phone: string;
  industry: string;
  quantity?: string;
  requirements?: string;
}

function validatePayload(body: Record<string, unknown>): { ok: true; data: QuotePayload } | { ok: false; error: string } {
  const full_name = typeof body.full_name === "string" ? body.full_name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const industry = typeof body.industry === "string" ? body.industry.trim() : "";

  if (!full_name || full_name.length < 2) {
    return { ok: false, error: "Full name is required (at least 2 characters)." };
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "A valid email address is required." };
  }
  if (!phone || phone.length < 8) {
    return { ok: false, error: "A valid phone/WhatsApp number is required." };
  }
  if (!industry) {
    return { ok: false, error: "Please select an industry." };
  }

  return {
    ok: true,
    data: {
      full_name,
      company: typeof body.company === "string" ? body.company.trim() : undefined,
      email,
      phone,
      industry,
      quantity: typeof body.quantity === "string" ? body.quantity : undefined,
      requirements: typeof body.requirements === "string" ? body.requirements.trim() : undefined,
    },
  };
}

const QUOTES_FILE = path.join(process.cwd(), "data", "quotes.json");

async function appendQuote(data: QuotePayload & { submittedAt: string }) {
  try {
    await fs.mkdir(path.dirname(QUOTES_FILE), { recursive: true });
    let list: (QuotePayload & { submittedAt: string })[] = [];
    try {
      const raw = await fs.readFile(QUOTES_FILE, "utf-8");
      list = JSON.parse(raw);
    } catch {
      // file missing or invalid
    }
    list.push(data);
    await fs.writeFile(QUOTES_FILE, JSON.stringify(list, null, 2), "utf-8");
  } catch (err) {
    console.error("Failed to save quote:", err);
    throw new Error("Failed to save submission.");
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = validatePayload(body);
    if (!validated.ok) {
      return NextResponse.json({ success: false, error: validated.error }, { status: 400 });
    }
    const payload = {
      ...validated.data,
      submittedAt: new Date().toISOString(),
    };
    await appendQuote(payload);
    return NextResponse.json({ success: true, message: "Quote request received. We'll be in touch within 24 hours." });
  } catch (e) {
    console.error("Quote API error:", e);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again or contact us via WhatsApp." },
      { status: 500 }
    );
  }
}
