import Header from "@/components/layout/header"
import CygenPOSHero from "@/components/sections/cygen-pos/cygen-pos-hero"
import WhatIsCygenPOS from "@/components/sections/cygen-pos/what-is-cygen-pos"
import BusinessTypeFeatures from "@/components/sections/cygen-pos/business-type-features"
import CorePOSFeatures from "@/components/sections/cygen-pos/core-pos-features"
import POSAddonsIntegrations from "@/components/sections/cygen-pos/pos-addons-integrations"
import POSBenefitsReports from "@/components/sections/cygen-pos/pos-benefits-reports"
import HardwareCompatibility from "@/components/sections/cygen-pos/hardware-compatibility"
import IndustriesServed from "@/components/sections/cygen-pos/industries-served"
import POSTestimonials from "@/components/sections/cygen-pos/pos-testimonials"
import Footer from "@/components/layout/footer"

export default function CygenPOSPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <CygenPOSHero />
      <WhatIsCygenPOS />
      <BusinessTypeFeatures />
      <CorePOSFeatures />
      <POSAddonsIntegrations />
      <POSBenefitsReports />
      <HardwareCompatibility />
      <IndustriesServed />
      <POSTestimonials />
      <Footer />
    </main>
  )
}
