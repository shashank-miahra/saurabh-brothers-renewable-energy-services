"use client";

import { useState } from "react";
import { Info, Check, Phone } from "lucide-react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import GoogleReviewPopup from "../GoogleReviewPopup";

export default function ResHero() {
  const [bill, setBill] = useState("Less than ₹1500");
  const [form, setForm] = useState({ name: "", phone: "", pincode: "" });
  const [submitted, setSubmitted] = useState(false);
  const [showReviewPopup, setShowReviewPopup] = useState(false);

  const ref = useRef(null);
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 500], [0, 150]);


  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (form.name && form.phone && form.pincode) {
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
            city: form.pincode, // Store pincode in city field
            monthlyBill: bill,
            message: 'Residential Lead - From Hero Form',
          }),
        });

        const data = await response.json();

        if (response.ok) {
          setSubmitted(true);
          setShowReviewPopup(true);
          if (typeof window !== "undefined" && window.trackConversion) {
            window.trackConversion('generate_lead', {
              source: 'residential_hero_form',
              bill_size: bill
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
    }
  };

  return (
    <section ref={ref} className="relative w-full bg-[#f4f7fa] font-sans pt-24 pb-16 overflow-hidden">
      
      <motion.div style={{ y: imageY }} className="absolute inset-0 z-0">
        <Image 
          src="/images/hero_residential.png" 
          alt="Saurabh Brothers Residential Solar Installation" 
          fill
          priority
          sizes="100vw"
          className="-mt-[10%] object-cover object-bottom opacity-90"
        />
      </motion.div>
      
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-white/30"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-7xl flex flex-col lg:flex-row items-center gap-12">
        
        <div className="w-full lg:w-1/2 text-left pt-12 pb-20">
          <h1 className="text-[36px] sm:text-[42px] md:text-[56px] lg:text-[64px] font-bold text-[#0056D2] leading-[1.1] mb-6 tracking-tight text-balance">
            Save up to 90% <br className="hidden sm:block" />
            on your electricity bills.
          </h1>
          
          <p className="text-[18px] md:text-[20px] font-medium text-[#1e293b] mb-8 max-w-lg">
            Guaranteed solar savings — professionally managed from design to maintenance.
          </p>
          

        </div>

        <div className="w-full lg:w-1/2 flex justify-end px-2 sm:px-0">
          <div className="bg-[#f0f4f8]/95 backdrop-blur-sm rounded-3xl p-5 md:p-8 shadow-xl max-w-md w-full border border-white/50">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Submitted!</h3>
                <p className="text-gray-600 text-sm">
                  Our solar advisor will call you within 24 hours to plan your free site survey and design.
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-[24px] font-bold text-[#111827] mb-2">Book a FREE Consultation</h2>
                <p className="text-[14px] text-gray-600 mb-6">
                  Get genuine advice from our solar experts.<br/>
                  No pressure, book only if you are satisfied!
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input 
                    required
                    type="text" 
                    placeholder="Full Name" 
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0056D2] bg-white text-[15px]"
                  />
                  <input 
                    required
                    type="tel" 
                    placeholder="Whatsapp/Phone Number" 
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0056D2] bg-white text-[15px]"
                  />
                  <input 
                    required
                    type="text" 
                    placeholder="PIN Code" 
                    value={form.pincode}
                    onChange={(e) => setForm({ ...form, pincode: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0056D2] bg-white text-[15px]"
                  />

                  <div className="pt-2">
                    <label className="flex items-center gap-1 text-[13px] text-gray-500 mb-3 font-medium">
                      Monthly Electricity Bill <Info className="w-3.5 h-3.5" />
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {["Less than ₹1500", "₹1500 - ₹2500", "₹2500 - ₹4000", "₹4000 - ₹8000", "More than ₹8000"].map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setBill(option)}
                          className={`px-4 py-2 rounded-full text-[13px] font-medium border transition-colors ${
                            bill === option 
                            ? "bg-[#111827] text-white border-[#111827]" 
                            : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start gap-2 pt-2">
                    <input type="checkbox" id="terms" className="mt-1 rounded text-[#0056D2]" defaultChecked />
                    <label htmlFor="terms" className="text-[12px] text-gray-500">
                      I agree to Saurabh Brothers Terms of Use and Privacy Policy
                    </label>
                  </div>

                  <div className="pt-2 relative">
                    <div className="absolute -top-3 right-4 bg-[#FFC107] text-[#111827] text-[10px] font-bold px-2 py-0.5 rounded-sm z-10 transform rotate-3">
                      Limited slots only!
                    </div>
                    {errorMsg && <p className="text-red-500 text-sm mb-2 font-medium">{errorMsg}</p>}
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-[#111827] text-white font-bold py-4 rounded-xl hover:bg-gray-800 transition-colors shadow-lg disabled:opacity-70 flex justify-center items-center"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </>
                      ) : "Book a FREE Consultation"}
                    </button>
                  </div>
                </form>
              </>
            )}

            <a href="tel:+917052737431" className="mt-6 bg-white rounded-xl p-4 flex items-center justify-between shadow-sm cursor-pointer hover:shadow-md transition-shadow group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[12px] text-gray-500 font-medium">Or talk to an expert directly</p>
                  <p className="text-[14px] font-bold text-[#0056D2] group-hover:underline">+91 70527 37431 / +91 87369 67374</p>
                </div>
              </div>
            </a>

          </div>
        </div>
      </div>
      <GoogleReviewPopup 
        isOpen={showReviewPopup} 
        onClose={() => setShowReviewPopup(false)} 
        reviewLink="#" 
      />
    </section>
  );
}
