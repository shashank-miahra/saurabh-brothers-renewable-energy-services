import Navbar from "@/components/Navbar";
import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Saurabh Brothers | Best Solar Installer in UP",
  description: "Saurabh Brothers is Uttar Pradesh's trusted solar installation company. 500+ projects across all 75 districts including Lucknow, Kanpur, Noida & Varanasi.",
  keywords: "about saurabh brothers, solar company near me, solar installer near me lucknow, best solar company uttar pradesh, solar installation company near me UP, trusted solar brand UP, solar energy company noida agra",
  alternates: {
    canonical: "https://saurabhbrothers.in/about-us",
  },
  openGraph: {
    title: "About Saurabh Brothers | Top Solar Company in Uttar Pradesh",
    description: "Saurabh Brothers is Uttar Pradesh's trusted solar installation company. 500+ projects across all 75 districts including Lucknow, Kanpur, Noida & Varanasi.",
    url: "https://saurabhbrothers.in/about-us",
    type: "website",
    locale: "en_IN",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Saurabh Brothers | Best Solar Installer in UP",
    description: "Saurabh Brothers is Uttar Pradesh's trusted solar installation company. 500+ projects across all 75 districts including Lucknow, Kanpur, Noida & Varanasi.",
    images: ["/og-image.jpg"],
  }
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutUs />
      <Contact />
      <Footer />
    </>
  );
}
