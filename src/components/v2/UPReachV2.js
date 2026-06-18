"use client";

import { motion } from "framer-motion";
import { MapPin, Users, Award } from "lucide-react";

export default function UPReachV2() {
  return (
    <section className="py-24 bg-white w-full" id="process">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 w-full"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
            Local Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
            Deeply Rooted in <span className="text-blue-600">Uttar Pradesh</span>
          </h2>
          <p className="text-slate-600 text-lg mb-10 leading-relaxed">
            We understand the unique energy needs, weather conditions, and regulatory landscape of UP. Our local presence ensures lightning-fast support and seamless installations.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-1">Serving Major UP Cities</h4>
                <p className="text-slate-600">From Lucknow and Kanpur to Varanasi and Agra, our teams are deployed across the state.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center shrink-0">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-1">Dedicated Local Teams</h4>
                <p className="text-slate-600">No outsourcing. Our in-house trained engineers handle everything from site survey to commissioning.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-1">UPNEDA Approved</h4>
                <p className="text-slate-600">Fully certified to process your state and central subsidies smoothly.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex-1 w-full relative aspect-square md:aspect-auto md:h-[600px] rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 flex items-center justify-center shadow-2xl"
        >
          {/* Abstract UP Map / Aesthetic Visual */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-orange-50"></div>
          
          <div className="relative z-10 text-center px-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Quality you can trust.</h3>
            <div className="p-6 bg-white rounded-2xl shadow-xl border border-slate-100 text-left">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-slate-200 rounded-full"></div>
                <div className="text-left">
                  <div className="w-24 h-4 bg-slate-200 rounded mb-2"></div>
                  <div className="w-16 h-3 bg-slate-100 rounded"></div>
                </div>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded mb-2"></div>
              <div className="w-full h-2 bg-slate-100 rounded mb-2"></div>
              <div className="w-2/3 h-2 bg-slate-100 rounded"></div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
