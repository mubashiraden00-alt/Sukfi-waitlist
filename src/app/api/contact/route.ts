import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  try {
    await resend.emails.send({
      from: 'Sukfi Contact <hello@sukfi.com>',
      to: ['hello@sukfi.com'],
      subject: `New Message from ${name}`,
      text: `From: ${email}\n\n${message}`,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}
