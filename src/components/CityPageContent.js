"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Check, Phone } from "lucide-react";
import {
  Home2,
  Building,
  Setting2,
  MoneyRecive,
  Timer1,
  ShieldTick,
  People,
} from "iconsax-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function CityPageContent({ city, theme, nearbyCities }) {
  const services = [
    {
      icon: <Home2 size={40} variant="Bulk" />,
      title: "Residential Solar",
      desc: `Home solar panel installation in ${city.name} with PM Surya Ghar subsidy support. Systems from 1kW to 10kW designed for your roof.`,
      href: "/residential",
    },
    {
      icon: <Building size={40} variant="Bulk" />,
      title: "Commercial Solar",
      desc: `Power your ${city.name} business with solar. We serve factories, hospitals, schools, hotels, and warehouses across the district.`,
      href: "/commercial",
    },
    {
      icon: <Setting2 size={40} variant="Bulk" />,
      title: "Solar Maintenance",
      desc: `AMC, panel cleaning, inverter repair, and emergency support for solar systems in ${city.name}. 24/7 helpline included.`,
      href: "/maintenance",
    },
  ];

  const whyUs = [
    {
      icon: <People size={36} variant="Bulk" />,
      title: `Local Team in ${city.name}`,
      desc: "Our engineers are based locally — ensuring fast installation and rapid support whenever you need it.",
    },
    {
      icon: <MoneyRecive size={36} variant="Bulk" />,
      title: "MNRE Empanelled Installer",
      desc: "We are government-approved. Claim the full PM Surya Ghar ₹1,08,000 subsidy through us.",
    },
    {
      icon: <ShieldTick size={36} variant="Bulk" />,
      title: "Zero Middlemen",
      desc: "We handle everything in-house — design, installation, net metering, and maintenance. No subcontracting.",
    },
    {
      icon: <Timer1 size={36} variant="Bulk" />,
      title: "24-Hour Emergency Support",
      desc: `System down? Our team in ${city.name} responds within 24 hours for any emergency breakdown.`,
    },
  ];

  const stats = [
    { val: city.avgSunHours + " hrs", label: "Avg. Daily Sun Hours" },
    { val: city.population, label: "City Population" },
    { val: "24 hr", label: "Service Response" },
    { val: "500+", label: "Installations in UP" },
  ];

  return (
    <>
      {/* ───────── Top Bar with Breadcrumb + CTA ───────── */}
      <section className="pt-28 pb-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Breadcrumb */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex items-center gap-2 text-[13px] text-gray-400 mb-10 font-medium"
          >
            <Link href="/" className="hover:text-gray-800 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#cities" className="hover:text-gray-800 transition-colors">Cities</Link>
            <span>/</span>
            <span className="text-gray-800">{city.name}</span>
          </motion.div>

          {/* Hero Image Section */}
          {city.image && (
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0}
              variants={fadeUp}
              className="w-full aspect-video rounded-[2rem] overflow-hidden mb-12 relative shadow-lg"
            >
              <Image 
                src={city.image}
                alt={`Solar installation in ${city.name}`}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left — Heading + CTA */}
            <div>
              <motion.div
                initial="hidden"
                animate="visible"
                custom={1}
                variants={fadeUp}
                className={`inline-flex items-center gap-2 ${theme.serviceAccent} bg-gray-50 border border-gray-100 px-4 py-2 rounded-full text-[12px] font-bold tracking-[0.15em] uppercase mb-6`}
              >
                <MapPin className="w-3.5 h-3.5" /> {city.name}, Uttar Pradesh
              </motion.div>

              <motion.h1
                initial="hidden"
                animate="visible"
                custom={2}
                variants={fadeUp}
                className="text-[36px] md:text-[52px] font-black leading-[1.08] text-gray-900 mb-6 tracking-tight"
              >
                #1 Solar Panel Installation in{" "}
                <span className={theme.serviceAccent}>{city.name}</span>
              </motion.h1>

              <motion.p
                initial="hidden"
                animate="visible"
                custom={3}
                variants={fadeUp}
                className="text-[17px] text-gray-500 leading-relaxed mb-10 font-medium max-w-lg"
              >
                Saurabh Brothers provides premium solar panel installation
                services in {city.name}. From system design to commissioning and
                lifelong maintenance — we handle everything with zero middlemen.
              </motion.p>

              <motion.div
                initial="hidden"
                animate="visible"
                custom={4}
                variants={fadeUp}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/#contact"
                  className={`${theme.ctaPrimary} font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2.5 transition-all duration-300 transform hover:scale-[1.04]`}
                >
                  Get Free Quote <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+917052737431"
                  className="bg-gray-100 text-gray-800 font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2.5 transition-all duration-300 hover:bg-gray-200"
                >
                  <Phone className="w-5 h-5" /> Call Now
                </a>
              </motion.div>
            </div>

            {/* Right — Stats Grid */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -3 }}
                  className="rounded-2xl p-6 bg-gray-50 border border-gray-100 cursor-default transition-all"
                >
                  <h3 className={`text-[28px] md:text-[34px] font-black ${theme.serviceAccent} mb-1 leading-tight`}>
                    {stat.val}
                  </h3>
                  <p className="text-gray-400 font-semibold text-[12px] uppercase tracking-[0.12em]">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───────── Services ───────── */}
      <section className={`py-28 ${theme.servicesBg} relative`}>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="text-center mb-20"
          >
            <h2 className="text-[34px] md:text-[48px] font-black text-gray-900 tracking-tight mb-4">
              Premium Solar Services
              <br className="hidden md:block" /> in{" "}
              <span className={theme.serviceAccent}>{city.name}</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
              Whether you need residential rooftop solar or a massive commercial
              installation, our {city.name} team delivers end-to-end solar
              solutions using Tier-1 technology.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {services.map((s, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Link
                  href={s.href}
                  className={`group block rounded-[2rem] p-9 h-full ${theme.serviceCardBg}`}
                >
                  <div className={`w-[72px] h-[72px] mb-7 flex items-center justify-center rounded-2xl ${theme.serviceIconColor} bg-gradient-to-br from-white to-gray-50 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100/80 group-hover:scale-110 group-hover:shadow-lg transition-all duration-500`}>
                    {s.icon}
                  </div>
                  <h3 className="text-[22px] font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-gray-500 text-[15px] leading-relaxed mb-7 font-medium">
                    {s.desc}
                  </p>
                  <span className={`${theme.serviceAccent} font-bold text-[15px] flex items-center gap-2 group-hover:gap-3.5 transition-all duration-300`}>
                    Explore Service <ArrowRight className="w-5 h-5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ───────── Coverage Areas ───────── */}
      <section className={`py-24 ${theme.areasBg} relative`}>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-[32px] md:text-[42px] font-black text-gray-900 tracking-tight mb-5">
              Coverage Areas in {city.name}
            </h2>
            <div className={`w-16 h-1.5 rounded-full mx-auto ${theme.areaDivider}`} />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
          >
            {city.topAreas.map((area) => (
              <motion.div key={area} variants={fadeUp}>
                <div className={`flex items-center gap-3 p-4 rounded-xl ${theme.areaChipBg}`}>
                  <div className="bg-green-100 p-1 rounded-full shrink-0">
                    <Check className={`w-3 h-3 ${theme.serviceIconColor}`} strokeWidth={3} />
                  </div>
                  <span className="text-[14px] font-semibold tracking-wide">{area}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-gray-400 font-medium text-center mt-12 text-lg"
          >
            And all surrounding towns & villages within the {city.name} district.
          </motion.p>
        </div>
      </section>

      {/* ───────── Why Choose Us ───────── */}
      <section className={`py-28 ${theme.whyBg} relative`}>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="text-[32px] md:text-[42px] font-black text-gray-900 text-center mb-16 tracking-tight"
          >
            Why {city.name} Chooses Saurabh Brothers
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {whyUs.map((v, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className={`flex flex-col sm:flex-row items-start gap-6 p-8 rounded-[2rem] ${theme.whyCardBg} transition-all duration-300`}
              >
                <div className={`w-16 h-16 shrink-0 flex items-center justify-center rounded-2xl ${theme.whyIconColor} bg-gradient-to-br from-white to-gray-50 shadow-sm border border-gray-100/80`}>
                  {v.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-[19px] mb-2.5">
                    {v.title}
                  </h3>
                  <p className="text-gray-500 text-[15px] leading-relaxed font-medium">
                    {v.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ───────── Blog Links ───────── */}
      <section className={`py-20 ${theme.areasBg} border-t border-gray-100`}>
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-[26px] font-black text-gray-900 mb-10 tracking-tight text-center md:text-left"
          >
            Solar Guides for {city.name} Residents
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              { title: "Solar Panel Price in UP (2026)", sub: "Updated system-wise pricing and payback guide", href: "/blog/solar-panel-price-lucknow-2026" },
              { title: "3kW Solar System Price with Subsidy", sub: "Cost, roof space, generation and savings", href: "/blog/3kw-solar-system-price-in-up-with-subsidy" },
              { title: "Solar Subsidy Application Guide", sub: "Eligibility, documents and net metering steps", href: "/blog/solar-panel-subsidy-lucknow-apply-2026" },
              { title: "Installer Checklist Before You Book", sub: "Compare quotes, warranty and service quality", href: "/blog/solar-panel-installation-near-me-up-checklist" },
            ].map((blog, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Link
                  href={blog.href}
                  className="bg-white rounded-[1.5rem] border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 group shadow-sm flex items-center justify-between"
                >
                  <div>
                    <h3 className="font-bold text-gray-900 text-[17px] mb-1 group-hover:text-gray-700 transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-gray-500 text-[14px] font-medium">
                      {blog.sub}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-gray-600 transition-colors shrink-0 ml-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ───────── Nearby Cities ───────── */}
      <section className={`py-20 ${theme.nearbyBg}`}>
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-[26px] font-black text-gray-900 mb-10 tracking-tight text-center md:text-left"
          >
            Solar Installation in Nearby Cities
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          >
            {nearbyCities.map((c) => (
              <motion.div key={c.slug} variants={fadeUp}>
                <Link
                  href={`/city/${c.slug}`}
                  className={`${theme.nearbyCityBg} p-5 text-center group block rounded-2xl`}
                >
                  <p className="font-bold text-gray-800 text-[15px] group-hover:text-gray-600 transition-colors">
                    {c.name}
                  </p>
                  <p className="text-gray-400 text-[13px] mt-1 font-medium">
                    View Services →
                  </p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
