"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

import { upDistricts } from "@/lib/city-data";

export default function Footer() {
  return (
    <footer className="bg-[#0A1128] text-white">
      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl py-6 md:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 md:gap-8">
            <div>
              <h2 className="text-lg md:text-[36px] font-bold leading-tight">
                Ready to go solar?
              </h2>
              <p className="text-gray-400 mt-2 text-[14px] md:text-[16px]">
                Get a free site survey and customized quote for your home or business.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto">
              <Link
                href="/residential"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-xl transition-colors flex items-center justify-center gap-2 text-[14px] md:text-base"
              >
                Residential Solar <ArrowUpRight className="w-5 h-5" />
              </Link>
              <Link
                href="/commercial"
                className="border border-white/30 hover:bg-white/10 text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-xl transition-colors flex items-center justify-center gap-2 text-[14px] md:text-base"
              >
                Commercial Solar <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="container mx-auto px-4 md:px-6 max-w-7xl py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <div className="relative w-[160px] sm:w-[220px] h-[45px] sm:h-[50px] invert mix-blend-screen flex items-center">
                <Image 
                  src="/logo-cropped.png" 
                  alt="Saurabh Brothers Renewable Energy Services" 
                  width={250} 
                  height={80} 
                  className="w-full h-auto object-contain" 
                />
              </div>
            </Link>
            <p className="text-gray-400 text-[14px] leading-relaxed mb-6 max-w-sm">
              Uttar Pradesh&apos;s most trusted solar installation company. We deliver
              end-to-end solar solutions for homes and businesses — from design to
              commissioning to lifelong maintenance.
            </p>
            <div className="flex flex-col gap-4 mt-6">
              <div className="flex flex-col gap-1">
                <a href="tel:+917052737431" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors text-[14px]">
                  <Phone className="w-4 h-4 text-blue-400" /> +91 70527 37431
                </a>
                <a href="tel:+918736967374" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors text-[14px] pl-7">
                  +91 87369 67374
                </a>
              </div>
              <div className="flex flex-col gap-1">
                <a href="mailto:shivamsaurabh7373@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors text-[14px]">
                  <Mail className="w-4 h-4 text-blue-400" /> shivamsaurabh7373@gmail.com
                </a>
                <a href="mailto:supportsaurabhbrothers@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors text-[14px] pl-7">
                  supportsaurabhbrothers@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-bold text-[15px] text-white uppercase tracking-wider mb-6">
              Our Services
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/residential" className="text-gray-400 hover:text-white text-[14px] transition-colors">
                  Residential Solar
                </Link>
              </li>
              <li>
                <Link href="/commercial" className="text-gray-400 hover:text-white text-[14px] transition-colors">
                  Commercial Solar
                </Link>
              </li>
              <li>
                <Link href="/maintenance" className="text-gray-400 hover:text-white text-[14px] transition-colors">
                  Solar Maintenance
                </Link>
              </li>
              <li>
                <Link href="/on-grid-solar" className="text-gray-400 hover:text-white text-[14px] transition-colors">
                  On-Grid Solar Guide
                </Link>
              </li>
              <li>
                <Link href="/hybrid-solar" className="text-gray-400 hover:text-white text-[14px] transition-colors">
                  Hybrid Solar Guide
                </Link>
              </li>
            </ul>

            <h3 className="font-bold text-[15px] text-white uppercase tracking-wider mb-4 mt-10">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/about-us" className="text-gray-400 hover:text-white text-[14px] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white text-[14px] transition-colors">
                  Blog &amp; Guides
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-gray-400 hover:text-white text-[14px] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Cities Column */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-[15px] text-white uppercase tracking-wider mb-6">
              Service Areas in UP
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {upDistricts.map((city) => (
                <Link
                  key={city.slug}
                  href={`/city/${city.slug}`}
                  className="text-gray-400 hover:text-white text-[14px] transition-colors py-1"
                >
                  Solar in {city.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-[13px]">
              © {new Date().getFullYear()} Saurabh Brothers. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/blog" className="text-gray-500 hover:text-gray-300 text-[13px] transition-colors">
                Blog
              </Link>
              <Link href="/about-us" className="text-gray-500 hover:text-gray-300 text-[13px] transition-colors">
                About
              </Link>
              <Link href="/contact-us" className="text-gray-500 hover:text-gray-300 text-[13px] transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
