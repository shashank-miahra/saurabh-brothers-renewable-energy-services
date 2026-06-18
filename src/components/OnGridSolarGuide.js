"use client";

import { useState } from "react";
import { CircleCheck, IndianRupee, Sun, Zap, Info, Check } from "lucide-react";
import Link from "next/link";
import GoogleReviewPopup from "./GoogleReviewPopup";

export default function OnGridSolarGuide() {
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
          source: 'on_grid_solar_guide',
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
              <span className="text-gray-600">On-Grid Solar Guide</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
              On-Grid Solar System <span className="text-blue-600">Buying Guide</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
              Everything you need to know about system sizing, billing, pricing details with subsidies in Uttar Pradesh, and maintenance.
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
                  An <strong>on-grid solar system</strong> (also known as a grid-tied system) is connected to the main utility grid. This is the most popular type of solar installation in Uttar Pradesh due to the seamless net-metering facility and direct government subsidies under the <strong>PM Surya Ghar Muft Bijli Yojana</strong>.
                </p>
                <p className="leading-relaxed mb-6 text-gray-600 text-[17px]">
                  With this system, any excess power generated during the day is sent back to the grid, and you receive credits on your bill. Let&apos;s dive into the details of sizing, pricing, components, and subsidies.
                </p>
              </div>

              {/* What is it */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Sun className="text-blue-600 w-8 h-8" /> What is an On-Grid Solar System?
                </h2>
                <p className="leading-relaxed mb-6 text-[16px] text-gray-600">
                  An on-grid solar system connects directly to the utility grid through a bi-directional meter (net meter). Most Indian homes with a reliable grid connection choose on-grid solar since this system is powerful enough to support all household energy requirements.
                </p>
                <p className="leading-relaxed mb-4 text-[16px] text-gray-600 font-semibold">
                  The system consists of the following key components:
                </p>
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Solar panels (monocrystalline / bifacial)",
                      "Solar grid-tied inverter",
                      "Wind-resistant mounting structures",
                      "Bi-directional net meter",
                      "AC & DC distribution boxes",
                      "Lightning arrester & earthing kit",
                      "System cables & accessories"
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
                  <Zap className="text-blue-600 w-8 h-8" /> On-Grid System Components
                </h2>
                
                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-10 flex gap-4 items-start">
                  <Info className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-blue-900 text-lg mb-2">Did you know?</h4>
                    <p className="text-blue-800 leading-relaxed text-sm">
                      On-grid solar has the fastest return on investment (ROI). Most residential owners in UP recover their initial capital in just 3 to 4 years through monthly power savings and state/central subsidies.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">1. Solar Panels</h3>
                    <p className="leading-relaxed text-gray-500 text-[15px]">
                      High-efficiency monocrystalline panels convert sunlight into direct current (DC) electricity. We utilize Tier-1 ALMM-approved panels to guarantee maximum performance and eligibility for government subsidies.
                    </p>
                  </div>
                  <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">2. Solar Grid-Tied Inverter</h3>
                    <p className="leading-relaxed text-gray-500 text-[15px]">
                      The brain of the system. It converts DC electricity from the panels into stable AC electricity matching your utility provider&apos;s frequency. It continuously syncs with the grid and manages output optimization.
                    </p>
                  </div>
                  <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">3. Net Metering System</h3>
                    <p className="leading-relaxed text-gray-500 text-[15px]">
                      A bi-directional meter records both the energy you import from the grid and the excess solar energy you export to it. The DISCOM computes your monthly electricity bill based on the net difference.
                    </p>
                  </div>
                </div>
              </div>

              {/* Pricing Chart Section */}
              <div className="mt-16 bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-blue-600"></div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <IndianRupee className="text-blue-600 w-8 h-8" /> System Price & Subsidy (UP)
                </h2>
                <p className="leading-relaxed text-gray-500 text-[15px] mb-8">
                  Under the current PM Surya Ghar Yojana, residential users in Uttar Pradesh receive significant central and state subsidies. Below is an estimate of costs for on-grid systems:
                </p>
                
                <div className="overflow-x-auto rounded-xl border border-gray-100">
                  <table className="w-full text-left border-collapse min-w-[500px]">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-100 text-gray-700">
                        <th className="py-4 px-6 font-bold text-sm">System Capacity</th>
                        <th className="py-4 px-6 font-bold text-sm">Estimated Price Range</th>
                        <th className="py-4 px-6 font-bold text-sm text-emerald-600">Max Subsidy (Central + State)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-[15px] text-gray-600">
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6 font-bold text-gray-900">1 kW</td>
                        <td className="py-4 px-6">₹60,000</td>
                        <td className="py-4 px-6 text-emerald-600 font-bold">₹40,000</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6 font-bold text-gray-900">2 kW</td>
                        <td className="py-4 px-6">₹1,20,000</td>
                        <td className="py-4 px-6 text-emerald-600 font-bold">₹78,000</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors bg-blue-50/10">
                        <td className="py-4 px-6 font-bold text-gray-900">3 kW</td>
                        <td className="py-4 px-6">₹1,80,000</td>
                        <td className="py-4 px-6 text-emerald-600 font-bold">₹1,08,000</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6 font-bold text-gray-900">5 kW</td>
                        <td className="py-4 px-6">₹3,00,000</td>
                        <td className="py-4 px-6 text-emerald-600 font-bold">₹1,08,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="bg-[#f8fafc] rounded-xl p-6 mt-8 border border-gray-100">
                  <p className="text-xs text-gray-500 leading-relaxed">
                    <strong>Disclaimer:</strong> Prices are dynamic and vary depending on panel brand selection (Mono-perc/Bifacial), structural heights, and local distributor factors. Subsidy amounts are disbursed directly to your bank account after net-metering activation.
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
                      Get direct pricing calculations and design audits from our UP team.
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
                      
                      <p className="text-[10px] text-center text-gray-500 mt-4 leading-normal">
                        We respect your privacy. By clicking submit you agree to be contacted for solar surveys.
                      </p>
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
