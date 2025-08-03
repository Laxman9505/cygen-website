/** @format */

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { BeMoreOrganized } from "@/components/sections/cygen-crm/be-more-organized";
import { CRMFeatures } from "@/components/sections/cygen-crm/crm-features";
import { CRMHero } from "@/components/sections/cygen-crm/crm-hero";
import { CRMTestimonialQuote } from "@/components/sections/cygen-crm/crm-testimonial-quote";
import { CRMTestimonials } from "@/components/sections/cygen-crm/crm-testimonials";
import { CustomerLoyalty } from "@/components/sections/cygen-crm/customer-loyalty";
import { WinMoreBusiness } from "@/components/sections/cygen-crm/win-more-business";

export default function CRMPage() {
  return (
    <>
      <Header />
      <CRMHero />
      <CustomerLoyalty />
      <CRMTestimonials />
      <BeMoreOrganized />
      <WinMoreBusiness />
      <CRMFeatures />
      <CRMTestimonialQuote />
      <Footer />
    </>
  );
}
