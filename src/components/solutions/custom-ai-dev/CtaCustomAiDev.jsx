"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sparkles, MessageSquarePlus, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CtaCustomAiDev = () => {
    return (
        <section
            id="custom-ai-cta"
            className="py-20 md:py-32 bg-gradient-to-r from-brand-pink to-purple-600 dark:from-brand-pink/90 dark:to-purple-600/90 text-white"
        >
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Sparkles className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Ready to Build Your Competitive Edge with Custom AI?
                    </h2>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-95">
                        Don't let generic solutions hold your business back. Jarwo.ai is ready to partner with you to develop custom AI that truly meets your needs. Schedule a free, no-obligation consultation to explore the possibilities.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        {/* Primary CTA Button - Solid, Contrasting */}
                        <Link href="/contact?subject=Free+Custom+AI+Consultation" passHref>
                            <Button
                                size="lg"
                                className="bg-white text-brand-pink 
                                           hover:bg-gray-100 hover:text-brand-pink/90
                                           dark:bg-white dark:hover:bg-gray-100 dark:text-brand-pink dark:hover:text-brand-pink/90
                                           font-bold py-3.5 px-8 rounded-lg shadow-xl
                                           transform transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                            >
                                Schedule Your Free AI Consultation
                                <MessageSquarePlus className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>

                        {/* Secondary CTA Button - Outline Style with White Text/Border */}
                        <Link href="/contact?subject=Custom+AI+Project+Idea" passHref>
                            <Button
                                variant="outline" // Retained for base Shadcn structure (e.g., focus rings)
                                size="lg"
                                className="
                                    bg-transparent text-white border-white/80
                                    hover:bg-white/10 hover:text-white hover:border-white
                                    dark:bg-transparent dark:text-white dark:border-white/80
                                    dark:hover:bg-white/10 dark:hover:text-white dark:hover:border-white
                                    font-semibold py-3.5 px-8 rounded-lg shadow-xl
                                    transform transition-all duration-300 hover:scale-105 w-full sm:w-auto
                                "
                            >
                                Describe Your Project Idea
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CtaCustomAiDev;