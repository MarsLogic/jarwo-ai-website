// src/app/solutions/custom-ai-dev/page.jsx

// REMOVE this line: import Header from '@/components/Header'; // Or '@/components/ui/Header'
// REMOVE this line: import Footer from '@/components/Footer'; // Or '@/components/ui/Footer'

// Keep these solution-specific component imports
import HeroCustomAiDev from '@/components/solutions/custom-ai-dev/HeroCustomAiDev';
import WhenToConsiderCustomAi from '@/components/solutions/custom-ai-dev/WhenToConsiderCustomAi';
import ExpertiseCustomAiDev from '@/components/solutions/custom-ai-dev/ExpertiseCustomAiDev';
import OurProcessCustomAiDev from '@/components/solutions/custom-ai-dev/OurProcessCustomAiDev';
import CustomAiUseCases from '@/components/solutions/custom-ai-dev/CustomAiUseCases';
import WhyJarwoCustomAiDev from '@/components/solutions/custom-ai-dev/WhyJarwoCustomAiDev';
import CtaCustomAiDev from '@/components/solutions/custom-ai-dev/CtaCustomAiDev';

export const metadata = {
    title: "Custom AI Development for SMBs | Tailored AI Solutions | Jarwo.ai",
    description: "Unlock your business potential with Jarwo.ai's custom AI development. We craft bespoke AI solutions for SMBs, from automation & LLM chat to API integration, driving growth and efficiency. Let's build your unique AI.",
    keywords: "custom AI development, bespoke AI solutions, SMB AI, AI for small business, AI automation, LLM chat development, AI API integration, AI for influencers, AI for education",
};

export default function CustomAiDevPage() {
    return (
        // The surrounding div might still be useful for page-specific background or min-height,
        // but the Header and Footer components themselves should be removed from here.
        // The main div from the layout will provide the flex flex-col min-h-screen
        <> {/* Use a React Fragment or a main tag if you don't need the div */}
            {/* REMOVE <Header /> from here */}
            <main className="flex-grow"> {/* It's good practice to wrap page content in <main> */}
                <HeroCustomAiDev />
                <WhenToConsiderCustomAi />
                <ExpertiseCustomAiDev />
                <OurProcessCustomAiDev />
                <CustomAiUseCases />
                <WhyJarwoCustomAiDev />
                <CtaCustomAiDev />
            </main>
            {/* REMOVE <Footer /> from here */}
        </>
    );
}