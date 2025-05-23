// src/app/contact/page.js
import ContactForm from '@/components/ContactForm';
import NeuralNetworkAnimation from '@/components/NeuralNetworkAnimation'; // Ensure this line is NOT commented out
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata = {
  title: 'Contact Us | Jarwo.ai',
  description: 'Get in touch with Jarwo.ai for AI solutions, support, or inquiries. We are here to help you integrate smarter AI into your workflows.',
};

export default function ContactPage() {
  return (
    <div className="relative w-full"> {/* Main container for the page */}
      
      {/* Background Animation Layer - RE-ENABLED */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <NeuralNetworkAnimation /> {/* Ensure this component is rendered */}
      </div> 

      {/* Content Overlay Layer */}
      <div className="relative z-10 flex flex-col items-center justify-start 
                      px-4 pt-8 pb-12 
                      sm:px-6 sm:pt-10 
                      lg:px-8 lg:pt-12"> {/* Removed min-h-screen previously */}
        
        {/* Page Header Section */}
        <div className="text-center mb-12 sm:mb-16 max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl 
                         text-brand-dark-text dark:text-brand-light-text">
            <span className="block">Get in Touch</span>
            <span className="block text-brand-pink">We’d Love to Hear From You</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl 
                        text-muted-foreground dark:text-slate-300">
            Whether you have a question about our AI solutions, need a custom quote, or want to explore partnership opportunities, our team is ready to assist you.
          </p>
        </div>

        {/* Main Content Area (Form only, centered) */}
        <div className="w-full max-w-7xl flex justify-center"> 
          <div className="w-full md:w-3/4 lg:w-2/3"> 
            <Card className="shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}