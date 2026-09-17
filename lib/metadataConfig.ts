import type { AppConfig } from "./appConfig";

type SiteMetadataKey = keyof AppConfig["site"];

export type MetadataPageKey =
  | "home"
  | "aboutUs"
  | "appointment"
  | "contact"
  | "finance"
  | "faq"
  | "rebuildYourCredit"
  | "howItWorks" 
  | "paymentCalculator"
  | "privacyPolicy"
  | "resources"
  | "thankYou"
  | "termsConditions"
  | "understandingAutoFinancing"
  | "verificationComplete"
  | "whatDoINeed";

export interface MetadataDefinition {
  title: string;
  description: string;
  titleConfigKey?: SiteMetadataKey;
  descriptionConfigKey?: SiteMetadataKey;
}

export const pageMetadata: Record<MetadataPageKey, MetadataDefinition> = {
  home: {
    title: "Auto Financing in Brampton, Ontario | Carma Credit",
    description:
      "Looking for auto financing with good, bad, or limited credit? Carma Credit in Brampton, Ontario helps you explore car loan options and take the next step toward getting approved.",
//     titleConfigKey: "home_page_title",
//     descriptionConfigKey: "home_page_description",
  },

  aboutUs: {
    title: "About Carma Credit | Auto Financing in Brampton, Ontario",
    description:
      "Learn how Carma Credit helps Canadians with different credit backgrounds explore vehicle financing options and find a path toward getting approved.",
  },

  appointment: {
    title: "Book an Auto Financing Appointment | Carma Credit",
    description:
      "Book an appointment with Carma Credit in Brampton, Ontario to discuss your auto financing options, credit situation, and next steps toward getting approved for a vehicle.",
//     titleConfigKey: "book_an_appointment_page_title",
//     descriptionConfigKey: "book_an_appointment_page_description",
  },

  contact: {
    title: "Contact Carma Credit | Auto Financing in Brampton",
    description:
      "Have questions about auto financing or your credit options? Contact Carma Credit in Brampton, Ontario to discuss your situation and learn more about getting approved for a vehicle.",
//     titleConfigKey: "contact_us_page_title",
//     descriptionConfigKey: "contact_us_page_description",
  },

  finance: {
    title: "Car Financing for Bad or Good Credit | Carma Credit",
    description:
      "Explore auto financing options for good, bad, or limited credit with Carma Credit in Brampton, Ontario. Apply online and take the next step toward getting approved.",
//     titleConfigKey: "finance_page_title",
//     descriptionConfigKey: "finance_page_description",
  },

  faq: {
    title: "Auto Financing FAQs | Car Loans & Credit | Carma Credit",
    description:
      "Find answers to common questions about auto financing, bad credit car loans, credit requirements, approvals, applications, and buying a vehicle with Carma Credit.",
  },

  rebuildYourCredit: {
    title: "Rebuild Your Credit with Auto Financing | Carma Credit",
    description:
      "Learn how responsible auto financing may help you rebuild your credit and explore vehicle financing options based on your credit situation with Carma Credit.",
  },

  howItWorks: {
    title: "How Car Financing Works | Carma Credit",
    description:
      "Learn how Carma Credit's auto financing process works, from applying and reviewing your credit situation to exploring vehicle options and taking the next step toward getting approved.",
  },

  paymentCalculator: {
    title: "Car Payment Calculator | Carma Credit",
    description:
      "Estimate your monthly car payment and explore your potential auto financing costs with Carma Credit's payment calculator. Plan your next vehicle purchase with confidence.",
//     titleConfigKey: "payment_calculator_page_title",
//     descriptionConfigKey: "payment_calculator_page_description",
  },

  privacyPolicy: {
    title: "Privacy Policy | Carma Credit",
    description:
      "Review the privacy policy for Carma Credit in Brampton, Ontario. Learn how your personal information is collected, used, and protected.",
//     titleConfigKey: "privacy_policy_page_title",
//     descriptionConfigKey: "privacy_policy_page_description",
  },

  resources: {
    title: "Auto Financing Resources | Carma Credit",
    description:
      "Explore helpful resources about credit, auto financing, car loans, vehicle ownership, and getting approved. Learn more with Carma Credit.",
  },

  thankYou: {
    title: "Application Submitted | Carma Credit",
    description:
      "Thank you for submitting your auto financing application to Carma Credit. We've received your information and our team will contact you soon about your financing options.",
//     titleConfigKey: "thank_you_page_title",
//     descriptionConfigKey: "thank_you_page_description",
  },

  termsConditions: {
    title: "Terms and Conditions | Carma Credit",
    description:
      "Review the terms and conditions for Carma Credit in Brampton, Ontario. Contact us at %sales_number_1 or %email_1 if you have questions.",
//     titleConfigKey: "terms_and_conditions_page_title",
//     descriptionConfigKey: "terms_and_conditions_page_description",
  },

  understandingAutoFinancing: {
    title: "Understanding Auto Financing | Carma Credit",
    description:
      "Learn how auto financing works, how credit affects car loan options, what lenders consider, and how to prepare for vehicle financing with Carma Credit.",
  },

  verificationComplete: {
    title: "Verification Complete | Carma Credit",
    description:
      "Your verification is complete. Thank you for choosing Carma Credit. Our team can now continue with the next steps in your auto financing application.",
  },

  whatDoINeed: {
    title: "What Do You Need to Finance a Car? | Carma Credit",
    description:
      "Find out what information and documents you may need to apply for auto financing. Get prepared, understand the process, and take the next step toward getting approved with Carma Credit.",
  },
}

export function resolvePageMetadata(
  page: MetadataPageKey,
  siteConfig: AppConfig["site"]
): Pick<MetadataDefinition, "title" | "description"> {
  const definition = pageMetadata[page];
  const configuredTitle = definition.titleConfigKey
    ? siteConfig[definition.titleConfigKey]
    : undefined;
  const configuredDescription = definition.descriptionConfigKey
    ? siteConfig[definition.descriptionConfigKey]
    : undefined;

  return {
    title: typeof configuredTitle === "string" && configuredTitle.trim() ? configuredTitle : definition.title,
    description:
      typeof configuredDescription === "string" && configuredDescription.trim()
        ? configuredDescription
        : definition.description,
  };
}