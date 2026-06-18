import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Contact Us | Saurabh Brothers Solar",
  description: "Contact Saurabh Brothers for the best solar panel installation in Uttar Pradesh. Get a free quote today.",
};

export default function ContactUsPage() {
  return (
    <>
      <Navbar />
      <div className="pt-24 bg-white">
        <section className="relative bg-blue-50 pt-16 pb-20 overflow-hidden">
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-end gap-8">
              <div className="pt-10">
                <h1 className="text-[#0A1128] text-5xl md:text-6xl font-extrabold tracking-tight">Contact Us</h1>
                <p className="text-gray-600 mt-4 text-lg">We are here to answer any questions you may have about your solar transition.</p>
              </div>
            </div>
          </div>
        </section>
        <Contact />
      </div>
      <Footer />
    </>
  );
}
