"use client";

import { useEffect, useRef, useState } from "react";
import { PageShell } from "@/components/layout";
import { getConstants } from "@/constants";
import { useAppConfig } from "@/app/providers";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import { FaqAccordion } from "../common";

const LIVE_CONTACT_FORM_URL =
  "https://carma.zopsoftware.com/api/templates/render/2";

const MIN_HEIGHT = 500;
const DEFAULT_HEIGHT = 400;

const HOURS_STRING = "Mon - Fri: 9:00 AM - 8:00 PM | Sat: 9:00 AM - 6:00 PM | Sun: 11:00 AM - 5:00 PM";

const FEATURES = [
  {
    icon: "💬",
    title: "Quick Response",
    description: "We typically reply within 1 business hour.",
  },
  {
    icon: "👥",
    title: "Real People",
    description: "Speak with our experienced financing team.",
  },
  {
    icon: "🍁",
    title: "Canadian & Local",
    description: "Proudly serving customers across Ontario.",
  },
  {
    icon: "🛡️",
    title: "Your Privacy Matters",
    description: "Your information is always kept confidential.",
  },
];

const FAQS = [
  {
    question: "Do you offer pre-approval?",
    answer: "Yes, we offer fast pre-approval options without impacting your credit score initially, helping you shop with confidence.",
  },
  {
    question: "Will this affect my credit score?",
    answer: "Submitting an initial inquiry or checking your options uses a soft credit check, which does not affect your credit score.",
  },
  {
    question: "What documents do I need?",
    answer: "Typically, you will need a valid piece of government-issued photo ID, proof of income (such as recent pay stubs), and proof of residence.",
  },
];

export default function ContactUs() {
  const appConfig = useAppConfig();
  const { SITE_CONFIG } = getConstants(appConfig);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const contactFormUrl =
    SITE_CONFIG?.urls.contactUsBaseUrl || LIVE_CONTACT_FORM_URL;

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(DEFAULT_HEIGHT);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== "https://carma.zopsoftware.com") {
        return;
      }

      const data = event.data;

      if (
        data &&
        typeof data === "object" &&
        data.type === "css" &&
        (data.element_id === "contact_us" ||
          data.element_id === "contact_form") &&
        typeof data.value === "number"
      ) {
        const newHeight = Math.max(
          MIN_HEIGHT,
          Math.ceil(data.value) + 20
        );

        setHeight(newHeight);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <PageShell>
      <div className="dw-font bg-white text-[#121212]">

        {/* =========================
            SECTION 1: HERO & FORM
        ========================= */}
        <section className="w-full py-10 lg:py-14">
          <div className="mx-auto w-full max-w-[1480px] px-4 sm:px-12 xl:px-16">
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">

              {/* LEFT CONTENT */}
              <div>
                <p className="m-0 text-[13px] font-semibold uppercase tracking-[0.14em] text-brand md:text-[15px]">
                  Contact Us
                </p>

                <h1 className="mt-3 text-[clamp(2rem,5vw,3.25rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-[#121212]">
                  We&apos;re Here to Help.
                </h1>

                <p className="mt-3 text-[15px] leading-relaxed text-[#555] md:text-[16px]">
                  Have a question? Our team is ready to help. Get in touch with us and we&apos;ll get back to you as soon as possible.
                </p>

                {/* Call Us */}
                <div className="mt-8">
                  <div className="flex items-center gap-3 text-black">
                    <Phone className="h-5 w-5 shrink-0" strokeWidth={2.25} />
                    <h2 className="text-[18px] font-bold tracking-[-0.02em] text-[#121212] md:text-[20px]">
                      Call Us
                    </h2>
                  </div>
                  <Link
                    href="tel:+18559793500"
                    className="mt-1 block text-[16px] font-semibold text-[#121212] hover:text-[#ff385c] md:text-[18px]"
                  >
                    1-855-979-3500
                  </Link>
                </div>

                {/* Email Us */}
                <div className="mt-6">
                  <div className="flex items-center gap-3 text-black">
                    <Mail className="h-5 w-5 shrink-0" strokeWidth={2.25} />
                    <h2 className="text-[18px] font-bold tracking-[-0.02em] text-[#121212] md:text-[20px]">
                      Email Us
                    </h2>
                  </div>
                  <Link
                    href="mailto:hello@carmacredit.ca"
                    className="mt-1 block text-[16px] font-semibold text-[#121212] hover:text-[#ff385c] md:text-[18px]"
                  >
                    hello@carmacredit.ca
                  </Link>
                </div>
              </div>

              {/* CONTACT FORM (IFRAME) */}
              <div className="w-full min-w-0 rounded-2xl p-0  sm:p-6 shadow-[0_16px_50px_rgba(230,0,126,0.08)] ring-1 ring-[#ff385c]/15">
                <iframe
                  ref={iframeRef}
                  id="contact_form"
                  name="iframe_a"
                  src={contactFormUrl}
                  title="Contact Us"
                  scrolling="no"
                  className="block w-full max-w-full border-0 rounded-2xl bg-transparent"
                  style={{
                    width: "100%",
                    height: `${height}px`,
                    minHeight: `${MIN_HEIGHT}px`,
                    border: "none",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            SECTION 2: FEATURE BADGES
        ========================= */}
        <section className="w-full bg-[#fcfcfc] py-12">
          <div className="mx-auto w-full max-w-[1480px] px-4 sm:px-12 xl:px-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {FEATURES.map((feat, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-4">
                  <div className="w-24 h-24 rounded-full bg-[#fff5f8] text-[#ff385c] flex items-center justify-center text-3xl mb-4 shadow-sm">
                    {feat.icon}
                  </div>
                  <h3 className="font-bold text-[17px] text-[#121212] mb-1">
                    {feat.title}
                  </h3>
                  <p className="text-[14px] text-[#666] leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================
            SECTION 3: REAL PEOPLE BANNER & FAQS
        ========================= */}
        <section className="relative w-full py-12 sm:py-16 lg:py-0 bg-white">
          <div className="w-full max-w-full mx-auto px-4 sm:px-6 lg:px-0">
            <div className="flex gap-8 flex-col lg:flex-row items-start">
              {/* Left Column: Specialist Photo with Script Overlay */}
              <div className="lg:col-span-6">
                <div className="relative w-full overflow-hidden">
                  <Image
                    src="/images/what_do_i_need_specialist_hd.png"
                    alt="Carma Credit auto financing specialist meeting with customer"
                    width={1730}
                    height={909}
                    className="block w-full h-auto"
                    priority
                    unoptimized
                  />
                </div>
              </div>

              {/* Right Column: Narrative & CTA */}
              <div className="w-full  flex flex-col items-start justify-center">
                <p className="m-0 text-[13px] font-semibold uppercase tracking-[0.14em] text-brand md:text-[15px]">
                  Common Questions
                </p>
                <h2 className="mt-2 text-[28px] font-extrabold tracking-[-0.02em] text-[#121212] md:text-[32px]">
                  Have a Quick Question?
                </h2>
                <p className="mt-2 text-[15px] text-[#666]">
                  You might find the answer in our FAQs.
                </p>

                <div className="mt-6 space-y-4 w-full lg:pr-20">
                  <FaqAccordion faqs={FAQS}/>
                </div>

                <div className="my-6">
                  <Link
                    href="/faq"
                    className="text-[15px] font-bold text-[#ff385c] hover:underline inline-flex items-center gap-1"
                  >
                    View All FAQs &rarr;
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}