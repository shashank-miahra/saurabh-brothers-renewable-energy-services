"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Award, Users, MapPin, Zap, ShieldCheck, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const milestones = [
  { year: "2014", title: "Founded in Lucknow", desc: "Started with a mission to bring affordable solar energy to every home in Uttar Pradesh." },
  { year: "2016", title: "100th Installation", desc: "Completed our 100th residential solar installation within two years of operation." },
  { year: "2018", title: "Expanded to 25 Districts", desc: "Grew our service network to cover 25 districts across UP with local service teams." },
  { year: "2020", title: "Commercial Division Launched", desc: "Began serving factories, hospitals, and large commercial facilities across the state." },
  { year: "2023", title: "500+ Projects Completed", desc: "Crossed the milestone of 500 successful installations with a 98% customer satisfaction rate." },
  { year: "2025", title: "All 75 Districts Covered", desc: "Now serving every district in Uttar Pradesh with dedicated teams and rapid response times." },
];

const values = [
  { icon: ShieldCheck, title: "Transparency First", desc: "No hidden costs, no misleading claims. We show you exact pricing, expected generation, and realistic payback periods." },
  { icon: Users, title: "Local Expertise", desc: "Our teams live in UP. We understand the local climate, DISCOM procedures, and building structures better than anyone." },
  { icon: Zap, title: "Quality Without Compromise", desc: "We only use Tier-1 panels and certified components. Every installation meets MNRE standards." },
  { icon: Clock, title: "Lifelong Support", desc: "Solar is a 25-year investment. We provide maintenance, monitoring, and support for the entire lifecycle." },
];

const stats = [
  { value: "500+", label: "Installations Completed" },
  { value: "5+ MW", label: "Total Capacity Installed" },
  { value: "75", label: "Districts Served in UP" },
  { value: "10+", label: "Years of Experience" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "24 hr", label: "Service Response Time" },
];

function FadeInSection({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function AboutUs() {
  const timelineRef = useRef(null);
  const heroRef = useRef(null);
  const { scrollYProgress: timelineProgress } = useScroll({ target: timelineRef, offset: ["start end", "end start"] });
  const { scrollY } = useScroll();
  const lineHeight = useTransform(timelineProgress, [0, 1], ["0%", "100%"]);
  const bgY = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative pt-32 pb-20 bg-white overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/3 opacity-60"></motion.div>
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <FadeInSection>
            <p className="text-blue-600 text-sm font-bold tracking-widest uppercase mb-4">About Saurabh Brothers</p>
            <h1 className="text-[36px] md:text-[52px] font-bold text-gray-900 leading-tight mb-6 max-w-3xl">
              Building Uttar Pradesh&apos;s Solar Future, One Rooftop at a Time
            </h1>
            <p className="text-[18px] text-gray-500 leading-relaxed max-w-2xl mb-8">
              We&apos;re not just installing solar panels — we&apos;re building a network of clean energy across
              every district of Uttar Pradesh. From Noida to Gorakhpur, Agra to Varanasi,
              Saurabh Brothers is the name families and businesses trust for solar.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors inline-flex items-center gap-2">
                Get a Free Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/residential" className="border-2 border-gray-900 text-gray-900 hover:bg-gray-50 font-semibold px-8 py-4 rounded-xl transition-colors">
                View Our Services
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-[#0A1128]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((s, i) => (
              <FadeInSection key={i} delay={i * 0.08}>
                <div className="text-center">
                  <h3 className="text-[28px] md:text-[32px] font-bold text-blue-400">{s.value}</h3>
                  <p className="text-gray-400 text-[13px] mt-1">{s.label}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-[28px] md:text-[36px] font-bold text-gray-900">Our Story</h2>
              <div className="w-12 h-1 bg-blue-600 mx-auto mt-4"></div>
            </div>
          </FadeInSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeInSection>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-12 flex items-center justify-center aspect-square max-w-md mx-auto">
                <div className="text-center">
                  <div className="flex flex-wrap w-20 h-20 gap-1.5 items-center justify-center mx-auto mb-6">
                    <div className="w-8 h-8 bg-blue-500 rounded-md"></div>
                    <div className="w-8 h-8 bg-blue-500 rounded-md"></div>
                    <div className="w-8 h-8 bg-blue-400 rounded-md"></div>
                    <div className="w-8 h-8 bg-blue-600 rounded-md"></div>
                  </div>
                  <p className="text-blue-700 font-bold text-2xl">Since 2014</p>
                  <p className="text-blue-600 text-sm mt-1">Lucknow, Uttar Pradesh</p>
                </div>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.15}>
              <div>
                <p className="text-gray-600 text-[16px] leading-relaxed mb-6">
                  Saurabh Brothers was founded in 2014 with a clear vision: make solar energy
                  accessible and affordable for every household and business in Uttar Pradesh.
                </p>
                <p className="text-gray-600 text-[16px] leading-relaxed mb-6">
                  We saw that most solar companies were based in metros, treating UP as an afterthought.
                  Installations would happen, but post-installation support was nearly absent. Customers
                  were left with expensive equipment and no one to call when something went wrong.
                </p>
                <p className="text-gray-600 text-[16px] leading-relaxed mb-6">
                  We built Saurabh Brothers differently. <strong>Our teams are local.</strong> We have
                  service engineers across UP who can reach any district within 24 hours. We don&apos;t
                  just install — we maintain, monitor, and support your system for its entire 25-year life.
                </p>
                <p className="text-gray-600 text-[16px] leading-relaxed">
                  Today, with 500+ successful installations and a presence in all 75 districts, we are
                  Uttar Pradesh&apos;s most trusted solar installation company.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Leadership / Owner Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-[28px] md:text-[36px] font-bold text-gray-900">Our Leadership</h2>
              <p className="text-gray-500 mt-2 text-sm">Meet the driving force behind Saurabh Brothers Renewable Energy Services</p>
              <div className="w-12 h-1 bg-blue-600 mx-auto mt-4"></div>
            </div>
          </FadeInSection>
          
          <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-xl shadow-gray-200/50 flex flex-col md:flex-row gap-12 items-center max-w-4xl mx-auto">
            {/* Image container */}
            <div className="w-full md:w-1/3 shrink-0 aspect-square relative rounded-2xl overflow-hidden border border-gray-100 shadow-inner">
              <Image 
                src="/shivam-owner.jpg" 
                alt="Shivam - Owner of Saurabh Brothers Renewable Energy Services"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center" 
              />
            </div>
            
            {/* Owner text & details */}
            <div className="flex-1">
              <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">Owner & Founder</span>
              <h3 className="text-3xl font-extrabold text-gray-900 mt-1">Shivam</h3>
              <p className="text-gray-600 mt-4 leading-relaxed text-[15px]">
                Under Shivam&apos;s leadership, Saurabh Brothers has evolved into a premier renewable energy services provider in Uttar Pradesh. Guided by a core philosophy of transparency, top-tier engineering, and uncompromised post-installation support, he has led the team to cover all 75 districts of the state, bringing clean energy directly to homes and enterprises.
              </p>
              
              {/* Contact info grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-gray-100">
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase">Direct Contact</h4>
                  <div className="flex flex-col gap-1 mt-1 text-sm font-semibold text-gray-800">
                    <a href="tel:+917052737431" className="hover:text-blue-600 transition-colors">+91 70527 37431</a>
                    <a href="tel:+918736967374" className="hover:text-blue-600 transition-colors">+91 87369 67374</a>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase">Email Enquiries</h4>
                  <div className="flex flex-col gap-1 mt-1 text-sm font-semibold text-gray-800">
                    <a href="mailto:shivamsaurabh7373@gmail.com" className="hover:text-blue-600 transition-colors truncate">shivamsaurabh7373@gmail.com</a>
                    <a href="mailto:supportsaurabhbrothers@gmail.com" className="hover:text-blue-600 transition-colors truncate">supportsaurabhbrothers...</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-[28px] md:text-[36px] font-bold text-gray-900">What We Stand For</h2>
              <div className="w-12 h-1 bg-blue-600 mx-auto mt-4"></div>
            </div>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <FadeInSection key={i} delay={i * 0.1}>
                  <div className="flex gap-6 p-8 bg-[#f8fafc] rounded-2xl border border-gray-100">
                    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-7 h-7 text-blue-600" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-[17px] mb-2">{v.title}</h3>
                      <p className="text-gray-500 text-[14px] leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coverage Map Section */}
      <section className="py-20 bg-[#0A1128] text-white">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <FadeInSection>
            <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-[28px] md:text-[36px] font-bold mb-4">Serving All 75 Districts of Uttar Pradesh</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-[16px]">
              From the industrial hubs of Kanpur and Ghaziabad to the cultural centres of Varanasi
              and Ayodhya — our service engineers are everywhere in UP.
            </p>
          </FadeInSection>
          <FadeInSection delay={0.15}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {["Lucknow","Kanpur","Agra","Varanasi","Prayagraj","Meerut","Ghaziabad","Bareilly","Gorakhpur","Noida",
                "Jhansi","Mathura","Aligarh","Moradabad","Saharanpur","Ayodhya","Sultanpur","Sitapur","Muzaffarnagar","Firozabad"
              ].map((city) => (
                <Link
                  key={city}
                  href={`/city/${city.toLowerCase().replace(/ /g, "-")}`}
                  className="bg-white/10 border border-white/10 rounded-xl py-3 px-4 text-[13px] text-gray-300 hover:text-white hover:bg-white/20 transition-all"
                >
                  {city}
                </Link>
              ))}
            </div>
            <p className="text-gray-500 text-sm mt-6">
              + 55 more districts across Uttar Pradesh
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <FadeInSection>
            <h2 className="text-[28px] md:text-[36px] font-bold text-gray-900 mb-4">
              Ready to Start Your Solar Journey?
            </h2>
            <p className="text-gray-500 text-[16px] mb-8 max-w-xl mx-auto">
              Whether you need a residential system for your home or a commercial installation
              for your business — we&apos;re here to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/residential" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors inline-flex items-center justify-center gap-2">
                Residential Solar <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/commercial" className="bg-[#0A1128] hover:bg-[#0d1a3a] text-white font-semibold px-8 py-4 rounded-xl transition-colors inline-flex items-center justify-center gap-2">
                Commercial Solar <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/maintenance" className="border-2 border-gray-900 text-gray-900 hover:bg-gray-50 font-semibold px-8 py-4 rounded-xl transition-colors inline-flex items-center justify-center gap-2">
                Maintenance Services
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}
