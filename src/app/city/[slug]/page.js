import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getCityData, getAllCitySlugs, upDistricts } from "@/lib/city-data";
import { getTheme } from "@/lib/district-themes";
import CityPageContent from "@/components/CityPageContent";

export async function generateStaticParams() {
  return getAllCitySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const city = getCityData(slug);
  if (!city) return { title: "Solar Installation | Saurabh Brothers" };
  return {
    title: `Best Solar Panel Installation in ${city.name}, UP | Saurabh Brothers`,
    description: `Top-rated solar panel installation company in ${city.name}, Uttar Pradesh. Home solar panels starting at ₹60,000/kW. Claim ₹1,08,000 UP government subsidy under PM Surya Ghar Yojana. Free site survey in ${city.name}.`,
    keywords: `solar panel in ${city.name}, solar panel installation ${city.name} UP, best solar company in uttar pradesh, PM surya ghar yojana UP, solar subsidy uttar pradesh, 3kw solar system price in UP, solar panel dealer ${city.name}, rooftop solar ${city.name}`,
    alternates: { canonical: `https://saurabhbrothers.in/city/${slug}` },
    openGraph: {
      title: `Best Solar Panel Installation in ${city.name}, UP | Saurabh Brothers`,
      description: `Professional solar installation in ${city.name}, Uttar Pradesh. Starting at ₹60,000/kW with ₹1,08,000 UP government subsidy.`,
      url: `https://saurabhbrothers.in/city/${slug}`,
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: `Best Solar Panel Installation in ${city.name}, UP | Saurabh Brothers`,
      description: `Home solar starting at ₹60,000/kW in ${city.name}, UP. Get ₹1,08,000 subsidy under PM Surya Ghar Yojana.`,
    },
  };
}

export default async function CityPage({ params }) {
  const { slug } = await params;
  const city = getCityData(slug);

  if (!city) {
    return (
      <>
        <Navbar />
        <section className="pt-32 pb-20 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">City Not Found</h1>
          <Link href="/" className="text-blue-600 font-semibold">← Back to Home</Link>
        </section>
        <Footer />
      </>
    );
  }

  const theme = getTheme(city.theme);
  const nearbyCities = upDistricts.filter((c) => c.slug !== city.slug);

  return (
    <>
      <Navbar />
      <CityPageContent city={city} theme={theme} nearbyCities={nearbyCities} />
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: `Saurabh Brothers - Solar Installation in ${city.name}`,
            description: `Best solar panel installation company in ${city.name}, Uttar Pradesh.`,
            url: `https://saurabhbrothers.in/city/${city.slug}`,
            telephone: "+917052737431",
            address: {
              "@type": "PostalAddress",
              addressLocality: city.name,
              addressRegion: "Uttar Pradesh",
              addressCountry: "IN",
            },
            areaServed: city.name,
            priceRange: "₹₹",
          }),
        }}
      />
    </>
  );
}
