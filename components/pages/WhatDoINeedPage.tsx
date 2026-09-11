import Image from "next/image";
import type { Metadata } from "next";
import { Footer, Header } from "../layout";

export const metadata: Metadata = {
  title: "What do you need to finance a vehicle? | Carma Credit - Get Prepared. Get Approved.",
  description:
    "Having the right information ready helps us find the best auto financing options for you — faster and easier. Learn what documents you need to get approved.",
};

export default function WhatDoINeedPage() {
 const essentials = [
  {
    title: "Valid Driver's Licence",
    subtitle: "",
    description: "A clear copy of your current government-issued ID.",
    icon: (
      /* Driver's License Card Icon */
      <svg className="w-9 h-9" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="3" y="6" width="26" height="20" rx="3.5" fill="#ff385c" />
        <rect x="5.5" y="9.5" width="21" height="2.2" rx="1" fill="#fae2ef" />
        <circle cx="10" cy="17" r="2.2" fill="#fae2ef" />
        <path
          d="M6.5 22.8C6.5 20.6 8 19.8 10 19.8C12 19.8 13.5 20.6 13.5 22.8"
          stroke="#fae2ef"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <rect x="16.5" y="16" width="9" height="2" rx="1" fill="#fae2ef" />
        <rect x="16.5" y="20" width="6" height="2" rx="1" fill="#fae2ef" />
      </svg>
    ),
  },
  {
    title: "Proof of Income",
    subtitle: "",
    description: "Recent pay stubs, employment letter or other proof of regular income.",
    icon: (
      /* Briefcase with Heart / Buckle Clasp */
      <svg className="w-9 h-9" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          d="M12 9V6.5C12 5.67 12.67 5 13.5 5H18.5C19.33 5 20 5.67 20 6.5V9"
          stroke="#ff385c"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <rect x="4" y="9" width="24" height="18" rx="3.5" fill="#ff385c" />
        <path
          d="M16 20.5L13.2 17.5C12.3 16.5 12.3 15 13.4 14.1C14.3 13.3 15.6 13.5 16 14.3C16.4 13.5 17.7 13.3 18.6 14.1C19.7 15 19.7 16.5 18.8 17.5L16 20.5Z"
          fill="#fae2ef"
        />
      </svg>
    ),
  },
  {
    title: "Employment information",
    subtitle: "",
    description: "Details regarding your current employer, position, and length of employment.",
    icon: (
      /* Classical Bank / Professional Building Facade */
      <svg className="w-9 h-9" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 5L5 12H27L16 5Z" fill="#ff385c" />
        <rect x="5" y="13" width="22" height="2.5" rx="0.5" fill="#ff385c" />
        <rect x="7" y="16.5" width="4" height="8" rx="0.5" fill="#ff385c" />
        <rect x="14" y="16.5" width="4" height="8" rx="0.5" fill="#ff385c" />
        <rect x="21" y="16.5" width="4" height="8" rx="0.5" fill="#ff385c" />
        <rect x="4" y="25.5" width="24" height="2.5" rx="0.5" fill="#ff385c" />
      </svg>
    ),
  },
  {
    title: "Residence information",
    subtitle: "",
    description: "A recent utility bill, bank statement or government document showing your address.",
    icon: (
      /* House Silhouette with Chimney and Doorway */
      <svg className="w-9 h-9" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="21" y="9" width="3" height="6" fill="#ff385c" />
        <path
          d="M16 5L4 15.5H7.5V26.5C7.5 27.05 7.95 27.5 8.5 27.5H23.5C24.05 27.5 24.5 27.05 24.5 26.5V15.5H28L16 5Z"
          fill="#ff385c"
        />
        <rect x="13.5" y="18" width="5" height="9.5" rx="1" fill="#fae2ef" />
      </svg>
    ),
  },
  {
    title: "Identity verification",
    subtitle: "",
    description: "Additional documents or information to verify your identity securely.",
    icon: (
      /* Shield / Checkmark / User Verification */
      <svg className="w-9 h-9" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          d="M16 4L26 8V15C26 21.6 21.8 27.5 16 29C10.2 27.5 6 21.6 6 15V8L16 4Z"
          fill="#ff385c"
        />
        <path
          d="M11 16L14 19L21 12"
          stroke="#fae2ef"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Down payment",
    subtitle: " (where applicable)",
    description: "If you have a trade-in, down payment or special circumstances, we'll let you know if anything else is needed.",
    icon: (
      /* Document with Folded Dog-Ear and Lines */
      <svg className="w-9 h-9" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          d="M7 5C7 3.9 7.9 3 9 3H19L25 9V27C25 28.1 24.1 29 23 29H9C7.9 29 7 28.1 7 27V5Z"
          fill="#ff385c"
        />
        <path d="M19 3V8C19 8.55 19.45 9 20 9H25L19 3Z" fill="#fae2ef" />
        <rect x="11" y="13" width="10" height="2" rx="1" fill="#fae2ef" />
        <rect x="11" y="17" width="10" height="2" rx="1" fill="#fae2ef" />
        <rect x="11" y="21" width="7" height="2" rx="1" fill="#fae2ef" />
      </svg>
    ),
  },
];
  return (
    <>
      <Header />
      <main className="w-full overflow-hidden bg-white text-[#131b4d]">
        {/* ========================================================================= */}
        {/* SECTION 1: HERO (Single Full-Width Continuous Banner like About Us page) */}
        {/* ========================================================================= */}
        <section className="relative w-full overflow-hidden bg-[#fff7fb] min-h-[580px] lg:min-h-[540px] xl:min-h-[580px] flex items-center">
          {/* RIGHT SIDE: Large Flat Lay Image starting right next to the text and extending to the right edge */}
          <div className="absolute inset-y-0 right-0 w-full lg:w-[60%] xl:w-[58%] overflow-hidden pointer-events-none opacity-80 lg:opacity-100">
            {/* Inner image with CSS mask providing immediate soft fade right beside the text */}
            <div
              className="relative w-full h-full"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25) 5%, rgba(0, 0, 0, 0.7) 14%, black 26%)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25) 5%, rgba(0, 0, 0, 0.7) 14%, black 26%)",
              }}
            >
              <Image
                src="/images/what_do_i_need_hero_hd.png"
                alt="Carma Credit documents checklist on desk with clipboard, car key, pen and coffee cup"
                fill
                className="block w-full h-full object-cover lg:h-auto"
                priority
                unoptimized
              />
            </div>

            {/* SOFT HORIZONTAL FADE: Seamless transition located right nearby the text */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to right, #fff7fb 0%, rgba(255, 247, 251, 0.9) 5%, rgba(255, 247, 251, 0.55) 12%, rgba(255, 247, 251, 0.18) 22%, transparent 34%)",
              }}
              aria-hidden="true"
            />
            {/* Mobile Black Overlay for legibility */}
            <div className="absolute inset-0 bg-white/80 lg:hidden pointer-events-none" aria-hidden="true" />
          </div>

          {/* LEFT CONTENT: Vertically centered on solid light background with no overlap */}
          <div className="relative z-20 w-full max-w-[1480px] mx-auto px-6 sm:px-10 lg:pl-16 xl:pl-24 py-14 sm:py-16 lg:py-20">
            <div className="max-w-[500px] xl:max-w-[540px] flex flex-col items-start justify-center">
              <span className="text-base sm:text-[18px] font-bold tracking-[0.2em] text-brand uppercase">
                What do you need to finance a vehicle?
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[50px] font-extrabold tracking-tight leading-[1.12] mb-5">
                <span className=" text-[#131b4d] block">Get Prepared.</span>
                <span className="text-[#ff385c] block">Get Approved.</span>
              </h1>

              <p className="text-[#4b5563] text-xl lg:text-base lg:text-lg leading-[1.65] mb-8">
                Having the right information ready helps us find the best auto financing options for
                you — faster and easier.
              </p>

              {/* 3 Mini Feature Badges */}
              <div className="flex flex-col lg:flex-row  flex-wrap items-start lg:items-center gap-y-4 lg:gap-4 sm:gap-6 pt-2  text-[#131b4d]">
                {/* Badge 1: Faster approvals */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-7 h-7 text-[#ff385c]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="9.5" />
                      <polyline
                        points="12 7 12 12 14.5 12"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="flex lg:flex-col gap-2 lg:gap-0 text-base sm:text-[18px]  text-xl lg:text-base text-[#131b4d] leading-tight">
                    <span>Faster</span>
                    <span>approvals</span>
                  </div>
                </div>

                {/* Subtle Divider */}
                <div className="hidden lg:block sm:block w-px h-8 bg-[#e8d5e0]" aria-hidden="true" />

                {/* Badge 2: A smoother process */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-7 h-7"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 2L4 5.5V11.5C4 16.5 7.4 21.2 12 22.5C16.6 21.2 20 16.5 20 11.5V5.5L12 2Z"
                        fill="#ff385c"
                      />
                      <path
                        d="M8.5 12L10.8 14.5L15.5 9.5"
                        stroke="white"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="flex lg:flex-col gap-2 lg:gap-0 text-base sm:text-[18px]  text-xl lg:text-base text-[#131b4d] leading-tight">
                    <span>A smoother</span>
                    <span>process</span>
                  </div>
                </div>

                {/* Subtle Divider */}
                <div className="hidden lg:block sm:block w-px h-8 bg-[#e8d5e0]" aria-hidden="true" />

                {/* Badge 3: We're here to help */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-7 h-7 text-[#ff385c]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 12.5C13.8 12.5 15.2 11.1 15.2 9.3C15.2 7.5 13.8 6.1 12 6.1C10.2 6.1 8.8 7.5 8.8 9.3C8.8 11.1 10.2 12.5 12 12.5ZM12 14.5C9.5 14.5 4.5 15.8 4.5 18.3V20.5H19.5V18.3C19.5 15.8 14.5 14.5 12 14.5ZM19.2 12.5C20.6 12.5 21.7 11.4 21.7 10C21.7 8.6 20.6 7.5 19.2 7.5C17.8 7.5 16.7 8.6 16.7 10C16.7 11.4 17.8 12.5 19.2 12.5ZM21.2 14.5C20.6 14.5 19.8 14.6 18.8 14.9C19.8 15.8 20.5 16.9 20.5 18.3V20.5H23.5V18.3C23.5 16.2 19.8 14.5 21.2 14.5ZM4.8 12.5C6.2 12.5 7.3 11.4 7.3 10C7.3 8.6 6.2 7.5 4.8 7.5C3.4 7.5 2.3 8.6 2.3 10C2.3 11.4 3.4 12.5 4.8 12.5ZM5.2 14.9C4.2 14.6 3.4 14.5 2.8 14.5C0.8 14.5 0.5 16.2 0.5 18.3V20.5H3.5V18.3C3.5 16.9 4.2 15.8 5.2 14.9Z" />
                    </svg>
                  </div>
                  <div className="flex lg:flex-col gap-2 lg:gap-0 text-base sm:text-[18px] text-xl lg:text-base text-[#131b4d] leading-tight">
                    <span>We&apos;re here</span>
                    <span>to help</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: THE ESSENTIALS — Documents You'll Need (6 Feature Cards) */}
        {/* ========================================================================= */}
        <section className="relative w-full py-16 sm:py-20 lg:py-16 bg-white -mt-20">
          <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="text-[12px] sm:text-[18px] font-bold tracking-[0.2em] text-brand uppercase block mb-1">
                The Essentials
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-extrabold text-[#131b4d] tracking-tight leading-[1.15] mb-3 sm:mb-3">
               What do you need to finance a vehicle?
              </h2>
              <p className="text-[#4b5563] text-base sm:text-base leading-[1.65] max-w-2xl mx-auto">
                Here&apos;s what you&apos;ll typically need to get started with your auto financing
                application.
              </p>
            </div>

            {/* 6 Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {essentials.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl sm:rounded-3xl bg-[#fdf6fa] border border-[#f7deea]/80 p-8 sm:p-9 flex flex-col items-center text-center transition-all duration-200 hover:shadow-md hover:border-[#f0c8dc]"
                >
                  {/* Circular Icon Container */}
                  <div className="w-16 h-16 rounded-full bg-[#fae2ef] flex items-center justify-center mb-5 shadow-xs">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-[19px] font-bold text-[#131b4d] mb-2.5">
                    {item.title}
                    {item.subtitle && (
                      <span className="text-base sm:text-[18px] font-normal text-slate-500">
                        {item.subtitle}
                      </span>
                    )}
                  </h3>

                  {/* Description */}
                  <p className="text-[#4b5563] text-base sm:text-[13.5px] leading-[1.6] max-w-[270px]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: HELPFUL TIPS — Make the Process Even Smoother */}
        {/* ========================================================================= */}
        <section className="relative w-full py-12 sm:py-16 lg:pb-20 lg:pt-0 bg-white">
          <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Single Unified Light-Pink Card Container containing both Heading and 3 Columns */}
            <div className="w-full rounded-2xl sm:rounded-3xl bg-[#fdf6fa] border border-[#f8dfea]/80 py-10 px-6 sm:py-14 sm:px-8 lg:py-16 lg:px-12">
              {/* Header INSIDE Card */}
              <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
                <span className="text-[12px] sm:text-[18px] font-bold tracking-[0.2em] text-brand uppercase block mb-3">
                  Helpful Tips
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-extrabold text-[#131b4d] tracking-tight leading-[1.15]">
                  Make the Process Even Smoother
                </h2>
              </div>

              {/* 3 Columns with Vertical Dividers */}
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#f2d2e1] gap-8 md:gap-0">
                {/* Column 1: Have digital copies ready */}
                <div className="flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">
                  <div className="w-16 h-16 rounded-full bg-[#fae2ef] flex items-center justify-center mb-5 shadow-xs">
                    {/* Telephone Handset Icon */}
                    <svg className="w-8 h-8 text-[#ff385c]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.05 15.05 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.5 3.99c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1-.01-.11-.02-.11-.02-.11z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-[19px] font-bold text-[#131b4d] mb-2">
                    Have digital copies ready
                  </h3>
                  <p className="text-[#4b5563] text-base sm:text-[13.5px] leading-[1.6] max-w-[240px]">
                    Photos or PDFs work great and save time.
                  </p>
                </div>

                {/* Column 2: Make sure information is up to date */}
                <div className="flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 pt-8 md:pt-0">
                  <div className="w-16 h-16 rounded-full bg-[#fae2ef] flex items-center justify-center mb-5 shadow-xs">
                    {/* Document with Lines Icon */}
                    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                      <path
                        d="M7 5C7 3.9 7.9 3 9 3H19L25 9V27C25 28.1 24.1 29 23 29H9C7.9 29 7 28.1 7 27V5Z"
                        fill="#ff385c"
                      />
                      <path d="M19 3V8C19 8.55 19.45 9 20 9H25L19 3Z" fill="#fae2ef" />
                      <rect x="11" y="13" width="10" height="2" rx="1" fill="#fae2ef" />
                      <rect x="11" y="17" width="10" height="2" rx="1" fill="#fae2ef" />
                      <rect x="11" y="21" width="7" height="2" rx="1" fill="#fae2ef" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-[19px] font-bold text-[#131b4d] mb-2">
                    Make sure information is up to date
                  </h3>
                  <p className="text-[#4b5563] text-base sm:text-[13.5px] leading-[1.6] max-w-[240px]">
                    Current documents help us get you the best options.
                  </p>
                </div>

                {/* Column 3: Not sure about something? */}
                <div className="flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 pt-8 md:pt-0">
                  <div className="w-16 h-16 rounded-full bg-[#fae2ef] flex items-center justify-center mb-5 shadow-xs">
                    {/* Chat / Speech Bubble with 3 Dots Icon */}
                    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                      <path
                        d="M16 5C9.9 5 5 9.5 5 15C5 17.6 6.1 19.9 8 21.6L6.5 26.5C6.3 27 6.8 27.5 7.3 27.2L12.7 24.5C13.7 24.8 14.8 25 16 25C22.1 25 27 20.5 27 15C27 9.5 22.1 5 16 5Z"
                        fill="#ff385c"
                      />
                      <circle cx="11.5" cy="15" r="1.5" fill="#fae2ef" />
                      <circle cx="16" cy="15" r="1.5" fill="#fae2ef" />
                      <circle cx="20.5" cy="15" r="1.5" fill="#fae2ef" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-[19px] font-bold text-[#131b4d] mb-2">
                    Not sure about something?
                  </h3>
                  <p className="text-[#4b5563] text-base sm:text-[13.5px] leading-[1.6] max-w-[240px]">
                    No problem. Our team will guide you through it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: YOU'RE NOT ALONE — We're Here to Help (Specialist Two-Column) */}
        {/* ========================================================================= */}
        <section className="relative w-full py-12 sm:py-16 lg:py-0 bg-white">
          <div className="w-full max-w-full mx-auto px-4 sm:px-6 lg:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
              {/* Left Column: Specialist Photo with Script Overlay */}
              <div className="lg:col-span-6">
                <div className="relative w-full overflow-hidden shadow-md bg-slate-100">
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
              <div className="lg:col-span-6 flex flex-col items-start justify-center">
                <span className="text-[12px] sm:text-[18px] font-bold tracking-[0.2em] text-brand uppercase mb-2.5">
                  You&apos;re Not Alone
                </span>

                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#131b4d] tracking-tight leading-[1.15] mb-4 sm:mb-5">
                  We&apos;re Here to Help
                </h2>

                <div className="space-y-3 text-[#4b5563] text-base sm:text-[15px] leading-[1.65] mb-6 sm:mb-7 max-w-lg">
                  <p>
                    Every situation is different. If you&apos;re unsure about anything or don&apos;t have
                    a specific document, just reach out.
                  </p>
                  <p>
                    Our auto financing specialists will walk you through it and find a solution.
                  </p>
                </div>

                <div>
                  <a
                    href="/financing"
                    className="inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3 rounded-full bg-[#ff385c] hover:bg-brand active:bg-[#8e145a] text-white font-semibold text-[14px] sm:text-[15px] transition-colors duration-150 shadow-sm"
                  >
                    <span>Talk to an Auto Financing Specialist</span>
                    <span className="text-base leading-none">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: READY TO GET STARTED? (Dark Sunset Highway CTA Banner) */}
        {/* ========================================================================= */}
        <section className="relative w-full overflow-hidden bg-[#080b18] py-10 sm:py-12 lg:py-14">
          {/* Background Image on Right Side */}
          <div className="absolute inset-y-0 right-0 w-full lg:w-[58%] overflow-hidden pointer-events-none opacity-85 lg:opacity-100">
            <Image
              src="/images/what_do_i_need_sunset_hd.png"
              alt="Carma Credit auto financing specialist meeting with customer"
              width={1730}
              height={909}
              className="block w-full h-auto"
              priority
              unoptimized
            />

            {/* Smooth gradient blend into the dark left side */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#080b18] via-[#080b18]/60 to-transparent"
              aria-hidden="true"
            />

            {/* Overlay Text positioned on the right side image */}
            <div className="absolute right-12 bottom-16 lg:right-20 lg:bottom-20 z-10 hidden sm:block text-right">
              <p className="font-handwriting italic text-white text-2xl lg:text-3xl leading-relaxed tracking-normal drop-shadow-md">
                Same Roads.<br />
                Brighter<br />
                Tomorrows.
              </p>
              <div className="w-32 h-[3px] bg-[#ff385c] mt-2 ml-auto rounded-full" />
            </div>
          </div>

          {/* Content on the Dark Left Side */}
          <div className="relative z-10 w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl lg:max-w-2xl xl:max-w-3xl flex flex-col items-start justify-center">
              <span className="text-[15px] sm:text-[12px] font-bold tracking-[0.2em] text-brand uppercase mb-2 sm:mb-2.5">
                Ready To Get Started?
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-extrabold text-white tracking-tight leading-tight mb-2 sm:mb-3 whitespace-normal lg:whitespace-nowrap">
                Your Next Car is Closer Than You Think.
              </h2>

              <p className="text-white text-base sm:text-base lg:text-[15px] leading-normal mb-5 sm:mb-6">
                It only takes 2 minutes. No judgment. No obligation.
              </p>

              <div>
                <a
                  href="/financing"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-[#ff385c] hover:bg-brand active:bg-[#8e145a] text-white font-semibold text-[13.5px] sm:text-[14.5px] transition-colors duration-150 shadow-md"
                >
                  <span>Start My Auto Financing Quiz</span>
                  <span className="text-base leading-none">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>

  );
}
