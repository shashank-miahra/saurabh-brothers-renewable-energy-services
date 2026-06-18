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

export default function ResWhyUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#1e293b]">
            Why Families Across Uttar Pradesh Trust SaurabhBrothers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustFactors.map((factor, index) => (
            <div key={index} className="flex flex-col items-center text-center px-4">
              <div className="w-full max-w-[200px] aspect-square rounded-[32px] overflow-hidden mb-6 relative">
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
              <h3 className="text-[18px] font-bold text-[#1e293b] mb-3 leading-tight">
                {factor.title}
              </h3>
              <p className="text-[14px] text-gray-500 leading-relaxed font-medium">
                {factor.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
