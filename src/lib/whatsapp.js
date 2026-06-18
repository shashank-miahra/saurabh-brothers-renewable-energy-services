// ─────────────────────────────────────────────────────
// WhatsApp Cloud API – Lead Notification System
// Sends a formatted WhatsApp message to the business owner
// whenever a new lead is submitted through the website.
//
// Required env vars (server-side only, NEVER exposed to client):
//   WHATSAPP_ACCESS_TOKEN       – Permanent or long-lived token
//   WHATSAPP_PHONE_NUMBER_ID    – Business phone number ID
//   WHATSAPP_RECIPIENT_NUMBER   – Owner's WhatsApp number (with country code, no +)
// ─────────────────────────────────────────────────────

const MAX_RETRIES = 3;
const API_VERSION = 'v21.0'; // Latest stable Graph API version

/**
 * Send a WhatsApp notification for a new lead.
 *
 * @param {Object} leadData
 * @param {string} leadData.name
 * @param {string} leadData.phone
 * @param {string} [leadData.city]
 * @param {string} [leadData.monthlyBill]
 * @param {string} [leadData.email]
 * @param {string} [leadData.message]
 * @param {number} [retryCount=0]  Internal – do not pass manually.
 * @returns {Promise<boolean>} true on success, false on failure.
 */
export async function sendWhatsAppNotification(leadData, retryCount = 0) {
  const {
    WHATSAPP_ACCESS_TOKEN,
    WHATSAPP_PHONE_NUMBER_ID,
    WHATSAPP_RECIPIENT_NUMBER,
  } = process.env;

  // ── Guard: skip silently if credentials are not configured ──
  if (!WHATSAPP_ACCESS_TOKEN || !WHATSAPP_PHONE_NUMBER_ID || !WHATSAPP_RECIPIENT_NUMBER) {
    console.warn(
      '[WhatsApp] Credentials not configured. Skipping notification. ' +
      'Set WHATSAPP_ACCESS_TOKEN, WHATSAPP_PHONE_NUMBER_ID, and WHATSAPP_RECIPIENT_NUMBER in .env.local'
    );
    return false;
  }

  // ── Build the message body ──
  const safe = (val) => (val && String(val).trim() ? String(val).trim() : 'Not Provided');

  const messageText = [
    '🔔 *New Solar Lead*',
    '',
    `*Name:* ${safe(leadData.name)}`,
    `*Phone:* ${safe(leadData.phone)}`,
    `*City:* ${safe(leadData.city)}`,
    `*Monthly Electricity Bill:* ₹${safe(leadData.monthlyBill)}`,
    leadData.email ? `*Email:* ${safe(leadData.email)}` : null,
    leadData.message ? `*Message:* ${safe(leadData.message)}` : null,
    '',
    `📅 _${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}_`,
  ]
    .filter(Boolean)
    .join('\n');

  const url = `https://graph.facebook.com/${API_VERSION}/${WHATSAPP_PHONE_NUMBER_ID}/messages`;

  const payload = {
    messaging_product: 'whatsapp',
    recipient_type: 'individual',
    to: WHATSAPP_RECIPIENT_NUMBER,
    type: 'text',
    text: {
      preview_url: false,
      body: messageText,
    },
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${WHATSAPP_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      const errMsg = data?.error?.message || response.statusText || 'Unknown error';
      throw new Error(`WhatsApp API ${response.status}: ${errMsg}`);
    }

    return true;
  } catch (error) {
    console.error(
      `[WhatsApp] ❌ Notification failed (attempt ${retryCount + 1}/${MAX_RETRIES + 1}):`,
      error.message
    );

    // ── Retry with exponential back-off ──
    if (retryCount < MAX_RETRIES) {
      const delayMs = Math.pow(2, retryCount) * 1000; // 1s → 2s → 4s
      console.log(`[WhatsApp] Retrying in ${delayMs / 1000}s...`);
      await new Promise((resolve) => setTimeout(resolve, delayMs));
      return sendWhatsAppNotification(leadData, retryCount + 1);
    }

    console.error('[WhatsApp] ⚠️ All retries exhausted. Notification not delivered.');
    return false;
  }
}
