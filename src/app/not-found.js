import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Home, Sun } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#faf9f6] flex flex-col items-center justify-center pt-24 pb-12 px-6">
        <div className="text-center max-w-2xl mx-auto">
          {/* Animated Sun Icon */}
          <div className="flex justify-center mb-8 relative">
            <div className="absolute inset-0 bg-orange-100 rounded-full blur-3xl opacity-50 scale-150 animate-pulse"></div>
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl relative z-10">
              <Sun className="w-12 h-12 text-[#e07a5f] animate-[spin_10s_linear_infinite]" />
            </div>
          </div>
          
          <h1 className="text-7xl font-extrabold text-[#1a1a1a] mb-4 tracking-tight">404</h1>
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">Page Not Found</h2>
          
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Oops! It seems this page has gone off-grid. The link you followed might be broken, or the page may have been removed. Let&apos;s get you back to the light.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/" 
              className="w-full sm:w-auto bg-[#e07a5f] text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#c7654b] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Home className="w-5 h-5" /> Back to Homepage
            </Link>
            
            <Link 
              href="/on-grid-solar" 
              className="w-full sm:w-auto bg-white border-2 border-gray-200 text-[#1a1a1a] px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:border-[#1a1a1a] hover:bg-gray-50 transition-all"
            >
              View Solar Guide <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-gray-500 text-sm">
              Need immediate assistance? Call our experts directly at <a href="tel:+917052737431" className="text-blue-600 font-semibold hover:underline">+91 70527 37431</a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
