// src/app/page.js
import { HeroSection } from '@/components/HeroSection';
import { FeaturedSolutionsSection } from '@/components/FeaturedSolutionsSection';
import { ImpactStatsSection } from '@/components/ImpactStatsSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { CtaSection } from '@/components/CtaSection';

export default function HomePage() {
  return (
    <>
      {/* Header is likely in layout.js */}
      <main>
        <HeroSection />
        <FeaturedSolutionsSection />
        <ImpactStatsSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      {/* Footer is likely in layout.js */}
    </>
  );
}