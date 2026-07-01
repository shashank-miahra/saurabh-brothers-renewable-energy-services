import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PMSuryaGharContent from "@/components/PMSuryaGharContent";

export const metadata = {
  title: "PM Surya Ghar Muft Bijli Yojana UP 2024 | Get ₹1,08,000 Subsidy",
  description: "Claim up to ₹1,08,000 subsidy under PM Surya Ghar Muft Bijli Yojana in Uttar Pradesh. Home solar panel starting at ₹60,000 per kW. Understand the step-by-step application process, exact costs, and Easy EMI plans. Book a free site survey.",
  keywords: "PM Surya Ghar Yojana UP, solar subsidy UP, PM Surya Ghar Muft Bijli Yojana Uttar Pradesh, solar panel subsidy calculator, Easy EMI solar UP, UPNEDA solar subsidy 2024, free solar panel scheme UP, residential solar installation UP, home solar panel starting at 60000 per kw UP, PM Surya Ghar subsidy 108000, solar subsidy application UP 2024, get 1,08,000 gov subsidy",
  alternates: {
    canonical: "https://saurabhbrothers.in/pm-surya-ghar-yojana-up",
  },
};

const faqs = [
  {
    question: "What is PM Surya Ghar Muft Bijli Yojana?",
    answer: "It is an official Central Government scheme providing a direct bank subsidy of ₹40,000 to ₹1,08,000 to households installing rooftop solar panels. This significantly reduces the upfront cost and eliminates your monthly electricity bills."
  },
  {
    question: "How much subsidy is available in Uttar Pradesh?",
    answer: "In UP, the subsidy is structured as follows: ₹40,000 for a 1 kW system, ₹78,000 for a 2 kW system, and a maximum of ₹1,08,000 for a 3 kW system or higher. The amount is directly credited to your bank account after a successful UPNEDA inspection."
  },
  {
    question: "Can I install solar panels on Easy EMI?",
    answer: "Absolutely. Saurabh Brothers provides a Easy EMI financing option. Instead of paying your regular electricity bill, you can pay a similar or lower amount as your EMI. Your solar system essentially pays for itself with zero extra financial burden."
  },
  {
    question: "Do I need to visit government offices for the subsidy?",
    answer: "No, you do not. Saurabh Brothers handles 100% of the paperwork. From PM Surya Ghar portal registration and DISCOM approvals to the net metering application and final UPNEDA subsidy claim, we manage the entire process."
  }
];

export default function PMSuryaGharPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const govSchemeSchema = {
    "@context": "https://schema.org",
    "@type": "GovernmentService",
    "name": "PM Surya Ghar Muft Bijli Yojana",
    "serviceType": "Solar Panel Subsidy",
    "provider": {
      "@type": "GovernmentOrganization",
      "name": "Ministry of New and Renewable Energy, Government of India"
    },
    "areaServed": {
      "@type": "State",
      "name": "Uttar Pradesh"
    }
  };

  return (
    <>
      <Navbar />
      <main className="font-sans selection:bg-blue-200">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(govSchemeSchema) }} />
        <PMSuryaGharContent faqs={faqs} />
      </main>
      <Footer />
    </>
  );
}
