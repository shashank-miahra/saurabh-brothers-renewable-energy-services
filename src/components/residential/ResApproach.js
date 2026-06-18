"use client";

import Image from "next/image";

const steps = [
  {
    num: "1",
    title: "Free Visit & Design for Maximum Power",
    description: "Our team visits your home to check your rooftop and take measurements, so your solar system is designed for maximum power generation."
  },
  {
    num: "2",
    title: "We Install & Handle the Subsidy",
    description: "Our experts install your solar system and take care of all government paperwork, including the subsidy—no follow-ups needed from you."
  },
  {
    num: "3",
    title: "Solar On. You Save. We Maintain.",
    description: "Your system is switched on, savings begin, and we handle regular maintenance to ensure smooth performance year after year."
  }
];

export default function ResApproach() {
  return (
    <section className="py-20 bg-[#F9FAFB]">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-[32px] md:text-[40px] font-bold text-[#1e293b] mb-16 tracking-tight">
          Simplified Solar Journey for you
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="w-full lg:w-1/2 flex flex-col relative">
            <div className="absolute left-[19px] top-4 bottom-12 w-[2px] bg-gray-200 -z-10"></div>
            
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-6 mb-10 last:mb-0">
                <div className="shrink-0 w-10 h-10 rounded-full border-2 border-teal-400 bg-white flex items-center justify-center font-bold text-teal-600 text-[16px]">
                  {step.num}
                </div>
                <div className="pt-1">
                  <h3 className="text-[20px] font-bold text-[#1e293b] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-gray-500 font-medium leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-1/2 flex justify-end">
            <div className="relative w-full max-w-lg aspect-[4/3] overflow-hidden rounded-bl-3xl">
              <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
              <Image 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80" 
                alt="Family discussing solar installation with expert" 
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-bottom relative z-10"
                onLoad={(e) => e.currentTarget.previousSibling.style.display = 'none'}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
