import OnlineOrderingHero from "@/components/sections/cygen-online-ordering/cygen-online-ordering-hero"
import WhatIsOnlineOrdering from "@/components/sections/cygen-online-ordering/what-is-online-ordering"
import HospitalityFeatures from "@/components/sections/cygen-online-ordering/hospitality-features"
import RetailFeatures from "@/components/sections/cygen-online-ordering/retail-features"
import CoreOnlineFeatures from "@/components/sections/cygen-online-ordering/core-online-features"
import OnlineOrderingTestimonial from "@/components/sections/cygen-online-ordering/online-ordering-testimonial"
import OnlineOrderingPricing from "@/components/sections/cygen-online-ordering/online-ordering-pricing"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

export default function OnlineOrderingPage() {
  return (
    <>
        <Header />
      <OnlineOrderingHero />
      <WhatIsOnlineOrdering />
      <HospitalityFeatures />
      <RetailFeatures />
      <CoreOnlineFeatures />
      <OnlineOrderingTestimonial />
      <OnlineOrderingPricing />
      <Footer />
    </>
  )
}
