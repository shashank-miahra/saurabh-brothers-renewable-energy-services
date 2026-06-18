"use client";

import { useState } from "react";
import { Calculator } from "lucide-react";
import Link from "next/link";

export default function Calculate() {
  const [bill, setBill] = useState(3000);
  const [showResult, setShowResult] = useState(false);

  // Quick estimation logic
  const systemSize = Math.ceil((bill / 8) / 120);
  const savings = Math.floor(bill * 0.9);

  return (
    <section className="py-10 md:py-20 bg-[#f8fafc]">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 bg-white rounded-[24px] md:rounded-[32px] p-6 md:p-10 lg:p-16 shadow-sm border border-gray-100">
          
          {/* Left Content */}
          <div className="w-full md:w-1/2">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border border-green-100 flex items-center justify-center relative mb-6 md:mb-8">
              <div className="absolute inset-0 rounded-full border border-green-100 scale-125"></div>
              <div className="absolute inset-0 rounded-full border border-green-50 scale-150"></div>
              <Calculator className="w-8 h-8 md:w-10 md:h-10 text-green-300" strokeWidth={1.5} />
            </div>
            
            <h2 className="text-[24px] md:text-[36px] lg:text-[46px] font-bold text-[#1e293b] leading-tight mb-3 md:mb-4 tracking-tight">
              Calculate your savings
            </h2>
            <p className="text-[14px] md:text-[18px] text-[#1e293b] font-medium leading-relaxed max-w-md">
              Enter your average monthly electricity bill to calculate your estimated solar system size and savings.
            </p>
          </div>

          {/* Right Content - Form */}
          <div className="w-full md:w-1/2 max-w-md">
            {!showResult ? (
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center text-[15px] font-medium text-[#1e293b]">
                    <span className="flex items-center gap-1">
                      Monthly Electricity Bill 
                    </span>
                    <span className="font-bold text-lg">₹{bill}</span>
                  </div>
                  
                  <input
                    type="range"
                    min="1000"
                    max="20000"
                    step="500"
                    value={bill}
                    onChange={(e) => setBill(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#6366f1]"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>₹1,000</span>
                    <span>₹20,000+</span>
                  </div>
                </div>

                <button 
                  onClick={() => setShowResult(true)}
                  className="w-full bg-[#6366f1] text-white font-medium py-4 rounded-md text-[16px] hover:bg-[#4f46e5] transition-colors mt-2 flex items-center justify-center gap-2"
                >
                  Calculate now <span className="text-xl leading-none">→</span>
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-6 animate-fadeIn">
                <h3 className="text-xl font-bold text-[#1e293b] border-b pb-4">Your Solar Estimate</h3>
                
                <div className="flex justify-between items-center bg-green-50 p-4 rounded-xl border border-green-100">
                  <span className="text-gray-600">Recommended System</span>
                  <span className="font-bold text-green-700 text-xl">{Math.max(1, systemSize)} kW</span>
                </div>
                
                <div className="flex justify-between items-center bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <span className="text-gray-600">Monthly Savings</span>
                  <span className="font-bold text-blue-700 text-xl">₹{savings}</span>
                </div>

                <p className="text-xs text-gray-500 italic">
                  * This is a rough estimate. Actual generation and savings vary based on roof space and orientation.
                </p>

                <div className="flex gap-4 mt-2">
                  <button 
                    onClick={() => setShowResult(false)}
                    className="w-1/3 border border-[#6366f1] text-[#6366f1] font-medium py-3 rounded-md hover:bg-[#6366f1]/5 transition-colors"
                  >
                    Back
                  </button>
                  <Link 
                    href="/#contact"
                    className="w-2/3 bg-[#0b1b42] text-white font-medium py-3 rounded-md text-center hover:bg-[#142654] transition-colors flex items-center justify-center"
                  >
                    Get Free Quote
                  </Link>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
