// src/app/solutions/system-integration/page.jsx

// Page Specific Components
// import Breadcrumbs from '@/components/solutions/system-integration/Breadcrumbs'; // <<<--- REMOVED IMPORT
import HeroSystemIntegration from '@/components/solutions/system-integration/HeroSystemIntegration';
import WhyModernizeAI from '@/components/solutions/system-integration/WhyModernizeAI';
import IntegrationServices from '@/components/solutions/system-integration/IntegrationServices';
import IntegrationChallenges from '@/components/solutions/system-integration/IntegrationChallenges';
import IntegrationApproach from '@/components/solutions/system-integration/IntegrationApproach';
import WhyPartnerIntegration from '@/components/solutions/system-integration/WhyPartnerIntegration';
import CaseSnippetIntegration from '@/components/solutions/system-integration/CaseSnippetIntegration';
import CtaSystemIntegration from '@/components/solutions/system-integration/CtaSystemIntegration';

export const metadata = {
    title: "AI-Powered System Integration & Improvement | Jarwo.ai",
    description: "Jarwo.ai offers AI system integration to enhance existing IT, connect disparate systems & boost efficiency. Modernize intelligently with our expert services.",
    keywords: "AI system integration, system integration services, AI for existing systems, enhance legacy systems AI, connect disparate systems AI, API integration AI, improve operational efficiency AI, modernize IT infrastructure",
    openGraph: {
        title: "AI-Powered System Integration & Improvement | Jarwo.ai",
        description: "Jarwo.ai offers AI system integration to enhance existing IT, connect disparate systems & boost efficiency.",
        url: "https://jarwo.ai/solutions/system-integration", // Replace with your production URL
        images: [ { url: "https://jarwo.ai/og-image-system-integration.jpg", width: 1200, height: 630, alt: "Jarwo.ai System Integration" } ], // Replace
        siteName: "Jarwo.ai",
    },
    twitter: {
        card: "summary_large_image",
        title: "AI-Powered System Integration & Improvement | Jarwo.ai",
        description: "Enhance existing IT and connect disparate systems with Jarwo.ai's expert AI integration services.",
        // images: ["https://jarwo.ai/twitter-image-system-integration.jpg"], // Replace
    },
};

const SystemIntegrationPage = () => {
    // const breadcrumbItems = [  // <<<--- REMOVED breadcrumbItems definition
    //     { label: "Home", href: "/" },
    //     { label: "Solutions", href: "/solutions" },
    //     { label: "System Integration and Improvement" }
    // ];

    return (
        <>
            {/* <div className="container mx-auto px-6 pt-8"> // <<<--- REMOVED container for breadcrumbs
                <Breadcrumbs items={breadcrumbItems} /> // <<<--- REMOVED USAGE
            </div> */}
            <HeroSystemIntegration />
            <WhyModernizeAI />
            <IntegrationServices />
            <IntegrationChallenges />
            <IntegrationApproach />
            <WhyPartnerIntegration />
            <CaseSnippetIntegration />
            <CtaSystemIntegration />
        </>
    );
};

export default SystemIntegrationPage;