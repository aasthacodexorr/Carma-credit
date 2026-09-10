"use client";
import { ArrowRight, Check } from "lucide-react";
import { Footer, Header } from "@/components/layout";
import Link from "next/link";
import Image from "next/image";

const steps = [
  {
    number: "1",
    title: "Take the 2-Minute Quiz",
    description: "Tell us a few details about your situation and what you’re looking for in a vehicle. It’s quick, easy and with no obligation.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    image: "images/q1.png",
  },
  {
    number: "2",
    title: "Meet Your Auto Financing Specialist",
    description: "A real person from our team will review your information, discuss your needs and explain your car loan options.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    image: "images/q2.png",
  },
  {
    number: "3",
    title: "We Work With Automotive Lenders",
    description: "We work with trusted automotive lending partners to find an option that fits your unique situation.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    image: "images/q3.png",
  },
  {
    number: "4",
    title: "Find Your Vehicle",
    description: "Once you’re approved, we’ll help you find the right vehicle from our network of 2,500+ quality vehicles.",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
    image: "images/q4.png",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <main className="bg-white text-[#1a1b35] overflow-hidden">

        {/* ================= SECTION 1: HERO ================= */}
        <section className="relative w-full overflow-hidden bg-[#fff7fb] min-h-[480px] lg:min-h-[540px] xl:min-h-[580px] flex items-center">
          {/* RIGHT SIDE: Large Dealership Image starting right next to the text and extending to the right edge */}
          <div className="absolute inset-y-0 right-0 w-full lg:w-[60%] xl:w-[58%] overflow-hidden pointer-events-none">
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
                src="/images/howitworks_1.png"
                alt="Carma Credit dealership building"
                fill
                priority
                className="object-cover object-center lg:object-[left_center]"
                sizes="100vw"
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
          </div>

          {/* LEFT CONTENT: Vertically centered on solid light background with no overlap */}
          <div className="relative z-20 w-full max-w-[1480px] mx-auto px-6 sm:px-10 lg:pl-16 xl:pl-24 py-14 sm:py-16 lg:py-20">
            <div className="lg:col-span-6 px-6 sm:px-0">
              <span className="text-[#ff385c] uppercase tracking-widest text-base font-bold lg:px-1 block">
                HOW IT WORKS
              </span>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-[#1a1b35] leading-tight">
                From Application <br />
                <span className="text-[#ff385c]">to Car Keys.</span>
              </h1>
              <p className="text-[#4a4b65] text-base sm:text-lg mb-8 leading-relaxed max-w-xl">
                A simple process. Real people. Real support. Carma Credit helps you get approved for automotive financing and find the right vehicle — all in one place.
              </p>

              <div className="mb-8">
                <Link href={"/financing"} className="bg-[#ff385c] w-fit hover:bg-brand cursor-pointer text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 group">
                  Start My Auto Financing Quiz
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Feature Badges */}
              <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-base text-[#4a4b65] font-medium">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#ff385c] flex items-center justify-center text-white">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>No judgment.</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#ff385c] flex items-center justify-center text-white">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>No obligation.</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#ff385c] flex items-center justify-center text-white">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>Automotive financing only</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 2: 4-STEP PROCESS ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-[1480px] px-6 sm:px-12 xl:px-16 mx-auto">

            <div className="text-center max-w-2xl mx-auto mb-20">
              <span className="text-[#ff385c] uppercase tracking-widest text-base font-bold block mb-2">
                A SIMPLE 4-STEP PROCESS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1b35]">
                Getting You on the Road is Easy.
              </h2>
              <p className="text-gray-500 mt-2 text-base">Here’s how it works:</p>
            </div>

            {/* Main wrapper keeping everything compact and aligned */}
            <div className="max-w-[1250px] mx-auto relative">

              {/* Continuous vertical tracking line on the left */}
              <div className="hidden lg:block absolute left-[31px] top-12 bottom-12 w-[2px] bg-pink-200 z-0" />

              <div className="space-y-16 lg:space-y-24 relative z-10">
                {steps.map((step, index) => (
                  <div
                    key={step.number}
                    className={`flex flex-col lg:flex-row items-start lg:items-center gap-8 w-full ${index !== 0 ? "mt-12" : ""}`}
                  >
                    {/* Left: Number + Icon + Text Group */}
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:max-w-xl lg:min-w-xl max-w-full">
                      <div className="w-16 h-16 rounded-full bg-[#ff385c] text-white flex items-center justify-center font-bold text-xl shadow-md flex-shrink-0 z-10">
                        {step.number}
                      </div>
                      <div className="w-28 h-28 rounded-full bg-[#fdf4f7] border border-pink-100 flex items-center justify-center text-[#ff385c] flex-shrink-0 shadow-sm">
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-extrabold text-[#1a1b35] mb-2">{step.title}</h3>
                        <p className="text-[#4a4b65] text-base leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Right: Image Card with Floating Handwritten Text (Exact Step 1 CSS) */}
                    <div className="relative flex items-center self-center lg:self-auto w-full justify-between">
                      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 w-full lg:max-w-[450px] lg:min-w-[450px]">
                        <div className="h-64 rounded-xl overflow-hidden relative shadow-inner">
                          <img src={step.image} alt={step.title} className="w-full h-full object-fit rounded-2xl" />
                        </div>
                      </div>
                      <span className=" hidden lg:block text-[#1e102e] text-xl sm:text-[22px] leading-snug font-semibold tracking-wide rotate-4 ml-10" style={{ fontFamily: 'Caveat, cursive, sans-serif' }}>
                        It only takes 2 minutes.
                      </span>
                    </div>
                  </div>
                ))}


              </div>
            </div>

          </div>
        </section>

        {/* ================= SECTION 3: WHY CHOOSE CARMA CREDIT ================= */}
        <section className="bg-[#fdf4f7] py-20">
          <div className="max-w-[1480px] px-6 sm:px-12 xl:px-16 mx-auto">

            <h2 className="text-3xl font-extrabold text-center text-[#1a1b35] mb-12">
              Why Choose Carma Credit?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

              {/* Card 1 */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-pink-100 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-[#fdf4f7] flex items-center justify-center text-[#ff385c] mb-6">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div>
                <h3 className="font-bold text-lg text-[#1a1b35] mb-2">Real People Who Care</h3>
                <p className="text-base text-gray-500 leading-relaxed">
                  You’re more than a credit score to us.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-pink-100 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-[#fdf4f7] flex items-center justify-center text-[#ff385c] mb-6">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <h3 className="font-bold text-lg text-[#1a1b35] mb-2">Trusted Lending Partners</h3>
                <p className="text-base text-gray-500 leading-relaxed">
                  We work with major automotive lenders across Canada.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-pink-100 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-[#fdf4f7] flex items-center justify-center text-[#ff385c] mb-6">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="font-bold text-lg text-[#1a1b35] mb-2">Canadian and Local</h3>
                <p className="text-base text-gray-500 leading-relaxed">
                  Proudly helping Canadians get back on the road.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-pink-100 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-[#fdf4f7] flex items-center justify-center text-[#ff385c] mb-6">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
                <h3 className="font-bold text-lg text-[#1a1b35] mb-2">A Brighter Tomorrow</h3>
                <p className="text-base text-gray-500 leading-relaxed">
                  More than a car. More opportunities ahead.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ================= SECTION 4: READY TO GET STARTED BANNER ================= */}
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
                  </div>
        
                  {/* Content on the Dark Left Side */}
                  <div className="relative z-10 w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-xl lg:max-w-2xl xl:max-w-3xl flex flex-col items-start justify-center">
                      <span className="text-[15px] sm:text-[12px] font-bold tracking-[0.2em] text-slate-300 uppercase mb-2 sm:mb-2.5">
                        Ready To Get Started?
                      </span>
        
                      <h2 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-extrabold text-white tracking-tight leading-tight mb-2 sm:mb-3 whitespace-normal lg:whitespace-nowrap">
                        Your Next Car is Closer Than You Think.
                      </h2>
        
                      <p className="text-slate-300 text-base sm:text-base lg:text-[15px] leading-normal mb-5 sm:mb-6">
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