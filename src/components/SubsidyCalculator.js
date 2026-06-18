"use client";

import { useState } from "react";
import { Calculator, IndianRupee, Zap, Info } from "lucide-react";
import Link from "next/link";

export default function SubsidyCalculator() {
  const [bill, setBill] = useState(3000);
  const [showResult, setShowResult] = useState(false);

  // Logic: 
  // 1 unit = approx Rs 8
  // 1 kW generates approx 120 units per month
  const unitsConsumed = bill / 8;
  const recommendedKwRaw = unitsConsumed / 120;
  
  // Cap at minimum 1kW
  const systemSize = Math.max(1, Math.ceil(recommendedKwRaw));

  // Pricing Logic (As per UP Market & User specific constraint: 60k/kW base)
  const estimatedCost = systemSize * 60000;

  // Subsidy Logic (PM Surya Ghar)
  let subsidy = 0;
  if (systemSize === 1) subsidy = 40000;
  else if (systemSize === 2) subsidy = 78000;
  else if (systemSize >= 3) subsidy = 108000;

  const finalPayable = estimatedCost - subsidy;

  return (
    <div className="bg-white rounded-3xl md:rounded-[32px] p-4 md:p-12 shadow-xl border border-blue-50 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-50 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>

      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
        {/* Left Content */}
        <div className="w-full md:w-1/2">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs md:text-sm font-semibold mb-4 md:mb-6">
            <Zap className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" />
            PM Surya Ghar Yojana Calculator
          </div>
          
          <h2 className="text-xl md:text-[42px] font-bold text-[#1e293b] leading-tight mb-2 md:mb-4 tracking-tight">
            See how much you can <span className="text-blue-600">save</span>
          </h2>
          <p className="text-xs md:text-[16px] text-gray-600 leading-relaxed mb-6 md:mb-8">
            Adjust your average monthly electricity bill below to calculate your estimated solar system size, project cost, and the exact subsidy amount you can claim in Uttar Pradesh.
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <span className="text-sm md:text-base font-semibold text-gray-700">Monthly Electricity Bill</span>
              <span className="text-xl md:text-2xl font-black text-blue-600">₹{bill.toLocaleString('en-IN')}</span>
            </div>
            
            <input
              type="range"
              min="1000"
              max="15000"
              step="500"
              value={bill}
              onChange={(e) => {
                setBill(Number(e.target.value));
                setShowResult(false);
              }}
              className="w-full h-2 md:h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-[10px] md:text-xs text-gray-400 font-medium">
              <span>₹1,000</span>
              <span>₹15,000+</span>
            </div>
          </div>

          <button 
            onClick={() => setShowResult(true)}
            className="w-full mt-6 md:mt-8 bg-blue-600 text-white font-bold py-3 md:py-4 rounded-xl text-sm md:text-[16px] hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2"
          >
            <Calculator className="w-4 h-4 md:w-5 md:h-5" /> Calculate My Subsidy
          </button>
        </div>

        {/* Right Content - Results */}
        <div className="w-full md:w-1/2">
          {showResult ? (
            <div className="bg-[#f8fafc] rounded-2xl p-4 md:p-8 border border-gray-100 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h3 className="text-base md:text-lg font-bold text-gray-900 border-b border-gray-200 pb-3 md:pb-4 mb-4 md:mb-6">Your Personal Solar Estimate</h3>
              
              <div className="space-y-3 md:space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs md:text-base text-gray-600 font-medium">Recommended System</span>
                  <span className="font-bold text-gray-900 text-lg md:text-xl">{systemSize} kW</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-xs md:text-base text-gray-600 font-medium">Estimated Cost</span>
                  <span className="font-semibold text-gray-700 text-sm md:text-base">₹{estimatedCost.toLocaleString('en-IN')}</span>
                </div>

                <div className="flex justify-between items-center bg-green-50 p-3 md:p-4 rounded-xl border border-green-200 text-green-800">
                  <span className="font-bold flex items-center gap-1 md:gap-2 text-xs md:text-base">
                    <IndianRupee className="w-3 h-3 md:w-4 md:h-4" /> PM Surya Ghar Subsidy
                  </span>
                  <span className="font-black text-lg md:text-xl">- ₹{subsidy.toLocaleString('en-IN')}</span>
                </div>

                <div className="flex justify-between items-center pt-3 md:pt-4 border-t border-gray-200">
                  <span className="text-gray-800 font-bold text-sm md:text-base">Final Payable Amount</span>
                  <span className="font-black text-blue-700 text-xl md:text-2xl">₹{finalPayable.toLocaleString('en-IN')}</span>
                </div>

                <div className="bg-yellow-50 p-3 md:p-4 rounded-xl border border-yellow-200 mt-3 md:mt-4 flex items-start gap-2 md:gap-3">
                  <Info className="w-4 h-4 md:w-5 md:h-5 text-yellow-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs md:text-sm font-bold text-yellow-800">Easy EMI Options Available</p>
                    <p className="text-[10px] md:text-xs text-yellow-700 mt-0.5 md:mt-1">
                      Pay in easy monthly installments with our financing partners instead of paying your electricity bill!
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 md:mt-8">
                <Link 
                  href="/#contact"
                  className="w-full bg-[#0A1128] text-white font-bold py-3 md:py-4 rounded-xl text-sm md:text-base text-center hover:bg-[#111e40] transition-colors flex items-center justify-center shadow-lg shadow-gray-900/20"
                >
                  Claim Subsidy & Get Free Visit
                </Link>
                <p className="text-center text-[10px] md:text-xs text-gray-500 mt-2 md:mt-3">
                  *Estimates are based on standard UP market rates. Final pricing may vary slightly based on roof structure.
                </p>
              </div>
            </div>
          ) : (
            <div className="h-full min-h-[160px] md:min-h-[300px] flex items-center justify-center bg-gray-50 rounded-2xl border border-dashed border-gray-200 p-4 md:p-8 text-center">
              <div>
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-3 md:mb-4 text-gray-400">
                  <IndianRupee className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <p className="text-xs md:text-[16px] text-gray-500 font-medium">Adjust your bill and click calculate to see your exact subsidy breakdown and Easy EMI options.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
