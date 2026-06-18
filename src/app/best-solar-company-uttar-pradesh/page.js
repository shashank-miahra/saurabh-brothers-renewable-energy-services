import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { upDistricts } from '@/lib/city-data';
import Link from 'next/link';
import { 
  Star, Shield, MapPin, Phone, Award, 
  CheckCircle2, ArrowRight, Sun, Zap, Users 
} from 'lucide-react';

export const metadata = {
  title: 'Top 10 Best Solar Companies in Uttar Pradesh (2024) | Honest Comparison',
  description: 'Comprehensive list of the best solar panel installation companies in Uttar Pradesh. Compare prices starting at ₹60,000/kW, warranties, subsidies, and customer ratings. Find the top solar company near you in Lucknow, Kanpur, Prayagraj, Meerut, Ayodhya.',
  keywords: 'best solar company in uttar pradesh, top solar panel providers UP, solar company list UP, best solar installer near me, top 10 solar companies UP, solar panel dealer lucknow, solar company kanpur, solar installer prayagraj, solar panel meerut, solar company ayodhya, home solar panel starting at 60000 per kilowatt',
  alternates: {
    canonical: 'https://saurabhbrothers.in/best-solar-company-uttar-pradesh',
  },
  openGraph: {
    title: 'Top 10 Best Solar Companies in Uttar Pradesh (2024)',
    description: 'Compare the best solar panel providers in UP. Find top companies offering ₹60,000/kW starting price, subsidies, and 25-year warranties.',
    url: 'https://saurabhbrothers.in/best-solar-company-uttar-pradesh',
    type: 'article',
    siteName: 'Saurabh Brothers',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top 10 Best Solar Companies in UP (2024)',
    description: 'Find the most reliable and affordable solar companies in Uttar Pradesh with this comprehensive ranking.',
  },
};

const companies = [
  {
    rank: 1,
    name: 'Saurabh Brothers',
    description: 'The leading provider of end-to-end solar solutions across Uttar Pradesh. Known for unmatched service and full PM Surya Ghar Yojana subsidy support.',
    price: 'Starting ₹60,000/kW',
    warranty: '25 Years',
    subsidy: 'Full Support (PM Surya Ghar)',
    type: 'Local Installer & Integrator',
    features: ['UPNEDA Approved', 'Fast Installation', 'Local Service Network in UP', 'Free Site Survey'],
    isWinner: true,
  },
  {
    rank: 2,
    name: 'Tata Power Solar',
    description: 'One of the most reputed national brands for solar energy. Excellent product quality but often comes at a premium price point.',
    price: 'Premium Pricing',
    warranty: '25 Years',
    subsidy: 'Supported',
    type: 'National Brand',
    features: ['High Trust Factor', 'Premium Components', 'Strong R&D'],
  },
  {
    rank: 3,
    name: 'Luminous Solar',
    description: 'A popular household consumer brand recognized widely for their inverters and batteries, also offering good solar solutions.',
    price: 'Mid-Range',
    warranty: '25 Years',
    subsidy: 'Supported',
    type: 'Consumer Brand',
    features: ['Widespread Availability', 'Good Customer Support'],
  },
  {
    rank: 4,
    name: 'Havells Solar',
    description: 'Renowned electrical equipment manufacturer providing high-quality inverters and decent solar panels, though with a smaller installation network.',
    price: 'Mid to Premium',
    warranty: '25 Years',
    subsidy: 'Supported',
    type: 'Electrical Brand',
    features: ['Reliable Inverters', 'Brand Recognition'],
  },
  {
    rank: 5,
    name: 'Vikram Solar',
    description: 'One of the largest solar module manufacturers in India with highly efficient panels, though primarily focused on manufacturing rather than direct residential service.',
    price: 'Varies',
    warranty: '25 Years',
    subsidy: 'Supported',
    type: 'Manufacturer',
    features: ['Tier-1 Manufacturer', 'High Efficiency Panels'],
  },
  {
    rank: 6,
    name: 'Waaree Energies',
    description: 'India’s largest solar panel manufacturer by capacity. They provide robust products but usually rely on third-party local installers.',
    price: 'Mid-Range',
    warranty: '25 Years',
    subsidy: 'Supported',
    type: 'Manufacturer',
    features: ['Large Production Capacity', 'Diverse Module Range'],
  },
  {
    rank: 7,
    name: 'Adani Solar',
    description: 'A major player in the Indian solar module manufacturing sector, offering high-tech panels but limited direct-to-consumer installation focus.',
    price: 'Premium Pricing',
    warranty: '25 Years',
    subsidy: 'Supported',
    type: 'Manufacturer',
    features: ['High-tech Manufacturing', 'Corporate Backing'],
  },
  {
    rank: 8,
    name: 'Microtek Solar',
    description: 'Known for budget-friendly inverters, offering cost-effective entry-level solar solutions for homes on a tight budget.',
    price: 'Budget-Friendly',
    warranty: '25 Years (Panels)',
    subsidy: 'Supported',
    type: 'Consumer Brand',
    features: ['Affordable', 'Easy Availability'],
  },
  {
    rank: 9,
    name: 'UTL Solar',
    description: 'Highly popular in rural and semi-urban parts of Uttar Pradesh, providing sturdy solar inverters and battery systems.',
    price: 'Budget-Friendly',
    warranty: '25 Years (Panels)',
    subsidy: 'Supported',
    type: 'Consumer Brand',
    features: ['Good for Off-grid', 'Rural Network'],
  },
  {
    rank: 10,
    name: 'Patanjali Solar',
    description: 'A relatively new entrant in the solar market leveraging its massive retail network to offer Swadeshi solar products.',
    price: 'Mid-Range',
    warranty: 'Standard',
    subsidy: 'Supported',
    type: 'New Entrant',
    features: ['Swadeshi Focus', 'Expanding Network'],
  },
];

const faqs = [
  {
    question: 'How much does a 3kW solar panel system cost in UP?',
    answer: 'A high-quality 3kW solar system in Uttar Pradesh typically starts at around ₹1,80,000 (₹60,000/kW) before subsidies. With the PM Surya Ghar Yojana, you can avail substantial subsidies, bringing the effective cost down significantly.',
  },
  {
    question: 'Who is the best solar company in Uttar Pradesh?',
    answer: 'Saurabh Brothers is widely considered the best solar company in UP due to their local presence, UPNEDA empanelment, 25-year warranty, and comprehensive assistance with the PM Surya Ghar Yojana subsidy process.',
  },
  {
    question: 'Are there state government subsidies for solar in UP?',
    answer: 'Yes, UP residents can benefit from both the Central Government’s PM Surya Ghar Muft Bijli Yojana (up to ₹78,000) and additional state subsidies provided by UPNEDA for residential solar rooftop installations.',
  },
  {
    question: 'How long does a solar installation take?',
    answer: 'Once the site survey is completed and approvals are in place, the physical installation by top providers like Saurabh Brothers usually takes only 1-3 days depending on the system size.',
  },
  {
    question: 'Why is local presence important for a solar installer?',
    answer: 'Solar panels have a lifespan of 25+ years. A company with a strong local presence ensures you get prompt maintenance, fast grievance resolution, and immediate on-site support when needed.',
  },
];

export default function BestSolarCompanyUP() {
  const structuredDataItemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Top 10 Best Solar Companies in Uttar Pradesh',
    itemListElement: companies.map((company, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: company.name,
    })),
  };

  const structuredDataFAQ = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-white text-[#0A1128] font-sans">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataItemList) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataFAQ) }}
      />

      {/* Hero Section */}
      <section className="bg-[#0A1128] text-white pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0066FF] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Top 10 Best Solar Companies in <span className="text-[#0066FF]">Uttar Pradesh</span> (2024)
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Honest, comprehensive comparison of UP&apos;s top solar panel providers. Compare pricing starting at ₹60,000/kW, warranties, UPNEDA approvals, and local service support to find your ideal solar installer.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="#comparison" 
              className="bg-[#0066FF] hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(0,102,255,0.4)]"
            >
              See the Rankings
            </Link>
            <Link 
              href="/pm-surya-ghar-yojana-up" 
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all backdrop-blur-sm"
            >
              Check Subsidy Info
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto prose prose-lg text-gray-700">
          <h2 className="text-3xl font-bold text-[#0A1128] mb-6">How to Choose the Best Solar Company in UP</h2>
          <p>
            With electricity bills rising across Uttar Pradesh, switching to solar energy has never been more financially rewarding. However, finding the <strong>best solar company in Uttar Pradesh</strong> can be overwhelming given the influx of new installers and national brands entering the market. 
          </p>
          <p>
            When evaluating the top solar panel providers in UP, it&apos;s crucial to look beyond just the upfront cost. You must consider <strong>MNRE / UPNEDA empanelment</strong>, the strength of their local presence, warranty terms, and their ability to successfully process government subsidies like the <Link href="/pm-surya-ghar-yojana-up" className="text-[#0066FF] hover:underline font-medium">PM Surya Ghar Muft Bijli Yojana</Link>.
          </p>
          <p>
            In this guide, we have evaluated numerous providers based on installation quality, customer reviews, pricing structures, and after-sales service to bring you the definitive list of the best solar panel dealers and installers in the state.
          </p>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">The 2024 Rankings: Top 10 Solar Companies</h2>
          
          <div className="grid grid-cols-1 gap-8">
            {companies.map((company) => (
              <div 
                key={company.rank} 
                className={`rounded-2xl border ${company.isWinner ? 'border-[#0066FF] shadow-[0_8px_30px_rgb(0,102,255,0.15)] relative transform hover:-translate-y-1' : 'border-gray-100 shadow-sm hover:shadow-md'} p-6 md:p-8 transition-all bg-white`}
              >
                {company.isWinner && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0066FF] text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-md">
                    <Award size={16} /> #1 Recommended in UP
                  </div>
                )}
                
                <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className={`text-4xl font-black ${company.isWinner ? 'text-[#0066FF]' : 'text-gray-300'}`}>
                        #{company.rank}
                      </span>
                      <h3 className="text-2xl font-bold text-[#0A1128]">{company.name}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">{company.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {company.features.map((feature, i) => (
                        <span key={i} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full flex items-center gap-1">
                          <CheckCircle2 size={14} className="text-[#0066FF]" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="md:w-72 bg-gray-50 rounded-xl p-5 border border-gray-100 h-fit">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span className="text-gray-500 text-sm">Pricing</span>
                        <span className="font-semibold text-[#0A1128]">{company.price}</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span className="text-gray-500 text-sm">Warranty</span>
                        <span className="font-semibold text-[#0A1128]">{company.warranty}</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span className="text-gray-500 text-sm">Type</span>
                        <span className="font-semibold text-[#0A1128] text-right">{company.type}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500 text-sm">Subsidy</span>
                        <span className="font-semibold text-[#0066FF]">{company.subsidy}</span>
                      </div>
                    </div>
                    
                    {company.isWinner && (
                      <Link 
                        href="/#contact" 
                        className="mt-6 w-full bg-[#0066FF] hover:bg-blue-700 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
                      >
                        Get a Free Quote <ArrowRight size={18} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Saurabh Brothers */}
      <section className="py-20 px-4 bg-[#0A1128] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why <span className="text-[#0066FF]">Saurabh Brothers</span> is Rated #1 in UP</h2>
              <p className="text-gray-300 mb-8 text-lg">
                While large national manufacturers produce good equipment, the success of your solar investment relies heavily on the <strong>installation quality, local support, and subsidy processing</strong>. This is where Saurabh Brothers outshines the competition.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-900/50 text-[#0066FF] rounded-xl flex items-center justify-center shrink-0">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">UPNEDA Empanelled Vendor</h4>
                    <p className="text-gray-400">As a certified state vendor, we legally process your PM Surya Ghar subsidies faster and seamlessly.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-900/50 text-[#0066FF] rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Unmatched Local Support</h4>
                    <p className="text-gray-400">Our deep roots in Uttar Pradesh mean we are just a call away for 25 years of maintenance.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-900/50 text-[#0066FF] rounded-xl flex items-center justify-center shrink-0">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Tier-1 Components & ₹60,000/kW Pricing</h4>
                    <p className="text-gray-400">We source directly from top manufacturers to offer unbeatable pricing without compromising quality.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 text-center">Ready to go solar?</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#0066FF]" />
                <input type="tel" placeholder="Phone Number" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#0066FF]" />
                <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#0066FF]">
                  <option value="" className="text-gray-800">Select City</option>
                  <option value="lucknow" className="text-gray-800">Lucknow</option>
                  <option value="kanpur" className="text-gray-800">Kanpur</option>
                  <option value="prayagraj" className="text-gray-800">Prayagraj</option>
                  <option value="other" className="text-gray-800">Other UP City</option>
                </select>
                <button type="button" className="w-full bg-[#0066FF] hover:bg-blue-600 text-white font-bold py-4 rounded-lg transition-colors mt-4">
                  Request Free Callback
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* City Availability */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1128] mb-4">Our Service Areas in Uttar Pradesh</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Find expert solar panel installers in your specific city. We provide dedicated local support across all major UP districts.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {upDistricts.map((city) => (
              <Link 
                key={city.slug} 
                href={`/city/${city.slug}`}
                className="bg-white border border-gray-200 rounded-xl p-4 flex items-center justify-between hover:border-[#0066FF] hover:shadow-md transition-all group"
              >
                <span className="font-medium text-gray-800 group-hover:text-[#0066FF]">{city.name}</span>
                <ArrowRight size={16} className="text-gray-400 group-hover:text-[#0066FF] transform group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
          
          <div className="mt-12 flex justify-center gap-4 flex-wrap">
             <Link href="/residential" className="text-[#0066FF] font-medium hover:underline flex items-center gap-1">
               <Sun size={18} /> Residential Solar Solutions
             </Link>
             <span className="text-gray-300 hidden md:inline">|</span>
             <Link href="/commercial" className="text-[#0066FF] font-medium hover:underline flex items-center gap-1">
               <Users size={18} /> Commercial Solar Systems
             </Link>
             <span className="text-gray-300 hidden md:inline">|</span>
             <Link href="/blog" className="text-[#0066FF] font-medium hover:underline">
               Read our Solar Blog
             </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0A1128] mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8">
                <h3 className="text-xl font-bold text-[#0A1128] mb-3 flex items-start gap-3">
                  <span className="text-[#0066FF] mt-1 shrink-0"><CheckCircle2 size={20} /></span>
                  {faq.question}
                </h3>
                <p className="text-gray-600 pl-8">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#0A1128] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Start Your Solar Journey Today</h2>
          <p className="text-xl text-gray-300 mb-10">
            Join thousands of happy homeowners across Uttar Pradesh who are saving on their electricity bills with Saurabh Brothers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              href="/#contact" 
              className="w-full sm:w-auto bg-[#0066FF] hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all"
            >
              Get Your Free Quote
            </Link>
            <a 
              href="tel:+917052737431" 
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/20 text-white px-10 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2"
            >
              <Phone size={20} /> +91 7052737431
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
