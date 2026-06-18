"use client";

import Image from "next/image";

const trustFactors = [
  {
    image: "/trust-factors/guaranteed.png",
    title: "Guaranteed Savings",
    description: "The only solar company in Uttar Pradesh with a money-back promise."
  },
  {
    image: "/trust-factors/hassle-free.png",
    title: "Hassle-free Process",
    description: "Installation, subsidy and service — all handled directly by us. Zero middlemen."
  },
  {
    image: "/trust-factors/storm-proof.png",
    title: "Storm-proof Structure",
    description: "Heavy-duty WindPro Mount™ designed to withstand extreme weather conditions across Uttar Pradesh."
  },
  {
    image: "/trust-factors/after-sales.png",
    title: "Reliable After-sales Service",
    description: "Regular proactive maintenance for steady, year-after-year performance."
  }
];

export default function WhyUs() {
  return (
    <section className="py-10 md:py-20 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-[24px] md:text-[40px] font-bold text-[#1e293b]">
            Why Families Across Uttar Pradesh Trust SaurabhBrothers
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {trustFactors.map((factor, index) => (
            <div key={index} className="flex flex-col items-center text-center px-1 md:px-4">
              <div className="w-full max-w-[120px] md:max-w-[200px] aspect-square rounded-[20px] md:rounded-[32px] overflow-hidden mb-3 md:mb-6 relative">
                <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                <Image 
                  src={factor.image} 
                  alt={factor.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, 200px"
                  className="object-cover transition-transform duration-500 hover:scale-105 relative z-10"
                  onLoad={(e) => e.currentTarget.previousSibling.style.display = 'none'}
                />
              </div>
              <h3 className="text-[14px] md:text-[18px] font-bold text-[#1e293b] mb-2 md:mb-3 leading-tight">
                {factor.title}
              </h3>
              <p className="text-[12px] md:text-[14px] text-gray-500 leading-relaxed font-medium">
                {factor.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
