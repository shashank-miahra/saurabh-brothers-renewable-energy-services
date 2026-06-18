import { NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabaseClient';
import { sendWhatsAppNotification } from '@/lib/whatsapp';

// ─── In-Memory Rate Limit Store ───
// Persists across requests within a single serverless instance.
// Each IP gets max 5 submissions per 15-minute window.
const rateLimitMap = new Map();

// ── POST /api/submit-lead ──
// Receives form data from Contact component → validates → inserts into `leads` table.
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, city, monthlyBill, roofType, message } = body;

    // ─── Capture client IP for Rate Limiting ───
    const forwarded = request.headers.get('x-forwarded-for');
    const clientIp = forwarded ? forwarded.split(',')[0].trim() : request.headers.get('x-real-ip') || 'unknown';

    // ─── Basic In-Memory Rate Limiting ───
    // Limit: 5 requests per 15 minutes per IP
    const now = Date.now();
    const windowMs = 15 * 60 * 1000;
    const maxRequests = 5;
    
    // Cleanup old entries randomly (1 in 10 requests) to prevent memory leak
    if (Math.random() < 0.1) {
      for (const [ip, data] of rateLimitMap.entries()) {
        if (now - data.timestamp > windowMs) rateLimitMap.delete(ip);
      }
    }

    const rateData = rateLimitMap.get(clientIp) || { count: 0, timestamp: now };
    
    if (now - rateData.timestamp < windowMs) {
      if (rateData.count >= maxRequests) {
        return NextResponse.json(
          { error: 'Too many requests. Please try again later.' },
          { status: 429 }
        );
      }
      rateData.count++;
    } else {
      rateData.count = 1;
      rateData.timestamp = now;
    }
    rateLimitMap.set(clientIp, rateData);

    // ─── Validation & Security Limits ───
    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Name is required (minimum 2 characters).' },
        { status: 400 }
      );
    }
    
    // Max length checks to prevent payload size DoS attacks
    if (name.length > 100 || 
       (message && message.length > 1000) || 
       (city && city.length > 100) || 
       (email && email.length > 100) ||
       (monthlyBill && String(monthlyBill).length > 50)) {
      return NextResponse.json(
        { error: 'Input exceeds maximum allowed length.' },
        { status: 400 }
      );
    }

    // Clean phone number: remove spaces, hyphens, and '+'
    const cleanPhone = phone ? phone.replace(/[\s\-\+]/g, '') : '';
    // If it starts with 91 and is 12 digits, strip the 91 country code
    const finalPhone = cleanPhone.length === 12 && cleanPhone.startsWith('91') ? cleanPhone.slice(2) : cleanPhone;

    if (!finalPhone || !/^[6-9]\d{9}$/.test(finalPhone)) {
      return NextResponse.json(
        { error: 'Please provide a valid 10-digit Indian phone number.' },
        { status: 400 }
      );
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // (IP already captured above for rate limiting)

    // ─── Insert into Supabase ───
    const supabase = getSupabaseAdmin();

    const { data, error } = await supabase
      .from('leads')
      .insert({
        name: name.trim(),
        phone: finalPhone,
        email: email?.trim() || null,
        city: city?.trim() || null,
        monthly_bill: monthlyBill ? String(monthlyBill).trim() : null,
        roof_type: roofType || null,
        message: message?.trim() || null,
      })
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        { error: 'Failed to save your request. Please try again.' },
        { status: 500 }
      );
    }

    // ─── Send WhatsApp notification (fire-and-forget) ───
    sendWhatsAppNotification({
      name: name.trim(),
      phone: finalPhone,
      city: city?.trim() || null,
      monthlyBill: monthlyBill ? String(monthlyBill).trim() : null,
      email: email?.trim() || null,
      message: message?.trim() || null,
    }).catch((err) => {
      console.error('[submit-lead] WhatsApp notification failed:', err.message);
    });

    return NextResponse.json(
      { success: true, leadId: data.id },
      { status: 200 }
    );
  } catch (err) {
    console.error('[submit-lead] Unexpected error:', err);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}
