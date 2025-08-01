/** @format */

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import AboutHero from "@/components/sections/about-us/about-hero";
import BusinessApproach from "@/components/sections/about-us/business-approach";
import CoreValues from "@/components/sections/about-us/core-values";
import WhatMakesUsDifferent from "@/components/sections/about-us/what-makes-us-different";

export default function AboutUs() {
  return (
    <div>
      <Header />
      <AboutHero />
      <WhatMakesUsDifferent />
      <BusinessApproach />
      <CoreValues />
      <Footer />
    </div>
  );
}
