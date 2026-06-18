// Get the WhatsApp Business phone number from the Phone Number ID
const phoneNumberId = "1228383943683973";
const accessToken = process.env.WHATSAPP_ACCESS_TOKEN || "EAFZCySLSYdAoBRviDVNfNB5w3ZCiCZClglG6MNF7GZAgSYNOZCegSXhgDSeIbQwDzs5D68RSrRbZBXcTuceDmgcW6Y82b5nKTXFAYIgG2pbR93xnwn1HeG8JZAxhgmDTY87ai3DsMeohP89FftroTAJRUqewhtyJX9zIoAQtczcNZBoJZBlTSgkab4qqhEg0XCXGQqkZBaVVo6VbqrEBgQk8BshTFMabFNurFohzgIX88YTGZCsWqei0YEd6tBdRcACTZA2Vb77hO9bYA1goXwAZAs4v5jbNKEyanbLcuSt9frwZDZD";

const res = await fetch(`https://graph.facebook.com/v21.0/${phoneNumberId}?fields=display_phone_number,verified_name`, {
  headers: { Authorization: `Bearer ${accessToken}` }
});
const data = await res.json();
console.log("Your WhatsApp Business Number:", data.display_phone_number);
console.log("Business Name:", data.verified_name);
