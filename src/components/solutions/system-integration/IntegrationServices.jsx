"use client";
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Network, Settings, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        icon: Network,
        title: "AI-Powered API Integration Services",
        description: "We design and build robust APIs infused with AI capabilities to connect your applications, automate data flows, and enable intelligent interactions between systems.",
        link: "/solutions/system-integration/api-integration"
    },
    {
        icon: Settings,
        title: "Enhancing Existing Systems with AI",
        description: "Embed AI models and features directly into your existing software (CRMs, ERPs, legacy applications) to add predictive insights, intelligent automation, and enhanced user experiences.",
        link: "/solutions/system-integration/enhancing-systems"
    }
];

const IntegrationServices = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="system-integration-services" className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-6">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ staggerChildren: 0.1 }}
                >
                    <motion.h2
                        variants={cardVariants}
                        className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12 md:mb-16"
                    >
                        How We Help You Connect and Enhance
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <motion.div key={index} variants={cardVariants}>
                                <Card className="h-full flex flex-col bg-card border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <CardHeader>
                                        <div className="flex items-center mb-3">
                                            <service.icon className="h-10 w-10 text-primary mr-4" />
                                            <CardTitle className="text-2xl text-card-foreground">{service.title}</CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <CardDescription className="text-muted-foreground text-base">
                                            {service.description}
                                        </CardDescription>
                                    </CardContent>
                                    <CardFooter>
                                        {/* CORRECTED USAGE OF Link and Button */}
                                        <Button asChild variant="outline" className="w-full text-primary border-primary hover:bg-primary/10">
                                            <Link href={service.link}>
                                                Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default IntegrationServices;