"use client";
import { Settings2, MessageSquareText, PlugZap, BarChart3, Target, Workflow, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

const expertiseAreas = [
    {
        icon: <Settings2 className="w-10 h-10 text-brand-pink" />,
        title: "Intelligent Automation",
        description: "Automate repetitive daily, weekly, or monthly tasks like data entry, report generation, and customer follow-ups, freeing up your team for strategic work.",
    },
    {
        icon: <MessageSquareText className="w-10 h-10 text-brand-pink" />,
        title: "Custom LLM & Chatbot Solutions",
        description: "Develop AI chatbots trained on your business data for enhanced customer support, internal Q&A, or to assist social media influencers with fan engagement.",
    },
    {
        icon: <PlugZap className="w-10 h-10 text-brand-pink" />,
        title: "API & Systems Integration",
        description: "Build custom APIs or integrate AI with your existing software (e.g., accounting, CRM, e-commerce platforms, payment gateways) using SDKs or direct API calls.",
    },
    {
        icon: <BarChart3 className="w-10 h-10 text-brand-pink" />,
        title: "Data-Driven Insights & Prediction",
        description: "Create custom models for sales forecasting, customer churn prediction, or market trend analysis specific to your organization's data and industry.",
    },
    {
        icon: <Target className="w-10 h-10 text-brand-pink" />,
        title: "Niche AI Applications",
        description: "Design specialized AI tools for unique needs, like quiz generators for educators, personalized recommendation engines for e-commerce, or compliance checkers for specific industries.",
    },
    {
        icon: <Workflow className="w-10 h-10 text-brand-pink" />,
        title: "Process Optimization Solutions",
        description: "Analyze and streamline your business processes, whether self-hosted or by integrating ready-to-use web apps, enhanced with custom AI layers for maximum efficiency.",
    },
];

const ExpertiseCustomAiDev = () => {
    return (
        <section id="custom-ai-expertise" className="py-16 md:py-24 bg-light-background dark:bg-dark-background">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="text-center mb-12">
                         <Brain className="w-12 h-12 mx-auto mb-4 text-brand-pink" />
                        <h2 className="text-3xl md:text-4xl font-bold text-light-text dark:text-dark-text mb-3">
                            Our Custom AI Development Capabilities for Your Business
                        </h2>
                        <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
                            We leverage a wide range of AI technologies to build solutions that deliver real business value and cater to specific operational needs.
                        </p>
                    </div>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {expertiseAreas.map((expertise, index) => (
                        <motion.div
                            key={index}
                            className="bg-light-card dark:bg-dark-card p-8 rounded-xl shadow-lg 
                                       hover:shadow-xl 
                                       dark:hover:shadow-brand-pink/20 
                                       transition-shadow duration-300 
                                       flex flex-col items-center text-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="p-4 bg-brand-pink/10 rounded-full mb-6">
                                {expertise.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-light-text dark:text-dark-text mb-3">{expertise.title}</h3>
                            <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm leading-relaxed">
                                {expertise.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExpertiseCustomAiDev;