"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export default function HeroV2() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20 pb-16">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* We use hero_residential.png assuming it exists, with a strong overlay */}
        <Image src="/images/hero_residential.png" alt="Solar Home" fill className="object-cover opacity-40 mix-blend-overlay" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950/80"></div>
        
        {/* Sun Flare */}
        <div className="absolute top-[10%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-orange-500/20 blur-[120px] mix-blend-screen pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
        >
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-orange-500/20 text-orange-400">
            <Star className="w-3 h-3 fill-current" />
          </span>
          <span className="text-sm font-medium text-slate-300">Uttar Pradesh&apos;s Premium Solar Partner</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6 leading-[1.1]"
        >
          Powering <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
            The Future of UP
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 font-light leading-relaxed"
        >
          Transform your home with state-of-the-art solar technology. Claim up to <strong className="text-amber-400 font-medium">₹1,08,000</strong> in PM Surya Ghar subsidies today.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link href="#contact" className="group flex items-center justify-center gap-3 px-8 py-4 bg-white text-slate-950 rounded-full font-semibold text-lg hover:bg-slate-100 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Get Your Free Quote
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="#subsidy" className="flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-semibold text-lg hover:bg-white/10 backdrop-blur-sm transition-colors">
            Calculate Subsidy
          </Link>
        </motion.div>

        {/* Stats / Trust */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 w-full max-w-4xl border-t border-white/10 pt-10"
        >
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-bold text-white mb-2">500+</span>
            <span className="text-xs md:text-sm text-slate-500 uppercase tracking-wider font-medium">Installations</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center">4.8 <Star className="w-5 h-5 ml-1 fill-amber-400 text-amber-400" /></span>
            <span className="text-xs md:text-sm text-slate-500 uppercase tracking-wider font-medium">Google Rating</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-bold text-white mb-2">25<span className="text-xl">yr</span></span>
            <span className="text-xs md:text-sm text-slate-500 uppercase tracking-wider font-medium">Warranty</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-bold text-white mb-2">₹1.08L</span>
            <span className="text-xs md:text-sm text-slate-500 uppercase tracking-wider font-medium">Max Subsidy</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
