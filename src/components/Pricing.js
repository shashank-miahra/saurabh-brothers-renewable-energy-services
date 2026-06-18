"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const plans = [
  {
    name: "Residential Core",
    price: "Custom",
    description: "Intelligent solar integration designed for modern residential properties.",
    features: [
      "Tier-1 Monocrystalline Panels",
      "Smart Hybrid Inverter",
      "Real-time Generation App",
      "10-Year Workmanship Warranty",
      "Net Metering Setup"
    ],
    popular: false,
  },
  {
    name: "Vanguard Enterprise",
    price: "Custom",
    description: "High-yield commercial solar infrastructure with advanced grid capabilities.",
    features: [
      "High-Density Commercial Arrays",
      "Bifacial Panel Technology",
      "Micro-Inverter Ecosystem",
      "25-Year Performance Warranty",
      "Predictive Maintenance AI",
      "Priority Grid Independence"
    ],
    popular: true,
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-40 bg-alabaster relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center mb-8"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary">
              Investment Models
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2rem,7vw,5.5rem)] font-bold leading-[0.9] tracking-tighter text-secondary mb-6 md:mb-8"
          >
            ENGINEERED FOR <br className="hidden md:block" />
            <span className="text-primary italic font-light">MAXIMUM ROI.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[16px] md:text-xl text-gray-500 font-light max-w-xl mx-auto tracking-tight"
          >
            We don&apos;t do standardized pricing. Every infrastructure is custom-modeled based on your architectural parameters.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.3 + index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className={`relative ${plan.popular ? 'md:-translate-y-4' : ''}`}
            >
              <div className="h-full bg-white p-6 md:p-10 lg:p-14 flex flex-col relative border border-gray-200 group hover:border-gray-500/20 transition-colors duration-500">
                {plan.popular && (
                  <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-5 py-2 rounded-full shadow-lg shadow-primary/30">
                    Most Selected
                  </div>
                )}
                
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-secondary mb-3 md:mb-4">{plan.name}</h3>
                <p className="text-gray-500 text-[13px] md:text-sm leading-relaxed mb-6 md:mb-10 h-auto md:h-14 font-light">{plan.description}</p>
                
                <div className="mb-6 md:mb-10 pb-6 md:pb-10 border-b border-gray-200">
                  <div className="flex items-end gap-3">
                    <span className="text-4xl md:text-6xl font-bold tracking-tighter text-secondary">{plan.price}</span>
                    <span className="text-gray-500 mb-2 font-medium tracking-wide">/ modeled</span>
                  </div>
                </div>

                <ul className="flex flex-col gap-4 md:gap-5 mb-8 md:mb-12 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-4 group/item">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-200 group-hover/item:bg-primary transition-colors duration-300 flex-shrink-0" />
                      <span className="text-secondary font-medium text-sm transition-transform duration-300 group-hover/item:translate-x-1">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/#contact" className={`w-full py-5 font-bold text-sm tracking-wide transition-all duration-500 block text-center ${
                  plan.popular 
                    ? "bg-secondary text-white hover:bg-primary shadow-xl shadow-secondary/5" 
                    : "bg-transparent text-secondary border border-gray-200 hover:border-secondary"
                }`}>
                  Request Analysis
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
