"use client";
import { BrainCircuit, ServerCog, Minimize2, Puzzle, PenTool, Settings2, ShieldCheck, TrendingUp, InfinityIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const advantages = [
    { icon: [BrainCircuit, ServerCog], title: "Expertise in AI & System Architecture", description: "We blend cutting-edge AI with complex enterprise systems." },
    { icon: [Minimize2], title: "Non-Disruptive Integration Focus", description: "We aim to enhance, not overhaul, minimizing disruption to your operations." },
    { icon: [PenTool], title: "Customized Solutions", description: "Tailoring integrations to your specific systems, data models, and business logic." },
    { icon: [ShieldCheck], title: "Security-First Approach", description: "Ensuring data integrity and security throughout the integration process." },
    { icon: [TrendingUp], title: "Future-Proofing Your Technology", description: "Building scalable and adaptable integrations that can evolve with your business." },
];

const WhyPartnerIntegration = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="why-jarwoai-integration" className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-6">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ staggerChildren: 0.1 }}
                >
                    <motion.h2
                        variants={cardVariants}
                        className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12 md:mb-16" // CHANGED: from blue to text-foreground
                    >
                        The Jarwo.ai Advantage in System Modernization
                    </motion.h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {advantages.map((advantage, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                className="p-6 bg-background rounded-lg shadow-lg"
                            >
                                <div className="flex items-center mb-4">
                                    {Array.isArray(advantage.icon) ? (
                                        <div className="flex -space-x-2 mr-3">
                                            {advantage.icon.map((Icon, i) => (
                                                <Icon key={i} className={`h-7 w-7 text-primary ${i > 0 ? 'opacity-70' : ''}`} />
                                            ))}
                                        </div>
                                    ) : (
                                        <advantage.icon className="h-8 w-8 text-primary mr-4" />
                                    )}
                                    <h3 className="text-xl font-semibold text-foreground">{advantage.title}</h3>
                                </div>
                                <p className="text-muted-foreground">{advantage.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyPartnerIntegration;