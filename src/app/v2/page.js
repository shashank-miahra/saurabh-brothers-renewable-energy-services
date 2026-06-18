import PremiumNavbarV2 from "@/components/v2/PremiumNavbarV2";
import HeroV2 from "@/components/v2/HeroV2";
import SubsidyBentoV2 from "@/components/v2/SubsidyBentoV2";
import UPReachV2 from "@/components/v2/UPReachV2";
import PremiumFooterV2 from "@/components/v2/PremiumFooterV2";

export const metadata = {
  title: "Premium Solar Panel Installation in UP | Saurabh Brothers",
  description: "Experience the absolute highest quality solar panel installation in Uttar Pradesh. PM Surya Ghar subsidy experts.",
};

export default function V2Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-50 font-sans">
      <PremiumNavbarV2 />
      <HeroV2 />
      <SubsidyBentoV2 />
      <UPReachV2 />
      <PremiumFooterV2 />
    </main>
  );
}
