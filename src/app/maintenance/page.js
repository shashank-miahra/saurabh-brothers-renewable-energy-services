"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Wrench, ShieldCheck, Clock, CalendarCheck, Phone, ArrowRight, Check, Zap } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import GoogleReviewPopup from "@/components/GoogleReviewPopup";

const services = [
  {
    icon: Wrench,
    title: "Annual Maintenance Contract (AMC)",
    description: "Comprehensive yearly maintenance plan covering regular inspections, cleaning, electrical checks, and performance optimization. Ensure your system runs at peak efficiency year-round."
  },
  {
    icon: ShieldCheck,
    title: "Inverter Servicing & Repair",
    description: "Expert diagnosis and repair of solar inverters. We stock common inverter parts to minimize downtime. Compatible with all major inverter brands installed across Uttar Pradesh."
  },
  {
    icon: Zap,
    title: "Performance Health Check",
    description: "Detailed audit of your solar system's output against expected generation. We identify degradation, wiring issues, shadow problems, and panel faults to restore full performance."
  },
  {
    icon: CalendarCheck,
    title: "Panel Cleaning Service",
    description: "Professional panel cleaning service to remove dust, bird droppings, and soiling — critical in UP's dusty conditions. A clean panel can generate 10–25% more energy."
  },
  {
    icon: Clock,
    title: "Emergency Breakdown Support",
    description: "Rapid response technical support for unexpected failures. Our service engineers are based across Uttar Pradesh for fast on-site assistance."
  },
  {
    icon: ShieldCheck,
    title: "Warranty Support & Claims",
    description: "We handle all warranty claims for panels and inverters on your behalf, coordinating with manufacturers to ensure you receive your entitled replacement or repair."
  }
];

export default function MaintenancePage() {
  const [form, setForm] = useState({ name: "", phone: "", city: "", installDate: "", issue: "" });
  const [submitted, setSubmitted] = useState(false);
  const [showReviewPopup, setShowReviewPopup] = useState(false);

  const ref = useRef(null);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 500], [0, 100]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setShowReviewPopup(true);
    if (typeof window !== "undefined" && window.trackConversion) {
      window.trackConversion('generate_lead', {
        source: 'maintenance_page_form',
        city: form.city || 'Not Provided'
      });
    }
  };

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section ref={ref} className="relative pt-32 pb-24 bg-[#f8fafc] overflow-hidden border-b border-gray-100">
        <motion.div style={{ y: bgY }} className="absolute inset-0 opacity-40">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl"></div>
        </motion.div>
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[13px] text-gray-400 mb-8">
            <Link href="/" className="hover:text-blue-600 transition-colors relative z-20">Home</Link>
            <span className="relative z-20">/</span>
            <span className="text-gray-600 relative z-20">Solar Maintenance</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-blue-600 text-sm font-bold tracking-widest uppercase mb-4">Solar Maintenance</p>
              <h1 className="text-[36px] md:text-[52px] font-bold text-gray-900 leading-tight mb-6">
                Keep Your Solar System Performing at Its Best
              </h1>
              <p className="text-[18px] text-gray-500 leading-relaxed mb-8">
                A poorly maintained solar system can lose 20–30% of its efficiency over time. Saurabh Brothers provides professional solar maintenance services across Uttar Pradesh to protect your investment.
              </p>
              <a href="#maintenance-form" className="bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors inline-flex items-center gap-2">
                Book a Service Visit <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "500+", label: "Systems Maintained" },
                { val: "10–25%", label: "Efficiency Restored" },
                { val: "24 hr", label: "Response Time" },
                { val: "75", label: "Districts Covered" }
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <h3 className="text-[28px] font-bold text-blue-600">{stat.val}</h3>
                  <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-[28px] md:text-[36px] font-bold text-gray-900">Our Maintenance Services</h2>
            <div className="w-12 h-1 bg-blue-600 mx-auto mt-4"></div>
            <p className="text-gray-500 mt-6 max-w-xl mx-auto">We service all brands and system types — regardless of whether we originally installed your system.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-[#f8fafc] rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-blue-600" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[17px] font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-[14px] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Maintenance Matters */}
      <section className="py-20 bg-[#0A1128] text-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-[28px] md:text-[36px] font-bold">Why Regular Maintenance Matters</h2>
            <p className="text-gray-400 mt-4">Solar panels are durable, but without care they lose efficiency and earnings every year.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { stat: "1–3%", label: "Annual efficiency loss from dust in UP's climate without cleaning" },
              { stat: "25 Years", label: "Expected system life with proper maintenance and care" },
              { stat: "₹50,000+", label: "Potential annual earnings lost from a poorly maintained 5kW system" }
            ].map((item, i) => (
              <div key={i} className="bg-white/10 border border-white/10 rounded-2xl p-8 text-center backdrop-blur-sm">
                <h3 className="text-[36px] font-bold text-blue-400 mb-3">{item.stat}</h3>
                <p className="text-gray-300 text-[14px] leading-relaxed">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-[20px] font-bold text-gray-900 mb-6">Related Services & Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/residential" className="bg-[#f8fafc] rounded-xl border border-gray-100 p-6 hover:shadow-md transition-all group">
              <h3 className="font-bold text-gray-900 text-[16px] mb-2 group-hover:text-blue-600">Residential Solar Installation</h3>
              <p className="text-gray-500 text-[14px]">Need a new solar system? We install residential systems across all 75 UP districts.</p>
            </Link>
            <Link href="/commercial" className="bg-[#f8fafc] rounded-xl border border-gray-100 p-6 hover:shadow-md transition-all group">
              <h3 className="font-bold text-gray-900 text-[16px] mb-2 group-hover:text-blue-600">Commercial Solar Installation</h3>
              <p className="text-gray-500 text-[14px]">Power your business with solar and cut energy costs by 60-80%.</p>
            </Link>
            <Link href="/blog/solar-panel-maintenance-tips-up-climate" className="bg-[#f8fafc] rounded-xl border border-gray-100 p-6 hover:shadow-md transition-all group">
              <h3 className="font-bold text-gray-900 text-[16px] mb-2 group-hover:text-blue-600">Maintenance Tips for UP Climate</h3>
              <p className="text-gray-500 text-[14px]">Read our detailed guide on keeping panels efficient in UP&apos;s dusty weather.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="maintenance-form" className="py-20 bg-[#f8fafc]">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-[28px] md:text-[36px] font-bold text-gray-900">Book a Maintenance Visit</h2>
            <p className="text-gray-500 mt-4">Fill in your details and our service team will confirm an appointment within 24 hours.</p>
          </div>
          {submitted ? (
            <div className="bg-white border border-gray-100 rounded-2xl p-12 text-center shadow-sm">
              <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Booking Confirmed!</h3>
              <p className="text-gray-500">Our service team will contact you within 24 hours to schedule your visit.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-gray-700 text-sm font-medium mb-2 block">Your Name *</label>
                  <input required type="text" placeholder="Amit Kumar" value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 text-sm" />
                </div>
                <div>
                  <label className="text-gray-700 text-sm font-medium mb-2 block">Phone Number *</label>
                  <input required type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 text-sm" />
                </div>
                <div>
                  <label className="text-gray-700 text-sm font-medium mb-2 block">City / District *</label>
                  <input required type="text" placeholder="Lucknow" value={form.city} onChange={e => setForm({...form, city: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 text-sm" />
                </div>
                <div>
                  <label className="text-gray-700 text-sm font-medium mb-2 block">Approximate Installation Date</label>
                  <input type="text" placeholder="e.g. March 2022" value={form.installDate} onChange={e => setForm({...form, installDate: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 text-sm" />
                </div>
              </div>
              <div>
                <label className="text-gray-700 text-sm font-medium mb-2 block">Describe the Issue or Service Needed</label>
                <textarea rows={4} placeholder="e.g. System output has reduced, inverter showing error, need annual cleaning..." value={form.issue} onChange={e => setForm({...form, issue: e.target.value})}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 text-sm resize-none" />
              </div>
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition-colors flex items-center justify-center gap-2">
                Book Service Visit <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-gray-400 text-xs text-center">We service all brands and system types across Uttar Pradesh.</p>
            </form>
          )}
        </div>
      </section>

      <Footer />

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Solar Panel Maintenance and Repair",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Saurabh Brothers",
              "url": "https://saurabhbrothers.in/"
            },
            "areaServed": {
              "@type": "State",
              "name": "Uttar Pradesh"
            },
            "description": "Need solar panel maintenance, cleaning, or inverter repair near you? Saurabh Brothers offers expert AMC and solar repair services across Lucknow and UP."
          })
        }}
      />
      <GoogleReviewPopup 
        isOpen={showReviewPopup} 
        onClose={() => setShowReviewPopup(false)} 
        reviewLink="#" 
      />
    </>
  );
}
