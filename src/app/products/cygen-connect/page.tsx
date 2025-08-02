import CygenConnectHero from "@/components/sections/cygen-connect/cygen-connect-hero"
import WhyCygenConnect from "@/components/sections/cygen-connect/why-cygen-connect"
import ConnectKeyFeatures from "@/components/sections/cygen-connect/connect-key-features"
import ConnectUseCases from "@/components/sections/cygen-connect/connect-use-cases"
import ConnectAccess from "@/components/sections/cygen-connect/connect-access"
import ConnectTestimonials from "@/components/sections/cygen-connect/connect-testimonials"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

export default function CygenConnectPage() {
  return (
    <>
    <Header />
      <CygenConnectHero />
      <WhyCygenConnect />
      <ConnectKeyFeatures />
      <ConnectUseCases />
      <ConnectAccess />
      <ConnectTestimonials />
      <Footer />
    </>
  )
}
