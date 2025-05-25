"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, BrainCircuit } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroCustomAiDev = () => {
    return (
        <section id="custom-ai-hero" className="py-20 md:py-32 bg-gradient-to-br from-light-background via-light-secondary/30 to-light-background dark:from-dark-background dark:via-dark-secondary/30 dark:to-dark-background text-center">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <BrainCircuit className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 text-brand-pink" />
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-light-text dark:text-dark-text mb-6 leading-tight">
                        AI That <span className="text-brand-pink">Fits Your Operations</span>: Custom Development for Business Growth
                    </h1>
                    <p className="text-lg md:text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto mb-10">
                        Stop trying to fit square pegs into round holes. Jarwo.ai builds custom AI solutions tailored to your specific challenges, workflows, and goals. From intelligent automation for daily tasks to advanced analytics for annual planning, we empower your enterprise to innovate and compete.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        {/* Primary Button */}
                        <Link href="/contact?subject=Custom+AI+Project+Discussion" passHref>
                            <Button
                                size="lg"
                                className="bg-brand-pink hover:bg-brand-pink/90 text-white dark:text-dark-text <!-- Adjusted dark mode primary text for better contrast if needed -->
                                           font-semibold py-3 px-8 rounded-lg shadow-lg
                                           transform transition-transform duration-300 hover:scale-105 w-full sm:w-auto"
                            >
                                Discuss Your Custom AI Project
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>

                        {/* Secondary Button - Refined Hover State */}
                        <Link href="#custom-ai-process" passHref>
                            <Button
                                variant="outline"
                                size="lg"
                                className="text-brand-pink border-brand-pink 
                                           hover:bg-brand-pink/10 hover:border-brand-pink/80 hover:text-brand-pink/80
                                           dark:text-brand-pink dark:border-brand-pink 
                                           dark:hover:bg-brand-pink/20 dark:hover:border-brand-pink/70 dark:hover:text-brand-pink/70
                                           font-semibold py-3 px-8 rounded-lg shadow-lg 
                                           transform transition-transform duration-300 hover:scale-105 w-full sm:w-auto"
                            >
                                See Our Customization Process
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroCustomAiDev;