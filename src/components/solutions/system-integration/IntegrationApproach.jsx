"use client";
import { ClipboardList, DraftingCompass, Code2, CheckCircle2, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const approachSteps = [
    { number: 1, icon: ClipboardList, title: "System Audit & Needs Analysis", description: "Understanding your current architecture, pain points, and integration goals." },
    { number: 2, icon: DraftingCompass, title: "Integration Strategy & Design", description: "Architecting the optimal AI-enhanced integration solution." },
    { number: 3, icon: Code2, title: "Development & Implementation", description: "Building APIs, developing AI modules, and configuring connections." },
    { number: 4, icon: CheckCircle2, title: "Testing & Validation", description: "Ensuring seamless operation and data integrity." },
    { number: 5, icon: Rocket, title: "Deployment & Ongoing Optimization", description: "Launching the integrated solution and continuously improving it." },
];

const IntegrationApproach = () => {
    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };
    return (
        <section id="integration-approach" className="py-16 md:py-24 bg-background"> {/* Main page bg */}
            <div className="container mx-auto px-6">
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={{hidden: {opacity:0, y:20}, visible: {opacity:1, y:0}}}
                    className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12 md:mb-16"
                >
                    A Strategic Approach to Enhancing Your IT Landscape
                </motion.h2>
                <div className="relative">
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block transform -translate-x-1/2"></div>
                    
                    {approachSteps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={itemVariants}
                            transition={{ delay: index * 0.15 }}
                            className={`flex items-start mb-10 md:mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                        >
                            <div className="md:w-1/2 flex md:justify-center mb-4 md:mb-0">
                                <div className={`relative p-4 bg-primary text-primary-foreground rounded-full shadow-lg w-16 h-16 flex items-center justify-center text-2xl font-bold
                                                ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                                    {step.number}
                                    <div className="absolute top-1/2 -translate-y-1/2 w-8 h-0.5 bg-primary/50 hidden md:block 
                                                    data-[align=left]:left-full data-[align=right]:right-full"
                                         data-align={index % 2 === 0 ? 'left' : 'right'}></div>
                                </div>
                            </div>
                            <div className={`md:w-1/2 p-6 bg-secondary rounded-lg shadow-md
                                            ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                <div className="flex items-center mb-3 justify-start data-[align=right]:justify-end" data-align={index % 2 !== 0 ? 'right' : 'left'}>
                                    <step.icon className={`h-7 w-7 text-primary ${index % 2 === 0 ? 'mr-3' : 'ml-3 md:order-last'}`} />
                                    <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                                </div>
                                <p className="text-muted-foreground">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IntegrationApproach;