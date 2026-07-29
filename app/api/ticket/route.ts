import { NextResponse } from 'next/server';
import DOMPurify from 'isomorphic-dompurify';
import { ticketSchema } from '@/lib/zod-schemas';
import { checkRateLimit } from '@/lib/rate-limit';

export async function POST(req: Request) {
  try {
    const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';
    const rateCheck = checkRateLimit(ip, 5, 60000);

    if (!rateCheck.success) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please wait a minute.' },
        { status: 429 }
      );
    }

    const body = await req.json();
    const result = ticketSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid form input', details: result.error.flatten() },
        { status: 400 }
      );
    }

    const cleanData = {
      name: DOMPurify.sanitize(result.data.name),
      email: DOMPurify.sanitize(result.data.email),
      product: DOMPurify.sanitize(result.data.product),
      severity: result.data.severity,
      description: DOMPurify.sanitize(result.data.description),
    };

    // Forward to Zendesk API if credentials exist
    if (process.env.ZENDESK_SUBDOMAIN && process.env.ZENDESK_API_TOKEN) {
      await fetch(`https://${process.env.ZENDESK_SUBDOMAIN}.zendesk.com/api/v2/tickets.json`, {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${Buffer.from(`${process.env.ZENDESK_EMAIL}/token:${process.env.ZENDESK_API_TOKEN}`).toString('base64')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ticket: {
            subject: `[${cleanData.severity.toUpperCase()}] ${cleanData.product} Support Request`,
            comment: { body: cleanData.description },
            requester: { name: cleanData.name, email: cleanData.email },
          },
        }),
      });
    } else {
      console.log('[Mock Zendesk/Freshdesk API] Support Ticket Created:', cleanData);
    }

    const ticketId = 'TCK-' + Math.floor(100000 + Math.random() * 900000);
    return NextResponse.json({
      success: true,
      ticketId,
      message: `Support ticket ${ticketId} generated successfully.`,
    });
  } catch (error) {
    console.error('Ticket API Error:', error);
    return NextResponse.json({ error: 'Failed to create support ticket' }, { status: 500 });
  }
}
