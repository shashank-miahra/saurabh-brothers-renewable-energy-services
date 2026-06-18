"use client";

import { Home, Building2, Factory, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Features() {
  return (
    <section className="py-10 md:py-20 bg-white relative border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-[24px] md:text-[40px] font-bold text-[#1e293b]">
            Get Solar for
          </h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-12">
          
          <Link href="/residential" className="flex items-start gap-4 flex-1 cursor-pointer group">
            <div className="w-16 h-16 shrink-0 relative flex items-center justify-center">
               <div className="absolute inset-0 bg-blue-100/50 rounded-full blur-md"></div>
               <Home className="w-8 h-8 text-[#0056D2] relative z-10" strokeWidth={2} />
               <div className="absolute inset-[-2px] border-2 border-blue-200 rounded-full rounded-t-none rotate-12 opacity-50"></div>
            </div>
            <div>
              <h3 className="text-[18px] md:text-[20px] font-bold text-[#1e293b] mb-1 md:mb-2 flex items-center gap-1 group-hover:text-[#0056D2] transition-colors">
                Homes <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#0056D2] transition-colors" />
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed font-medium">
                Save up to 90% on your home electricity bills.
              </p>
            </div>
          </Link>

          <Link href="/residential" className="flex items-start gap-4 flex-1 cursor-pointer group">
            <div className="w-16 h-16 shrink-0 relative flex items-center justify-center">
               <div className="absolute inset-0 bg-blue-100/50 rounded-full blur-md"></div>
               <Building2 className="w-8 h-8 text-[#0056D2] relative z-10" strokeWidth={2} />
               <div className="absolute inset-[-2px] border-2 border-blue-200 rounded-full rounded-t-none rotate-12 opacity-50"></div>
            </div>
            <div>
              <h3 className="text-[18px] md:text-[20px] font-bold text-[#1e293b] mb-1 md:mb-2 flex items-center gap-1 group-hover:text-[#0056D2] transition-colors">
                Housing Societies <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#0056D2] transition-colors" />
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed font-medium">
                Reduce common-area power costs and add long-term value.
              </p>
            </div>
          </Link>

          <Link href="/commercial" className="flex items-start gap-4 flex-1 cursor-pointer group">
            <div className="w-16 h-16 shrink-0 relative flex items-center justify-center">
               <div className="absolute inset-0 bg-blue-100/50 rounded-full blur-md"></div>
               <Factory className="w-8 h-8 text-[#0056D2] relative z-10" strokeWidth={2} />
               <div className="absolute inset-[-2px] border-2 border-blue-200 rounded-full rounded-t-none rotate-12 opacity-50"></div>
            </div>
            <div>
              <h3 className="text-[18px] md:text-[20px] font-bold text-[#1e293b] mb-1 md:mb-2 flex items-center gap-1 group-hover:text-[#0056D2] transition-colors">
                Commercial <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#0056D2] transition-colors" />
              </h3>
              <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed font-medium">
                Power your business with green energy and save on costs.
              </p>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}
