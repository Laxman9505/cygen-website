/** @format */

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import AcknowledgementOfCountry from "@/components/sections/home/acknowledgement-of-country";
import Hero from "@/components/sections/home/hero";
import ITStaffing from "@/components/sections/home/it-staffing";
import MissionOverview from "@/components/sections/home/mission-overview";
import Products from "@/components/sections/home/products";
import ServicesDetail from "@/components/sections/home/services-detail";
import ServicesGrid from "@/components/sections/home/services-grid";
import Statistics from "@/components/sections/home/statistics";
import Testimonials from "@/components/sections/home/testimonials";
import TrustedBy from "@/components/sections/home/trusted-by";
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <MissionOverview />
      <ServicesDetail />
      <ServicesGrid />
      <Statistics />
      <Products />
      <ITStaffing />
      <Testimonials />
      <TrustedBy />
      <AcknowledgementOfCountry />
      <Footer />
    </main>
  );
}
