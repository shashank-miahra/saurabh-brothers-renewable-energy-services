"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Residential Solar",
    description: "Complete home solar solutions with PM Surya Ghar subsidy support. From 1kW to 10kW — save up to 90% on electricity bills.",
    image: "/images/service-residential.png",
    href: "/residential"
  },
  {
    title: "Commercial Solar",
    description: "Power your factory, warehouse, or office with solar energy. Cut operating costs by 60-80% with professional commercial installations.",
    image: "/images/service-commercial.png",
    href: "/commercial"
  },
  {
    title: "Solar Maintenance",
    description: "Keep your solar system running at peak performance. Professional cleaning, inspection, inverter repair & AMC services across Uttar Pradesh.",
    image: "/images/service-maintenance.png",
    href: "/maintenance"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-10 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-[24px] md:text-[32px] font-bold text-gray-900 tracking-tight">
            Our Services
          </h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
            >
              <div className="h-48 w-full overflow-hidden relative">
                 <Image src={service.image} alt={service.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 md:p-6 text-center">
                <h3 className="text-[18px] md:text-xl font-bold text-gray-800 mb-2 md:mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                <p className="text-[14px] md:text-sm text-gray-600 leading-relaxed mb-4 md:mb-6">
                  {service.description}
                </p>
                <span className="text-[14px] md:text-base text-blue-600 font-bold flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
