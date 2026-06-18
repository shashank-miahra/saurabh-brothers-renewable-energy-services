import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/blog-data";
import { ArrowRight, Clock, Tag } from "lucide-react";

export const metadata = {
  title: "Solar Energy Blog & Guides in UP | Saurabh Brothers",
  description: "Expert guides on solar installation, government subsidies, and maintenance tips for homeowners and businesses in Uttar Pradesh. Written by solar experts.",
  keywords: "solar blog UP, solar guides near me, solar panel tips uttar pradesh, PM Surya Ghar guide, solar subsidy UP, solar maintenance tips, best solar panel india, solar installation guide lucknow",
  alternates: {
    canonical: "https://saurabhbrothers.in/blog",
  },
  openGraph: {
    title: "Solar Energy Blog & Guides in UP | Saurabh Brothers",
    description: "Expert guides on solar installation, government subsidies, and maintenance tips for homeowners and businesses in Uttar Pradesh. Written by solar experts.",
    url: "https://saurabhbrothers.in/blog",
    type: "website",
    locale: "en_IN",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Energy Blog & Guides in UP | Saurabh Brothers",
    description: "Expert guides on solar installation, government subsidies, and maintenance tips for homeowners and businesses in Uttar Pradesh. Written by solar experts.",
    images: ["/og-image.jpg"],
  }
};

export default function BlogPage() {
  const featured = blogPosts.filter((p) => p.featured);
  const rest = blogPosts.filter((p) => !p.featured);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <p className="text-blue-600 text-sm font-bold tracking-widest uppercase mb-4">Blog & Guides</p>
          <h1 className="text-[36px] md:text-[52px] font-bold text-gray-900 leading-tight mb-4 max-w-3xl">
            Solar Energy Knowledge Hub
          </h1>
          <p className="text-[18px] text-gray-500 leading-relaxed max-w-2xl">
            Expert guides on solar installation, government subsidies, panel selection,
            and maintenance — written specifically for Uttar Pradesh homeowners and businesses.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-[22px] font-bold text-gray-900 mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featured.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all"
              >
                <div className="relative h-48 w-full">
                  {post.image ? (
                    <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center p-8">
                      <h3 className="text-white text-[20px] md:text-[24px] font-bold leading-snug text-center group-hover:scale-[1.02] transition-transform">
                        {post.title}
                      </h3>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="bg-blue-50 text-blue-700 text-[12px] font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                      <Tag className="w-3 h-3" /> {post.category}
                    </span>
                    <span className="text-gray-400 text-[13px] flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  <p className="text-gray-500 text-[14px] leading-relaxed mb-4">{post.excerpt}</p>
                  <span className="text-blue-600 font-semibold text-[14px] flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-[22px] font-bold text-gray-900 mb-8">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-[#f8fafc] rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-all"
              >
                {post.image && (
                  <div className="relative h-40 w-full mb-4 rounded-xl overflow-hidden">
                    <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                )}
                <div className="flex items-start">
                  <span className="bg-blue-50 text-blue-700 text-[11px] font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 text-[17px] mt-4 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-[14px] leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-[13px]">{post.readTime}</span>
                  <span className="text-blue-600 font-semibold text-[13px] flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links / SEO Section */}
      <section className="py-16 bg-[#f8fafc] border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-[20px] font-bold text-gray-900 mb-6">Explore Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/residential" className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-all group">
              <h3 className="font-bold text-gray-900 text-[16px] mb-2 group-hover:text-blue-600">Residential Solar Installation</h3>
              <p className="text-gray-500 text-[14px]">Complete home solar solutions with PM Surya Ghar subsidy support across UP.</p>
            </Link>
            <Link href="/commercial" className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-all group">
              <h3 className="font-bold text-gray-900 text-[16px] mb-2 group-hover:text-blue-600">Commercial Solar Installation</h3>
              <p className="text-gray-500 text-[14px]">Power your factory, warehouse, or office with solar. Cut costs by 60-80%.</p>
            </Link>
            <Link href="/maintenance" className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-all group">
              <h3 className="font-bold text-gray-900 text-[16px] mb-2 group-hover:text-blue-600">Solar Maintenance Services</h3>
              <p className="text-gray-500 text-[14px]">AMC, panel cleaning, inverter repair, and emergency support across UP.</p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
