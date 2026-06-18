"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const sliderImages = [
  "/images/slider1.png",
  "/images/slider2.png",
  "/images/slider3.png",
  "/images/slider4.png",
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => setCurrentSlide(index);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % sliderImages.length);

  return (
    <section className="relative w-full flex flex-col bg-white font-sans mt-16 md:mt-20 overflow-hidden">
      
      {/* Text Content Area */}
      <div className="w-full bg-white pt-6 md:pt-10 pb-8 flex flex-col items-center text-center px-4 md:px-8 relative z-20">
        <h1 className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-bold text-[#0066FF] tracking-tight leading-[1.2] w-full text-balance">
          The Future is Solar. Bring it Home Today.
        </h1>
        
        <p className="text-[16px] sm:text-[18px] md:text-[22px] font-medium text-[#1E293B] mt-1 mb-8">
          With Uttar Pradesh&apos;s No. 1 Home Solar Brand
        </p>

        {/* CTA Button */}
        <Link 
          href="#contact" 
          className="bg-gradient-to-r from-[#1734a7] to-[#0A1128] hover:from-[#132a8a] hover:to-[#070b1a] text-white font-medium px-6 md:px-8 py-3 rounded-lg transition-all shadow-md flex items-center gap-2 text-[14px] md:text-[15px] group z-30 relative"
        >
          Get Free Consultation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Image Slider with Seamless Gradient and Blur */}
      <div className="relative w-full aspect-[4/3] md:aspect-[21/9] overflow-hidden -mt-16 md:-mt-24 z-10">
        {/* Top gradient for seamless blending and stronger blur haze */}
        <div className="absolute top-0 left-0 w-full h-48 md:h-80 bg-gradient-to-b from-white via-white/70 to-transparent z-20 pointer-events-none backdrop-blur-md [mask-image:linear-gradient(to_bottom,white_10%,transparent_90%)]"></div>

        {sliderImages.map((src, index) => (
          <div 
            key={index}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out"
            style={{ opacity: currentSlide === index ? 1 : 0 }}
          >
            <Image
              src={src}
              alt={`Solar installation ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        ))}

        {/* Slider Navigation Arrows - Desktop only */}
        <button 
          onClick={prevSlide}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full items-center justify-center shadow-lg hover:bg-white transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 text-gray-800" />
        </button>
        <button 
          onClick={nextSlide}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full items-center justify-center shadow-lg hover:bg-white transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 text-gray-800" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? "w-8 h-2.5 bg-white" 
                  : "w-2.5 h-2.5 bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
