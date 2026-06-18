"use client";

import { useRef } from "react";
import Image from "next/image";
import { MapPin, Zap, ChevronRight, ChevronLeft } from "lucide-react";

const projects = [
  { id: 1, src: "/projects/project1.jpg", location: "Prayagraj, UP", size: "3kW Residential" },
  { id: 2, src: "/projects/project2.jpg", location: "Prayagraj, UP", size: "5kW Residential" },
  { id: 3, src: "/projects/project3.jpg", location: "Prayagraj, UP", size: "3kW Residential" },
  { id: 4, src: "/projects/project4.jpg", location: "Prayagraj, UP", size: "5kW Residential" },
  { id: 5, src: "/projects/project5.jpg", location: "Prayagraj, UP", size: "3kW Residential" },
  { id: 6, src: "/projects/project7.jpg", location: "Prayagraj, UP", size: "3kW Residential" },
  { id: 7, src: "/projects/project8.jpg", location: "Prayagraj, UP", size: "5kW Residential" },
  { id: 8, src: "/projects/project9.jpg", location: "Prayagraj, UP", size: "5kW Residential" },
  { id: 9, src: "/projects/project10.jpg", location: "Fafamau, UP", size: "3kW Residential" },
];

export default function Testimonials() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-bold mb-4">
              <Zap className="w-4 h-4" /> Powering Uttar Pradesh
            </div>
            <h2 className="text-[24px] md:text-[48px] font-black text-[#0A1128] tracking-tight">
              Our Recent Projects
            </h2>
            <p className="text-gray-600 text-[14px] md:text-lg mt-4 max-w-xl">
              From compact residential roofs to large commercial factories, discover the high-quality solar setups we have installed.
            </p>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex gap-4">
            <button 
              onClick={() => scroll("left")}
              className="p-3 md:p-4 rounded-full border border-gray-200 hover:bg-gray-50 text-[#0A1128] transition-colors"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="p-3 md:p-4 rounded-full bg-[#0066FF] hover:bg-blue-700 text-white transition-colors shadow-lg shadow-blue-500/30"
              aria-label="Next project"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Carousel */}
      <div className="relative w-full pb-10">
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-6 md:px-12 lg:px-[max(24px,calc((100vw-1280px)/2+24px))] pb-8 pt-4 hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="relative flex-none w-[260px] md:w-[450px] lg:w-[500px] h-[300px] md:h-[500px] rounded-[24px] md:rounded-[32px] overflow-hidden snap-center group shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={project.src}
                  alt={`Solar project`}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  sizes="(max-width: 768px) 320px, 500px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Hide Scrollbar CSS injection */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
