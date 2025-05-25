"use client";
import { ShieldCheck, Users, DollarSign, Settings, TrendingUp, Handshake, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

// Differentiators with revised wording
const differentiators = [
    {
        icon: <Users className="w-8 h-8 text-brand-pink" />,
        title: "Solutions for Growing Businesses",
        description: "We understand the unique operational realities and resource considerations of growing businesses, delivering high-impact AI without unnecessary enterprise-level complexity.",
    },
    {
        icon: <DollarSign className="w-8 h-8 text-brand-pink" />,
        title: "Focus on Tangible ROI & Growth",
        description: "Our custom AI solutions are designed to solve your specific challenges, improve efficiency, and drive measurable growth for your organization, turning AI investment into clear returns.",
    },
    {
        icon: <Settings className="w-8 h-8 text-brand-pink" />,
        title: "Practical & Flexible Technology",
        description: "We leverage the right tools for your specific needs—custom builds, smart integrations, or powerful APIs—always prioritizing practicality, performance, and your business objectives.",
    },
    {
        icon: <Handshake className="w-8 h-8 text-brand-pink" />,
        title: "True Collaborative Partnership",
        description: "We work as an extension of your team, ensuring transparent communication and deep alignment at every step, from initial concept to final deployment and beyond.",
    },
    {
        icon: <TrendingUp className="w-8 h-8 text-brand-pink" />,
        title: "Scalable, Future-Ready AI",
        description: "We build adaptable AI solutions that can scale with your business, ready to meet new challenges and capitalize on emerging opportunities in your market.",
    },
    {
        icon: <Lightbulb className="w-8 h-8 text-brand-pink" />,
        title: "Dedicated Expertise & Innovation",
        description: "Our experienced AI specialists are passionate about innovation and dedicated to delivering high-quality, cutting-edge custom solutions that give your business a distinct advantage.",
    }
];

const WhyJarwoCustomAiDev = () => {
    return (
        <section id="why-jarwo-custom-ai" className="py-16 md:py-24 bg-light-secondary/10 dark:bg-dark-secondary/10">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-light-text dark:text-dark-text mb-4">
                        Your Partner for Practical, Powerful Custom AI
                    </h2>
                    <p className="text-lg text-center text-light-text-secondary dark:text-dark-text-secondary mb-12 max-w-2xl mx-auto">
                        Choosing Jarwo.ai means selecting a partner committed to your business's success through tailored AI innovation and strategic implementation.
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {differentiators.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-light-background dark:bg-dark-card p-6 rounded-xl shadow-lg 
                                       hover:shadow-xl 
                                       dark:hover:shadow-brand-pink/20 
                                       transition-shadow duration-300 flex"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="pr-4 pt-1 flex-shrink-0">
                                <div className="p-2 bg-brand-pink/10 rounded-full inline-block">
                                    {item.icon}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-light-text dark:text-dark-text mb-2">{item.title}</h3>
                                <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyJarwoCustomAiDev;