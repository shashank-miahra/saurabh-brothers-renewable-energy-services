import { Montserrat } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CookieBanner from "../components/CookieBanner";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Saurabh Brothers Renewable Energy Services | Top Solar Installers UP",
  description: "Get high-quality solar installations at ₹60,000/kW in Uttar Pradesh. Claim up to ₹1,08,000 subsidy. Premium rooftop solar for homes and businesses.",
  keywords: "solar installation UP, rooftop solar, solar panels India, Saurabh Brothers, solar cost per kW, PM Surya Ghar",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        <Navbar />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
