import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const QUOTES_FILE = path.join(process.cwd(), "data", "quotes.json");

export async function GET() {
  try {
    const raw = await fs.readFile(QUOTES_FILE, "utf-8").catch(() => "[]");
    const list = JSON.parse(raw);
    return NextResponse.json(Array.isArray(list) ? list : []);
  } catch {
    return NextResponse.json([]);
  }
}
