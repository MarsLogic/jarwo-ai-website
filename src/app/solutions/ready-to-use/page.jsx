// src/app/solutions/ready-to-use/page.jsx

// Import statements for section components
import { HeroReadyToUse } from '@/components/solutions/ready-to-use/HeroReadyToUse';
import { WhatIsReadyToUse } from '@/components/solutions/ready-to-use/WhatIsReadyToUse';
import { OfferingsReadyToUse } from '@/components/solutions/ready-to-use/OfferingsReadyToUse';
import { KeyBenefitsReadyToUse } from '@/components/solutions/ready-to-use/KeyBenefitsReadyToUse';
import { IdealUseCasesReadyToUse } from '@/components/solutions/ready-to-use/IdealUseCasesReadyToUse';
import { WhyJarwoReadyToUse } from '@/components/solutions/ready-to-use/WhyJarwoReadyToUse';
import { CtaReadyToUse } from '@/components/solutions/ready-to-use/CtaReadyToUse'; // UNCOMMENT THIS

// SEO Metadata
export const metadata = { /* ... */ };

export default function ReadyToUseSolutionsPage() {
  return (
    <>
      <main>
        <HeroReadyToUse />
        <WhatIsReadyToUse />
        <OfferingsReadyToUse />
        <KeyBenefitsReadyToUse />
        <IdealUseCasesReadyToUse />
        <WhyJarwoReadyToUse />
        <CtaReadyToUse /> {/* UNCOMMENT THIS */}
      </main>
    </>
  );
}