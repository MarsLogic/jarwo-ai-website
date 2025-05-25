"use client";
import { Megaphone, GraduationCap, Store, Network, CalendarDays, Bot, Users } from 'lucide-react'; // Added Users
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const useCases = [
    {
        icon: <Megaphone className="w-10 h-10 text-brand-pink mb-4" />,
        title: "For Content Creators & Influencers",
        headline: "Amplify Your Reach with AI-Powered Tools",
        description: "Automate content scheduling, analyze audience engagement for optimal impact, personalize interactions, and generate fresh content ideas tailored to your brand.",
        keywords: "AI for content creators, influencer marketing AI, social media automation, audience engagement AI",
    },
    {
        icon: <GraduationCap className="w-10 h-10 text-brand-pink mb-4" />,
        title: "For Educational Providers",
        headline: "Transform Learning with Tailored AI Solutions",
        description: "Develop AI-driven quiz generation, create personalized learning paths, automate administrative tasks, or build custom tutoring chatbots to enhance educational offerings.",
        keywords: "Education AI, AI for learning, personalized education tools, AI tutoring",
    },
    {
        icon: <Store className="w-10 h-10 text-brand-pink mb-4" />,
        title: "For Specialized Businesses",
        headline: "AI Solutions as Unique as Your Operations",
        description: "From optimizing inventory for specialized retail to segmenting customers for unique service models, we build AI that understands and enhances your distinct business processes.",
        keywords: "Custom business AI, specialized retail AI, niche market AI solutions",
    },
    {
        icon: <Network className="w-10 h-10 text-brand-pink mb-4" />,
        title: "For Seamless System Integration",
        headline: "Connect & Conquer: Custom AI & API Integration",
        description: "Need AI to communicate with your payment gateways, CRM, or ERP? Generate invoices automatically? Integrate with proprietary systems? We specialize in robust AI-powered API integrations.",
        keywords: "AI API integration, system automation AI, custom SDK AI, business workflow AI",
    },
    {
        icon: <CalendarDays className="w-10 h-10 text-brand-pink mb-4" />,
        title: "For Operational Efficiency",
        headline: "AI-Driven Automation: From Daily Tasks to Strategic Insights",
        description: "Automate routine reports, streamline weekly dashboards, simplify monthly reconciliations, or assist in annual strategic planning by uncovering long-term data trends.",
        keywords: "Business process automation AI, operational AI, AI for efficiency, strategic data analysis",
    },
    {
        icon: <Users className="w-10 h-10 text-brand-pink mb-4" />,
        title: "For Enhanced Customer Engagement",
        headline: "Deepen Client Relationships with Intelligent AI",
        description: "Deploy AI to personalize customer communication, predict client needs, offer proactive support, and analyze feedback to significantly improve overall customer satisfaction and loyalty.",
        keywords: "Customer experience AI, AI for client engagement, personalized marketing AI, customer loyalty AI",
    },
];

const CustomAiUseCases = () => {
    return (
        <section id="custom-ai-use-cases" className="py-16 md:py-24 bg-light-background dark:bg-dark-background">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="text-center mb-12">
                        <Bot className="w-12 h-12 mx-auto mb-4 text-brand-pink" />
                        <h2 className="text-3xl md:text-4xl font-bold text-light-text dark:text-dark-text mb-3">
                            Real-World Custom AI: Solutions for Every Business
                        </h2>
                        <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
                            Discover how bespoke AI can address specific challenges and unlock opportunities across various sectors.
                        </p>
                    </div>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {useCases.map((useCase, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {/* Updated Card className for hover shadow */}
                            <Card className="h-full flex flex-col bg-light-card dark:bg-dark-card shadow-lg hover:shadow-xl dark:hover:shadow-brand-pink/30 transition-shadow duration-300">
                                <CardHeader className="items-center text-center">
                                    {useCase.icon}
                                    <CardTitle className="text-xl text-light-text dark:text-dark-text">{useCase.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow text-center">
                                    <h4 className="text-lg font-semibold text-brand-pink mb-2">{useCase.headline}</h4>
                                    <CardDescription className="text-sm text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                                        {useCase.description}
                                    </CardDescription>
                                    {/* <p className="mt-3 text-xs text-gray-400 dark:text-gray-500">
                                        Keywords: {useCase.keywords}
                                    </p> */}
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CustomAiUseCases;