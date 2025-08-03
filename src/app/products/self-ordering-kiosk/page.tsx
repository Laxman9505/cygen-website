/** @format */

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { ExperienceFuture } from "@/components/sections/self-ordering-kiosk/experience-future";
import { KioskDemo } from "@/components/sections/self-ordering-kiosk/kiosk-demo";
import { KioskHero } from "@/components/sections/self-ordering-kiosk/kiosk-hero";
import { KioskKeyFeatures } from "@/components/sections/self-ordering-kiosk/kiosk-key-features";
import { KioskOverview } from "@/components/sections/self-ordering-kiosk/kiosk-overview";
import { KioskTestimonials } from "@/components/sections/self-ordering-kiosk/kiosk-testimonials";
import { WhyChooseKiosk } from "@/components/sections/self-ordering-kiosk/why-choose-kiosk";

export default function SelfOrderingKioskPage() {
  return (
    <>
      <Header />
      <KioskHero />
      <KioskOverview />
      <KioskKeyFeatures />
      <WhyChooseKiosk />
      <KioskDemo />
      <KioskTestimonials />
      <ExperienceFuture />
      <Footer />
    </>
  );
}
