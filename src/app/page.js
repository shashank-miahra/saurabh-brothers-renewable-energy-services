import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Approach from "@/components/Approach";
import WhyUs from "@/components/WhyUs";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import Newsletter from "@/components/Newsletter";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Top Solar Panel Installation in UP | Saurabh Brothers",
  description: "Get the best rooftop solar panel installation in Uttar Pradesh. UPNEDA approved. Claim up to ₹1,08,000 subsidy under PM Surya Ghar Yojana. Easy EMI plans available. Get a Free Quote!",
  keywords: "home solar panel starting at 60000 per kilowatt, best solar panel in UP, best solar panel in lucknow, best solar panel in kanpur, best solar panel in prayagraj, best solar panel in meerut, best solar panel in ayodhya, top solar panel providers uttar pradesh, best solar company in uttar pradesh, get 1,08,000 gov subsidy, solar company near me, solar panel installation near me, Easy EMI solar UP, PM Surya Ghar Muft Bijli Yojana, residential solar near me",
  alternates: {
    canonical: "https://saurabhbrothers.in",
  },
  openGraph: {
    title: "Top Solar Panel Installation in UP | Saurabh Brothers",
    description: "Get the best rooftop solar panel installation in Uttar Pradesh. UPNEDA approved. Claim up to ₹1,08,000 subsidy under PM Surya Ghar Yojana. Easy EMI plans available. Get a Free Quote!",
    url: "https://saurabhbrothers.in",
    type: "website",
    locale: "en_IN",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Solar Panel Installation in UP | Saurabh Brothers",
    description: "Get the best rooftop solar panel installation in Uttar Pradesh. UPNEDA approved. Claim up to ₹1,08,000 subsidy under PM Surya Ghar Yojana. Easy EMI plans available. Get a Free Quote!",
    images: ["/og-image.jpg"],
  }
};

export default function Home() {
  return (
    <>
      <Navbar />
      <SmoothScroll>
        <ScrollReveal><Hero /></ScrollReveal>
        <ScrollReveal delay={100}><Features /></ScrollReveal>
        <ScrollReveal delay={100}><WhyUs /></ScrollReveal>
        <ScrollReveal delay={100}><Approach /></ScrollReveal>
        <ScrollReveal delay={100}><Services /></ScrollReveal>
        <ScrollReveal delay={100}><Testimonials /></ScrollReveal>
        <ScrollReveal delay={100}><FAQ /></ScrollReveal>
        <ScrollReveal delay={100}><Contact /></ScrollReveal>
        <ScrollReveal delay={100}><Newsletter /></ScrollReveal>
        <Footer />
      </SmoothScroll>
    </>
  );
}
