"use client";
import { Coins, DatabaseZap, Zap, BrainCircuit, BarChartBig, StepForward } from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = [
    { icon: Coins, title: "Maximize Existing Investments", description: "Extend the life and value of your current software and hardware." },
    { icon: DatabaseZap, title: "Break Down Data Silos", description: "Connect disparate systems to create a unified view of your business data." },
    { icon: Zap, title: "Enhance Operational Efficiency", description: "Automate data exchange, streamline cross-system workflows, and reduce manual effort." },
    { icon: BrainCircuit, title: "Infuse Intelligence into Legacy Systems", description: "Add AI capabilities like predictive analytics or intelligent automation to systems that lack them." },
    { icon: BarChartBig, title: "Improved Decision-Making", description: "Gain comprehensive insights from integrated data sources." },
    { icon: StepForward, title: "Phased Modernization", description: "Incrementally improve systems without the disruption of a full overhaul." },
];

const WhyModernizeAI = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="why-modernize-ai" className="py-16 md:py-24 bg-secondary">
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
                        The Smart Way to Modernize: Benefits of AI-Driven Integration
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                className="p-6 bg-background rounded-lg shadow-lg"
                            >
                                <div className="flex items-start mb-4">
                                    <benefit.icon className="h-8 w-8 text-primary mr-4 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                                        <p className="text-muted-foreground">{benefit.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyModernizeAI;