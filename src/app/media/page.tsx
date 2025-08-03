/** @format */

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { CompanyDetails } from "@/components/sections/media/company-details";
import { CompanyStory } from "@/components/sections/media/company-story";
import { CompanyTimeline } from "@/components/sections/media/company-timeline";
import { MediaHero } from "@/components/sections/media/media-hero";
import { TeamProfiles } from "@/components/sections/media/team-profiles";

export default function MediaPage() {
  return (
    <>
      <Header />
      <MediaHero />
      <CompanyStory />
      <TeamProfiles />
      <CompanyTimeline />
      <CompanyDetails />
      <Footer />
    </>
  );
}
