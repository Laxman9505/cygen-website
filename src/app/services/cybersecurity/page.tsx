/** @format */

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import CybersecurityHero from "@/components/sections/cyber-security/cyber-security-hero";
import SecurityOperations from "@/components/sections/cyber-security/security-operations";
import SecurityProcesses from "@/components/sections/cyber-security/security-process";
import SecurityServices from "@/components/sections/cyber-security/security-services";

export default function Cybersecurity() {
  return (
    <div>
      <Header />
      <CybersecurityHero />
      <SecurityProcesses />
      <SecurityServices />
      <SecurityOperations />
      <Footer />
    </div>
  );
}
