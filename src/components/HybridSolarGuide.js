"use client";

import { useState } from "react";
import { CircleCheck, IndianRupee, Sun, Zap, Info, Check } from "lucide-react";
import Link from "next/link";
import GoogleReviewPopup from "./GoogleReviewPopup";

export default function HybridSolarGuide() {
  const [form, setForm] = useState({ name: "", phone: "", pincode: "", bill: "" });
  const [submitted, setSubmitted] = useState(false);
  const [showReviewPopup, setShowReviewPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.phone && form.pincode) {
      setSubmitted(true);
      setShowReviewPopup(true);
      if (typeof window !== "undefined" && window.trackConversion) {
        window.trackConversion('generate_lead', {
          source: 'hybrid_solar_guide',
          bill_size: form.bill || 'Not Provided'
        });
      }
    }
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-[13px] text-gray-400 mb-4">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-gray-600">Hybrid Solar Guide</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Hybrid Solar System <span className="text-blue-600">Buying Guide</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
              Everything you need to know about Hybrid solar systems with battery backup, pricing, and installation in UP.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content & Form Layout */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-16 text-gray-700">
              
              {/* Introduction */}
              <div className="prose max-w-none prose-lg">
                <p className="leading-relaxed mb-6 text-gray-600 text-[17px]">
                  A <strong>Hybrid solar system</strong> combines the best of both worlds: it is connected to the main utility grid (like an on-grid system) but also includes a battery bank to store energy for use during power outages.
                </p>
                <p className="leading-relaxed mb-6 text-gray-600 text-[17px]">
                  This is the ideal solution for areas in Uttar Pradesh that experience frequent power cuts. During the day, the solar panels power your home and charge the batteries. Any excess energy is exported to the grid. During a power cut, the system automatically switches to battery power seamlessly.
                </p>
              </div>

              {/* What is it */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Sun className="text-blue-600 w-8 h-8" /> Why Choose Hybrid Solar?
                </h2>
                <p className="leading-relaxed mb-6 text-[16px] text-gray-600">
                  While on-grid systems are cheaper and great for savings, they shut down during a power cut for safety reasons (anti-islanding). A hybrid system ensures 24/7 uninterrupted power supply while still allowing you to save money via net metering.
                </p>
                <p className="leading-relaxed mb-4 text-[16px] text-gray-600 font-semibold">
                  The hybrid system consists of:
                </p>
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Solar panels",
                      "Hybrid Inverter",
                      "Battery Bank (Lithium/Lead-Acid)",
                      "Bi-directional net meter",
                      "AC & DC distribution boxes",
                      "Lightning arrester & earthing",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CircleCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                        <span className="font-medium text-gray-800 text-[15px]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Components */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Zap className="text-blue-600 w-8 h-8" /> The Core Components
                </h2>
                
                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-10 flex gap-4 items-start">
                  <Info className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-blue-900 text-lg mb-2">Important Note on Subsidies</h4>
                    <p className="text-blue-800 leading-relaxed text-sm">
                      Under PM Surya Ghar Yojana, you only receive subsidy for the solar panels and standard on-grid components. Batteries are NOT subsidized by the government.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">1. Hybrid Inverter</h3>
                    <p className="leading-relaxed text-gray-500 text-[15px]">
                      A highly intelligent inverter that manages power from the solar panels, the battery, and the grid simultaneously to ensure you always have power at the lowest cost.
                    </p>
                  </div>
                  <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">2. Battery Bank</h3>
                    <p className="leading-relaxed text-gray-500 text-[15px]">
                      Stores excess solar energy generated during the day. We highly recommend modern Lithium-ion batteries for their long lifespan (10+ years), zero maintenance, and deep discharge capabilities.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pricing Chart Section */}
              <div className="mt-16 bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-blue-600"></div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <IndianRupee className="text-blue-600 w-8 h-8" /> Estimated Hybrid System Price
                </h2>
                <p className="leading-relaxed text-gray-500 text-[15px] mb-8">
                  Hybrid systems cost more than on-grid due to the expensive battery bank. Here are approximate costs in UP:
                </p>
                
                <div className="overflow-x-auto rounded-xl border border-gray-100">
                  <table className="w-full text-left border-collapse min-w-[500px]">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-100 text-gray-700">
                        <th className="py-4 px-6 font-bold text-sm">System Capacity</th>
                        <th className="py-4 px-6 font-bold text-sm">Estimated Total Price</th>
                        <th className="py-4 px-6 font-bold text-sm text-emerald-600">Max Subsidy</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-[15px] text-gray-600">
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6 font-bold text-gray-900">3 kW (With 5kWh Battery)</td>
                        <td className="py-4 px-6">₹2,80,000</td>
                        <td className="py-4 px-6 text-emerald-600 font-bold">₹1,08,000</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6 font-bold text-gray-900">5 kW (With 10kWh Battery)</td>
                        <td className="py-4 px-6">₹4,50,000</td>
                        <td className="py-4 px-6 text-emerald-600 font-bold">₹1,08,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="bg-[#f8fafc] rounded-xl p-6 mt-8 border border-gray-100">
                  <p className="text-xs text-gray-500 leading-relaxed">
                    <strong>Disclaimer:</strong> Prices depend heavily on the battery chemistry (Lithium vs Lead-Acid) and capacity required. Please request a customized quote.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Form Column (Sticky) */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 bg-[#0A1128] rounded-3xl shadow-xl p-8 border border-gray-800 text-white">
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Request Submitted!</h3>
                    <p className="text-gray-400 text-sm">
                      Our system expert will call you shortly to arrange a customized quote.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-bold mb-3">Book a FREE Consultation</h3>
                    <p className="text-gray-400 text-xs mb-6 leading-relaxed">
                      Get a personalized hybrid system design and quote.
                    </p>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <input 
                          required
                          type="text" 
                          placeholder="Full Name" 
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm placeholder-gray-500"
                        />
                      </div>
                      <div>
                        <input 
                          required
                          type="tel" 
                          placeholder="Phone / Whatsapp" 
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm placeholder-gray-500"
                        />
                      </div>
                      <div>
                        <input 
                          required
                          type="text" 
                          placeholder="PIN Code" 
                          value={form.pincode}
                          onChange={(e) => setForm({ ...form, pincode: e.target.value })}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm placeholder-gray-500"
                        />
                      </div>
                      
                      <div>
                        <label className="text-xs text-gray-400 mb-2 block font-medium">Monthly Bill:</label>
                        <div className="grid grid-cols-2 gap-2">
                          {[
                            "Under 1.5k",
                            "1.5k - 3k",
                            "3k - 6k",
                            "6k+"
                          ].map((b) => (
                            <button
                              key={b}
                              type="button"
                              onClick={() => setForm({ ...form, bill: b })}
                              className={`px-2 py-2 text-xs font-semibold rounded-lg border text-center transition-all ${
                                form.bill === b 
                                ? "bg-blue-600 text-white border-blue-600" 
                                : "bg-gray-800 text-gray-300 border-gray-700 hover:border-gray-600"
                              }`}
                            >
                              {b}
                            </button>
                          ))}
                        </div>
                      </div>

                      <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3.5 rounded-xl hover:bg-blue-700 transition-colors shadow-lg text-[15px] mt-4">
                        Get Free Estimate
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
      <GoogleReviewPopup 
        isOpen={showReviewPopup} 
        onClose={() => setShowReviewPopup(false)} 
        reviewLink="#" 
      />
    </div>
  );
}
