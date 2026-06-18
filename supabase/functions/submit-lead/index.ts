// Follows standard Supabase Edge Function structure using Deno
import { serve } from "https://deno.land/std@0.192.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

// Configure CORS
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Types
interface LeadPayload {
  name: string;
  phone: string;
  email?: string;
  city?: string;
  monthly_bill?: string;
  roof_type?: string;
  message?: string;
  captchaToken: string;
}

// 1. Send Email Notification via Resend
async function sendEmailNotification(lead: any, RESEND_API_KEY: string) {
  const html = `
    <h2>New Lead Received!</h2>
    <p><strong>Name:</strong> ${lead.name}</p>
    <p><strong>Phone:</strong> ${lead.phone}</p>
    <p><strong>Email:</strong> ${lead.email || 'N/A'}</p>
    <p><strong>City:</strong> ${lead.city || 'N/A'}</p>
    <p><strong>Monthly Bill:</strong> ${lead.monthly_bill || 'N/A'}</p>
    <p><strong>Roof Type:</strong> ${lead.roof_type || 'N/A'}</p>
    <p><strong>Message:</strong> ${lead.message || 'N/A'}</p>
  `;

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Solar Leads <leads@yoursolardomain.com>',
        to: [Deno.env.get("SALES_EMAIL") || 'sales@yoursolardomain.com'],
        subject: `New Lead: ${lead.name}`,
        html,
      }),
    });
    if (!res.ok) console.error('Error sending email:', await res.text());
  } catch (error) {
    console.error('Email notification failed:', error);
  }
}

// 2. Send WhatsApp Notification via Twilio
async function sendWhatsAppNotification(lead: any, TWILIO_ACCOUNT_SID: string, TWILIO_AUTH_TOKEN: string, TWILIO_FROM: string, SALES_WHATSAPP: string) {
  const message = `New Solar Lead! 🌞
Name: ${lead.name}
Phone: ${lead.phone}
City: ${lead.city || 'N/A'}
Bill: ${lead.monthly_bill || 'N/A'}
Roof: ${lead.roof_type || 'N/A'}
Message: ${lead.message || 'N/A'}`;

  const body = new URLSearchParams({
    To: `whatsapp:${SALES_WHATSAPP}`,
    From: `whatsapp:${TWILIO_FROM}`,
    Body: message
  });

  try {
    const res = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${btoa(`${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`)}`
      },
      body: body.toString(),
    });
    if (!res.ok) console.error('Error sending WhatsApp:', await res.text());
  } catch (error) {
    console.error('WhatsApp notification failed:', error);
  }
}

// 3. Verify hCaptcha (Example)
async function verifyCaptcha(token: string, secret: string): Promise<boolean> {
  try {
    const response = await fetch('https://hcaptcha.com/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        response: token,
        secret: secret,
      }),
    });
    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error('Captcha verification failed:', error);
    return false;
  }
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const clientIp = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    
    // Use the Service Role Key to bypass RLS and insert securely
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Parse payload
    const payload: LeadPayload = await req.json();
    const { name, phone, email, city, monthly_bill, roof_type, message, captchaToken } = payload;

    if (!name || !phone) {
      return new Response(JSON.stringify({ error: "Name and Phone are required" }), { 
        status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      });
    }

    // Rate Limiting (Simple IP check via DB)
    // Check if this IP has submitted more than 3 leads in the last hour
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
    const { data: recentLeads, error: rateLimitError } = await supabase
      .from('leads')
      .select('id')
      .eq('client_ip', clientIp)
      .gte('created_at', oneHourAgo);

    if (rateLimitError) {
      console.error('Rate limit DB check error:', rateLimitError);
    }
    
    if (recentLeads && recentLeads.length >= 3) {
      return new Response(JSON.stringify({ error: "Too many requests. Please try again later." }), { 
        status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      });
    }

    // Captcha Verification
    const captchaSecret = Deno.env.get("HCAPTCHA_SECRET");
    let isSpam = false;
    
    if (captchaSecret && captchaToken) {
      const isValid = await verifyCaptcha(captchaToken, captchaSecret);
      if (!isValid) {
        return new Response(JSON.stringify({ error: "Invalid Captcha. Please verify you are human." }), { 
          status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        });
      }
    } else if (!captchaToken && captchaSecret) {
      // If secret exists but no token is provided
      return new Response(JSON.stringify({ error: "Captcha token is required." }), { 
        status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      });
    }

    // Insert into Supabase
    const { data: newLead, error: insertError } = await supabase
      .from('leads')
      .insert({
        name,
        phone,
        email,
        city,
        monthly_bill,
        roof_type,
        message,
        client_ip: clientIp,
        is_spam: isSpam
      })
      .select()
      .single();

    if (insertError) {
      throw insertError;
    }

    // Send Notifications (Non-blocking)
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (resendApiKey) {
      sendEmailNotification(newLead, resendApiKey);
    }

    const twilioSid = Deno.env.get("TWILIO_ACCOUNT_SID");
    const twilioAuth = Deno.env.get("TWILIO_AUTH_TOKEN");
    const twilioFrom = Deno.env.get("TWILIO_FROM_NUMBER");
    const salesWhatsapp = Deno.env.get("SALES_WHATSAPP_NUMBER");
    
    if (twilioSid && twilioAuth && twilioFrom && salesWhatsapp) {
      sendWhatsAppNotification(newLead, twilioSid, twilioAuth, twilioFrom, salesWhatsapp);
    }

    return new Response(JSON.stringify({ success: true, leadId: newLead.id }), { 
      status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
    });

  } catch (error: any) {
    console.error("Internal Server Error:", error);
    return new Response(JSON.stringify({ error: error.message || "Internal Server Error" }), { 
      status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
    });
  }
});
