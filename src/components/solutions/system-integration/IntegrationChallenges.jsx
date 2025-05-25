"use client";
import { Unplug, DatabaseZap, Archive, BrainCircuit, Hand, Zap as WorkflowZap, LockKeyhole, BarChartBig, HelpCircle, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const challenges = [
    { iconChallenge: Unplug, challenge: "Disconnected Data & Siloed Systems", iconSolution: DatabaseZap, solution: "AI-driven data unification and intelligent data routing." },
    { iconChallenge: Archive, challenge: "Legacy Systems Lacking Modern Capabilities", iconSolution: BrainCircuit, solution: "Augmenting with AI modules for analytics, automation, etc." },
    { iconChallenge: Hand, challenge: "Manual Data Transfer & Inefficient Workflows", iconSolution: WorkflowZap, solution: "Automated data exchange and intelligent workflow orchestration." },
    { iconChallenge: LockKeyhole, challenge: "Inability to Extract Full Value from Existing Data", iconSolution: BarChartBig, solution: "AI-powered analytics integrated into current systems." },
    { iconChallenge: HelpCircle, challenge: "Difficulty Adapting to New Technologies", iconSolution: TrendingUp, solution: "Phased AI integration to modernize without disruption." },
];

const IntegrationChallenges = () => {
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };
    return (
        <section id="integration-challenges" className="py-16 md:py-24 bg-secondary"> {/* Section bg */}
            <div className="container mx-auto px-6">
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={itemVariants}
                    className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12 md:mb-16"
                >
                    Overcoming Your System Integration Hurdles
                </motion.h2>
                <ul className="space-y-8">
                    {challenges.map((item, index) => (
                        <motion.li
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={itemVariants}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 bg-background rounded-lg shadow-lg" // List items on main bg
                        >
                            <div className="flex flex-col md:flex-row md:items-center gap-4">
                                <div className="md:w-2/5">
                                    <div className="flex items-center mb-2 md:mb-0">
                                        <item.iconChallenge className="h-6 w-6 text-red-500 dark:text-red-400 mr-3 flex-shrink-0" />
                                        <h3 className="text-lg font-semibold text-foreground">Challenge: {item.challenge}</h3>
                                    </div>
                                </div>
                                <div className="hidden md:block text-2xl text-primary mx-4">→</div>
                                <div className="md:w-3/5">
                                     <div className="flex items-center">
                                        <item.iconSolution className="h-6 w-6 text-green-500 dark:text-green-400 mr-3 flex-shrink-0" />
                                        <p className="text-muted-foreground"><span className="font-medium text-foreground">Solution:</span> {item.solution}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default IntegrationChallenges;