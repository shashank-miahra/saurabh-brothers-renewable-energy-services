"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function PremiumNavbarV2() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/v2" className="flex items-center gap-2 relative z-50">
          <div className="relative w-10 h-10 overflow-hidden rounded-full border border-orange-200">
            <Image src="/logo.png" alt="Saurabh Brothers Logo" fill className="object-cover" />
          </div>
          <span className={`font-bold text-xl tracking-tight ${scrolled ? "text-slate-900" : "text-white"} transition-colors`}>Saurabh Brothers</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#solutions" className={`text-sm font-medium ${scrolled ? "text-slate-600 hover:text-orange-500" : "text-white/90 hover:text-white"} transition-colors`}>Solutions</Link>
          <Link href="#subsidy" className={`text-sm font-medium ${scrolled ? "text-slate-600 hover:text-orange-500" : "text-white/90 hover:text-white"} transition-colors`}>Subsidy</Link>
          <Link href="#process" className={`text-sm font-medium ${scrolled ? "text-slate-600 hover:text-orange-500" : "text-white/90 hover:text-white"} transition-colors`}>Process</Link>
          <Link href="#contact" className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-[0_0_15px_rgba(249,115,22,0.3)] hover:shadow-[0_0_25px_rgba(249,115,22,0.5)] transition-all transform hover:-translate-y-0.5">
            Get Quote
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden relative z-50 p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? (
            <X className={`w-6 h-6 ${scrolled || mobileMenuOpen ? "text-slate-900" : "text-white"}`} />
          ) : (
            <Menu className={`w-6 h-6 ${scrolled ? "text-slate-900" : "text-white"}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute top-0 left-0 w-full bg-white h-screen flex flex-col items-center justify-center gap-8 transition-transform duration-500 ${mobileMenuOpen ? "translate-y-0" : "-translate-y-full"}`}>
        <Link href="#solutions" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-slate-800">Solutions</Link>
        <Link href="#subsidy" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-slate-800">Subsidy</Link>
        <Link href="#process" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold text-slate-800">Process</Link>
        <Link href="#contact" onClick={() => setMobileMenuOpen(false)} className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg mt-4">
          Get Free Quote
        </Link>
      </div>
    </nav>
  );
}
