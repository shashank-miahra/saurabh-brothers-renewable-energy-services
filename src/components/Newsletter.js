"use client";

import { useState } from "react";
import { Mail, ArrowRight, CircleCheck } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // Here you would typically send the email to your API/CRM
    }
  };

  return (
    <section className="bg-gradient-to-r from-[#0A1128] to-[#1e3a5f] py-10 md:py-16 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          
          <div className="text-left max-w-xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-3 md:mb-4">
              Stay Updated on Solar Savings
            </h2>
            <p className="text-blue-100 text-[14px] md:text-lg">
              Get the latest news on PM Surya Ghar subsidies, solar technology advancements, and money-saving tips directly in your inbox.
            </p>
          </div>

          <div className="w-full md:w-[450px]">
            {submitted ? (
              <div className="bg-white/10 border border-white/20 rounded-2xl p-6 flex items-center gap-4 animate-in fade-in zoom-in duration-300">
                <CircleCheck className="w-8 h-8 text-emerald-400 shrink-0" />
                <div>
                  <h4 className="text-white font-bold text-lg">You&apos;re Subscribed!</h4>
                  <p className="text-blue-100 text-sm">Thank you for joining our community.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                </div>
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-12 pr-36 py-4 bg-white text-gray-900 border-2 border-transparent rounded-full focus:outline-none focus:border-blue-500 shadow-xl transition-all"
                />
                <button
                  type="submit"
                  className="absolute inset-y-1.5 right-1.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full flex items-center gap-2 transition-colors shadow-md"
                >
                  Subscribe <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
}
