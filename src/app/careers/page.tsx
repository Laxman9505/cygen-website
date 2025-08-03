/** @format */

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import CareersHero from "@/components/sections/careers/careers-hero";
import OpenPositions from "@/components/sections/careers/open-positions";

export default function CareersPage() {
  return (
    <>
      <Header />
      <CareersHero />
      <OpenPositions />
      <Footer />
    </>
  );
}
