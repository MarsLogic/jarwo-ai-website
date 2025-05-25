"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, BrainCircuit, DatabaseZap, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSystemIntegration = () => {
    return (
        <section id="system-integration-hero" className="py-20 md:py-32 text-center bg-gradient-to-br from-background via-secondary/30 to-background">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex justify-center items-center space-x-4 mb-8">
                        <DatabaseZap className="w-12 h-12 text-primary/70" />
                        <BrainCircuit className="w-16 h-16 text-primary" />
                        <Zap className="w-12 h-12 text-primary/70" />
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"> {/* CHANGED: from blue to text-foreground */}
                        Amplify Your Existing Systems with <span className="text-primary">Intelligent AI Integration</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
                        Don't replace, enhance. Jarwo.ai helps you seamlessly integrate AI into your current infrastructure and connect disparate systems to boost efficiency, unlock data silos, and drive smarter operations.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Link href="#system-integration-services" passHref>
                            <Button
                                size="lg"
                                className="bg-primary hover:bg-primary/90 text-primary-foreground 
                                           font-semibold py-3 px-8 rounded-lg shadow-lg
                                           transform transition-transform duration-300 hover:scale-105 w-full sm:w-auto"
                            >
                                Optimize Your Systems
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Link href="#system-integration-services" passHref>
                            <Button
                                variant="outline"
                                size="lg"
                                className="text-primary border-primary 
                                           hover:bg-primary/10 
                                           font-semibold py-3 px-8 rounded-lg shadow-lg 
                                           transform transition-transform duration-300 hover:scale-105 w-full sm:w-auto"
                            >
                                Explore Integration Services
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSystemIntegration;