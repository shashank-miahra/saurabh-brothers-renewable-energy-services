import Navbar from "@/components/Navbar";
import HybridSolarGuide from "@/components/HybridSolarGuide";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Hybrid Solar System Guide | Saurabh Brothers",
  description: "Complete guide to Hybrid solar systems with battery storage in Uttar Pradesh. Save money and get 24/7 power.",
};

export default function HybridSolarPage() {
  return (
    <>
      <Navbar />
      <HybridSolarGuide />
      <Footer />
    </>
  );
}
