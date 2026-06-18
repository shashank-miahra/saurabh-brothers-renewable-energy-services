"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Check, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", city: "", monthlyBill: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email || null,
          city: form.city || "Not Provided",
          monthlyBill: form.monthlyBill || "Not Provided",
          message: form.message
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        if (typeof window !== "undefined" && window.trackConversion) {
          window.trackConversion('generate_lead', { source: 'homepage_contact' });
        }
      } else {
        setErrorMsg(data.error || "Failed to submit request.");
      }
    } catch (err) {
      console.error("Submit error:", err);
      setErrorMsg("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact">
      {/* Contact Form & Details */}
      <section className="py-6 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-6 md:mb-16">
            <h2 className="text-lg md:text-[32px] font-bold text-gray-800 tracking-tight">
              The Way Beyond Results Starts Here
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-16 items-start">
            {/* Left: Contact Details */}
            <div>
              <h3 className="text-base md:text-2xl font-bold text-gray-800 mb-4 md:mb-8">Contact Details-</h3>

              <div className="flex flex-col gap-6">

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Call Us:</h4>
                    <p className="text-gray-600 text-sm">+91 70527 37431, +91 87369 67374</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Mail Us:</h4>
                    <p className="text-gray-600 text-sm">shivamsaurabh7373@gmail.com, supportsaurabhbrothers@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Working Hours:</h4>
                    <p className="text-gray-600 text-sm">Monday to Saturday | 08:00 AM – 8:30 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="w-full mt-4 md:mt-0">
              <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-4 md:p-8">
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
                    <p className="text-gray-500">We have received your message. Our team will get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="text-gray-700 text-sm font-semibold mb-2 block">Full Name *</label>
                        <input required type="text" maxLength={100} placeholder="Rajesh Kumar" value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm transition-all" />
                      </div>
                      <div>
                        <label className="text-gray-700 text-sm font-semibold mb-2 block">Phone Number *</label>
                        <input required type="tel" maxLength={15} placeholder="+91 98765 43210" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm transition-all" />
                      </div>
                      <div>
                        <label className="text-gray-700 text-sm font-semibold mb-2 block">City *</label>
                        <input required type="text" maxLength={100} placeholder="Lucknow" value={form.city} onChange={e => setForm({...form, city: e.target.value})}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm transition-all" />
                      </div>
                      <div>
                        <label className="text-gray-700 text-sm font-semibold mb-2 block">Email Address <span className="text-gray-400 font-normal">(Optional)</span></label>
                        <input type="email" maxLength={100} placeholder="rajesh@example.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm transition-all" />
                      </div>
                    </div>
                    <div>
                      <label className="text-gray-700 text-sm font-semibold mb-2 block">Monthly Electricity Bill (₹) *</label>
                      <input required type="text" maxLength={50} placeholder="e.g. ₹2,500 per month" value={form.monthlyBill} onChange={e => setForm({...form, monthlyBill: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm transition-all" />
                    </div>
                    <div>
                      <label className="text-gray-700 text-sm font-semibold mb-2 block">Message <span className="text-gray-400 font-normal">(Optional)</span></label>
                      <textarea rows={4} maxLength={1000} placeholder="How can we help you?" value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm resize-none transition-all" />
                    </div>
                    
                    {errorMsg && <p className="text-red-500 text-sm font-medium">{errorMsg}</p>}
                    
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-70 shadow-lg shadow-primary/20 mt-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>Send Message <ArrowRight className="w-5 h-5" /></>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
