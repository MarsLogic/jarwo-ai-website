"use client";
import { Users, Lightbulb, TestTube2, Code2, Rocket, LifeBuoy, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';

const processSteps = [
    {
        icon: <Users className="w-8 h-8 text-brand-pink" />,
        title: "Discovery & Strategy",
        description: "Understanding your organization's unique challenges and goals – from daily operational efficiencies to annual growth targets.",
    },
    {
        icon: <Lightbulb className="w-8 h-8 text-brand-pink" />,
        title: "Prototyping & Validation",
        description: "Quickly building and testing core AI functionality to ensure it meets your specific needs, whether it's an API integration or a custom LLM.",
    },
    {
        icon: <Code2 className="w-8 h-8 text-brand-pink" />,
        title: "Agile Development & Integration",
        description: "Iteratively building your custom AI solution, integrating with your existing tools, and providing regular updates.",
    },
    {
        icon: <TestTube2 className="w-8 h-8 text-brand-pink" />,
        title: "Testing & Quality Assurance",
        description: "Rigorous testing to ensure your AI solution is robust, reliable, and performs flawlessly.",
    },
    {
        icon: <Rocket className="w-8 h-8 text-brand-pink" />,
        title: "Deployment & Training",
        description: "Seamlessly deploying the solution (self-hosted or cloud) and empowering your team to use it effectively.",
    },
    {
        icon: <LifeBuoy className="w-8 h-8 text-brand-pink" />,
        title: "Ongoing Support & Optimization",
        description: "Providing continuous support and refining the AI for peak performance and evolving business needs.",
    },
];

const OurProcessCustomAiDev = () => {
    return (
        <section id="custom-ai-process" className="py-16 md:py-24 bg-light-secondary/10 dark:bg-dark-secondary/10">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-light-text dark:text-dark-text mb-4">
                        Your Vision, Our Expertise: A Collaborative Custom AI Journey
                    </h2>
                    <p className="text-lg text-center text-light-text-secondary dark:text-dark-text-secondary mb-12 max-w-2xl mx-auto">
                        We partner with you every step of the way, from initial idea to deployed solution and beyond.
                    </p>
                </motion.div>

                {/* Desktop Timeline Container */}
                <div className="hidden md:block relative py-8">
                    <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-brand-pink/40 transform -translate-x-1/2 z-0"></div>
                    {processSteps.map((step, index) => (
                        <div key={index} className="mb-12 flex items-center relative">
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-brand-pink rounded-full border-4 border-light-secondary dark:border-dark-secondary z-10"></div>
                            <motion.div
                                className={`w-1/2 p-4 ${index % 2 === 0 ? 'pr-10 text-right' : 'pl-10 text-left ml-auto'}`}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                <div className="bg-light-background dark:bg-dark-card p-6 rounded-xl shadow-xl inline-block max-w-md">
                                    <div className={`flex items-center mb-3 ${index % 2 === 0 ? 'justify-end flex-row-reverse' : 'justify-start'}`}>
                                        <div className="p-2 bg-brand-pink/10 rounded-full">
                                            {step.icon}
                                        </div>
                                        <h3 className={`text-xl font-semibold text-light-text dark:text-dark-text ${index % 2 === 0 ? 'mr-3 md:mr-0 md:ml-3' : 'ml-3 md:ml-0 md:mr-3'}`}>
                                            {step.title}
                                        </h3>
                                    </div>
                                    <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>

                {/* Mobile Timeline (Stacked List) */}
                <div className="md:hidden space-y-8">
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="bg-light-background dark:bg-dark-card p-6 rounded-xl shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                        >
                            <div className="flex items-center mb-3">
                                <div className="p-2 bg-brand-pink/10 rounded-full mr-3">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-light-text dark:text-dark-text">{step.title}</h3>
                            </div>
                            <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
                 <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: processSteps.length * 0.1 }} // Adjusted delay for button
                >
                    <Link href="/contact?subject=Outline+Custom+AI+Project" passHref>
                        <Button 
                            size="lg" 
                            className="bg-brand-pink text-white
                                       hover:bg-brand-pink/85 hover:shadow-xl
                                       dark:bg-brand-pink dark:text-white 
                                       dark:hover:bg-brand-pink/85 dark:hover:shadow-xl
                                       font-semibold py-3 px-8 rounded-lg shadow-lg
                                       transform transition-all duration-200 ease-in-out hover:scale-[1.03]"
                        >
                            Let's Outline Your Custom AI Project
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};
export default OurProcessCustomAiDev;