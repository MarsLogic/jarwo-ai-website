// src/components/FeaturedSolutionsSection.jsx
"use client"; 

import { SolutionCard } from './SolutionCard'; 

const solutionsData = [
  {
    id: 1,
    iconName: "ServerCog", 
    title: "Self-Hosted AI Platforms",
    descriptionPoints: [
      { text: "Total data sovereignty and control.", iconName: "Lock" },
      { text: "Customizable to your infrastructure.", iconName: "Server" }, 
      { text: "Scalable for enterprise demands.", iconName: "TrendingUp" },
    ],
    learnMoreLink: "/solutions/self-hosted-ai", 
    tags: ["Control", "Security", "Enterprise"],
  },
  {
    id: 2,
    iconName: "Zap",
    title: "Ready-to-Use AI Applications",
    descriptionPoints: [
      { text: "Rapid deployment, immediate value.", iconName: "Rocket" },
      { text: "Pre-trained models for common tasks.", iconName: "BrainCircuit" },
      { text: "User-friendly interfaces.", iconName: "MousePointerSquareDashed" },
    ],
    learnMoreLink: "/solutions/ready-to-use",
    tags: ["Speed", "Efficiency", "SaaS"],
  },
  {
    id: 3,
    iconName: "Settings2",
    title: "Custom AI Development",
    descriptionPoints: [
      { text: "Solutions tailored to unique needs.", iconName: "Pipette" },
      { text: "Expert AI/ML engineering.", iconName: "BrainCog" }, // <-- UPDATED ICON
      { text: "Seamless integration with systems.", iconName: "Waypoints" },
    ],
    learnMoreLink: "/solutions/custom-ai-dev", // <-- UPDATED LINK for consistency
    tags: ["Bespoke", "Innovation", "Integration"],
  },
  {
    id: 4, 
    iconName: "Network",
    title: "AI System Integration",
    descriptionPoints: [
      { text: "Connect AI into existing workflows.", iconName: "Link" },
      { text: "Enhance legacy systems with AI.", iconName: "Sparkles" }, // <-- UPDATED ICON
      { text: "Optimize data flow and operations.", iconName: "DatabaseZap" },
    ],
    learnMoreLink: "/solutions/system-integration",
    tags: ["Connectivity", "APIs", "Optimization"],
  }
];

export function FeaturedSolutionsSection() {
  return (
    <section
      id="ai-solutions"
      className="min-h-screen w-full flex flex-col items-center justify-center bg-background text-foreground py-16 md:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-4">
            Explore Our <span className="text-brand-pink">AI Solutions</span>
          </h2>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how Jarwo.ai's innovative solutions can address your specific challenges and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutionsData.map((solution) => (
            <SolutionCard
              key={solution.id} 
              iconName={solution.iconName}
              title={solution.title}
              descriptionPoints={solution.descriptionPoints}
              learnMoreLink={solution.learnMoreLink}
              tags={solution.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
}