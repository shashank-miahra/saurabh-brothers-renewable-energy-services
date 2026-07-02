"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Check, Phone, ShieldCheck, Award, Globe, Zap, TreePine, CloudRain, TrendingUp, Cpu, Leaf, CircleCheck } from "lucide-react";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function CityPageContent({ city, theme, nearbyCities }) {
  const [formData, setFormData] = useState({ name: "", phone: "", pincode: "", bill: "" });

  return (
    <div className="flex-1 w-full bg-white overflow-hidden font-sans">
      {/* ───────── Top Announcement Bar ───────── */}
      <div className="w-full bg-green-800 h-auto sm:h-10 border-b border-green-700/50 hidden lg:block">
        <div className="max-w-7xl mx-auto h-full flex flex-col sm:flex-row items-center justify-center sm:divide-x divide-green-700/60 py-2 sm:py-0">
          <div className="flex items-center gap-2 px-8 text-[13px] text-white font-medium py-1 sm:py-0">
            <Zap className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400 shrink-0" />
            <span>Save <span className="font-black text-yellow-400">₹5,000 Cash </span>on your first solar installation! 💰</span>
          </div>
          <div className="flex items-center gap-2 px-8 text-[13px] text-white font-medium py-1 sm:py-0">
            <Zap className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400 shrink-0" />
            <span>Join 5,000+ families paying <span className="font-black text-yellow-400">Zero Electricity Bills </span>forever! 🏠</span>
          </div>
        </div>
      </div>

      {/* ───────── Hero Section with Form ───────── */}
      <section className="relative overflow-hidden lg:pt-0 bg-slate-900">
        {/* Mobile 16:9 Image Container */}
        <div className="relative w-full aspect-video lg:absolute lg:inset-0 lg:aspect-auto z-0">
          {city.image ? (
            <Image 
              src={city.image} 
              alt={`Solar installation in ${city.name}`} 
              fill 
              className="object-cover object-center"
              priority 
            />
          ) : (
            <div className="w-full h-full bg-slate-800"></div>
          )}
          <div className="absolute inset-0 z-[1] bg-gradient-to-t from-slate-900 lg:bg-gradient-to-r lg:from-slate-900/90 lg:via-slate-900/70 lg:to-slate-900/40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 pt-4 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-6 order-2 lg:order-1 pt-6 lg:pt-0">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border-2 border-white/60 text-white text-xs font-bold uppercase tracking-widest bg-white/10 backdrop-blur-sm">
                ⚡ Top Rated in {city.name}, UP
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                Switch to Solar.<br />
                Save Money. <span className="text-amber-400">Save Planet.</span>
              </h1>
              <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-md">
                Power your {city.name} home with clean, affordable, and reliable solar energy. Save up to ₹30,000+ every year on electricity bills.
              </p>
              
              <div className="space-y-3.5 mt-6">
                {[
                  { title: "₹0 Down Payment", desc: "100% financing with easy EMIs" },
                  { title: "₹1,08,000 Government Subsidy", desc: "We handle all UP nodal agency documentation" },
                  { title: "Save ₹30,000+ Every Year", desc: "On your UPCL/MVVNL electricity bills" },
                  { title: "25-Year Warranty", desc: "Local technical support in " + city.name }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="h-3.5 w-3.5 text-white" strokeWidth={2.5} />
                    </div>
                    <div className="text-sm md:text-base">
                      <span className="font-bold text-white">{item.title}</span>
                      <span className="text-white/70 hidden sm:inline"> — {item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Form Card */}
            <div className="order-1 lg:order-2 w-full mt-4 lg:mt-0 aspect-video lg:aspect-auto">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-md mx-auto lg:ml-auto lg:mr-0 relative z-20">
                <div className="bg-green-800 px-7 py-5">
                  <h3 className="text-xl font-bold text-white">Get FREE Quote</h3>
                  <p className="text-sm text-white/85 mt-0.5">Quick & Premium Solar Installation in {city.name}</p>
                </div>
                <div className="p-6 space-y-5">
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                        <input type="text" placeholder="e.g. Rahul Sharma" className="w-full h-11 px-4 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-green-700 text-sm" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Contact Number</label>
                        <input type="tel" placeholder="Mobile Number" className="w-full h-11 px-4 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-green-700 text-sm" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pincode</label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                          <input type="text" placeholder="e.g. 211001" className="w-full h-11 px-4 pl-9 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-green-700 text-sm" />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Monthly Bill (₹)</label>
                        <input type="text" placeholder="e.g. 3500" className="w-full h-11 px-4 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-green-700 text-sm" />
                      </div>
                    </div>
                    <button type="button" className="w-full h-12 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-400/30">
                      Check Full Savings Plan <ArrowRight className="h-4 w-4" />
                    </button>
                  </form>
                  
                  <div className="pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                        <Zap className="h-5 w-5 text-amber-500" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">Solar System: 3kW</p>
                        <p className="text-xs text-slate-500">Perfect for a standard UP household.</p>
                        <p className="text-base font-black text-amber-500 mt-0.5">₹1,08,000 Subsidy</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Stats Bar ───────── */}
      <section className="bg-green-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "28px 28px" }}></div>
        <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
            <div className="flex flex-col items-center text-center px-4 md:px-6 md:border-r border-green-700/60">
              <div className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">5,000+</div>
              <p className="text-green-100 text-sm font-semibold mt-1">Happy Families</p>
              <p className="text-green-400 text-xs mt-0.5">Across UP</p>
            </div>
            <div className="flex flex-col items-center text-center px-4 md:px-6 md:border-r border-green-700/60">
              <div className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">{city.avgSunHours} hrs</div>
              <p className="text-green-100 text-sm font-semibold mt-1">Daily Sun</p>
              <p className="text-green-400 text-xs mt-0.5">In {city.name}</p>
            </div>
            <div className="flex flex-col items-center text-center px-4 md:px-6 md:border-r border-green-700/60">
              <div className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">24 hrs</div>
              <p className="text-green-100 text-sm font-semibold mt-1">Response Time</p>
              <p className="text-green-400 text-xs mt-0.5">Local {city.name} support</p>
            </div>
            <div className="flex flex-col items-center text-center px-4 md:px-6">
              <div className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">100%</div>
              <p className="text-green-100 text-sm font-semibold mt-1">Subsidy Success</p>
              <p className="text-green-400 text-xs mt-0.5">Guaranteed approvals</p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Trust Badges ───────── */}
      <section className="bg-white border-b border-slate-100 py-8">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center justify-around flex-wrap gap-8">
            <div className="flex flex-col items-center gap-2 group">
              <div className="h-12 w-12 rounded-full border-2 border-slate-100 bg-white shadow-sm flex items-center justify-center group-hover:border-green-200 group-hover:shadow-md transition-all">
                <ShieldCheck className="h-5 w-5 text-green-700" />
              </div>
              <p className="text-xs font-bold text-slate-700 uppercase tracking-wider text-center">MNRE<br/><span className="text-[10px] text-slate-400 font-normal tracking-normal leading-tight">Approved Vendor</span></p>
            </div>
            <div className="flex flex-col items-center gap-2 group">
              <div className="h-12 w-12 rounded-full border-2 border-slate-100 bg-white shadow-sm flex items-center justify-center group-hover:border-green-200 group-hover:shadow-md transition-all">
                <Award className="h-5 w-5 text-green-700" />
              </div>
              <p className="text-xs font-bold text-slate-700 uppercase tracking-wider text-center">UPNEDA<br/><span className="text-[10px] text-slate-400 font-normal tracking-normal leading-tight">Certified</span></p>
            </div>
            <div className="flex flex-col items-center gap-2 group">
              <div className="h-12 w-12 rounded-full border-2 border-slate-100 bg-white shadow-sm flex items-center justify-center group-hover:border-green-200 group-hover:shadow-md transition-all">
                <Award className="h-5 w-5 text-green-700" />
              </div>
              <p className="text-xs font-bold text-slate-700 uppercase tracking-wider text-center">BIS<br/><span className="text-[10px] text-slate-400 font-normal tracking-normal leading-tight">Certified Products</span></p>
            </div>
            <div className="flex flex-col items-center gap-2 group">
              <div className="h-12 w-12 rounded-full border-2 border-slate-100 bg-white shadow-sm flex items-center justify-center group-hover:border-green-200 group-hover:shadow-md transition-all">
                <Globe className="h-5 w-5 text-green-700" />
              </div>
              <p className="text-xs font-bold text-slate-700 uppercase tracking-wider text-center">Pan UP<br/><span className="text-[10px] text-slate-400 font-normal tracking-normal leading-tight">Service Network</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Solutions Grid ───────── */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-3">Our Solar Solutions</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">Energy Solutions for {city.name}</h2>
            <p className="mt-3 text-slate-500 text-base">Customized solar solutions for residential, commercial and agricultural needs across the district.</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "On-Grid Solar System",
                desc: "Solar PV systems connected to the grid. Export excess power and earn credits on your UPCL bill.",
                img: "/images/service_on_grid.png",
                bg: "bg-green-50",
                borderColor: "border-green-200",
                textColor: "text-green-700"
              },
              {
                title: "Hybrid Solar System",
                desc: "Grid connected with battery backup. Uninterrupted power during summer power cuts.",
                img: "/images/service_hybrid.png",
                bg: "bg-orange-50",
                borderColor: "border-orange-200",
                textColor: "text-orange-600"
              },
              {
                title: "Commercial Solar",
                desc: "Power your factory or business in " + city.name + " with heavy-duty commercial solar setups.",
                img: "/images/service-commercial.png",
                bg: "bg-green-50",
                borderColor: "border-green-200",
                textColor: "text-green-700"
              }
            ].map((sol, i) => (
              <div key={i} className={`group rounded-2xl border-2 ${sol.bg} ${sol.borderColor} overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col`}>
                <div className="relative aspect-video overflow-hidden">
                  <Image src={sol.img} alt={sol.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                </div>
                <div className="flex flex-col flex-1 px-6 pt-5 pb-6 gap-3">
                  <h3 className="text-xl font-bold text-slate-900 leading-snug">{sol.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed flex-1">{sol.desc}</p>
                  <Link href="/contact-us" className={`inline-flex items-center self-start gap-2 mt-2 text-sm font-bold border rounded-full px-4 py-1.5 transition-all duration-200 ${sol.textColor} hover:bg-slate-900 hover:border-slate-900 hover:text-white ${sol.borderColor}`}>
                    Get Quote <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* ───────── Why It Makes Sense ───────── */}
          <div className="mt-16 rounded-3xl border-2 border-slate-100 bg-white p-8 lg:p-12 shadow-sm">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-green-700 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white">
                  <ShieldCheck className="h-3.5 w-3.5" /> Why Choose Us
                </span>
                <h3 className="mt-6 text-2xl font-bold text-slate-900 md:text-3xl leading-snug">
                  Practical solar systems<br/><span className="text-green-700">built for {city.name}&apos;s climate.</span>
                </h3>
                <p className="mt-4 text-sm md:text-base leading-relaxed text-slate-500">
                  We focus on solutions that are efficient, scalable, and easy to maintain — whether residential, hybrid backup, or commercial solar.
                </p>
                <ul className="space-y-4 mt-8">
                  {[
                    "Government subsidy up to ₹1,08,000 — we handle the paperwork",
                    "Net metering lets you sell excess power back to the UP grid",
                    "Payback period of just 3–4 years on a 25-year system",
                    "Local installation team available 24/7"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm font-medium text-slate-700 leading-relaxed">
                      <CircleCheck className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border-2 border-transparent bg-green-50 p-6 hover:border-slate-200 hover:bg-white transition-all duration-300">
                  <div className="mb-4 inline-flex rounded-xl p-3 bg-white shadow-sm">
                    <Zap className="h-5 w-5 text-green-700" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">Custom Planning</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">System design based on actual site and energy usage in {city.name}.</p>
                </div>
                <div className="rounded-2xl border-2 border-transparent bg-orange-50 p-6 hover:border-slate-200 hover:bg-white transition-all duration-300">
                  <div className="mb-4 inline-flex rounded-xl p-3 bg-white shadow-sm">
                    <Cpu className="h-5 w-5 text-orange-500" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">Tier-1 Components</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">Best panels and inverters designed for North Indian summers.</p>
                </div>
                <div className="rounded-2xl border-2 border-transparent bg-emerald-50 p-6 hover:border-slate-200 hover:bg-white transition-all duration-300">
                  <div className="mb-4 inline-flex rounded-xl p-3 bg-white shadow-sm">
                    <Leaf className="h-5 w-5 text-emerald-600" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">Sustainable Savings</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">Reduce dependence on conventional UPCL power year after year.</p>
                </div>
                <div className="rounded-2xl border-2 border-transparent bg-slate-50 p-6 hover:border-slate-200 hover:bg-white transition-all duration-300">
                  <div className="mb-4 inline-flex rounded-xl p-3 bg-white shadow-sm">
                    <ShieldCheck className="h-5 w-5 text-slate-600" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">End-to-End Support</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">Consultation, UP portal net metering, installation, and AMC.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Environmental Impact ───────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-24">
          <div className="text-center mb-12">
            <p className="text-orange-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">Environmental Impact in UP</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Switching to Solar is <span className="text-orange-400">Making a Difference.</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
            <div className="bg-slate-900/60 backdrop-blur-sm px-4 py-8 text-center">
              <TreePine className="h-6 w-6 text-orange-400 mx-auto mb-3" />
              <p className="text-3xl md:text-4xl font-black text-white">12,450+</p>
              <p className="text-white/50 text-[10px] sm:text-xs font-semibold uppercase tracking-wider mt-2">Trees Planted Equivalent</p>
            </div>
            <div className="bg-slate-900/60 backdrop-blur-sm px-4 py-8 text-center">
              <CloudRain className="h-6 w-6 text-orange-400 mx-auto mb-3" />
              <p className="text-3xl md:text-4xl font-black text-white">840 T</p>
              <p className="text-white/50 text-[10px] sm:text-xs font-semibold uppercase tracking-wider mt-2">CO₂ Offset</p>
            </div>
            <div className="bg-slate-900/60 backdrop-blur-sm px-4 py-8 text-center">
              <Zap className="h-6 w-6 text-orange-400 mx-auto mb-3" />
              <p className="text-3xl md:text-4xl font-black text-white">2.5 GWh</p>
              <p className="text-white/50 text-[10px] sm:text-xs font-semibold uppercase tracking-wider mt-2">Clean Energy Gen</p>
            </div>
            <div className="bg-slate-900/60 backdrop-blur-sm px-4 py-8 text-center">
              <TrendingUp className="h-6 w-6 text-orange-400 mx-auto mb-3" />
              <p className="text-3xl md:text-4xl font-black text-white">750+</p>
              <p className="text-white/50 text-[10px] sm:text-xs font-semibold uppercase tracking-wider mt-2">UP Installations</p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Blog / Guides ───────── */}
      <section className="bg-white py-16 md:py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2">Knowledge Base</p>
              <h2 className="text-3xl font-bold text-slate-900">Solar Guides for {city.name} Residents</h2>
            </div>
            <Link href="/blog" className="text-sm font-bold text-green-700 hover:text-green-800 flex items-center gap-1">
              View all guides <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Solar Panel Price in UP (2026)", sub: "Updated system-wise pricing and payback guide", href: "/blog/solar-panel-installation-cost-uttar-pradesh-2025" },
              { title: "3kW Solar System Price with Subsidy", sub: "Cost, roof space, generation and savings", href: "/blog/3kw-solar-system-price-in-up-with-subsidy" },
              { title: `PM Surya Ghar Yojana in ${city.name}`, sub: "Eligibility, documents and net metering steps", href: `/blog/pm-surya-ghar-yojana-subsidy-apply-online-up` }
            ].map((blog, i) => (
              <Link key={i} href={blog.href} className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 hover:border-green-300 hover:shadow-lg transition-all duration-300">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-green-700 transition-colors leading-snug">{blog.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-6">{blog.sub}</p>
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-green-700 transition-colors">
                  Read Article <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Coverage Areas / Nearby Cities ───────── */}
      <section className="bg-slate-50 py-16 md:py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Areas in City */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Service Areas in {city.name}</h3>
              <div className="flex flex-wrap gap-3">
                {city.topAreas.map((area) => (
                  <span key={area} className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                    <MapPin className="h-3.5 w-3.5 text-green-600" /> {area}
                  </span>
                ))}
              </div>
              <p className="text-sm text-slate-500 mt-6">We provide free site surveys across all neighborhoods and surrounding rural areas of {city.name} district.</p>
            </div>
            
            {/* Nearby UP Cities */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Explore Solar in UP</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {nearbyCities.map((c) => (
                  <Link key={c.slug} href={`/city/${c.slug}`} className="flex items-center justify-between rounded-xl bg-white border border-slate-200 px-4 py-3 text-sm font-bold text-slate-700 shadow-sm hover:border-green-300 hover:text-green-700 transition-colors">
                    {c.name}
                    <ArrowRight className="h-3.5 w-3.5 text-slate-300" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
