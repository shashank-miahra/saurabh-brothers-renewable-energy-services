"use client";

import { Home, Sun, Receipt, Zap } from "lucide-react";
import Link from "next/link";

export default function Clients() {
  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-[24px] md:text-[40px] font-bold text-[#1e293b]">
            Powering Homes Across Uttar Pradesh
          </h2>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-8 md:mb-10">
          
          <div className="bg-[#f8fafc] rounded-2xl p-4 md:p-8 flex flex-col justify-center">
            <Home className="w-6 h-6 md:w-8 md:h-8 text-blue-500 mb-3 md:mb-6" strokeWidth={1.5} />
            <h3 className="text-[20px] md:text-[28px] font-bold text-[#1e293b] mb-1">500+</h3>
            <p className="text-[12px] md:text-[15px] text-gray-500 font-medium">Homes Solarized</p>
          </div>

          <div className="bg-[#f8fafc] rounded-2xl p-4 md:p-8 flex flex-col justify-center">
            <Sun className="w-6 h-6 md:w-8 md:h-8 text-blue-500 mb-3 md:mb-6" strokeWidth={1.5} />
            <h3 className="text-[20px] md:text-[28px] font-bold text-[#1e293b] mb-1">5+ MW</h3>
            <p className="text-[12px] md:text-[15px] text-gray-500 font-medium">Power Installed</p>
          </div>

          <div className="bg-[#f8fafc] rounded-2xl p-4 md:p-8 flex flex-col justify-center">
            <Receipt className="w-6 h-6 md:w-8 md:h-8 text-blue-500 mb-3 md:mb-6" strokeWidth={1.5} />
            <h3 className="text-[20px] md:text-[28px] font-bold text-[#1e293b] mb-1">₹4+ Cr</h3>
            <p className="text-[12px] md:text-[15px] text-gray-500 font-medium">Subsidy Delivered</p>
          </div>

          <div className="bg-[#f8fafc] rounded-2xl p-4 md:p-8 flex flex-col justify-center">
            <Zap className="w-6 h-6 md:w-8 md:h-8 text-blue-500 mb-3 md:mb-6" strokeWidth={1.5} />
            <h3 className="text-[20px] md:text-[28px] font-bold text-[#1e293b] mb-1">Top Rated Solar</h3>
            <p className="text-[12px] md:text-[15px] text-gray-500 font-medium">In Uttar Pradesh</p>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="bg-[#f0f9ff] rounded-2xl p-5 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 md:gap-6">
            <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 opacity-50">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-blue-500">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
            <p className="text-[14px] md:text-[18px] text-[#1e293b] font-medium leading-snug">
              We are present in 75 Districts across Uttar Pradesh, and are growing every day.
            </p>
          </div>
          
          <Link href="/#contact" className="bg-[#0b1b42] text-white font-medium px-8 py-3.5 rounded-md hover:bg-[#142654] transition-colors shadow-md text-center text-[15px] inline-block w-full md:w-auto">
            Unlock Your Solar Savings
          </Link>
        </div>

      </div>
    </section>
  );
}
