import CygnageHero from "@/components/sections/cynage/cygnage-hero"
import SeamlessIntegration from "@/components/sections/cynage/seamless-integration"
import WhyCygnage from "@/components/sections/cynage/why-cygnage"
import CygnageFeatures from "@/components/sections/cynage/cygnage-features"
import ScreenCompatibility from "@/components/sections/cynage/screen-compatibility"
import CygnageIndustries from "@/components/sections/cynage/cygnage-industries"
import HowItWorks from "@/components/sections/cynage/how-it-works"
import CygnageTestimonial from "@/components/sections/cynage/cygnage-testimonial"
// import CygnageCTA from "@/components/sections/cynage/cygnage-cta"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

export default function CygnagePage() {
  return (
    <>
      <Header />
      <CygnageHero />
      <SeamlessIntegration />
      <WhyCygnage />
      <CygnageFeatures />
      <ScreenCompatibility />
      <CygnageIndustries />
      <HowItWorks />
      <CygnageTestimonial />
      {/* <CygnageCTA /> */}
      <Footer />
    </>
  )
}
