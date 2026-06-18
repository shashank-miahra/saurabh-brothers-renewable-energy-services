"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);

  const toggleMobileDropdown = (name) => {
    setMobileDropdownOpen(mobileDropdownOpen === name ? null : name);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const upDistricts = [
    "Agra", "Aligarh", "Prayagraj", "Ambedkar Nagar", "Amethi", "Amroha", "Auraiya", "Ayodhya", "Azamgarh", "Baghpat", 
    "Bahraich", "Ballia", "Balrampur", "Banda", "Barabanki", "Bareilly", "Basti", "Bhadohi", "Bijnor", "Budaun", 
    "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria", "Etah", "Etawah", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar", 
    "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hapur", "Hardoi", "Hathras", "Jalaun", "Jaunpur", 
    "Jhansi", "Kannauj", "Kanpur Dehat", "Kanpur Nagar", "Kasganj", "Kaushambi", "Kheri", "Kushinagar", "Lalitpur", "Lucknow", 
    "Maharajganj", "Mahoba", "Mainpuri", "Mathura", "Mau", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar", "Pilibhit", 
    "Pratapgarh", "Raebareli", "Rampur", "Saharanpur", "Sambhal", "Sant Kabir Nagar", "Shahjahanpur", "Shamli", "Shravasti", "Siddharthnagar", 
    "Sitapur", "Sonbhadra", "Sultanpur", "Unnao", "Varanasi"
  ];

  const navLinks = [
    { 
      name: "Our Offerings", 
      hasDropdown: true,
      dropdownItems: [
        { name: "Residential", href: "/residential" },
        { name: "Commercial", href: "/commercial" },
        { name: "Solar Maintenance", href: "/maintenance" }
      ]
    },
    { 
      name: "Solar Solutions", 
      hasDropdown: true,
      dropdownItems: [
        { name: "On-Grid Solar Guide", href: "/on-grid-solar" },
        { name: "Hybrid Solar", href: "/hybrid-solar" },
      ]
    },
    { 
      name: "Cities", 
      hasDropdown: true,
      isMegaMenu: true,
      dropdownItems: upDistricts.map(city => ({ name: city, href: `/city/${city.toLowerCase().replace(/ /g, '-')}` }))
    },
    { name: "PM Surya Ghar", hasDropdown: false, href: "/pm-surya-ghar-yojana-up" },
    { name: "Blog", hasDropdown: false, href: "/blog" },
    { name: "About Us", hasDropdown: false, href: "/about-us" },
    { name: "Contact", hasDropdown: false, href: "/contact-us" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white ${
        isScrolled ? "shadow-sm py-2 md:py-3" : "py-2 md:py-4 border-b border-gray-100"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center z-50 group py-1">
            <div className="relative w-[120px] sm:w-[220px] h-[30px] sm:h-[50px] flex items-center mix-blend-multiply">
              <Image
                src="/logo-cropped.png"
                alt="Saurabh Brothers Renewable Energy Services"
                width={250}
                height={80}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative flex items-center gap-1 cursor-pointer group py-4"
              >
                {link.href && !link.hasDropdown ? (
                  <Link href={link.href} className="text-[15px] font-medium text-[#1e293b] hover:text-blue-600 transition-colors">
                    {link.name}
                  </Link>
                ) : (
                  <span className="text-[15px] font-medium text-[#1e293b] hover:text-blue-600 transition-colors">
                    {link.name}
                  </span>
                )}
                {link.hasDropdown && (
                  <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-blue-600 transition-colors" strokeWidth={2} />
                )}
                
                {/* Mega Menu for Cities */}
                {link.isMegaMenu && link.dropdownItems && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[700px] bg-white border border-gray-100 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 p-6">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">All 75 Districts of Uttar Pradesh</p>
                    <div className="grid grid-cols-5 gap-x-4 gap-y-2">
                      {link.dropdownItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="text-[13px] text-gray-600 hover:text-blue-600 hover:font-medium transition-colors py-0.5 truncate"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Regular Dropdown Menu */}
                {link.dropdownItems && !link.isMegaMenu && (
                  <div className="absolute top-full left-0 mt-0 w-52 bg-white border border-gray-100 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {link.dropdownItems.map((item) => (
                        <Link 
                          key={item.name} 
                          href={item.href} 
                          className="block px-4 py-2.5 text-[14px] text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <Link href="/contact-us" className="border-2 border-[#1e293b] text-[#1e293b] px-6 py-2 rounded-md font-semibold text-[14px] hover:bg-gray-50 transition-colors ml-4">
              Get Free Quote
            </Link>
          </div>

          {/* Mobile Menu Buttons (Quote & Hamburger) */}
          <div className="flex lg:hidden items-center gap-3">
            <Link 
              href="/contact-us" 
              className="bg-[#1e293b] text-white px-3 py-1.5 rounded-md font-semibold text-[12px] transition-colors"
            >
              Get Free Quote
            </Link>
            <button 
              className="text-[#1e293b]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-b border-gray-100 shadow-2xl overflow-y-auto max-h-[calc(100vh-70px)] z-50">
          <div className="px-6 py-6 flex flex-col gap-4 pb-24">
            {navLinks.map((link) => (
              <div key={link.name}>
                <div 
                  className="flex items-center justify-between text-[16px] font-semibold text-[#1e293b] py-2 cursor-pointer"
                  onClick={() => link.hasDropdown ? toggleMobileDropdown(link.name) : null}
                >
                  {link.href && !link.hasDropdown ? (
                    <Link href={link.href} onClick={() => setIsMobileMenuOpen(false)}>{link.name}</Link>
                  ) : (
                    <span>{link.name}</span>
                  )}
                  {link.hasDropdown && <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${mobileDropdownOpen === link.name ? "rotate-180" : ""}`} />}
                </div>
                {link.dropdownItems && !link.isMegaMenu && mobileDropdownOpen === link.name && (
                  <div className="ml-4 flex flex-col gap-1 mt-1">
                    {link.dropdownItems.map(item => (
                      <Link key={item.name} href={item.href} className="text-[14px] text-gray-600 py-1 hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
                {link.isMegaMenu && mobileDropdownOpen === link.name && (
                  <div className="ml-4 mt-2 grid grid-cols-2 gap-1">
                    {link.dropdownItems.map(item => (
                      <Link key={item.name} href={item.href} className="text-[13px] text-gray-500 py-0.5 hover:text-blue-600 truncate" onClick={() => setIsMobileMenuOpen(false)}>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/contact-us" onClick={() => setIsMobileMenuOpen(false)} className="border-2 border-[#1e293b] text-[#1e293b] w-full py-3 rounded-md font-semibold text-[15px] mt-4 text-center">
              Get Free Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
