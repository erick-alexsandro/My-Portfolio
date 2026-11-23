import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";

export async function POST(req: Request) {
  const parsed = contactSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
  }
  const { name, email, message } = parsed.data;
  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;

  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    console.info("[contact] Email env vars missing, message not sent:", {
      name,
      email,
    });
    return NextResponse.json({ ok: true, delivered: false });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      reply_to: email,
      subject: `Portfolio message from ${name}`,
      text: message,
    }),
  });

  if (!res.ok)
    return NextResponse.json(
      { error: "Could not send the message." },
      { status: 502 },
    );
  return NextResponse.json({ ok: true, delivered: true });
}
