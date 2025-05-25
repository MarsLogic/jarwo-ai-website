// src/app/solutions/self-hosted-ai/page.jsx
import { HeroSelfHosted } from '@/components/solutions/self-hosted/HeroSelfHosted';
import { UnderstandingSelfHosted } from '@/components/solutions/self-hosted/UnderstandingSelfHosted';
import { KeyAdvantagesSelfHosted } from '@/components/solutions/self-hosted/KeyAdvantagesSelfHosted';
import { IdealUseCasesSelfHosted } from '@/components/solutions/self-hosted/IdealUseCasesSelfHosted';
import { TechStackSelfHosted } from '@/components/solutions/self-hosted/TechStackSelfHosted';
import { WhyJarwoSelfHosted } from '@/components/solutions/self-hosted/WhyJarwoSelfHosted';
import { CtaSelfHosted } from '@/components/solutions/self-hosted/CtaSelfHosted';

export const metadata = {
  title: "Self-Hosted AI Solutions | Jarwo.ai",
  description: "Deploy secure, customizable AI platforms on your own infrastructure with Jarwo.ai. Full data control, tailored LLMs, chatbots, and workflow automation.",
  // Add more specific keywords if desired
};

export default function SelfHostedSolutionsPage() {
  return (
    <>
      <HeroSelfHosted />
      <UnderstandingSelfHosted />
      <KeyAdvantagesSelfHosted />
      <IdealUseCasesSelfHosted />
      <TechStackSelfHosted />
      <WhyJarwoSelfHosted />
      <CtaSelfHosted />
    </>
  );
}