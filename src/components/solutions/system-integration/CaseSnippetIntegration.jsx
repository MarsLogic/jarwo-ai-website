"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

const CaseSnippetIntegration = () => {
    return (
        <section id="integration-case-snippet" className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 p-8 md:p-12 rounded-xl shadow-xl text-center md:text-left" // CHANGED: to-blue-500/10 to to-secondary/10
                >
                    <div className="md:flex md:items-center md:gap-8">
                        <div className="mb-6 md:mb-0 md:flex-shrink-0">
                            <ShoppingCart className="h-20 w-20 md:h-28 md:w-28 text-primary mx-auto md:mx-0" />
                        </div>
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                                Success Story: E-commerce Data Unification
                            </h3>
                            <p className="text-muted-foreground mb-2">
                                <span className="font-semibold text-foreground">Challenge:</span> A growing e-commerce company struggled with siloed customer data between their CRM and order management system.
                            </p>
                            <p className="text-muted-foreground mb-2">
                                <span className="font-semibold text-foreground">Solution:</span> Jarwo.ai developed an AI-powered integration layer that synchronized data in real-time and provided predictive insights for inventory.
                            </p>
                            <p className="text-green-600 dark:text-green-400 font-semibold mb-6 flex items-center justify-center md:justify-start">
                                <TrendingUp className="h-5 w-5 mr-2"/> Outcome: 20% reduction in stockouts & 15% increase in customer satisfaction.
                            </p>
                            <Link href="/case-studies/ecommerce-data-unification" passHref>
                                <Button variant="outline" className="text-primary border-primary hover:bg-primary/10">
                                    Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CaseSnippetIntegration;