/** @format */

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import AppDevelopmentHero from "@/components/sections/app-development/app-development-hero";
import DevelopmentProcess from "@/components/sections/app-development/development-process";
import KeyServices from "@/components/sections/app-development/key-services";
import WhyChooseCygen from "@/components/sections/app-development/why-choose-cygen";

export default function CustomAppDevelopment() {
  return (
    <div>
      <Header />
      <AppDevelopmentHero />
      <WhyChooseCygen />
      <DevelopmentProcess />
      <KeyServices />
      <Footer />
    </div>
  );
}
