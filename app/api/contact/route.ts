import { NextResponse } from 'next/server';
import DOMPurify from 'isomorphic-dompurify';
import { contactSchema } from '@/lib/zod-schemas';
import { checkRateLimit } from '@/lib/rate-limit';

export async function POST(req: Request) {
  try {
    const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';
    const rateCheck = checkRateLimit(ip, 5, 60000);

    if (!rateCheck.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait before submitting again.' },
        { status: 429 }
      );
    }

    const body = await req.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: result.error.flatten() },
        { status: 400 }
      );
    }

    // Sanitize input with DOMPurify
    const cleanData = {
      name: DOMPurify.sanitize(result.data.name),
      email: DOMPurify.sanitize(result.data.email),
      subject: DOMPurify.sanitize(result.data.subject),
      message: DOMPurify.sanitize(result.data.message),
    };

    // Forward to Resend API (or mock if no RESEND_API_KEY provided)
    if (process.env.RESEND_API_KEY) {
      const resendRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'contact@bitsotron.com',
          to: 'bitsotron@gmail.com',
          subject: `Contact Form: ${cleanData.subject}`,
          html: `<p><strong>Name:</strong> ${cleanData.name}</p><p><strong>Email:</strong> ${cleanData.email}</p><p><strong>Message:</strong> ${cleanData.message}</p>`,
        }),
      });

      if (!resendRes.ok) {
        console.error('Resend API error:', await resendRes.text());
      }
    } else {
      console.log('[Mock Resend API] Contact form submission routed to bitsotron@gmail.com:', cleanData);
    }

    return NextResponse.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
