import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, ChevronRight, Phone } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "PM Surya Ghar Muft Bijli Yojana UP 2024 | Get ₹1,08,000 Subsidy",
  description: "Claim up to ₹1,08,000 subsidy under PM Surya Ghar Muft Bijli Yojana in Uttar Pradesh. Home solar panel starting at ₹60,000 per kW. Understand the step-by-step application process, exact costs, and Easy EMI plans. Book a free site survey.",
  keywords: "PM Surya Ghar Yojana UP, solar subsidy UP, PM Surya Ghar Muft Bijli Yojana Uttar Pradesh, solar panel subsidy calculator, Easy EMI solar UP, UPNEDA solar subsidy 2024, free solar panel scheme UP, residential solar installation UP, home solar panel starting at 60000 per kw UP, PM Surya Ghar subsidy 108000, solar subsidy application UP 2024, get 1,08,000 gov subsidy",
  alternates: {
    canonical: "https://saurabhbrothers.in/pm-surya-ghar-yojana-up",
  },
};

const faqs = [
  {
    question: "What is PM Surya Ghar Muft Bijli Yojana?",
    answer: "It is an official Central Government scheme providing a direct bank subsidy of ₹40,000 to ₹1,08,000 to households installing rooftop solar panels. This significantly reduces the upfront cost and eliminates your monthly electricity bills."
  },
  {
    question: "How much subsidy is available in Uttar Pradesh?",
    answer: "In UP, the subsidy is structured as follows: ₹40,000 for a 1 kW system, ₹78,000 for a 2 kW system, and a maximum of ₹1,08,000 for a 3 kW system or higher. The amount is directly credited to your bank account after a successful UPNEDA inspection."
  },
  {
    question: "Can I install solar panels on Easy EMI?",
    answer: "Absolutely. Saurabh Brothers provides a Easy EMI financing option. Instead of paying your regular electricity bill, you can pay a similar or lower amount as your EMI. Your solar system essentially pays for itself with zero extra financial burden."
  },
  {
    question: "Do I need to visit government offices for the subsidy?",
    answer: "No, you do not. Saurabh Brothers handles 100% of the paperwork. From PM Surya Ghar portal registration and DISCOM approvals to the net metering application and final UPNEDA subsidy claim, we manage the entire process."
  }
];

export default function PMSuryaGharPage() {
  const faqSchema = {
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
  };

  const govSchemeSchema = {
    "@context": "https://schema.org",
    "@type": "GovernmentService",
    "name": "PM Surya Ghar Muft Bijli Yojana",
    "serviceType": "Solar Panel Subsidy",
    "provider": {
      "@type": "GovernmentOrganization",
      "name": "Ministry of New and Renewable Energy, Government of India"
    },
    "areaServed": {
      "@type": "State",
      "name": "Uttar Pradesh"
    }
  };

  return (
    <>
      <Navbar />
      <main className="bg-[#FBFBFD] font-sans selection:bg-blue-200">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(govSchemeSchema) }} />

      {/* ========== HERO SECTION (APPLE-STYLE MINIMALISM) ========== */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute top-[-20%] left-[50%] translate-x-[-50%] w-[120vw] h-[120vw] max-w-[1200px] max-h-[1200px] rounded-full bg-[radial-gradient(circle,rgba(0,102,255,0.06)_0%,rgba(0,102,255,0)_70%)] pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
          <p className="text-[#0066FF] font-semibold tracking-wide uppercase text-sm mb-6 inline-flex items-center gap-2 bg-blue-50/50 px-4 py-2 rounded-full border border-blue-100">
            <span>Official Government Scheme</span>
          </p>
          
          <h1 className="text-4xl md:text-[80px] font-bold text-[#1D1D1F] leading-[1.05] tracking-tight mb-8">
            Power your home.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#3385FF]">Empower your wallet.</span>
          </h1>
          
          <p className="text-base md:text-[24px] text-[#86868B] max-w-3xl mx-auto leading-relaxed mb-12 font-medium">
            Install rooftop solar starting at just <strong className="text-[#1D1D1F] font-semibold">₹60,000/kW</strong>. 
            Claim up to <strong className="text-[#1D1D1F] font-semibold">₹1,08,000</strong> in direct subsidies under PM Surya Ghar Muft Bijli Yojana.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/#contact" className="w-full sm:w-auto bg-[#1D1D1F] hover:bg-[#333336] text-white font-medium text-lg px-10 py-5 rounded-full transition-all duration-300 flex items-center justify-center gap-3">
              Book a Free Site Survey
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="#calculator" className="w-full sm:w-auto text-[#0066FF] hover:text-[#0055D4] font-medium text-lg px-6 py-4 flex items-center justify-center gap-2 transition-colors">
              Calculate Savings <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* 3D Hero Asset */}
        <div className="mt-20 flex justify-center w-full px-6">
          <div className="relative w-full max-w-4xl aspect-[16/9] md:aspect-[21/9]">
            <Image 
              src="/pm_surya_hero_new_1780636478492.png" 
              alt="Premium Solar Installation" 
              fill 
              className="object-cover rounded-[40px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]"
              priority
            />
          </div>
        </div>
      </section>

      {/* ========== 3D FEATURE HIGHLIGHTS ========== */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-[56px] font-bold text-[#1D1D1F] leading-tight tracking-tight mb-6">
              Brilliant in every way.
            </h2>
            <p className="text-base md:text-[20px] text-[#86868B] max-w-2xl mx-auto">
              Everything you need to know about the subsidy, visualized beautifully.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-10">
            {/* Feature 1: The Subsidy */}
            <div className="bg-[#F5F5F7] rounded-3xl md:rounded-[40px] p-4 md:p-14 flex flex-col justify-between overflow-hidden relative group">
              <div className="relative z-10 mb-6 md:mb-12 max-w-[280px]">
                <h3 className="text-sm md:text-[28px] font-bold text-[#1D1D1F] leading-tight mb-2 md:mb-4">Massive Direct Cash Subsidy.</h3>
                <p className="text-[#86868B] text-[10px] md:text-lg">Up to ₹1,08,000 credited directly to your bank account after installation.</p>
              </div>
              <div className="relative w-full h-[80px] md:h-[300px] flex justify-end items-end group-hover:scale-105 transition-transform duration-700 ease-out">
                <Image src="/images/3d_rupee_stack.png" alt="3D Rupee Stack" fill className="object-contain object-right-bottom drop-shadow-2xl" />
              </div>
            </div>

            {/* Feature 2: Tier 1 Tech */}
            <div className="bg-white border border-gray-200 rounded-3xl md:rounded-[40px] p-4 md:p-14 flex flex-col justify-between overflow-hidden relative group">
              <div className="relative z-10 mb-6 md:mb-12 max-w-[300px]">
                <h3 className="text-sm md:text-[28px] font-bold text-[#1D1D1F] leading-tight mb-2 md:mb-4">Pro-Level Solar Panels.</h3>
                <p className="text-[#86868B] text-[10px] md:text-lg">Tier-1 Monocrystalline technology. Designed for maximum efficiency, even on cloudy days.</p>
              </div>
              <div className="relative w-full h-[80px] md:h-[300px] flex justify-end items-end group-hover:scale-105 transition-transform duration-700 ease-out">
                <Image src="/images/3d_solar_panel.png" alt="3D Solar Panel" fill className="object-contain object-right-bottom drop-shadow-[0_20px_50px_rgba(0,102,255,0.3)]" />
              </div>
            </div>

            {/* Feature 3: Smart Homes */}
            <div className="bg-[#E8F0FE] rounded-3xl md:rounded-[40px] p-4 md:p-14 flex flex-col justify-between overflow-hidden relative group md:col-span-1">
              <div className="relative z-10 mb-6 md:mb-12 max-w-[280px]">
                <h3 className="text-sm md:text-[28px] font-bold text-[#1D1D1F] leading-tight mb-2 md:mb-4">Perfect for Any Home.</h3>
                <p className="text-[#42526E] text-[10px] md:text-lg">Whether a 1kW starter or a 5kW powerhouse. Custom-fitted to your roof.</p>
              </div>
              <div className="relative w-full h-[80px] md:h-[280px] flex justify-end items-end group-hover:scale-105 transition-transform duration-700 ease-out">
                <Image src="/images/3d_smart_home.png" alt="3D Smart Home" fill className="object-contain object-right-bottom" />
              </div>
            </div>

            {/* Feature 4: UPNEDA Approved */}
            <div className="bg-[#FFF4E5] rounded-3xl md:rounded-[40px] p-4 md:p-14 flex flex-col justify-between overflow-hidden relative group md:col-span-1">
              <div className="relative z-10 mb-6 md:mb-12 max-w-[280px]">
                <h3 className="text-sm md:text-[28px] font-bold text-[#1D1D1F] leading-tight mb-2 md:mb-4">100% UPNEDA Approved.</h3>
                <p className="text-[#6D5A41] text-[10px] md:text-lg">We handle all the government paperwork. You simply enjoy the savings.</p>
              </div>
              <div className="relative w-full h-[80px] md:h-[280px] flex justify-end items-end group-hover:scale-105 transition-transform duration-700 ease-out">
                <Image src="/images/3d_shield_check.png" alt="3D Shield Check" fill className="object-contain object-right-bottom drop-shadow-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== MODERN SUBSIDY TABLE ========== */}
      <section className="py-32 bg-[#FBFBFD]">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-10 md:mb-20">
            <h2 className="text-3xl md:text-[56px] font-bold text-[#1D1D1F] leading-tight tracking-tight mb-4 md:mb-6">
              Clear, transparent pricing.
            </h2>
            <p className="text-base md:text-[20px] text-[#86868B]">Official 2024 PM Surya Ghar Rates</p>
          </div>

          <div className="bg-white rounded-[40px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100 p-4 md:p-12">
            <div className="flex flex-col gap-4 md:gap-6">
              
              <div className="flex flex-col md:flex-row justify-between items-center p-6 md:p-8 rounded-3xl bg-[#F5F5F7] transition-colors hover:bg-gray-100">
                <div className="text-center md:text-left mb-4 md:mb-0">
                  <h4 className="text-xl md:text-2xl font-bold text-[#1D1D1F] mb-1">1 kW System</h4>
                  <p className="text-[#86868B] text-sm md:text-base font-medium">For small homes & low consumption</p>
                </div>
                <div className="text-center md:text-right">
                  <p className="text-xs md:text-sm font-semibold text-[#86868B] uppercase tracking-wider mb-1">Total Subsidy</p>
                  <p className="text-3xl md:text-[40px] font-bold text-[#1D1D1F] leading-none">₹40,000</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center p-6 md:p-8 rounded-3xl bg-[#F5F5F7] transition-colors hover:bg-gray-100">
                <div className="text-center md:text-left mb-4 md:mb-0">
                  <h4 className="text-xl md:text-2xl font-bold text-[#1D1D1F] mb-1">2 kW System</h4>
                  <p className="text-[#86868B] text-sm md:text-base font-medium">For medium homes with AC usage</p>
                </div>
                <div className="text-center md:text-right">
                  <p className="text-xs md:text-sm font-semibold text-[#86868B] uppercase tracking-wider mb-1">Total Subsidy</p>
                  <p className="text-3xl md:text-[40px] font-bold text-[#1D1D1F] leading-none">₹78,000</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center p-6 md:p-10 rounded-3xl bg-gradient-to-r from-[#0066FF] to-[#004FD9] text-white shadow-lg transform md:scale-[1.02] relative mt-4 md:mt-0">
                <div className="absolute top-0 right-1/2 translate-x-1/2 md:translate-x-0 md:right-8 -translate-y-1/2 bg-white text-[#0066FF] text-[10px] md:text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm text-center">
                  Most Popular
                </div>
                <div className="text-center md:text-left mb-4 md:mb-0 mt-2 md:mt-0">
                  <h4 className="text-xl md:text-2xl font-bold mb-1">3 kW System & Above</h4>
                  <p className="text-blue-200 text-sm md:text-base font-medium">For large homes & maximum savings</p>
                </div>
                <div className="text-center md:text-right">
                  <p className="text-xs md:text-sm font-semibold text-blue-200 uppercase tracking-wider mb-1">Total Subsidy</p>
                  <p className="text-4xl md:text-[48px] font-bold leading-none tracking-tight">₹1,08,000</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ========== CALCULATOR REMOVED ========== */}

      {/* ========== CLEAN FAQ ========== */}
      <section className="py-32 bg-[#FBFBFD] border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-10 md:mb-20">
            <h2 className="text-3xl md:text-[56px] font-bold text-[#1D1D1F] leading-tight tracking-tight">
              Questions? Answered.
            </h2>
          </div>

          <div className="space-y-4 md:space-y-6">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-3xl border border-gray-200/60 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="cursor-pointer p-8 flex items-center justify-between gap-6 outline-none">
                  <h3 className="text-[20px] font-semibold text-[#1D1D1F] group-open:text-[#0066FF] transition-colors">{faq.question}</h3>
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0 group-open:bg-blue-50 transition-colors">
                    <ChevronRight className="w-5 h-5 text-[#86868B] group-open:text-[#0066FF] group-open:rotate-90 transition-transform duration-300" />
                  </div>
                </summary>
                <div className="px-8 pb-8 pt-0">
                  <p className="text-[17px] text-[#86868B] leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA (APPLE PRO STYLE) ========== */}
      <section className="py-32 bg-white border-t border-gray-100 text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl md:text-[72px] font-bold text-[#1D1D1F] leading-tight tracking-tight mb-6 md:mb-8">
            The future is bright.<br/>And free.
          </h2>
          <p className="text-base md:text-[22px] text-[#86868B] max-w-2xl mx-auto mb-10 md:mb-14 font-medium">
            Subsidy limits are filling fast in UP. Lock in your ₹1,08,000 benefit today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <Link href="/#contact" className="bg-[#0066FF] hover:bg-[#0055D4] text-white font-semibold text-base md:text-lg px-8 py-4 md:px-10 md:py-5 rounded-full transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30">
              Book Free Site Survey
            </Link>
            <a href="tel:+917052737431" className="bg-white hover:bg-gray-50 text-[#1D1D1F] font-semibold text-base md:text-lg px-8 py-4 md:px-10 md:py-5 rounded-full transition-colors flex items-center justify-center gap-2 border border-gray-200">
              <Phone className="w-5 h-5 text-[#0066FF]" /> Speak to an Expert
            </a>
          </div>
        </div>
      </section>

      <Footer />
      </main>
    </>
  );
}
