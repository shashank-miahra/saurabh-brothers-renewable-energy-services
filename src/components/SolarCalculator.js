"use client";

import { useState, useEffect } from "react";
import { Sun, Battery, IndianRupee, Zap, Info, ArrowRight, CircleCheck } from "lucide-react";
import Link from "next/link";

export default function SolarCalculator() {
  const [systemSize, setSystemSize] = useState(3);
  const [roofType, setRoofType] = useState("flat");
  const [city, setCity] = useState("Lucknow");
  
  // Calculation states
  const [estimatedCost, setEstimatedCost] = useState(0);
  const [subsidy, setSubsidy] = useState(0);
  const [savings, setSavings] = useState(0);
  
  // Calculate whenever inputs change
  useEffect(() => {
    const size = systemSize;
    
    // Calculate Base Cost (approx ₹60,000 per kW for on-grid)
    const cost = size * 60000;
    
    // PM Surya Ghar Subsidy
    let sub = 0;
    if (size === 1) sub = 40000;
    else if (size === 2) sub = 78000;
    else sub = 108000; // Cap for 3kW+
    
    // Calculate savings
    // 1kW = ~120 units/month = ₹900 savings (assuming ₹7.5/unit)
    const monthlySavings = size * 120 * 7.5;
    
    setEstimatedCost(cost);
    setSubsidy(sub);
    setSavings(monthlySavings);
  }, [systemSize]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <section className="py-12 md:py-24 bg-alabaster relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm font-bold mb-4">
            <Zap className="w-4 h-4" /> Free Savings Estimate
          </div>
          <h2 className="text-[24px] md:text-[48px] font-black text-[#0A1128] tracking-tight">
            Calculate Your Solar Savings
          </h2>
          <p className="text-gray-600 text-[14px] md:text-lg mt-2 md:mt-4 max-w-2xl mx-auto">
            See how much you can save on electricity and what subsidy you qualify for in Uttar Pradesh.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl md:rounded-3xl p-4 md:p-8 border border-gray-100 shadow-sm">
            
            <div className="space-y-5 md:space-y-10">
              {/* Step 1: Bill Slider */}
              <div>
                <div className="flex justify-between items-end mb-2 md:mb-4">
                  <label className="text-gray-800 font-bold text-base md:text-lg flex items-center gap-2">
                    <span className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs md:text-sm">1</span>
                    System Size (kW)
                  </label>
                  <span className="text-2xl font-black text-blue-600">{systemSize} kW</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="9" 
                  step="1"
                  value={systemSize}
                  onChange={(e) => setSystemSize(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-2 font-medium">
                  <span>1 kW</span>
                  <span>9 kW</span>
                </div>
              </div>

              {/* Step 2: Roof Type */}
              <div>
                <label className="text-gray-800 font-bold text-base md:text-lg flex items-center gap-2 mb-3 md:mb-4">
                  <span className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs md:text-sm">2</span>
                  Type of Roof
                </label>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <button 
                    onClick={() => setRoofType('flat')}
                    className={`py-3 md:py-4 px-3 md:px-4 rounded-xl border-2 text-center text-sm md:text-base font-semibold transition-all ${
                      roofType === 'flat' 
                      ? 'border-blue-600 bg-blue-50 text-blue-700' 
                      : 'border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    Flat Roof (RCC)
                  </button>
                  <button 
                    onClick={() => setRoofType('sloped')}
                    className={`py-3 md:py-4 px-3 md:px-4 rounded-xl border-2 text-center text-sm md:text-base font-semibold transition-all ${
                      roofType === 'sloped' 
                      ? 'border-blue-600 bg-blue-50 text-blue-700' 
                      : 'border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    Sloped / Tin Shed
                  </button>
                </div>
              </div>

              {/* Step 3: Location */}
              <div>
                <label className="text-gray-800 font-bold text-base md:text-lg flex items-center gap-2 mb-3 md:mb-4">
                  <span className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs md:text-sm">3</span>
                  Your City in UP
                </label>
                <select 
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full bg-gray-50 border-2 border-gray-200 text-gray-800 rounded-xl py-3 md:py-4 px-3 md:px-4 text-sm md:text-base font-medium focus:outline-none focus:border-blue-600 transition-colors"
                >
                  {["Lucknow", "Kanpur", "Prayagraj", "Varanasi", "Agra", "Meerut", "Ghaziabad", "Noida", "Other City in UP"].map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

          </div>

          {/* Right Column: Results */}
          <div className="lg:col-span-5 bg-blue-600 rounded-2xl md:rounded-3xl p-5 md:p-10 text-white relative overflow-hidden shadow-2xl">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-screen filter blur-3xl opacity-30 transform translate-x-1/2 -translate-y-1/2"></div>
            
            <h3 className="text-lg md:text-xl font-bold text-blue-100 mb-5 md:mb-8 flex items-center gap-2">
              <Sun className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" /> Your Solar Estimate
            </h3>
            
            <div className="space-y-4 md:space-y-8 relative z-10">
              
              <div className="border-b border-blue-500 pb-4 md:pb-6">
                <p className="text-blue-200 text-[11px] md:text-sm mb-1 font-medium uppercase tracking-wider">Recommended System Size</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl md:text-5xl font-black text-white">{systemSize}</span>
                  <span className="text-lg md:text-xl text-blue-200 font-bold">kW</span>
                </div>
                <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                  <Info className="w-3 h-3" /> Requires approx {Math.ceil(systemSize * 100)} sq.ft roof space
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 md:gap-6 border-b border-blue-500 pb-4 md:pb-6">
                <div>
                  <p className="text-blue-200 text-[11px] md:text-sm mb-1 font-medium">Est. Setup Cost</p>
                  <p className="text-xl md:text-2xl font-bold line-through text-blue-300 decoration-blue-800">{formatCurrency(estimatedCost)}</p>
                </div>
                <div>
                  <p className="text-green-300 text-[11px] md:text-sm mb-1 font-medium flex items-center gap-1">
                    <CircleCheck className="w-3 h-3 md:w-4 md:h-4" /> PM Surya Ghar Subsidy
                  </p>
                  <p className="text-xl md:text-2xl font-bold text-green-300">-{formatCurrency(subsidy)}</p>
                </div>
              </div>

              <div>
                <p className="text-blue-200 text-[11px] md:text-sm mb-1 font-medium uppercase tracking-wider">Final Price (After Subsidy)</p>
                <p className="text-2xl md:text-4xl font-black text-white">{formatCurrency(estimatedCost - subsidy)}</p>
                <p className="text-xs md:text-sm text-blue-200 mt-1 md:mt-2">or just <strong>{formatCurrency(Math.floor((estimatedCost-subsidy)/60))} / mo</strong> on Easy EMI</p>
              </div>

              <div className="pt-2 md:pt-4">
                <Link href="#contact" className="w-full bg-white hover:bg-gray-100 text-blue-700 font-bold py-3 md:py-4 px-4 md:px-6 rounded-xl flex items-center justify-center gap-2 text-sm md:text-base transition-colors shadow-lg">
                  Get Exact Quote <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </Link>
                <p className="text-center text-xs text-blue-200 mt-4">
                  *This is an estimate. Actual prices may vary based on site conditions and brand selection.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
