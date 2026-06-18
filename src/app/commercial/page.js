"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Building2, Zap, ShieldCheck, TrendingDown, Users, Wrench, Phone, ArrowRight, Check, Factory, Warehouse, Building, Stethoscope, Hotel, GraduationCap, ShoppingBag, Snowflake } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import GoogleReviewPopup from "@/components/GoogleReviewPopup";

const benefits = [
  {
    icon: TrendingDown,
    title: "Reduce Operating Costs",
    description: "Cut your monthly electricity bills by 60–80%. A commercial solar system typically pays for itself in 3–5 years, delivering decades of free power."
  },
  {
    icon: ShieldCheck,
    title: "25-Year Warranty",
    description: "We use only Tier-1 solar panels backed by manufacturer warranties, ensuring long-term reliability and consistent output."
  },
  {
    icon: Wrench,
    title: "End-to-End Installation",
    description: "From site survey and design to installation, net-metering registration, and commissioning — we handle everything. Zero hassle for your team."
  },
  {
    icon: Users,
    title: "Dedicated Manager",
    description: "Every commercial project gets a dedicated account manager who coordinates with your team throughout the entire process."
  },
  {
    icon: Zap,
    title: "Minimal Disruption",
    description: "Our experienced crews complete installations efficiently, scheduled around your business hours to minimize disruption."
  },
  {
    icon: ShieldCheck,
    title: "Post-Installation Support",
    description: "We provide regular maintenance visits, performance monitoring, and rapid response to any technical issues."
  }
];

const sectorsList = [
  { name: "Factories & Manufacturing", icon: Factory },
  { name: "Warehouses & Logistics", icon: Warehouse },
  { name: "Office Complexes", icon: Building },
  { name: "Hospitals & Clinics", icon: Stethoscope },
  { name: "Hotels & Resorts", icon: Hotel },
  { name: "Schools & Colleges", icon: GraduationCap },
  { name: "Shopping Malls", icon: ShoppingBag },
  { name: "Cold Storage", icon: Snowflake }
];

export default function CommercialPage() {
  const [form, setForm] = useState({ name: "", business: "", phone: "", email: "", capacity: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [showReviewPopup, setShowReviewPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email || null,
          city: "Commercial Lead",
          monthlyBill: form.capacity,
          message: `Business: ${form.business} | Additional Details: ${form.message}`
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setShowReviewPopup(true);
        if (typeof window !== "undefined" && window.trackConversion) {
          window.trackConversion('generate_lead', {
            source: 'commercial_page_form',
            business: form.business || 'Not Provided'
          });
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
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-32 md:pb-48 bg-slate-900 text-white">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/commercial_hero.png')" }}
        ></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/30"></div>
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[13px] text-gray-300 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-blue-400 font-medium">Commercial Solar</span>
          </div>

          <div className="max-w-2xl">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-blue-400 text-sm font-bold tracking-widest uppercase mb-4"
            >
              Enterprise Solutions
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[40px] md:text-[60px] font-bold leading-tight mb-6"
            >
              Power Your Business <br className="hidden md:block"/> With Solar Energy
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[18px] text-gray-300 leading-relaxed mb-10 max-w-xl"
            >
              Saurabh Brothers delivers complete commercial solar installation services across Uttar Pradesh. We handle everything from design to commissioning.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#commercial-form" className="bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all flex items-center justify-center gap-2 group">
                Get a Free Site Assessment <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="tel:+917052737431" className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" /> Call Us Now
              </a>
            </motion.div>
          </div>
        </div>

        {/* Floating Stats - Positioned at the bottom overlapping the next section */}
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 z-20 hidden md:block">
          <div className="container mx-auto px-6 max-w-6xl">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-4 gap-6"
            >
              {[
                { val: "500+", label: "Commercial Projects" },
                { val: "5+ MW", label: "Capacity Installed" },
                { val: "10+ yrs", label: "Industry Experience" },
                { val: "75", label: "Districts in UP" }
              ].map((stat, i) => (
                <div key={i} className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <h3 className="text-[36px] font-bold text-slate-900 mb-1 relative z-10">{stat.val}</h3>
                  <p className="text-blue-600 font-bold tracking-wide uppercase text-xs relative z-10">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mobile Stats (Visible only on mobile) */}
      <section className="bg-slate-900 py-8 md:hidden relative z-20 border-t border-white/10">
        <div className="container mx-auto px-6 grid grid-cols-2 gap-4">
          {[
            { val: "500+", label: "Commercial Projects" },
            { val: "5+ MW", label: "Capacity Installed" },
            { val: "10+ yrs", label: "Industry Experience" },
            { val: "75", label: "Districts in UP" }
          ].map((stat, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
              <h3 className="text-[28px] font-bold text-white mb-1">{stat.val}</h3>
              <p className="text-blue-300 font-medium text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sectors We Serve */}
      <section className="py-24 bg-slate-50 md:pt-40">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-3">Industries</p>
            <h2 className="text-[32px] md:text-[40px] font-bold text-slate-900">Sectors We Serve</h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-lg">We have successfully executed high-capacity solar projects across a diverse range of commercial and industrial segments.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {sectorsList.map((sector, i) => {
              const Icon = sector.icon;
              return (
                <div key={i} className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all cursor-default">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon strokeWidth={1.5} className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-800 group-hover:text-blue-700 transition-colors">{sector.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-3">Why Us</p>
            <h2 className="text-[32px] md:text-[40px] font-bold text-slate-900">Why Businesses Choose Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                    <Icon className="w-7 h-7 text-blue-600" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[20px] font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 text-[15px] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-20">
            <p className="text-blue-400 font-bold tracking-wide uppercase text-sm mb-3">Process</p>
            <h2 className="text-[32px] md:text-[40px] font-bold">Our Installation Workflow</h2>
          </div>
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-[23px] top-4 bottom-4 w-1 bg-gradient-to-b from-blue-500 to-slate-800 md:left-1/2 md:-ml-[2px]"></div>
            
            <div className="flex flex-col gap-12">
              {[
                { num: "01", title: "Free Site Assessment", desc: "Our engineers visit your facility to evaluate roof structure, shadow analysis, load pattern, and grid connectivity." },
                { num: "02", title: "Custom System Design", desc: "We design a system specific to your consumption profile, budget, and roof space — with full technical and financial projections." },
                { num: "03", title: "Proposal & Approval", desc: "You receive a detailed proposal. Once approved, we take care of all government permissions and DISCOM paperwork." },
                { num: "04", title: "Professional Installation", desc: "Our certified installation team executes the project with minimal disruption to your daily operations." },
                { num: "05", title: "Commissioning & Handover", desc: "We test the complete system, commission it, and hand over all documentation including warranties and service schedules." },
              ].map((step, i) => (
                <div key={i} className={`relative flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Circle Marker */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full bg-blue-600 border-4 border-slate-900 flex items-center justify-center font-bold text-white z-10 shadow-lg">
                    {step.num}
                  </div>
                  
                  {/* Content Box */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-2xl hover:bg-slate-800 transition-colors">
                      <h3 className="font-bold text-[20px] mb-3 text-white">{step.title}</h3>
                      <p className="text-slate-400 text-[15px] leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-[24px] font-bold text-slate-900 mb-8">Explore More Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/residential" className="bg-slate-50 rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:border-blue-200 transition-all group">
              <h3 className="font-bold text-slate-900 text-[18px] mb-2 group-hover:text-blue-600 flex items-center justify-between">
                Residential Solar <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </h3>
              <p className="text-slate-500 text-[14px] leading-relaxed">Home solar solutions with government subsidy support across UP.</p>
            </Link>
            <Link href="/maintenance" className="bg-slate-50 rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:border-blue-200 transition-all group">
              <h3 className="font-bold text-slate-900 text-[18px] mb-2 group-hover:text-blue-600 flex items-center justify-between">
                Solar Maintenance <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </h3>
              <p className="text-slate-500 text-[14px] leading-relaxed">AMC, panel cleaning, inverter repair and emergency support.</p>
            </Link>
            <Link href="/blog/solar-panel-installation-cost-uttar-pradesh-2025" className="bg-slate-50 rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:border-blue-200 transition-all group">
              <h3 className="font-bold text-slate-900 text-[18px] mb-2 group-hover:text-blue-600 flex items-center justify-between">
                Solar Cost Guide 2025 <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </h3>
              <p className="text-slate-500 text-[14px] leading-relaxed">Complete pricing breakdown and ROI calculator for UP.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section id="commercial-form" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
            <div className="grid grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-2 bg-blue-600 p-10 text-white flex flex-col justify-center">
                <h2 className="text-[28px] font-bold mb-4">Get a Free Assessment</h2>
                <p className="text-blue-100 mb-8 text-sm leading-relaxed">Fill in your details and our commercial solar expert will call you within 24 hours to discuss your energy needs.</p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-blue-200 text-xs font-medium">Call Us Directly</p>
                      <p className="font-bold">+91 70527 37431</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
                      <Building2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-blue-200 text-xs font-medium">Head Office</p>
                      <p className="font-bold text-sm">Lucknow, UP</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-3 p-10">
                {submitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
                      <Check className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Request Received!</h3>
                    <p className="text-slate-500">Our commercial solar team will contact you within 24 business hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-slate-700 text-sm font-bold mb-2 block">Your Name *</label>
                        <input required type="text" placeholder="Rajesh Sharma" value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all" />
                      </div>
                      <div>
                        <label className="text-slate-700 text-sm font-bold mb-2 block">Business Name *</label>
                        <input required type="text" placeholder="ABC Manufacturing Ltd." value={form.business} onChange={e => setForm({...form, business: e.target.value})}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all" />
                      </div>
                      <div>
                        <label className="text-slate-700 text-sm font-bold mb-2 block">Phone Number *</label>
                        <input required type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all" />
                      </div>
                      <div>
                        <label className="text-slate-700 text-sm font-bold mb-2 block">Email Address</label>
                        <input type="email" placeholder="rajesh@abc.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all" />
                      </div>
                    </div>
                    <div>
                      <label className="text-slate-700 text-sm font-bold mb-2 block">Monthly Electricity Bill (₹)</label>
                      <input type="text" placeholder="e.g. ₹50,000 per month" value={form.capacity} onChange={e => setForm({...form, capacity: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all" />
                    </div>
                    <div>
                      <label className="text-slate-700 text-sm font-bold mb-2 block">Additional Details</label>
                      <textarea rows={3} placeholder="Tell us about your facility, roof space, or specific requirements..." value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none transition-all" />
                    </div>
                    {errorMsg && <p className="text-red-500 text-sm font-medium">{errorMsg}</p>}
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="bg-slate-900 hover:bg-blue-600 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 mt-2 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        <>Submit Request <ArrowRight className="w-5 h-5" /></>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
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
            "serviceType": "Commercial Solar Panel Installation",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Saurabh Brothers",
              "url": "https://saurabhbrothers.in/"
            },
            "areaServed": {
              "@type": "State",
              "name": "Uttar Pradesh"
            },
            "description": "Expert commercial solar panel installation services for businesses, factories, and schools in Lucknow & Uttar Pradesh. Maximize ROI and reduce energy costs."
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

