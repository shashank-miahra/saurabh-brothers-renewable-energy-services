// End-to-end test: Form Submission → Supabase Save → WhatsApp Notification
const response = await fetch("http://localhost:3000/api/submit-lead", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name: "WhatsApp Test Lead",
    phone: "9876543210",
    city: "Lucknow",
    monthlyBill: "₹2500 - ₹4000",
    message: "Testing WhatsApp notification system"
  })
});
const data = await response.json();
console.log("─────────────────────────────────");
console.log("Status:", response.status);
console.log("Response:", JSON.stringify(data, null, 2));
console.log("─────────────────────────────────");
if (response.ok) {
  console.log("✅ Lead saved to Supabase!");
  console.log("📱 Check your WhatsApp for the notification.");
} else {
  console.log("❌ FAILED:", data.error);
}
