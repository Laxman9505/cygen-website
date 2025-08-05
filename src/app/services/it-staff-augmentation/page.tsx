/** @format */

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { DeveloperTypes } from "@/components/sections/it-staff-augmentation/developer-types";
import { ExpertServices } from "@/components/sections/it-staff-augmentation/expert-services";
import { HiringChallenges } from "@/components/sections/it-staff-augmentation/hiring-challenges";
import { IndustriesWeServe } from "@/components/sections/it-staff-augmentation/industries-we-serve";
import { ITStaffAugmentationHero } from "@/components/sections/it-staff-augmentation/it-staff-augmentation-hero";
import { LatestTech } from "@/components/sections/it-staff-augmentation/latest-tech";
import { StaffAugmentationMadeEasy } from "@/components/sections/it-staff-augmentation/staff-augmentation-made-easy";
import { StaffAugmentationTestimonial } from "@/components/sections/it-staff-augmentation/staff-augmentation-testimonial";
import { WhyChooseUs } from "@/components/sections/it-staff-augmentation/why-choose-us";

export default function ITStaffAugmentationPage() {
  return (
    <>
      <Header />
      <ITStaffAugmentationHero />
      <IndustriesWeServe />
      {/* <CoreTechnologies /> */}
      <DeveloperTypes />
      <LatestTech />
      <StaffAugmentationMadeEasy />
      <ExpertServices />
      <HiringChallenges />
      <StaffAugmentationTestimonial />
      <WhyChooseUs />
      <Footer />
    </>
  );
}
