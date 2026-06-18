import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./globals.css";

export const viewport = {
  themeColor: "#1d4ed8",
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  metadataBase: new URL("https://saurabhbrothers.in"),
  title: "Saurabh Brothers | Best Solar Panel Company in Uttar Pradesh",
  description: "Get the best rooftop solar panel installation in Uttar Pradesh. UPNEDA approved vendor. Explore our Easy EMI plans and claim up to ₹1,08,000 subsidy under PM Surya Ghar Yojana. Get a Free Quote today!",
  keywords: "Best Solar Company near me, Top Solar Panel Dealer in Lucknow, Best Solar System Company in UP, Solar Panel Installation near me, Local solar installer, solar energy company Uttar Pradesh, rooftop solar Lucknow",
  alternates: {
    canonical: "https://saurabhbrothers.in",
    languages: {
      "en-IN": "https://saurabhbrothers.in",
      "hi-IN": "https://saurabhbrothers.in",
    },
  },
  openGraph: {
    title: "Best Solar Installation Near Me | Top Solar Companies in UP",
    description: "Get the best rooftop solar panel installation in Uttar Pradesh. UPNEDA approved vendor. Explore our Easy EMI plans and claim up to ₹1,08,000 subsidy under PM Surya Ghar Yojana.",
    url: "https://saurabhbrothers.in/",
    siteName: "Saurabh Brothers",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Saurabh Brothers - Solar Panel Installation in Uttar Pradesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Solar Installation Near Me | Top Solar Companies in UP",
    description: "Get the best rooftop solar panel installation in Uttar Pradesh. UPNEDA approved vendor. Explore our Easy EMI plans and claim up to ₹1,08,000 subsidy under PM Surya Ghar Yojana.",
    images: ["/og-image.jpg"],
  }
};

import { Toaster } from "react-hot-toast";
import WhatsAppChat from "@/components/WhatsAppChat";
import Analytics from "@/components/Analytics";

export default function RootLayout({ children }) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Saurabh Brothers",
    "image": "https://saurabhbrothers.in/logo.png",
    "@id": "https://saurabhbrothers.in/",
    "url": "https://saurabhbrothers.in/",
    "telephone": "+917052737431",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rajajipuram",
      "addressLocality": "Lucknow",
      "addressRegion": "UP",
      "postalCode": "226017",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.8360,
      "longitude": 80.8900
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "19:00"
    },
    "sameAs": [
      "https://www.facebook.com/saurabhbrothers",
      "https://www.instagram.com/saurabhbrothers"
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Solar Panel Installation",
    "description": "Professional rooftop solar panel installation service in Uttar Pradesh. UPNEDA approved vendor offering grid-connected solar systems for residential and commercial properties with PM Surya Ghar Yojana subsidy support.",
    "brand": {
      "@type": "Brand",
      "name": "Saurabh Brothers"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://saurabhbrothers.in/",
      "priceCurrency": "INR",
      "price": "60000",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    },
    "areaServed": {
      "@type": "State",
      "name": "Uttar Pradesh",
      "containedInPlace": {
        "@type": "Country",
        "name": "India"
      }
    }
  };

  const navSchema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "name": ["Home", "Residential Solar", "Commercial Solar", "PM Surya Ghar Yojana", "Blog", "About Us", "Contact"],
    "url": [
      "https://saurabhbrothers.in",
      "https://saurabhbrothers.in/residential",
      "https://saurabhbrothers.in/commercial",
      "https://saurabhbrothers.in/pm-surya-ghar-yojana-up",
      "https://saurabhbrothers.in/blog",
      "https://saurabhbrothers.in/about-us",
      "https://saurabhbrothers.in/contact-us"
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(navSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      </head>
      <body className="font-body text-gray-800 bg-white">
        <Toaster />
        <main className="relative min-h-[100dvh]">
          {children}
        </main>
        <WhatsAppChat />
        <Analytics />
      </body>
    </html>
  );
}
