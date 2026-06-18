"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function PremiumFooterV2() {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/v2" className="flex items-center gap-2 mb-6">
              <div className="relative w-10 h-10 overflow-hidden rounded-full border border-orange-200">
                <Image src="/logo.png" alt="Saurabh Brothers Logo" fill className="object-cover" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">Saurabh Brothers</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Uttar Pradesh&apos;s most trusted solar installation company. Powering homes and businesses with clean, affordable energy.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all text-slate-400">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all text-slate-400">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all text-slate-400">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Solutions</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-slate-400 hover:text-orange-400 text-sm transition-colors">Residential Solar</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-orange-400 text-sm transition-colors">Commercial Solar</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-orange-400 text-sm transition-colors">Off-Grid Systems</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-orange-400 text-sm transition-colors">Solar Maintenance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-slate-400 hover:text-orange-400 text-sm transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-orange-400 text-sm transition-colors">PM Surya Ghar Yojana</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-orange-400 text-sm transition-colors">Subsidy Calculator</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-orange-400 text-sm transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm">123 Solar Park Avenue, Lucknow, Uttar Pradesh 226001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-500 shrink-0" />
                <span className="text-slate-400 text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-500 shrink-0" />
                <span className="text-slate-400 text-sm">hello@saurabhbrothers.in</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Saurabh Brothers. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
