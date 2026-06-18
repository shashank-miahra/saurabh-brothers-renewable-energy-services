"use client";

import Image from "next/image";

const steps = [
  {
    num: "01",
    title: "Submit Request",
    description: "Share your requirements with us. Our team will reach out to understand your energy needs and site constraints.",
    image: "/steps/step1.png"
  },
  {
    num: "02",
    title: "Cost Estimate",
    description: "Receive a transparent, detailed technical and financial proposal tailored specifically for your rooftop or land.",
    image: "/steps/step2.png"
  },
  {
    num: "03",
    title: "Technical Inspection",
    description: "Our expert engineers perform a professional site audit, shadow analysis, and structural check for precision planning.",
    image: "/steps/step3.png"
  },
  {
    num: "04",
    title: "Precision Setup",
    description: "Seamless installation of solar panels with the highest safety and quality standards by our certified technical experts.",
    image: "/steps/step4.png"
  },
  {
    num: "05",
    title: "Incentive Claim",
    description: "We handle all the tedious documentation and liaison with DISCOM to ensure you get your government subsidy smoothly.",
    image: "/steps/step5.png"
  },
  {
    num: "06",
    title: "Operational Support",
    description: "Long term support and periodic maintenance to ensure your solar system runs at peak efficiency for 25+ years.",
    image: "/steps/step6.png"
  }
];

export default function Approach() {
  return (
    <section className="py-12 md:py-24 bg-[#f8faff] overflow-hidden relative font-sans">
      
      {/* Animated Background SVG Line */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden md:block opacity-60">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="bg-path" d="M-100,200 C300,100 500,300 720,200 C940,100 1200,300 1540,200 M-100,450 C300,550 500,350 720,450 C940,550 1200,350 1540,450" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="10 10"/>
          
          <path d="M-100,200 C300,100 500,300 720,200 C940,100 1200,300 1540,200 M-100,450 C300,550 500,350 720,450 C940,550 1200,350 1540,450" stroke="#0d6efd" strokeWidth="4" strokeLinecap="round" className="animated-line" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8">
          {steps.map((step, idx) => {
            return (
              <div 
                key={idx} 
                className="group bg-white/90 backdrop-blur-sm rounded-[24px] md:rounded-[32px] p-4 md:p-10 border border-transparent shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(13,110,253,0.12)] hover:border-blue-100 transition-all duration-300 relative overflow-hidden"
              >
                {/* Large Watermark Number */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[100px] md:text-[180px] font-black text-gray-50/70 -z-10 group-hover:text-blue-50/40 transition-colors duration-500">
                  {step.num}
                </div>

                <div className="flex justify-center mb-4 md:mb-8">
                  <div className="w-16 h-16 md:w-24 md:h-24 relative rounded-full overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-300 ring-4 ring-[#f1f5f9] group-hover:ring-[#0d6efd]/20">
                    <Image src={step.image} alt={step.title} fill className="object-cover" />
                  </div>
                </div>

                <h3 className="text-[14px] md:text-[20px] font-bold text-gray-900 text-center mb-2 md:mb-4 group-hover:text-[#0d6efd] transition-colors duration-300 leading-tight">
                  {step.title}
                </h3>
                
                <p className="text-[12px] md:text-[14px] text-gray-500 text-center leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .animated-line {
          stroke-dasharray: 100 2500;
          animation: moveLine 6s linear infinite;
        }

        @keyframes moveLine {
          0% { stroke-dashoffset: 2600; }
          100% { stroke-dashoffset: 0; }
        }
      `}} />
    </section>
  );
}
