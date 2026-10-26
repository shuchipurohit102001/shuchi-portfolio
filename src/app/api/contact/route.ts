import nodemailer from "nodemailer";
import { z } from "zod";

const recipient = "shuchipurohit102001@gmail.com";

const contactSchema = z.object({
  email: z.email().max(254),
  name: z.string().trim().min(2).max(80),
  query: z.enum([
    "1:1 coaching",
    "College or corporate workshop",
    "IELTS & TOEFL preparation",
    "Classroom-to-Corporate series",
    "Collaboration",
    "Other",
  ]),
  message: z.string().trim().min(10).max(2000),
});

export const runtime = "nodejs";

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Request body must be valid JSON." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return Response.json({ error: "Please check the form details and try again." }, { status: 400 });
  }

  const user = process.env.GMAIL_USER;
  const password = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, "");
  if (!user || !password) {
    return Response.json({ error: "Email sending is not configured. Please try again later." }, { status: 503 });
  }

  const { email, name, query, message } = parsed.data;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass: password },
  });

  try {
    await transporter.sendMail({
      from: { name: "Portfolio contact form", address: user },
      to: recipient,
      replyTo: { name, address: email },
      subject: `Portfolio inquiry: ${query}`,
      text: [`Name: ${name}`, `Email: ${email}`, `Query: ${query}`, "", message].join("\n"),
    });
    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact email delivery failed:", error instanceof Error ? error.message : "Unknown error");
    return Response.json({ error: "Could not send your message. Please try again later." }, { status: 502 });
  }
}
