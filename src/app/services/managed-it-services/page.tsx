/** @format */

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { EndUserComputing } from "@/components/sections/managed-it-services/end-user-computing";
import { EssentialManagedServices } from "@/components/sections/managed-it-services/essential-managed-services";
import { ExtraMileServices } from "@/components/sections/managed-it-services/extra-mile-services";
import { FConnectApp } from "@/components/sections/managed-it-services/f-connect-app";
import { ManagedCloudServices } from "@/components/sections/managed-it-services/managed-cloud-services";
import { ManagedITBenefits } from "@/components/sections/managed-it-services/managed-it-benefits";
import { ManagedITHero } from "@/components/sections/managed-it-services/managed-it-hero";
import { PremiumITServices } from "@/components/sections/managed-it-services/premium-it-services";
import { UnifiedCommunications } from "@/components/sections/managed-it-services/unified-communications";

export default function ManagedITServicesPage() {
  return (
    <>
      <Header />
      <ManagedITHero />
      <EndUserComputing />
      <ManagedCloudServices />
      <FConnectApp />
      <ManagedITBenefits />
      <PremiumITServices />
      <EssentialManagedServices />
      <UnifiedCommunications />
      <ExtraMileServices />
      <Footer />
    </>
  );
}
