/** @format */

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import CloudFAQ from "@/components/sections/cloud-services-and-it-infrastuctures/cloud-faq";
import CloudServicesGrid from "@/components/sections/cloud-services-and-it-infrastuctures/cloud-services-grid";
import CloudServicesHero from "@/components/sections/cloud-services-and-it-infrastuctures/cloud-services-hero";

export default function CloudServicesAndItInfrastructure() {
  return (
    <div>
      <Header />
      <CloudServicesHero />
      <CloudServicesGrid />
      <CloudFAQ />
      <Footer />
    </div>
  );
}
