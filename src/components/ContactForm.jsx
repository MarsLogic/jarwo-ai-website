// src/components/ContactForm.jsx
'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select as ShadcnSelect,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox"; // Import Checkbox for the fake CAPTCHA
import { ShieldCheck } from 'lucide-react'; // Icon for CAPTCHA
import { useTheme } from 'next-themes';

import { useForm, Controller } from 'react-hook-form'; 

import PhoneInputWithCountrySelect from 'react-phone-number-input/react-hook-form';
import { isValidPhoneNumber, formatPhoneNumberIntl } from 'react-phone-number-input';

import 'react-phone-number-input/style.css';
import './custom-phone-input.css';

const commonPublicDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'aol.com', 'icloud.com', 'live.com', 'msn.com'];


export default function ContactForm() {
  const { 
    control, 
    handleSubmit, 
    formState: { errors }, 
    reset,
    watch, 
  } = useForm({
    defaultValues: {
      fullName: '',
      businessEmail: '',
      phoneNumber: '',
      communicationPreference: '', 
      companyName: '',
      companyWebsite: '',
      // fakeCaptcha: false, // If you wanted to make it interactive later with RHF
    },
    mode: "onBlur" 
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverError, setServerError] = useState('');
  const [emailWarning, setEmailWarning] = useState('');
  const [fakeCaptchaChecked, setFakeCaptchaChecked] = useState(false); // Local state for fake captcha UI
  const { theme } = useTheme();

  const businessEmailValue = watch("businessEmail");

  useEffect(() => {
    if (!businessEmailValue || errors.businessEmail) {
      setEmailWarning('');
      return;
    }
    const atIndex = businessEmailValue.lastIndexOf('@');
    if (atIndex === -1 || atIndex === businessEmailValue.length - 1) {
        setEmailWarning('');
        return;
    }
    const domainPartFull = businessEmailValue.substring(atIndex + 1).toLowerCase();
    if (commonPublicDomains.includes(domainPartFull)) {
      setEmailWarning("For professional correspondence, we recommend using a business email address.");
    } else if (domainPartFull.length > 0) {
      setEmailWarning("Please ensure this email address is active and monitored for our reply.");
    } else {
      setEmailWarning('');
    }
  }, [businessEmailValue, errors.businessEmail]);


  const onSubmit = (data) => {
    setServerError('');
    setIsSubmitted(false);
    setEmailWarning('');

    // In a real scenario, you'd validate the CAPTCHA response here
    // if (!fakeCaptchaChecked && process.env.NODE_ENV === 'production') { // Example
    //   setServerError("Please complete the CAPTCHA verification.");
    //   return;
    // }


    const dataForBackend = {
      ...data,
      phoneNumber: data.phoneNumber && isValidPhoneNumber(data.phoneNumber) 
                   ? formatPhoneNumberIntl(data.phoneNumber) 
                   : data.phoneNumber,
    };
    console.log('Form data submitted:', dataForBackend);

    setTimeout(() => {
      setIsSubmitted(true);
      reset(); 
      setServerError('');
      setEmailWarning('');
      setFakeCaptchaChecked(false); // Reset fake captcha
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Full Name */}
      <div>
        <Label htmlFor="fullName" className="block text-sm font-medium text-foreground">
          Full Name <span className="text-brand-pink">*</span>
        </Label>
        <Input 
          id="fullName"
          {...control.register("fullName", { 
            required: "Full name is required.",
            minLength: { value: 2, message: "Full name must be at least 2 characters." },
            maxLength: { value: 50, message: "Full name cannot exceed 50 characters." },
            pattern: { 
              value: /^[a-zA-Z\s'-]+$/,
              message: "Full name can only contain letters, spaces, hyphens, and apostrophes." 
            }
          })}
          className="mt-1 block w-full" 
          placeholder="John Doe"
        />
        {errors.fullName && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.fullName.message}</p>}
      </div>

      {/* Business Email */}
      <div>
        <Label htmlFor="businessEmail" className="block text-sm font-medium text-foreground">
          Business Email <span className="text-brand-pink">*</span>
        </Label>
        <Input 
          id="businessEmail"
          type="email"
          {...control.register("businessEmail", { 
            required: "Business email is required.",
            validate: (value) => { /* ... same validation as before ... */
              if (!value) return "Business email is required.";
              const atIndex = value.lastIndexOf('@');
              if (atIndex === -1) return "Invalid email address format (missing @).";
              const localPart = value.substring(0, atIndex);
              const domainAndTld = value.substring(atIndex + 1);
              if (localPart.length < 1) return "Email username (before @) must be at least 1 character."; 
              if (localPart.length > 50) return "Email username (before @) cannot exceed 50 characters.";
              if (!/^[a-zA-Z0-9]+$/.test(localPart)) return "Email username (before @) can only contain letters and numbers.";
              const dotIndex = domainAndTld.lastIndexOf('.');
              if (dotIndex === -1 || dotIndex === 0 || dotIndex === domainAndTld.length - 1) return "Invalid email domain format (e.g., example.com).";
              const domainNamePart = domainAndTld.substring(0, dotIndex);
              if (domainNamePart.length < 1) return "Email domain name (e.g., 'example' in example.com) must be at least 1 character.";
              if (domainNamePart.length > 20) return "Email domain name (e.g., 'example' in example.com) cannot exceed 20 characters.";
              if (!/^[a-zA-Z0-9-]+$/.test(domainNamePart)) return "Email domain name contains invalid characters (only alphanumeric and hyphen allowed).";
              if (!/^\S+@\S+\.\S+$/.test(value)) return "Invalid email address format.";
              return true;
            }
          })}
          className="mt-1 block w-full" 
          placeholder="john.doe@company.com"
        />
        {errors.businessEmail && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.businessEmail.message}</p>}
        {emailWarning && !errors.businessEmail && (
          <p className={`mt-1 text-xs ${theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'}`}>
            {emailWarning}
          </p>
        )}
      </div>

      {/* PHONE NUMBER FIELD */}
      <div>
        <Label htmlFor="phone-input" className="block text-sm font-medium text-foreground">
          Phone Number <span className="text-brand-pink">*</span>
        </Label>
        <PhoneInputWithCountrySelect
          name="phoneNumber"
          control={control}
          rules={{
            required: "Phone number is required.",
            validate: (value) => (value ? isValidPhoneNumber(value) : true) || "Invalid phone number." 
          }}
          id="phone-input" 
          className="PhoneInput mt-1"
          defaultCountry="ID"
          international
          countryCallingCodeEditable={false}
        />
        {errors.phoneNumber && (
            <p className={`mt-2 text-sm font-medium ${theme === 'dark' ? 'text-red-400' : 'text-red-400'}`}>
                {errors.phoneNumber.message}
            </p>
        )}
      </div>
      
      {/* Communication Preference */}
      <div>
        <Label htmlFor="communicationPreference" className="block text-sm font-medium text-foreground">
            Communication Preference <span className="text-brand-pink">*</span>
        </Label>
        <Controller
            name="communicationPreference"
            control={control}
            rules={{ required: "Please select a communication preference." }}
            render={({ field }) => (
                <ShadcnSelect
                    value={field.value}
                    onValueChange={field.onChange}
                    onBlur={field.onBlur}
                >
                    <SelectTrigger className="mt-1 w-full" id="communicationPreference" ref={field.ref}>
                        <SelectValue placeholder="Please Select" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="phone">Phone Call</SelectItem>
                        <SelectItem value="whatsapp">WhatsApp</SelectItem>
                        <SelectItem value="any">Any</SelectItem>
                    </SelectContent>
                </ShadcnSelect>
            )}
        />
        {errors.communicationPreference && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                {errors.communicationPreference.message}
            </p>
        )}
      </div>

      {/* Company Name */}
      <div>
        <Label htmlFor="companyName" className="block text-sm font-medium text-foreground">
          Company Name
        </Label>
        <Input 
          id="companyName"
          {...control.register("companyName", { 
            maxLength: { value: 20, message: "Company name cannot exceed 20 characters if provided." },
            validate: (value) => {
                if (!value) return true;
                if (value.length > 0 && value.length > 20) return "Company name cannot exceed 20 characters.";
                const pattern = /^[a-zA-Z0-9\s]*$/;
                return pattern.test(value) || "Company name can only contain letters, numbers, and spaces if provided.";
            }
          })}
          className="mt-1 block w-full" 
          placeholder="Your Company Inc. (Optional)"
        />
        {errors.companyName && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.companyName.message}</p>}
      </div>

      {/* Company Website */}
      <div>
        <Label htmlFor="companyWebsite" className="block text-sm font-medium text-foreground">Company Website</Label>
        <Input 
            id="companyWebsite"
            type="text"
            {...control.register("companyWebsite", {
                validate: (value) => { /* ... same validation as before ... */
                    if (!value) return true; 
                    let CNAMEValue = value.trim();
                    let parseableUrl = CNAMEValue;
                    if (!CNAMEValue.startsWith('http://') && !CNAMEValue.startsWith('https://')) {
                        parseableUrl = `http://${CNAMEValue}`;
                    }
                    try { new URL(parseableUrl); } catch (_) { return "Invalid website URL format."; }
                    let hostname = CNAMEValue.replace(/^https?:\/\//, '').replace(/^www\./, '').split('/')[0].split('?')[0].split('#')[0];
                    const parts = hostname.split('.');
                    if (parts.length < 2) return "Website must include a domain and TLD (e.g., example.com).";
                    const tld = parts.pop(); 
                    if (!tld || tld.length < 2 || !/^[a-zA-Z]+$/.test(tld)) return "Invalid Top-Level Domain (e.g., .com).";
                    const domainName = parts.pop(); 
                    if (!domainName) return "Domain name is missing.";
                    if (domainName.length < 1) return "Domain name must be at least 1 character.";
                    if (domainName.length > 20) return "Domain name cannot exceed 20 characters.";
                    if (!/^[a-zA-Z0-9]+$/.test(domainName)) return "Domain name can only be alphanumeric.";
                    if (parts.length > 1) return "Only one level of subdomain is allowed (e.g., blog.example.com).";
                    if (parts.length === 1) {
                        const subdomain = parts[0];
                        if (subdomain.length < 1) return "Subdomain must be at least 1 character.";
                        if (subdomain.length > 20) return "Subdomain cannot exceed 20 characters.";
                        if (!/^[a-zA-Z0-9]+$/.test(subdomain)) return "Subdomain can only be alphanumeric.";
                    }
                    if (!/^[a-zA-Z0-9.-]+$/.test(hostname)) return "Website contains invalid characters.";
                    return true;
                }
            })}
            className="mt-1 block w-full" 
            placeholder="www.example.com or example.com"
        />
        {errors.companyWebsite && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.companyWebsite.message}</p>}
      </div>

      {/* --- FAKE CAPTCHA PLACEHOLDER --- */}
      <div className="flex items-center space-x-3 p-3 border border-input rounded-md bg-muted/50 dark:bg-muted/30">
        <Checkbox 
          id="fake-captcha" 
          checked={fakeCaptchaChecked} 
          onCheckedChange={setFakeCaptchaChecked} 
          aria-label="I'm not a robot"
        />
        <Label htmlFor="fake-captcha" className="text-sm font-medium text-muted-foreground select-none cursor-pointer">
          I'm not a robot
        </Label>
        <div className="ml-auto flex flex-col items-center text-xs text-muted-foreground/70">
            <ShieldCheck className="h-8 w-8 text-green-600 dark:text-green-500" />
            <span>Privacy - Terms</span>
        </div>
      </div>
      {/* --- END OF FAKE CAPTCHA --- */}


      <div><Button type="submit" className="w-full sm:w-auto">Submit</Button></div>
      {serverError && (<p className={`mt-2 text-sm font-medium ${theme === 'dark' ? 'text-red-400' : 'text-red-400'}`}>{serverError}</p>)}
      {isSubmitted && (<p className={`mt-2 text-sm font-medium ${theme === 'dark' ? 'text-green-400' : 'text-green-500'}`}>Thank you! Your message has been sent successfully.</p>)}
    </form>
  );
}