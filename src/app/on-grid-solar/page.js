import Navbar from "@/components/Navbar";
import OnGridSolarGuide from "@/components/OnGridSolarGuide";
import Footer from "@/components/Footer";

export const metadata = {
  title: "On-Grid Solar Guide & Installation in UP | Saurabh Brothers",
  description: "Complete guide to on-grid solar in Uttar Pradesh. Learn about net metering, government subsidies, pricing, and installation across Lucknow & all UP districts.",
  keywords: "on-grid solar system near me, grid-tied solar UP, net metering uttar pradesh, solar panel guide UP, on grid solar price india, solar system installation near me, best on-grid solar installer, solar net metering UP, UPPCL net metering, on grid solar subsidy",
  alternates: {
    canonical: "https://saurabhbrothers.in/on-grid-solar",
  },
  openGraph: {
    title: "On-Grid Solar System Guide | Saurabh Brothers UP",
    description: "Complete guide to on-grid solar in Uttar Pradesh. Learn about net metering, government subsidies, pricing, and installation across Lucknow & all UP districts.",
    url: "https://saurabhbrothers.in/on-grid-solar",
    type: "article",
    locale: "en_IN",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "On-Grid Solar Guide & Installation in UP | Saurabh Brothers",
    description: "Complete guide to on-grid solar in Uttar Pradesh. Learn about net metering, government subsidies, pricing, and installation across Lucknow & all UP districts.",
    images: ["/og-image.jpg"],
  }
};

export default function OnGridSolarPage() {
  return (
    <>
      <Navbar />
      <OnGridSolarGuide />
      <Footer />
    </>
  );
}
