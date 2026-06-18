import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getCityData, getAllCitySlugs, upDistricts } from "@/lib/city-data";
import { MapPin, Sun, ArrowRight, Check, Phone, Zap, ShieldCheck, Users } from "lucide-react";

export async function generateStaticParams() {
  return getAllCitySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const city = getCityData(slug);
  if (!city) return { title: "Solar Installation | Saurabh Brothers" };
  return {
    title: `Best Solar Panel Installation Near Me in ${city.name} | Saurabh Brothers`,
    description: `#1 rated solar panel installation company near you in ${city.name}, Uttar Pradesh. Home solar panels starting at ₹60,000 per kW. Get ₹1,08,000 government subsidy under PM Surya Ghar Yojana. Residential & commercial solar, free site survey, and 5-year maintenance. Serving all areas of ${city.name}.`,
    keywords: `best solar panel in ${city.name}, home solar panel starting at 60000 in ${city.name}, top solar company in ${city.name}, get 108000 subsidy in ${city.name}, solar panel providers in ${city.name}, solar panel installation near me ${city.name}, cheapest and best solar panel in ${city.name} UP, solar panel in 60000 in ${city.name}, best solar company near me ${city.name}, solar panel dealer ${city.name}, rooftop solar ${city.name}, solar subsidy ${city.name}, solar installer near me, solar panel price ${city.name}`,
    alternates: {
      canonical: `https://saurabhbrothers.in/city/${slug}`,
    },
    openGraph: {
      title: `Best Solar Panel Installation in ${city.name} | Saurabh Brothers`,
      description: `Professional solar installation in ${city.name}. Starting at ₹60,000/kW with ₹1,08,000 government subsidy. Free site survey & PM Surya Ghar support.`,
      url: `https://saurabhbrothers.in/city/${slug}`,
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: `Best Solar Panel Installation in ${city.name} | Saurabh Brothers`,
      description: `Home solar starting at ₹60,000/kW in ${city.name}. Get ₹1,08,000 subsidy under PM Surya Ghar Yojana. Free site survey.`,
    },
  };
}

export default async function CityPage({ params }) {
  const { slug } = await params;
  const city = getCityData(slug);

  if (!city) {
    return (
      <>
        <Navbar />
        <section className="pt-32 pb-20 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">City Not Found</h1>
          <Link href="/" className="text-blue-600 font-semibold">← Back to Home</Link>
        </section>
        <Footer />
      </>
    );
  }

  const nearbyCities = upDistricts.filter((c) => c.slug !== city.slug).slice(0, 8);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-[#0A1128] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 border border-blue-300 rounded-full"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 border border-blue-300 rounded-full"></div>
        </div>
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="flex items-center gap-2 text-[13px] text-gray-400 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-gray-300">{city.name}</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 text-blue-400 text-sm font-bold tracking-widest uppercase mb-4">
                <MapPin className="w-4 h-4" /> {city.name}, Uttar Pradesh
              </div>
              <h1 className="text-[32px] md:text-[48px] font-bold leading-tight mb-6">
                #1 Solar Panel Installation Company in {city.name}
              </h1>
              <p className="text-[17px] text-gray-300 leading-relaxed mb-8">
                Saurabh Brothers provides professional solar panel installation services in {city.name} and surrounding areas.
                From system design to commissioning and lifelong maintenance — we handle everything with zero middlemen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/#contact" className="bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors flex items-center gap-2">
                  Get Free Quote in {city.name} <ArrowRight className="w-5 h-5" />
                </Link>
                <a href="tel:+917052737431" className="border border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2">
                  <Phone className="w-5 h-5" /> Call Now
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: city.avgSunHours + " hrs", label: "Avg. Daily Sun Hours" },
                { val: city.population, label: "City Population" },
                { val: "24 hr", label: "Service Response" },
                { val: "500+", label: "Installations in UP" },
              ].map((stat, i) => (
                <div key={i} className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                  <h3 className="text-[28px] font-bold text-blue-400">{stat.val}</h3>
                  <p className="text-gray-300 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services in City */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-[28px] md:text-[36px] font-bold text-gray-900 text-center mb-4">
            Solar Services in {city.name}
          </h2>
          <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
            Whether you need residential rooftop solar or a large commercial installation,
            our {city.name} team delivers end-to-end solar solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Sun, title: "Residential Solar",
                desc: `Home solar panel installation in ${city.name} with PM Surya Ghar subsidy support. Systems from 1kW to 10kW.`,
                href: "/residential"
              },
              {
                icon: Zap, title: "Commercial Solar",
                desc: `Power your ${city.name} business with solar. We serve factories, hospitals, schools, hotels, and warehouses.`,
                href: "/commercial"
              },
              {
                icon: ShieldCheck, title: "Solar Maintenance",
                desc: `AMC, panel cleaning, inverter repair, and emergency support for solar systems in ${city.name}.`,
                href: "/maintenance"
              }
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <Link key={i} href={s.href} className="group bg-[#f8fafc] rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all">
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-blue-600" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[18px] font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{s.title}</h3>
                  <p className="text-gray-500 text-[14px] leading-relaxed mb-4">{s.desc}</p>
                  <span className="text-blue-600 font-semibold text-[14px] flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Areas We Cover */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-[28px] md:text-[36px] font-bold text-gray-900 text-center mb-4">
            Areas We Serve in {city.name}
          </h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto mt-4 mb-12"></div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {city.topAreas.map((area) => (
              <div key={area} className="flex items-center gap-2 bg-white rounded-xl p-4 border border-gray-100">
                <Check className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="text-[14px] text-gray-700">{area}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-sm text-center mt-6">
            And all surrounding areas within {city.name} district
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-[28px] md:text-[36px] font-bold text-gray-900 text-center mb-12">
            Why {city.name} Residents Choose Saurabh Brothers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Users, title: "Local Team in " + city.name, desc: "Our service engineers are based locally — ensuring fast installation and rapid support when you need it." },
              { icon: ShieldCheck, title: "MNRE Empanelled Installer", desc: "We are government-approved, which means you can claim the full PM Surya Ghar subsidy through us." },
              { icon: Zap, title: "Zero Middlemen", desc: "We do everything in-house — design, installation, net metering, and maintenance. No subcontracting." },
              { icon: Phone, title: "24-Hour Emergency Support", desc: "System down? Our team in " + city.name + " responds within 24 hours for any emergency breakdown." },
            ].map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="flex gap-5 p-6 bg-[#f8fafc] rounded-2xl border border-gray-100">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-blue-600" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-[16px] mb-2">{v.title}</h3>
                    <p className="text-gray-500 text-[14px] leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Blog Links */}
      <section className="py-16 bg-[#f8fafc] border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-[22px] font-bold text-gray-900 mb-8">Solar Guides for {city.name} Residents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/blog/solar-panel-price-lucknow-2026" className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition-all group">
              <h3 className="font-semibold text-gray-900 text-[15px] group-hover:text-blue-600">Solar Panel Price in Lucknow (2026)</h3>
              <p className="text-gray-400 text-[13px] mt-1">Updated system-wise pricing and payback guide</p>
            </Link>
            <Link href="/blog/3kw-solar-system-price-in-up-with-subsidy" className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition-all group">
              <h3 className="font-semibold text-gray-900 text-[15px] group-hover:text-blue-600">3kW Solar System Price with Subsidy</h3>
              <p className="text-gray-400 text-[13px] mt-1">Cost, roof space, generation and savings</p>
            </Link>
            <Link href="/blog/solar-panel-subsidy-lucknow-apply-2026" className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition-all group">
              <h3 className="font-semibold text-gray-900 text-[15px] group-hover:text-blue-600">Solar Subsidy Application Guide</h3>
              <p className="text-gray-400 text-[13px] mt-1">Eligibility, documents and net metering steps</p>
            </Link>
            <Link href="/blog/solar-panel-installation-near-me-up-checklist" className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition-all group">
              <h3 className="font-semibold text-gray-900 text-[15px] group-hover:text-blue-600">Installer Checklist Before You Book</h3>
              <p className="text-gray-400 text-[13px] mt-1">Compare quotes, warranty and service quality</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Nearby Cities */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-[22px] font-bold text-gray-900 mb-8">Solar Installation in Nearby Cities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {nearbyCities.map((c) => (
              <Link key={c.slug} href={`/city/${c.slug}`} className="bg-[#f8fafc] rounded-xl border border-gray-100 p-4 hover:shadow-md transition-all text-center group">
                <p className="font-semibold text-gray-700 text-[14px] group-hover:text-blue-600">{c.name}</p>
                <p className="text-gray-400 text-[12px] mt-1">Solar Installation →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": `Saurabh Brothers - Solar Installation in ${city.name}`,
            "description": `Best solar panel installation company in ${city.name}, Uttar Pradesh. Residential & commercial solar solutions.`,
            "url": `https://saurabhbrothers.in/city/${city.slug}`,
            "telephone": "+917052737431",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": city.name,
              "addressRegion": "Uttar Pradesh",
              "addressCountry": "IN"
            },
            "areaServed": city.name,
            "priceRange": "₹₹",
          }),
        }}
      />
    </>
  );
}
