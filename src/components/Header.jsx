// src/components/Header.jsx
"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

// Data for Navigation Menus
const solutionsMenuItems = [
  { title: "Self-Hosted AI", href: "/solutions/self-hosted-ai", description: "Deploy powerful AI on your own infrastructure." },
  { title: "Ready-to-Use Solutions", href: "/solutions/ready-to-use", description: "Integrate pre-built AI tools quickly." },
  { title: "Custom AI Development", href: "/solutions/custom-ai", description: "Tailor-made AI for your unique challenges." },
  { title: "System Integration", href: "/solutions/system-integration", description: "Seamlessly connect AI with your existing systems." },
  { title: "AI Chatbots", href: "/solutions/ready-to-use/chatbots", description: "Engage customers with intelligent chatbots." },
  { title: "Automation Workflows", href: "/solutions/ready-to-use/automation-workflows", description: "Streamline processes with AI automation." },
];

const insightsMenuItems = [
  { title: "Our Insights", href: "/resources", description: "Read our latest articles, analysis, and expert perspectives on AI." },
  { title: "Case Studies", href: "/success-stories", description: "See how we've helped businesses achieve results with AI." },
  { title: "Testimonials", href: "/success-stories/testimonials", description: "What our clients are saying about Jarwo.ai." },
  { title: "FAQs", href: "/resources/faqs", description: "Find answers to common questions about Jarwo.ai and our services." },
];

const aboutUsMenuItems = [
  { title: "Our Company", href: "/about-us", description: "Learn about our mission, vision, and the team behind Jarwo.ai." },
  { title: "Careers", href: "/about-us/careers", description: "Join our team and help shape the future of AI." },
  { title: "Contact Us", href: "/contact", description: "Get in touch with the Jarwo.ai team." }
];

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', menuItems: solutionsMenuItems },
  { label: 'Insights', menuItems: insightsMenuItems },
  { label: 'About Us', menuItems: aboutUsMenuItems },
];

// ListItem component for Mega Menus
const ListItem = React.forwardRef(({ className, title, children, href: originalHref, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href="#"
          data-original-href={originalHref || "#"}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
            "text-popover-foreground",
            "hover:bg-muted dark:hover:bg-muted",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none group-hover:text-brand-pink">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";


export default function Header() {
  return (
    <header className="sticky top-0 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="container flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="flex items-center mr-6">
            <Image
              src="/images/logo-jarwo-pink.png"
              alt="Jarwo.ai Logo"
              width={80}
              height={30}
              priority
              className="h-7 sm:h-8 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navItems.map((navItem) => (
              <NavigationMenuItem key={navItem.label}>
                {navItem.href ? (
                  <Link
                    href={navItem.href}
                    legacyBehavior passHref
                  >
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "font-inter text-sm",
                        "bg-transparent text-foreground",
                        "hover:!bg-transparent hover:text-brand-pink",
                        "focus:!bg-transparent focus:text-brand-pink",
                        "dark:text-foreground",
                        "dark:hover:text-brand-pink dark:focus:text-brand-pink"
                      )}
                    >
                      {navItem.label}
                    </NavigationMenuLink>
                  </Link>
                ) : (
                  <>
                    <NavigationMenuTrigger
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "font-inter text-sm group",
                        "bg-transparent text-foreground",
                        "hover:!bg-transparent hover:text-brand-pink",
                        "focus:!bg-transparent focus:text-brand-pink",
                        "data-[state=open]:!bg-transparent data-[state=open]:text-brand-pink",
                        "dark:text-foreground",
                        "dark:hover:text-brand-pink dark:focus:text-brand-pink dark:data-[state=open]:text-brand-pink"
                      )}
                    >
                      {navItem.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className={cn(
                        "grid gap-3 p-4 bg-popover text-popover-foreground shadow-lg",
                        navItem.label === 'Solutions'
                          ? "w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]"
                          : "w-[300px] md:w-[350px] lg:w-[400px]"
                      )}>
                          {navItem.menuItems.map((item) => (
                            <ListItem
                              key={item.title}
                              title={item.title}
                              href={item.href}
                              className={ cn(
                                "group",
                                navItem.label !== 'Solutions' ? "w-full" : ""
                              )}
                            >
                              {item.description}
                            </ListItem>
                          ))}
                        </ul>
                    </NavigationMenuContent>
                  </>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Theme Toggle & Mobile Navigation Trigger */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <ThemeToggle />
          {/* "Get Started" button for desktop REMOVED */}
          {/* 
          <Button asChild className="hidden md:inline-flex bg-brand-light text-brand-dark-text hover:bg-brand-pink hover:text-brand-light-text transition-colors duration-200 px-4 py-2 text-sm">
            <Link href="/contact">Get Started</Link>
          </Button> 
          */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-foreground" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-popover text-popover-foreground w-64 shadow-lg">
                <DropdownMenuItem asChild className="focus:bg-transparent mb-2">
                    <Link href="/" className="flex items-center justify-center py-2">
                        <Image
                            src="/images/logo-jarwo-pink.png"
                            alt="Jarwo.ai Logo"
                            width={70}
                            height={26}
                            className="h-6 w-auto"
                        />
                    </Link>
                </DropdownMenuItem>

                {navItems.map((navItem) => {
                  if (navItem.href) {
                    return (
                      <DropdownMenuItem key={navItem.label} asChild>
                        <Link
                          href={navItem.href}
                          className="font-inter w-full justify-start p-2.5 text-sm rounded-md text-popover-foreground hover:text-brand-pink hover:bg-accent"
                        >
                          {navItem.label}
                        </Link>
                      </DropdownMenuItem>
                    );
                  } else if (navItem.menuItems) {
                    return (
                      <React.Fragment key={navItem.label}>
                        <DropdownMenuItem className="font-semibold text-muted-foreground px-2.5 pt-2.5 pb-1 text-xs uppercase tracking-wider select-none">
                          {navItem.label}
                        </DropdownMenuItem>
                        {navItem.menuItems.map((item) => (
                           <DropdownMenuItem key={item.title} asChild>
                               <Link 
                                  href={item.href}
                                  className="font-inter w-full justify-start p-2.5 pl-5 text-sm rounded-md text-popover-foreground hover:text-brand-pink hover:bg-accent"
                                >
                                   {item.title}
                               </Link>
                           </DropdownMenuItem>
                        ))}
                      </React.Fragment>
                    );
                  }
                  return null;
                })}
                {/* "Get Started" Button for Mobile REMOVED */}
                {/*
                <DropdownMenuItem asChild className="mt-3 p-1.5">
                    <Button asChild className="w-full bg-brand-pink text-brand-light-text hover:bg-brand-pink/90">
                        <Link href="/contact">Get Started</Link>
                    </Button>
                </DropdownMenuItem>
                */}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}