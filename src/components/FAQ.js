"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is the cost of installing solar panels in Lucknow?",
    answer: "The cost of solar panel installation varies based on system size and type. A 1kW system starts from approximately ₹60,000 before subsidy (₹20,000 after PM Surya Ghar subsidy). For a detailed quote customized to your needs, contact our team for a free site survey."
  },
  {
    question: "How much government subsidy is available for solar panels?",
    answer: "The Indian government provides substantial subsidy on solar panel installations under the PM Surya Ghar Yojana. You get ₹40,000 for a 1kW system, ₹78,000 for a 2kW system, and a maximum of ₹1,08,000 for systems 3kW and above. Our team helps you with the complete subsidy application process."
  },
  {
    question: "How much electricity can a solar panel system generate?",
    answer: "A 1kW solar system generates approximately 4-5 units of electricity per day, which translates to about 120-150 units per month. A typical household with a monthly bill of ₹3,000-₹5,000 would need a 3kW-5kW system to offset most of their electricity consumption."
  },
  {
    question: "What is the warranty on solar panels and inverters?",
    answer: "We provide tier-1 solar panels with a 25-year performance warranty and 10-year product warranty. Solar inverters come with a 5-10 year warranty depending on the brand. We also offer lifetime customer support for all our installations."
  },
  {
    question: "How long does it take to install a solar panel system?",
    answer: "A typical residential solar installation takes 1-3 days after the site survey and design approval. The complete process from inquiry to commissioning usually takes 7-15 days, including documentation and government approvals."
  },
  {
    question: "Do solar panels work during cloudy days or rainy season?",
    answer: "Yes, solar panels do work during cloudy days, though at reduced efficiency (around 25-40% of peak output). During the rainy season, you can still generate electricity. With an on-grid system, you can use grid power when solar generation is low, and with a hybrid system, stored battery power covers the gap."
  },
  {
    question: "What maintenance is required for solar panels?",
    answer: "Solar panels require minimal maintenance. Regular cleaning every 2-3 weeks to remove dust and debris is recommended. Our team provides free maintenance support and data monitoring to ensure optimal performance of your system throughout the year."
  },
  {
    question: "What is the difference between On-Grid, Off-Grid, and Hybrid solar systems?",
    answer: "On-Grid systems are connected to the electricity grid — excess power is exported and you get credits. Off-Grid systems work independently with battery storage, ideal for areas with no grid access. Hybrid systems combine both — connected to the grid with battery backup for power cuts. Our experts will recommend the best option based on your needs."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="py-6 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-6 md:mb-16">
          <h2 className="text-lg md:text-[32px] font-bold text-gray-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4"></div>
          <p className="text-gray-500 text-[13px] md:text-sm mt-4 max-w-xl mx-auto">
            Find answers to common questions about solar panel installation, costs, subsidies, and maintenance.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-primary shadow-md bg-white"
                    : "border-gray-200 bg-alabaster hover:border-gray-300"
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between px-3 md:px-6 py-3 md:py-5 text-left gap-2 md:gap-4"
                  aria-expanded={isOpen}
                >
                  <span className={`font-semibold text-xs md:text-[15px] leading-snug transition-colors ${
                    isOpen ? "text-primary" : "text-gray-900"
                  }`}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 md:w-5 md:h-5 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-primary" : "text-gray-400"
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-3 md:px-6 pb-3 md:pb-5 pt-0">
                    <div className="w-full h-[1px] bg-gray-100 mb-2 md:mb-4"></div>
                    <p className="text-gray-600 text-[11px] md:text-[14px] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </section>
  );
}
