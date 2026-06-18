"use client";

import { Check, X, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Advantage() {
  return (
    <section className="py-10 md:py-20 bg-[#0A1128] text-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          
          {/* Left Side */}
          <div className="lg:w-1/2">
            <h2 className="text-[24px] md:text-[44px] font-bold mb-4">
              The SaurabhBrothers Advantage
            </h2>
            <p className="text-[16px] md:text-[20px] mb-6 md:mb-8 text-gray-300">
              End-to-end management. No middlemen.
            </p>

            <div className="bg-[#b3d4ff] text-[#0A1128] rounded-xl p-4 md:p-6 flex items-center gap-4 md:gap-6 max-w-md">
              <div className="w-20 h-20 bg-gray-200 rounded-full overflow-hidden shrink-0 relative">
                <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
                <Image 
                  src="https://images.unsplash.com/photo-1509391366360-128aa1d56cc3?auto=format&fit=crop&w=200&q=80" 
                  alt="Solar Expert"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover relative z-10"
                  onLoad={(e) => e.currentTarget.previousSibling.style.display = 'none'}
                />
              </div>
              <div>
                <h3 className="font-bold text-[18px] mb-1">Got questions?</h3>
                <p className="text-[14px] mb-2 opacity-80">Our solar experts are just a call away.</p>
                <a href="tel:+917052737431" className="text-blue-700 font-semibold text-[14px] flex items-center gap-1 hover:underline">
                  Talk to our expert <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Comparison Table */}
          <div className="lg:w-1/2 w-full flex justify-end">
             <div className="flex gap-4 w-full max-w-lg">
                
                {/* Saurabh Brothers Column */}
                <div className="flex-1 bg-[#121A33] rounded-2xl p-6 shadow-xl border border-gray-800 flex flex-col items-center text-center">
                  <div className="w-24 h-20 mb-4 relative">
                    <div className="absolute inset-0 bg-gray-700 animate-pulse rounded-lg"></div>
                    <Image src="https://cdn-icons-png.flaticon.com/512/3750/3750058.png" width={96} height={80} className="w-full h-full object-contain filter invert relative z-10" alt="Solar Panel" onLoad={(e) => e.currentTarget.previousSibling.style.display = 'none'} />
                  </div>
                  <h4 className="font-medium text-gray-300 mb-6">SaurabhBrothers</h4>
                  
                  <ul className="flex flex-col gap-6 text-left w-full text-[14px] text-gray-200">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>Heavy-Duty Mounting Structures</span>
                    </li>
                    <li className="w-full h-px bg-gray-800"></li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>5-Year Support & Maintenance</span>
                    </li>
                    <li className="w-full h-px bg-gray-800"></li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>Tier-1 Quality Components</span>
                    </li>
                    <li className="w-full h-px bg-gray-800"></li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>Guaranteed Energy Generation</span>
                    </li>
                  </ul>
                </div>

                {/* Other Brands Column */}
                <div className="flex-1 p-6 flex flex-col items-center text-center opacity-70">
                  <div className="w-24 h-20 mb-4 relative">
                    <div className="absolute inset-0 bg-gray-700 animate-pulse rounded-lg"></div>
                    <Image src="https://cdn-icons-png.flaticon.com/512/3750/3750058.png" width={96} height={80} className="w-full h-full object-contain filter invert opacity-50 relative z-10" alt="Solar Panel" onLoad={(e) => e.currentTarget.previousSibling.style.display = 'none'} />
                  </div>
                  <h4 className="font-medium text-gray-400 mb-6">Other Brands</h4>
                  
                  <ul className="flex flex-col gap-6 text-left w-full text-[14px] text-gray-400">
                    <li className="flex items-start gap-3">
                      <X className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
                      <span>Standard Mounting Systems</span>
                    </li>
                    <li className="w-full h-px bg-gray-800"></li>
                    <li className="flex items-start gap-3">
                      <X className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
                      <span>Limited Post-Installation Support</span>
                    </li>
                    <li className="w-full h-px bg-gray-800"></li>
                    <li className="flex items-start gap-3">
                      <X className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
                      <span>Mixed Component Quality</span>
                    </li>
                    <li className="w-full h-px bg-gray-800"></li>
                    <li className="flex items-start gap-3">
                      <X className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
                      <span>Variable Generation Output</span>
                    </li>
                  </ul>
                </div>

             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
