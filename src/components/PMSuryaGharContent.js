"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, Phone, CheckCircle2, IndianRupee, Sun, Settings, Check } from "lucide-react";
import SubsidyCalculator from "@/components/SubsidyCalculator";

const steps = [
  {
    title: "Register on Portal",
    description: "Sign up on the PM Surya Ghar national portal with your electricity account details.",
    icon: <CheckCircle2 className="w-6 h-6" />
  },
  {
    title: "Free Site Survey",
    description: "Our experts visit your roof to assess space, shadow, and load capacity.",
    icon: <Sun className="w-6 h-6" />
  },
  {
    title: "Installation & Net Metering",
    description: "We install Tier-1 panels and handle all DISCOM approvals for net metering.",
    icon: <Settings className="w-6 h-6" />
  },
  {
    title: "Get Subsidy in Bank",
    description: "UPNEDA inspects the system, and your subsidy is credited directly to your bank account.",
    icon: <IndianRupee className="w-6 h-6" />
  }
];

export default function PMSuryaGharContent({ faqs }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      {/* ========== HERO SECTION ========== */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-gradient-to-b from-[#0A1128] to-[#1734a7]">
        <div className="absolute inset-0 bg-[url('/hero-bg.png')] opacity-10 bg-cover bg-center" />
        
        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-blue-300 font-semibold tracking-wide uppercase text-sm mb-6 inline-flex items-center gap-2 bg-blue-900/50 px-4 py-2 rounded-full border border-blue-500/30">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              Official Government Scheme
            </p>
            
            <h1 className="text-4xl md:text-[72px] font-bold text-white leading-[1.1] tracking-tight mb-8">
              Claim up to <br className="hidden md:block"/>
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-200 inline-block"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
              >
                ₹1,08,000 Subsidy
              </motion.span>
            </h1>
            
            <p className="text-base md:text-[22px] text-blue-100 max-w-3xl mx-auto leading-relaxed mb-12">
              Transform your roof into a power plant starting at just <strong>₹60,000/kW</strong>. Zero electricity bills. 100% UPNEDA approved.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 text-sm text-blue-200">
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" /> UPNEDA Approved</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" /> 500+ Installations</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-400" /> 4.8★ Reviews</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/#contact" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg px-10 py-5 rounded-full transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]">
                Claim Your Subsidy
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="#calculator" className="w-full sm:w-auto text-white border border-blue-400/30 hover:bg-white/10 font-medium text-lg px-8 py-5 rounded-full flex items-center justify-center gap-2 transition-colors">
                Calculate Savings
              </a>
            </div>
          </motion.div>
        </div>

        {/* Floating Element */}
        <motion.div 
          className="mt-20 flex justify-center w-full px-6 relative z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="relative w-full max-w-4xl aspect-[16/9] md:aspect-[21/9]">
            <Image 
              src="/pm_surya_hero_new_1780636478492.png" 
              alt="Premium Solar Installation" 
              fill 
              className="object-cover rounded-[30px] md:rounded-[40px] shadow-2xl border-4 border-white/10"
              priority
            />
          </div>
        </motion.div>
      </section>

      {/* ========== SUBSIDY BREAKDOWN CARDS ========== */}
      <section className="py-24 bg-[#FBFBFD]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-[48px] font-bold text-[#0A1128] leading-tight mb-4">
              Clear, transparent pricing.
            </h2>
            <p className="text-[#64748b] text-lg">Official 2024 PM Surya Ghar Rates</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1 kW */}
            <motion.div 
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-[#0A1128] mb-1">1 kW System</h3>
              <p className="text-gray-500 text-sm mb-6">For small homes & low consumption</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Estimated Cost</span>
                  <span className="font-semibold">₹60,000</span>
                </div>
                <div className="flex justify-between items-center text-green-600 font-medium">
                  <span>Govt Subsidy</span>
                  <span>- ₹40,000</span>
                </div>
                <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="font-bold text-[#0A1128]">Your Payable</span>
                  <span className="text-2xl font-black text-blue-600">₹20,000</span>
                </div>
              </div>
            </motion.div>

            {/* 2 kW */}
            <motion.div 
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-2xl font-bold text-[#0A1128] mb-1">2 kW System</h3>
              <p className="text-gray-500 text-sm mb-6">For medium homes with AC usage</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Estimated Cost</span>
                  <span className="font-semibold">₹1,20,000</span>
                </div>
                <div className="flex justify-between items-center text-green-600 font-medium">
                  <span>Govt Subsidy</span>
                  <span>- ₹78,000</span>
                </div>
                <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="font-bold text-[#0A1128]">Your Payable</span>
                  <span className="text-2xl font-black text-blue-600">₹42,000</span>
                </div>
              </div>
            </motion.div>

            {/* 3 kW */}
            <motion.div 
              className="bg-gradient-to-br from-[#0A1128] to-[#1734a7] text-white rounded-3xl p-8 shadow-2xl relative transform md:-translate-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-yellow-900 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-white mb-1 mt-2">3 kW System+</h3>
              <p className="text-blue-200 text-sm mb-6">For large homes & max savings</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-blue-200">Estimated Cost</span>
                  <span className="font-semibold">₹1,80,000</span>
                </div>
                <div className="flex justify-between items-center text-yellow-400 font-medium">
                  <span>Govt Subsidy</span>
                  <span>- ₹1,08,000</span>
                </div>
                <div className="pt-4 border-t border-blue-800 flex justify-between items-center">
                  <span className="font-bold">Your Payable</span>
                  <span className="text-3xl font-black text-white">₹72,000</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== CALCULATOR ========== */}
      <section id="calculator" className="py-24 bg-white relative">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <SubsidyCalculator />
        </div>
      </section>

      {/* ========== HOW IT WORKS ========== */}
      <section className="py-24 bg-[#FBFBFD] overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-[48px] font-bold text-[#0A1128] leading-tight mb-4">
              Your path to free electricity.
            </h2>
            <p className="text-[#64748b] text-lg">We handle everything from registration to final subsidy credit.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative">
            <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-blue-100 z-0"></div>
            
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="relative z-10 flex flex-col items-center text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-20 h-20 bg-white rounded-full border-[6px] border-[#FBFBFD] shadow-lg flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {step.icon}
                </div>
                <div className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-4">
                  STEP {index + 1}
                </div>
                <h3 className="text-xl font-bold text-[#0A1128] mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-[48px] font-bold text-[#0A1128] leading-tight tracking-tight">
              Questions? Answered.
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none"
                >
                  <h3 className={`text-lg font-semibold transition-colors ${openFaq === index ? 'text-blue-600' : 'text-[#0A1128]'}`}>
                    {faq.question}
                  </h3>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${openFaq === index ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'}`}>
                    <motion.div
                      animate={{ rotate: openFaq === index ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50 mt-2">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="py-24 bg-gradient-to-br from-[#0A1128] to-[#1734a7] text-center">
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-300 font-semibold px-4 py-2 rounded-full text-sm mb-6 border border-red-500/30">
              <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></span>
              Subsidy limits are filling fast in UP
            </div>
            
            <h2 className="text-4xl md:text-[64px] font-bold text-white leading-tight tracking-tight mb-8">
              Lock in your ₹1,08,000 <br className="hidden md:block"/> benefit today.
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
              <Link href="/#contact" className="bg-blue-500 hover:bg-blue-400 text-white font-bold text-lg px-10 py-5 rounded-full transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                Book Free Site Survey
              </Link>
              <a href="tel:+917052737431" className="bg-transparent hover:bg-white/10 text-white font-bold text-lg px-10 py-5 rounded-full transition-colors flex items-center justify-center gap-2 border border-white/30">
                <Phone className="w-5 h-5 text-blue-300" /> Speak to an Expert
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
