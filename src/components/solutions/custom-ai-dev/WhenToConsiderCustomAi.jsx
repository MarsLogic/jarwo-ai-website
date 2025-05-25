"use client";
import { CheckCircle, AlertTriangle, Settings, Zap, UserCheck, BookOpen, MessageCircle } from 'lucide-react'; // Example icons
import { motion } from 'framer-motion';

const scenarios = [
    {
        icon: <Settings className="w-8 h-8 text-brand-pink" />,
        title: "Off-the-Shelf Limits",
        description: "Your current software isn't keeping up with your unique operational needs (e.g., daily inventory processing, weekly sales reporting).",
    },
    {
        icon: <Zap className="w-8 h-8 text-brand-pink" />,
        title: "Seamless Integration Needed",
        description: "You need to connect AI with your existing systems (CRM, ERP, payment gateways like Stripe, invoicing tools like Zoho Invoice) via custom APIs.",
    },
    {
        icon: <UserCheck className="w-8 h-8 text-brand-pink" />,
        title: "Influencer Amplification",
        description: "You're a social media influencer needing automated content scheduling, engagement analysis, or personalized audience interaction tools beyond standard offerings.",
    },
    {
        icon: <AlertTriangle className="w-8 h-8 text-brand-pink" />,
        title: "Niche Industry Requirements",
        description: "You're in a specialized industry (e.g., education, bespoke retail, artisan manufacturing) requiring AI tailored to specific jargon, processes, or customer behaviors.",
    },
    {
        icon: <BookOpen className="w-8 h-8 text-brand-pink" />,
        title: "Educational Innovation",
        description: "You're an educational institution looking to generate personalized quizzes, automate grading for specific subjects, or provide AI tutors for students.",
    },
    {
        icon: <MessageCircle className="w-8 h-8 text-brand-pink" />,
        title: "Custom LLM Applications",
        description: "You want to leverage Large Language Models (LLMs) for customer service chat, internal knowledge base querying, or content creation, but need it trained on your specific business data.",
    },
];

const WhenToConsiderCustomAi = () => {
    return (
        <section id="when-custom-ai" className="py-16 md:py-24 bg-light-secondary/10 dark:bg-dark-secondary/10">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-light-text dark:text-dark-text mb-4">
                        Is Custom AI the Right Fit for Your Business?
                    </h2>
                    <p className="text-lg text-center text-light-text-secondary dark:text-dark-text-secondary mb-12 max-w-2xl mx-auto">
                        If you're facing these challenges or opportunities, a bespoke AI solution could be your game-changer.
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {scenarios.map((scenario, index) => (
                        <motion.div
                            key={index}
                            className="bg-light-background dark:bg-dark-card p-6 rounded-xl shadow-lg 
                                       hover:shadow-xl 
                                       dark:hover:shadow-brand-pink/20 
                                       transition-shadow duration-300 
                                       flex flex-col items-start"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                        >
                            <div className="mb-4 p-3 bg-brand-pink/10 rounded-full">
                                {scenario.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-light-text dark:text-dark-text mb-2">{scenario.title}</h3>
                            <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm leading-relaxed">
                                {scenario.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhenToConsiderCustomAi;