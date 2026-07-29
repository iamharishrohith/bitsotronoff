import { NextResponse } from 'next/server';
import { newsletterSchema } from '@/lib/zod-schemas';
import { checkRateLimit } from '@/lib/rate-limit';

export async function POST(req: Request) {
  try {
    const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';
    const rateCheck = checkRateLimit(ip, 5, 60000);

    if (!rateCheck.success) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    const body = await req.json();
    const result = newsletterSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    console.log('[Newsletter API] Subscribed:', result.data.email);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Newsletter API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
