"use client";

import { Home, Zap, FileText, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Stats() {
  const stats = [
    {
      icon: <Home className="w-6 h-6 text-[#0056D2]" />,
      value: "500+",
      label: "Homes Solarized"
    },
    {
      icon: <Zap className="w-6 h-6 text-[#0056D2]" />,
      value: "5+ MW",
      label: "Power Installed"
    },
    {
      icon: <FileText className="w-6 h-6 text-[#0056D2]" />,
      value: "₹4+ Cr",
      label: "Subsidy Delivered"
    },
    {
      icon: <Award className="w-6 h-6 text-[#0056D2]" />,
      value: "Top Rated Solar",
      label: "In Uttar Pradesh"
    }
  ];

  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-[24px] md:text-[40px] font-bold text-[#1e293b]">
            Powering Homes Across Uttar Pradesh
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-[#f8fafc] rounded-2xl p-4 md:p-8 flex flex-col justify-center items-start border border-gray-100 hover:shadow-md transition-shadow">
              <div className="mb-3 md:mb-4">
                {stat.icon}
              </div>
              <h3 className="text-[20px] md:text-[28px] font-bold text-[#1e293b] mb-1 md:mb-2 leading-none">
                {stat.value}
              </h3>
              <p className="text-[12px] md:text-[14px] text-gray-500 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-[#f0fcf9] rounded-2xl p-5 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 border border-teal-50">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 relative flex justify-center items-center">
              <div className="absolute inset-0 bg-teal-100 animate-pulse rounded-md"></div>
              <Image src="/up-map.png" alt="Uttar Pradesh" fill sizes="(max-width: 768px) 100vw, 48px" className="object-contain relative z-10" onError={(e) => e.currentTarget.style.display = 'none'} onLoad={(e) => e.currentTarget.previousSibling.style.display = 'none'} />
            </div>
            <p className="text-[14px] md:text-[18px] text-[#1e293b] font-medium max-w-xl leading-relaxed">
              We are present in major cities across Uttar Pradesh, and are growing every day.
            </p>
          </div>
          <Link href="/#contact" className="bg-[#0b1b42] text-white font-medium px-8 py-4 rounded-xl hover:bg-[#142654] transition-colors shadow-lg w-full md:w-auto text-center inline-block">
            Unlock Your Solar Savings
          </Link>
        </div>
      </div>
    </section>
  );
}
