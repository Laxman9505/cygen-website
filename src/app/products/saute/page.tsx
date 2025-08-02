import SauteHero from "@/components/sections/saute/saute-hero"
import { WhatIsSaute } from "@/components/sections/saute/what-is-saute"
import { KitchenDisplaySystem } from "@/components/sections/saute/kitchen-display-system"
import { TableFloorManagement } from "@/components/sections/saute/table-floor-management"
import { RecipePrepManagement } from "@/components/sections/saute/recipe-prep-management"
import { InventorySupplierOrdering } from "@/components/sections/saute/inventory-supplier-ordering"
import { SauteIntegration } from "@/components/sections/saute/saute-integeration"
import { SauteReports } from "@/components/sections/saute/saute-reports"
import { IdealForSection } from "@/components/sections/saute/ideal-for-section"
import { WhyChooseSaute } from "@/components/sections/saute/why-choose-saute"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"


export default function SautePage() {
  return (
    <>
        <Header />
      <SauteHero />
      <WhatIsSaute />
      <KitchenDisplaySystem />
      <TableFloorManagement />
      <RecipePrepManagement />
      <InventorySupplierOrdering />
      <SauteIntegration />
      <SauteReports />
      <IdealForSection />
      <WhyChooseSaute />
      <Footer />
    </>
  )
}
