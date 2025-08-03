/** @format */

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { LeadershipProfiles } from "@/components/sections/leadership/leadership-profiles";
import { LeadershipValues } from "@/components/sections/leadership/leadership-values";

export default function LeadershipPage() {
  return (
    <>
      <Header />
      <LeadershipProfiles />
      <LeadershipValues />
      {/* <LeadershipCTA /> */}
      <Footer />
    </>
  );
}
