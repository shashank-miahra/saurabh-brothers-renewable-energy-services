"use client";

import { motion } from "framer-motion";
import { Zap, IndianRupee, Home, ShieldCheck, Sun } from "lucide-react";

export default function SubsidyBentoV2() {
  return (
    <section className="py-24 bg-slate-900 w-full" id="subsidy">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">The Smartest Investment for Your Home</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Take advantage of the PM Surya Ghar Yojana and slash your electricity bills to zero.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
          
          {/* Main Subsidy Highlight */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 rounded-3xl bg-gradient-to-br from-orange-500/20 to-slate-800 border border-white/10 p-8 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none">
              <IndianRupee className="w-48 h-48 text-orange-500" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider mb-6">
                Government Approved
              </div>
              <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
                Up to <span className="text-orange-400">₹1,08,000</span><br /> Subsidy Available
              </h3>
              <p className="text-slate-300 text-lg md:text-xl max-w-md">
                Under the PM Surya Ghar Muft Bijli Yojana, upgrading your home has never been more affordable. We handle all the paperwork for you.
              </p>
            </div>
            <div className="mt-8 flex gap-4">
              <button className="px-6 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition-colors z-10 relative">Check Eligibility</button>
            </div>
          </motion.div>

          {/* Zero Bill Bento */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-3xl bg-slate-800/50 border border-white/5 p-8 flex flex-col justify-center"
          >
            <Zap className="w-10 h-10 text-amber-400 mb-4" />
            <h4 className="text-2xl font-bold text-white mb-2">Zero Electricity Bills</h4>
            <p className="text-slate-400">Generate your own power and say goodbye to rising grid tariffs forever.</p>
          </motion.div>

          {/* High ROI Bento */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl bg-slate-800/50 border border-white/5 p-8 flex flex-col justify-center"
          >
            <Sun className="w-10 h-10 text-orange-400 mb-4" />
            <h4 className="text-2xl font-bold text-white mb-2">Fastest ROI</h4>
            <p className="text-slate-400">Recover your investment in just 3-4 years and enjoy free electricity for 25+ years.</p>
          </motion.div>

          {/* Property Value */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-3 rounded-3xl bg-gradient-to-r from-slate-800 to-slate-800/50 border border-white/5 p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                <Home className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-2">Increase Property Value</h4>
                <p className="text-slate-400 max-w-2xl">Homes equipped with premium solar installations sell faster and at a premium in Uttar Pradesh.</p>
              </div>
            </div>
            <div className="shrink-0 hidden md:block">
              <ShieldCheck className="w-16 h-16 text-slate-600" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
