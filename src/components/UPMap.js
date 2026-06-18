"use client";

import { useState, useEffect } from "react";
import { MapPin, CircleCheck } from "lucide-react";

// Major UP Districts
const districts = [
  "Lucknow", "Kanpur", "Ghaziabad", "Agra", "Varanasi", 
  "Meerut", "Prayagraj", "Bareilly", "Aligarh", "Moradabad", 
  "Saharanpur", "Gorakhpur", "Noida", "Firozabad", "Jhansi", 
  "Muzaffarnagar", "Mathura", "Ayodhya", "Rampur", "Shahjahanpur",
  "Farrukhabad", "Mau", "Hapur", "Etawah", "Mirzapur",
  "Bulandshahr", "Sambhal", "Amroha", "Hardoi", "Fatehpur",
  "Raebareli", "Orai", "Sitapur", "Bahraich", "Modinagar",
  "Unnao", "Jaunpur", "Lakhimpur", "Hathras", "Banda",
  "Pilibhit", "Barabanki", "Mainpuri", "Gonda", "Azamgarh"
];

export default function UPMap() {
  const [activeDots, setActiveDots] = useState([]);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setActive(true), 500);
    
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < districts.length) {
        setActiveDots(prev => [...prev, currentIndex]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 60);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="py-12 md:py-24 bg-[#0A1128] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/50 border border-blue-800 text-blue-300 text-sm font-bold mb-4">
            <MapPin className="w-4 h-4" /> Uttar Pradesh Coverage
          </div>
          <h2 className="text-[24px] md:text-[48px] font-black text-white tracking-tight">
            Our Service Area
          </h2>
          <p className="text-gray-400 text-[14px] md:text-lg mt-4 max-w-2xl mx-auto">
            Proudly serving all 75 districts of Uttar Pradesh with premium solar installations and dedicated local support.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl p-4 md:p-8 lg:p-12 backdrop-blur-sm relative min-h-[300px] md:min-h-[400px] flex items-center justify-center shadow-2xl">
          
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 lg:gap-4 max-w-5xl">
            {districts.map((district, index) => {
              const isActive = activeDots.includes(index);
              
              return (
                <div 
                  key={index}
                  className={`
                    px-3 md:px-5 py-1.5 md:py-2.5 rounded-full text-xs md:text-base font-bold transition-all duration-700 ease-out
                    ${isActive 
                      ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.6)] transform scale-100 opacity-100' 
                      : 'bg-white/5 text-gray-500 border border-white/5 transform scale-95 opacity-50'}
                  `}
                >
                  {district}
                </div>
              );
            })}
            
            {/* The rest of the districts representation */}
            <div className={`px-3 md:px-5 py-1.5 md:py-2.5 rounded-full text-xs md:text-base font-bold transition-all duration-700 ease-out ${activeDots.length === districts.length ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.3)]' : 'opacity-0'}`}>
              + 30 More Districts
            </div>
          </div>

          {/* Legend */}
          <div className="absolute bottom-6 right-6 bg-[#0A1128]/80 border border-white/10 rounded-xl p-4 backdrop-blur-md hidden md:block">
            <div className="flex items-center gap-3">
              <div className="relative w-3 h-3">
                <div className="absolute inset-0 rounded-full bg-blue-500"></div>
                <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-50"></div>
              </div>
              <span className="text-white text-sm font-semibold">Active Coverage</span>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <CircleCheck className="w-3 h-3 text-emerald-400" />
              </div>
              <span className="text-gray-400 text-sm">75/75 Districts</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
