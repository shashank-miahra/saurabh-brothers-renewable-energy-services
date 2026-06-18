import Navbar from "@/components/Navbar";
import ResHero from "@/components/residential/ResHero";
import ResApproach from "@/components/residential/ResApproach";
import ResWhyUs from "@/components/residential/ResWhyUs";
import ResAdvantage from "@/components/residential/ResAdvantage";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Home Solar Panel Installation in UP | Saurabh Brothers",
  description: "Get residential solar installation in Uttar Pradesh with PM Surya Ghar subsidy. Save up to 90% on bills. Free site survey across all 75 UP districts.",
  keywords: "residential solar near me, home solar installation near me, solar panel for home lucknow, PM Surya Ghar Yojana UP, rooftop solar uttar pradesh, best solar company near me, solar panel installation cost UP, home solar system price, residential solar installer near me, ghar ke liye solar panel",
  alternates: {
    canonical: "https://saurabhbrothers.in/residential",
  },
  openGraph: {
    title: "Residential Solar Installation Near Me | Saurabh Brothers UP",
    description: "Get residential solar installation in Uttar Pradesh with PM Surya Ghar subsidy. Save up to 90% on bills. Free site survey across all 75 UP districts.",
    url: "https://saurabhbrothers.in/residential",
    type: "website",
    locale: "en_IN",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Solar Panel Installation in UP | Saurabh Brothers",
    description: "Get residential solar installation in Uttar Pradesh with PM Surya Ghar subsidy. Save up to 90% on bills. Free site survey across all 75 UP districts.",
    images: ["/og-image.jpg"],
  }
};

export default function ResidentialPage() {
  return (
    <>
      <Navbar />
      <ResHero />
      <ResApproach />
      <ResWhyUs />
      <ResAdvantage />
      <Footer />
    </>
  );
}
