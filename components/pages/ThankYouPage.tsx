import Image from "next/image";
import type { Metadata } from "next";
import { Footer, Header } from "../layout";

export const metadata: Metadata = {
  title: "Thank You / Application Submitted | Carma Credit",
  description:
    "We've received your information and our team will be in touch soon to discuss your auto financing options.",
};

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <main className="w-full bg-white overflow-hidden text-[#102a5c]">
        {/* ========================================================================= */}
        {/* SECTION 1: HERO (Two-Column with Smooth Sunset Image Fade & 4-Step Process) */}
        {/* ========================================================================= */}
        <section className="relative w-full bg-white pt-2 sm:pt-3 lg:pt-4 pb-0">
          {/* Right Background Image Container (Full bleed to right, ends at bottom of hero) */}
          <div className="hidden md:block absolute top-0 right-0 bottom-0 w-[48%] lg:w-[46%] xl:w-[45%] overflow-hidden pointer-events-none select-none z-0">
            <div
              className="relative w-full h-full"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.35) 12%, rgba(0, 0, 0, 0.85) 25%, black 40%)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.35) 12%, rgba(0, 0, 0, 0.85) 25%, black 40%)",
              }}
            >
              <Image
                src="/images/section_1.png"
                alt="Car driving towards a golden sunset"
                fill
                priority
                className="object-cover object-[center_right] lg:object-center"
                sizes="(max-width: 1024px) 50vw, 48vw"
              />
            </div>

            {/* Soft Gradient Overlay ensuring smooth seamless transition into white */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to right, #ffffff 0%, rgba(255, 255, 255, 0.85) 8%, rgba(255, 255, 255, 0.3) 18%, transparent 32%)",
              }}
              aria-hidden="true"
            />

            {/* Handwritten Decorative Text inside the image sky portion */}
            <div className="absolute top-4 lg:top-7 left-4 lg:left-8 transform -rotate-[7deg] pointer-events-none z-10 select-none">
              <span className="font-script text-[#102a5c] text-3xl sm:text-[32px] lg:text-[36px] font-bold leading-[1.08] block tracking-normal">
                Same Roads.
                <br />
                Brighter
                <br />
                Tomorrows.
              </span>
              <svg
                className="w-28 sm:w-32 lg:w-36 h-3 text-[#ff385c] mt-0.5"
                viewBox="0 0 140 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 6.5C35 4 85 4.5 137 7.5"
                  stroke="#ff385c"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* Content Container - Consistent max-w-[1360px] */}
          <div className="relative z-10 w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Top Hero Text */}
            <div className="relative z-10 max-w-[620px] lg:max-w-[660px] flex flex-col items-start pt-1 sm:pt-2">
              <span className="text-[14px] sm:text-[15px] font-bold tracking-[0.18em] text-[#ff385c] uppercase mb-3 sm:mb-4">
                THANK YOU
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.08] mb-4 sm:mb-5">
                <span className="text-[#102a5c]">You’re </span>
                <span className="text-[#ff385c]">All Set!</span>
              </h1>

              <p className="text-[#102a5c] text-[17px] sm:text-[19px] leading-[1.42] font-normal mb-8 sm:mb-10 max-w-[540px]">
                We’ve received your information and our team will be in touch soon
                to discuss your auto financing options.
              </p>
            </div>

            {/* Mobile Image Display */}
            <div className="md:hidden relative w-full h-[220px] mb-8 rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/images/section_1.png"
                alt="Car driving towards sunset"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute top-4 left-5 transform -rotate-[7deg]">
                <span className="font-script text-[#102a5c] text-2xl font-bold leading-tight block">
                  Same Roads.
                  <br />
                  Brighter Tomorrows.
                </span>
                <svg className="w-24 h-2.5 text-[#ff385c] mt-0.5" viewBox="0 0 120 10" fill="none">
                  <path d="M2 5C30 3 80 4 118 6" stroke="#ff385c" strokeWidth="2.8" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* 4-Step Process Section */}
            <div className="relative z-10 w-full max-w-[760px] lg:max-w-[790px] xl:max-w-[820px] mt-2 sm:mt-4 mb-8 sm:mb-10">
              {/* Horizontal Connector Line (Desktop/Tablet) */}
              <div
                className="hidden sm:block absolute top-[30px] left-[10%] right-[10%] h-[1.5px] bg-[#f5c7df] z-0"
                aria-hidden="true"
              />

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4 relative z-10">
                {/* Step 1: Quiz Received */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-3">
                    <div className="w-[60px] h-[60px] rounded-full bg-[#fceaf5] flex items-center justify-center text-[#ff385c] shadow-xs">
                      {/* Document / Form Icon */}
                      <svg
                        className="w-7 h-7"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M6 2C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2H6ZM13 9V3.5L18.5 9H13ZM8 12H16V13.8H8V12ZM8 15.2H16V17H8V15.2ZM8 18.4H13V20.2H8V18.4Z" />
                      </svg>
                    </div>
                    {/* Pink Circular Checkmark Badge */}
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#ff385c] text-white flex items-center justify-center ring-2 ring-white shadow-xs">
                      <svg className="w-3 h-3 stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-[15px] sm:text-[16px] font-bold text-[#102a5c] mb-1.5">
                    1. Quiz Received
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] text-[#4b5563] leading-[1.4] max-w-[160px]">
                    Your information has been securely submitted to our team.
                  </p>
                </div>

                {/* Step 2: We Review */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-3">
                    <div className="w-[60px] h-[60px] rounded-full bg-[#fceaf5] flex items-center justify-center text-[#ff385c] shadow-xs">
                      {/* Person Silhouette Icon */}
                      <svg
                        className="w-7 h-7"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14.5C9.33 14.5 4 15.84 4 18.5V20H20V18.5C20 15.84 14.67 14.5 12 14.5Z" />
                      </svg>
                    </div>
                    {/* Pink Circular Checkmark Badge */}
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#ff385c] text-white flex items-center justify-center ring-2 ring-white shadow-xs">
                      <svg className="w-3 h-3 stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-[15px] sm:text-[16px] font-bold text-[#102a5c] mb-1.5">
                    2. We Review
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] text-[#4b5563] leading-[1.4] max-w-[160px]">
                    A Carma Credit specialist will review your details and look for the best options for you.
                  </p>
                </div>

                {/* Step 3: We’ll Contact You */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-3">
                    <div className="w-[60px] h-[60px] rounded-full bg-[#fceaf5] flex items-center justify-center text-[#ff385c] shadow-xs">
                      {/* Phone Receiver Handset Icon */}
                      <svg
                        className="w-6 h-6 transform -rotate-12"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" />
                      </svg>
                    </div>
                    {/* Pink Circular Checkmark Badge */}
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#ff385c] text-white flex items-center justify-center ring-2 ring-white shadow-xs">
                      <svg className="w-3 h-3 stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-[15px] sm:text-[16px] font-bold text-[#102a5c] mb-1.5">
                    3. We’ll Contact You
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] text-[#4b5563] leading-[1.4] max-w-[160px]">
                    A member of our team will reach out, usually within 1 business hour, to discuss next steps.
                  </p>
                </div>

                {/* Step 4: Let’s Get You Driving */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-3">
                    <div className="w-[60px] h-[60px] rounded-full bg-[#fceaf5] flex items-center justify-center text-[#ff385c] shadow-xs">
                      {/* Front Car Silhouette Icon */}
                      <svg
                        className="w-7 h-7"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.28 5.42 5.08 6.01L3 12V20C3 20.55 3.45 21 4 21H5C5.55 21 6 20.55 6 20V19H18V20C18 20.55 18.45 21 19 21H20C20.55 21 21 20.55 21 20V12L18.92 6.01ZM6.85 7H17.14L18.22 10H5.78L6.85 7ZM19 17H5V12.78C5.08 12.83 5.18 12.87 5.29 12.91L5.5 13H18.5L18.71 12.91C18.82 12.87 18.92 12.83 19 12.78V17ZM7.5 16C8.33 16 9 15.33 9 14.5C9 13.67 8.33 13 7.5 13C6.67 13 6 13.67 6 14.5C6 15.33 6.67 16 7.5 16ZM16.5 16C17.33 16 18 15.33 18 14.5C18 13.67 17.33 13 16.5 13C15.67 13 15 13.67 15 14.5C15 15.33 15.67 16 16.5 16Z" />
                      </svg>
                    </div>
                    {/* Pink Circular Checkmark Badge */}
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#ff385c] text-white flex items-center justify-center ring-2 ring-white shadow-xs">
                      <svg className="w-3 h-3 stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-[15px] sm:text-[16px] font-bold text-[#102a5c] mb-1.5">
                    4. Let’s Get You Driving
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] text-[#4b5563] leading-[1.4] max-w-[160px]">
                    We’ll work with our lending partners to help you find the right vehicle and get you on the road.
                  </p>
                </div>
              </div>
            </div>

            {/* CONTACT NOTICE BANNER (Half on Section 1, half below Section 1) */}
            <div className="relative z-20 w-full translate-y-1/2 rounded-2xl bg-[#fdf2f8] border border-[#f8dfea] px-5 sm:px-7 py-4 sm:py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
              {/* Mail / Envelope Icon in Pale Pink Container */}
              <div className="w-12 h-12 rounded-xl sm:rounded-2xl bg-[#fad6eb] flex items-center justify-center text-[#ff385c] flex-shrink-0">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
                </svg>
              </div>

              {/* Text Content */}
              <div className="flex flex-col">
                <h2 className="text-[16px] sm:text-[18px] font-bold text-[#102a5c] leading-snug">
                  Keep an eye on your phone and email.
                </h2>
                <p className="text-[14px] sm:text-[15px] text-[#4b5563] mt-0.5 leading-relaxed">
                  You may receive a call, text or email from our team. Please check your junk folder just in case.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: MEET THE TEAM */}
        {/* ========================================================================= */}
        <section className="w-full max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-24 pt-16 sm:pt-20 lg:pt-24 mb-14 sm:mb-16">
          {/* Section Header with Handwritten Decorative Note on Right */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-[#102a5c] tracking-tight leading-tight">
                Meet the Team That May Be Contacting You
              </h2>
              <p className="text-[16px] sm:text-[18px] text-[#4b5563] mt-1.5 font-normal">
                Real people. Real support. We’re here to help.
              </p>
            </div>

            {/* Decorative Handwritten Text on the Right */}
            <div className="hidden md:flex flex-col items-end transform -rotate-[5deg] select-none pointer-events-none pb-1 pr-2">
              <span className="font-script text-[#102a5c] text-[25px] lg:text-[27px] font-bold leading-[1.05] text-right">
                We look forward
                <br />
                to speaking with you!
              </span>
              <svg
                className="w-36 lg:w-40 h-3 text-[#ff385c] mt-0.5"
                viewBox="0 0 150 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 6.5C40 4 95 4.5 148 7"
                  stroke="#ff385c"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* 3 Horizontally Aligned Team Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
            {/* Card 1: Simran */}
            <div className="bg-white rounded-2xl border border-[#e8ecf2] shadow-[0_2px_8px_rgba(0,0,0,0.03)] p-4 sm:p-5 flex items-center gap-4.5 hover:shadow-md transition-shadow">
              <div className="relative w-[110px] h-[115px] sm:w-[122px] sm:h-[128px] rounded-xl overflow-hidden bg-[#edf0f5] flex-shrink-0">
                <Image
                  src="/images/simran.png"
                  alt="Simran - Credit Specialist"
                  fill
                  className="object-cover"
                  sizes="130px"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-[17px] sm:text-[18px] font-bold text-[#102a5c] leading-tight">
                  Simran
                </h3>
                <span className="text-[13.5px] sm:text-[14px] text-[#4b5563] font-medium mt-0.5 mb-2">
                  Credit Specialist
                </span>
                <p className="text-[13px] sm:text-[13.5px] text-[#4b5563] leading-[1.4]">
                  Here to guide you through your options and answer any questions.
                </p>
              </div>
            </div>

            {/* Card 2: Jaspreet */}
            <div className="bg-white rounded-2xl border border-[#e8ecf2] shadow-[0_2px_8px_rgba(0,0,0,0.03)] p-4 sm:p-5 flex items-center gap-4.5 hover:shadow-md transition-shadow">
              <div className="relative w-[110px] h-[115px] sm:w-[122px] sm:h-[128px] rounded-xl overflow-hidden bg-[#edf0f5] flex-shrink-0">
                <Image
                  src="/images/jaspreet.png"
                  alt="Jaspreet - Credit Specialist"
                  fill
                  className="object-cover"
                  sizes="130px"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-[17px] sm:text-[18px] font-bold text-[#102a5c] leading-tight">
                  Jaspreet
                </h3>
                <span className="text-[13.5px] sm:text-[14px] text-[#4b5563] font-medium mt-0.5 mb-2">
                  Credit Specialist
                </span>
                <p className="text-[13px] sm:text-[13.5px] text-[#4b5563] leading-[1.4]">
                  Focused on finding the right solutions for your situation.
                </p>
              </div>
            </div>

            {/* Card 3: Kevin */}
            <div className="bg-white rounded-2xl border border-[#e8ecf2] shadow-[0_2px_8px_rgba(0,0,0,0.03)] p-4 sm:p-5 flex items-center gap-4.5 hover:shadow-md transition-shadow">
              <div className="relative w-[110px] h-[115px] sm:w-[122px] sm:h-[128px] rounded-xl overflow-hidden bg-[#edf0f5] flex-shrink-0">
                <Image
                  src="/images/kevin.png"
                  alt="Kevin - Credit Specialist"
                  fill
                  className="object-cover"
                  sizes="130px"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-[17px] sm:text-[18px] font-bold text-[#102a5c] leading-tight">
                  Kevin
                </h3>
                <span className="text-[13.5px] sm:text-[14px] text-[#4b5563] font-medium mt-0.5 mb-2">
                  Credit Specialist
                </span>
                <p className="text-[13px] sm:text-[13.5px] text-[#4b5563] leading-[1.4]">
                  Committed to helping you get back on the road with confidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: GET READY FOR THE NEXT STEP */}
        {/* ========================================================================= */}
        <section className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
          <div className="w-full rounded-3xl bg-[#f4f6fb] p-6 sm:p-8 lg:py-10 lg:px-9 border border-[#e8ecf4]">
            {/* Header */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-[28px] lg:text-[30px] font-extrabold text-[#102a5c] tracking-tight leading-tight">
                Get Ready for the Next Step
              </h2>
              <p className="text-[15px] sm:text-[17px] text-[#4b5563] mt-1.5 font-normal">
                While you wait, here are a few helpful resources:
              </p>
            </div>

            {/* 4 Resource Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4.5">
              {/* Card 1: What Do I Need? */}
              <a
                href="/what-do-i-need"
                className="bg-white rounded-2xl p-4 sm:p-4.5 flex items-center justify-between border border-[#e5e9f2] shadow-[0_2px_6px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-[#ff385c]/30 transition-all duration-200 group cursor-pointer min-h-[82px]"
              >
                <div className="flex items-center min-w-0 pr-2">
                  <div className="w-11 h-11 rounded-full bg-[#fceaf5] flex items-center justify-center text-[#ff385c] flex-shrink-0 mr-3">
                    {/* Document / File Icon */}
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M14 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16.2H16V18ZM16 14.2H8V12.4H16V14.2ZM13 9V3.5L18.5 9H13Z" />
                    </svg>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <h3 className="text-[14.5px] sm:text-[15px] font-bold text-[#102a5c] group-hover:text-[#ff385c] transition-colors leading-tight truncate">
                      What Do I Need?
                    </h3>
                    <p className="text-[12px] sm:text-[12.5px] text-[#6b7280] mt-0.5 leading-tight truncate">
                      See the documents you may need.
                    </p>
                  </div>
                </div>
                <svg
                  className="w-4 h-4 text-[#ff385c] flex-shrink-0 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>

              {/* Card 2: Understanding Your Credit */}
              <a
                href="/rebuild-your-credit"
                className="bg-white rounded-2xl p-4 sm:p-4.5 flex items-center justify-between border border-[#e5e9f2] shadow-[0_2px_6px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-[#ff385c]/30 transition-all duration-200 group cursor-pointer min-h-[82px]"
              >
                <div className="flex items-center min-w-0 pr-2">
                  <div className="w-11 h-11 rounded-full bg-[#fceaf5] flex items-center justify-center text-[#ff385c] flex-shrink-0 mr-3">
                    {/* Speedometer / Gauge Icon */}
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 4C7.03 4 3 8.03 3 13C3 15.35 3.9 17.5 5.37 19.12L6.8 17.7C5.69 16.38 5 14.77 5 13C5 9.13 8.13 6 12 6C15.87 6 19 9.13 19 13C19 14.77 18.31 16.38 17.2 17.7L18.63 19.12C20.1 17.5 21 15.35 21 13C21 8.03 16.97 4 12 4ZM10.59 15.41C10.22 15.04 10 14.54 10 14C10 12.9 10.9 12 12 12C12.54 12 13.04 12.22 13.41 12.59L16 10L10.59 15.41Z" />
                    </svg>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <h3 className="text-[14.5px] sm:text-[15px] font-bold text-[#102a5c] group-hover:text-[#ff385c] transition-colors leading-tight truncate">
                      Understanding Your Credit
                    </h3>
                    <p className="text-[12px] sm:text-[12.5px] text-[#6b7280] mt-0.5 leading-tight truncate">
                      Learn the basics.
                    </p>
                  </div>
                </div>
                <svg
                  className="w-4 h-4 text-[#ff385c] flex-shrink-0 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>

              {/* Card 3: Preventing Auto Loan Fraud */}
              <a
                href="/understanding-auto-financing"
                className="bg-white rounded-2xl p-4 sm:p-4.5 flex items-center justify-between border border-[#e5e9f2] shadow-[0_2px_6px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-[#ff385c]/30 transition-all duration-200 group cursor-pointer min-h-[82px]"
              >
                <div className="flex items-center min-w-0 pr-2">
                  <div className="w-11 h-11 rounded-full bg-[#fceaf5] flex items-center justify-center text-[#ff385c] flex-shrink-0 mr-3">
                    {/* Shield with Checkmark Icon */}
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM10 16.5L6 12.5L7.41 11.09L10 13.67L16.59 7.09L18 8.5L10 16.5Z" />
                    </svg>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <h3 className="text-[14.5px] sm:text-[15px] font-bold text-[#102a5c] group-hover:text-[#ff385c] transition-colors leading-tight truncate">
                      Preventing Auto Loan Fraud
                    </h3>
                    <p className="text-[12px] sm:text-[12.5px] text-[#6b7280] mt-0.5 leading-tight truncate">
                      Tips to protect yourself.
                    </p>
                  </div>
                </div>
                <svg
                  className="w-4 h-4 text-[#ff385c] flex-shrink-0 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>

              {/* Card 4: Browse Vehicles */}
              <a
                href="/"
                className="bg-white rounded-2xl p-4 sm:p-4.5 flex items-center justify-between border border-[#e5e9f2] shadow-[0_2px_6px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-[#ff385c]/30 transition-all duration-200 group cursor-pointer min-h-[82px]"
              >
                <div className="flex items-center min-w-0 pr-2">
                  <div className="w-11 h-11 rounded-full bg-[#fceaf5] flex items-center justify-center text-[#ff385c] flex-shrink-0 mr-3">
                    {/* Car Silhouette Icon */}
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.28 5.42 5.08 6.01L3 12V20C3 20.55 3.45 21 4 21H5C5.55 21 6 20.55 6 20V19H18V20C18 20.55 18.45 21 19 21H20C20.55 21 21 20.55 21 20V12L18.92 6.01ZM6.85 7H17.14L18.22 10H5.78L6.85 7ZM19 17H5V12.78C5.08 12.83 5.18 12.87 5.29 12.91L5.5 13H18.5L18.71 12.91C18.82 12.87 18.92 12.83 19 12.78V17ZM7.5 16C8.33 16 9 15.33 9 14.5C9 13.67 8.33 13 7.5 13C6.67 13 6 13.67 6 14.5C6 15.33 6.67 16 7.5 16ZM16.5 16C17.33 16 18 15.33 18 14.5C18 13.67 17.33 13 16.5 13C15.67 13 15 13.67 15 14.5C15 15.33 15.67 16 16.5 16Z" />
                    </svg>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <h3 className="text-[14.5px] sm:text-[15px] font-bold text-[#102a5c] group-hover:text-[#ff385c] transition-colors leading-tight truncate">
                      Browse Vehicles
                    </h3>
                    <p className="text-[12px] sm:text-[12.5px] text-[#6b7280] mt-0.5 leading-tight truncate">
                      Explore 2,500+ vehicles through our dealer network.
                    </p>
                  </div>
                </div>
                <svg
                  className="w-4 h-4 text-[#ff385c] flex-shrink-0 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
