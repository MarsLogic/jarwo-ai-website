"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageSquareText } from 'lucide-react';
import { motion } from 'framer-motion';

const CtaSystemIntegration = () => {
    return (
        <section id="integration-cta" className="py-20 md:py-32 bg-primary text-center"> {/* Use bg-primary */}
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                >
                    <MessageSquareText className="w-16 h-16 mx-auto mb-6 text-primary-foreground/80" /> {/* Text on primary bg */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
                        Ready to Unlock More Value from Your Existing Systems?
                    </h2>
                    <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-10">
                        Let Jarwo.ai help you integrate AI seamlessly into your IT landscape. Contact us for a consultation to explore how we can enhance your systems and connect your data for smarter operations.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Link href="/contact?subject=Integration+Assessment+Inquiry" passHref>
                            <Button
                                size="lg"
                                variant="secondary" // Shadcn secondary button often has a light bg on dark primary
                                className="bg-background hover:bg-background/90 text-foreground 
                                           dark:bg-primary-foreground dark:hover:bg-primary-foreground/90 dark:text-primary
                                           font-semibold py-3 px-8 rounded-lg shadow-lg
                                           transform transition-transform duration-300 hover:scale-105 w-full sm:w-auto"
                            > {/* Adjusted button styling for contrast on primary background */}
                                Schedule an Integration Assessment
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Link href="/contact?subject=Integration+Expert+Consultation" passHref>
                            <Button
                                variant="outline"
                                size="lg"
                                className="text-primary-foreground border-primary-foreground 
                                           hover:bg-primary-foreground/10 
                                           font-semibold py-3 px-8 rounded-lg shadow-lg 
                                           transform transition-transform duration-300 hover:scale-105 w-full sm:w-auto"
                            >
                                Talk to Our Integration Experts
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CtaSystemIntegration;