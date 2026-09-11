"use client";

import React from 'react';
import {
  FileText,
  CheckCircle2,
  UserX,
  FileSpreadsheet,
  Cpu,
  UserCheck,
  AlertTriangle,
  Megaphone,
  ArrowRight
} from 'lucide-react';
import { Footer, Header } from '@/components/layout';
import Image from 'next/image';
import Link from 'next/link';

export default function AutoLoanFraudPage() {
  return (
    <>
      <Header />
      <main className="bg-white text-[#1a1b35] overflow-hidden">

        {/* ================= SECTION 1: HERO ================= */}
        <section className="relative w-full overflow-hidden bg-[#fff7fb] min-h-[480px] lg:min-h-[540px] xl:min-h-[580px] flex items-center">
          {/* RIGHT SIDE: Large Image starting right next to the text and extending to the right edge */}
          <div className="absolute inset-y-0 right-0 w-full lg:w-[60%] xl:w-[66%] overflow-hidden pointer-events-none">
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
                src="/images/autoFinance.png"
                alt="Carma Credit auto financing security documents on desk"
                fill
                priority
                className="object-cover object-center lg:object-[left_center]"
                sizes="100vw"
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
            <div className="max-w-[480px] xl:max-w-[610px] flex flex-col items-start justify-center">
              <span className="text-base sm:text-[13px] font-bold tracking-[0.2em] text-brand uppercase px-1">
                PREVENTING AUTO LOAN FRAUD
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[50px] font-extrabold tracking-tight leading-[1.12] mb-5">
                <span className=" text-[#1a1b35] block">Stay Informed.</span>
                <span className="text-[#ff385c] block">Stay Protected.</span>
              </h1>

              <p className=" text-[#4a4b65] text-xl lg:text-base leading-[1.65] mb-8 ">
                Your safety matters. Learn how to spot, avoid and prevent auto loan fraud so you can finance your vehicle with confidence.
              </p>

              <div className="mb-8">
                <Link href={"/financing"} className="bg-[#ff385c] w-fit hover:bg-brand cursor-pointer text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 group">
                  Get Started Safely
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Feature Badges */}
              <div className="flex flex-col lg:flex-row flex-wrap items-start lg:items-center gap-y-4 lg:gap-y-3 gap-x-6 text-xl lg:text-base text-gray-800 lg:text-[#4a4b65] lg:font-medium">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#ff385c] flex items-center justify-center text-white shrink-0">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <span>Secure guidance</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#ff385c] flex items-center justify-center text-white shrink-0">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <span>Verified process</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#ff385c] flex items-center justify-center text-white shrink-0">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <span>Trusted specialists</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 2: WHAT IS AUTO LOAN FRAUD? ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-[1480px] px-6 sm:px-12 xl:px-16 mx-auto">
            <div className="bg-[#fdf4f7] border border-pink-100 rounded-3xl p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <span className="text-brand uppercase tracking-widest text-base font-bold block mb-2">
                  WHAT IS AUTO LOAN FRAUD?
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1b35] mb-6">
                  It’s More Common Than You Think.
                </h2>
                <p className="text-[#4a4b65] text-base leading-relaxed mb-4">
                  Auto loan fraud happens when someone provides false information or uses someone else’s identity to obtain a vehicle loan. It can affect your credit, your finances and your peace of mind.
                </p>
                <p className="text-[#4a4b65] text-base leading-relaxed">
                  Understanding the risks can help you protect yourself and ensure a smooth, secure financing experience.
                </p>
              </div>

              <div className="lg:col-span-5 bg-white p-8 rounded-2xl border border-pink-100 flex flex-col items-center text-center shadow-sm">
                <div className="w-16 h-16 bg-[#fdf4f7] text-[#ff385c] rounded-2xl flex items-center justify-center mb-4">
                  <UserX className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg text-[#1a1b35] mb-2">Fraud can happen to anyone.</h3>
                <p className="text-[#4a4b65] text-base">Knowledge is your best protection.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: TYPES OF AUTO LOAN FRAUD ================= */}
        <section className="py-20 bg-[#fdf4f7]">
          <div className="max-w-[1480px] px-6 sm:px-12 xl:px-16 mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-brand uppercase tracking-widest text-base font-bold block mb-2">
                TYPES OF AUTO LOAN FRAUD
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1b35] mb-3">
                Know the Common Types.
              </h2>
              <p className="text-[#4a4b65] text-base">
                Being aware of how fraud happens can help you spot it early.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Type 1 */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-pink-100 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-[#fdf4f7] flex items-center justify-center text-[#ff385c] mb-6">
                  <FileSpreadsheet className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-lg text-[#1a1b35] mb-2">Identity Theft</h3>
                <p className="text-base text-gray-500 leading-relaxed">
                  Someone uses your personal information to apply for a loan without your consent.
                </p>
              </div>

              {/* Type 2 */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-pink-100 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-[#fdf4f7] flex items-center justify-center text-[#ff385c] mb-6">
                  <FileText className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-lg text-[#1a1b35] mb-2">Income Fraud</h3>
                <p className="text-base text-gray-500 leading-relaxed">
                  False or altered income documents are provided to qualify for a loan.
                </p>
              </div>

              {/* Type 3 */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-pink-100 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-[#fdf4f7] flex items-center justify-center text-[#ff385c] mb-6">
                  <Cpu className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-lg text-[#1a1b35] mb-2">Synthetic Identity Fraud</h3>
                <p className="text-base text-gray-500 leading-relaxed">
                  A mix of real and fake information is used to create a new identity.
                </p>
              </div>

              {/* Type 4 */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-pink-100 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-[#fdf4f7] flex items-center justify-center text-[#ff385c] mb-6">
                  <UserCheck className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-lg text-[#1a1b35] mb-2">Straw Buyer</h3>
                <p className="text-base text-gray-500 leading-relaxed">
                  A loan is obtained using someone else’s name, even if they don’t intend to keep the vehicle.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: TIPS TO STAY SAFE ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-[1480px] px-6 sm:px-12 xl:px-16 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-6">
                <div className="relative w-full overflow-hidden rounded-3xl shadow-md border border-pink-100 bg-[#fdf4f7]">
                  <Image
                    src="/images/what_do_i_need_specialist_hd.png"
                    alt="Carma Credit auto financing specialist meeting with customer"
                    width={1730}
                    height={909}
                    className="block w-full h-auto object-cover"
                    priority
                    unoptimized
                  />
                </div>
              </div>

              <div className="lg:col-span-6 flex flex-col items-start justify-center">
                <span className="text-brand uppercase tracking-widest text-base font-bold block mb-2">
                  HOW TO PROTECT YOURSELF
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1b35] mb-4">
                  Tips to Stay Safe.
                </h2>
                <p className="text-[#4a4b65] text-base mb-8">
                  Follow these simple steps to reduce your risk of fraud.
                </p>

                <ul className="space-y-4 w-full">
                  {[
                    "Keep your personal information private.",
                    "Only work with licensed and reputable dealerships.",
                    "Review all documents carefully before signing.",
                    "Make sure the information on your application is accurate.",
                    "Monitor your credit report regularly.",
                    "Report any suspicious activity immediately."
                  ].map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-3 bg-[#fdf4f7]/60 p-4 rounded-2xl border border-pink-100">
                      <span className="text-[#ff385c] mt-0.5 shrink-0"><CheckCircle2 size={20} /></span>
                      <span className="text-[#1a1b35] text-base font-medium">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 5: WATCH FOR RED FLAGS ================= */}
        <section className="py-20 bg-[#fdf4f7]">
          <div className="max-w-[1480px] px-6 sm:px-12 xl:px-16 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <span className="text-brand uppercase tracking-widest text-base font-bold block mb-2">
                    WARNING SIGNS
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1b35] mb-3">
                    Watch for Red Flags.
                  </h2>
                  <p className="text-[#4a4b65] text-base mb-8">
                    Be cautious if you notice any of the following:
                  </p>
                </div>

                <ul className="space-y-4">
                  {[
                    "You’re asked to sign blank or incomplete documents.",
                    "The terms of the loan are unclear or seem too good to be true.",
                    "A dealer or third party pressures you to provide false information.",
                    "You’re asked to use someone else’s name or income.",
                    "You’re not given a copy of your signed documents.",
                    "The vehicle, loan details or lender information don’t match."
                  ].map((flag, idx) => (
                    <li key={idx} className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-pink-100 shadow-sm">
                      <span className="text-[#ff385c] mt-0.5 shrink-0"><AlertTriangle size={20} /></span>
                      <span className="text-[#1a1b35] text-base font-medium">{flag}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-5 flex flex-col">
                <div className="bg-white border border-pink-100 rounded-3xl p-8 sm:p-10 text-center flex flex-col items-center h-full justify-between shadow-sm">
                  <div>
                    <div className="w-16 h-16 bg-[#fdf4f7] text-[#ff385c] rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6">
                      <Megaphone size={32} />
                    </div>
                    <h3 className="text-2xl font-extrabold text-[#1a1b35] mb-3">See Something Suspicious?</h3>
                    <p className="text-[#4a4b65] text-base leading-relaxed mb-8">
                      If you think you’ve been targeted by fraud or notice suspicious activity, contact us right away. We’re here to help and guide you through the next steps.
                    </p>
                  </div>
                  
                  <div className="w-full">
                    <Link href={"/contact-us"} className="bg-[#ff385c] hover:bg-brand text-white font-semibold text-base px-8 py-4 rounded-full w-full inline-flex items-center justify-center gap-2 transition-all shadow-md mb-4">
                      Talk to Our Team <ArrowRight size={18} />
                    </Link>
                    <p className="text-sm text-gray-400">Your security is important to us</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 6: BOTTOM BANNER CTA ================= */}
        <section className="relative w-full overflow-hidden bg-[#080b18] py-10 sm:py-12 lg:py-14">
          {/* Background Image on Right Side */}
          <div className="absolute inset-y-0 right-0 w-full lg:w-[58%] overflow-hidden pointer-events-none opacity-85 lg:opacity-100">
            <Image
              src="/images/what_do_i_need_sunset_hd.png"
              alt="Carma Credit auto financing specialist meeting with customer"
              fill
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
            <div className="absolute right-12 bottom-12 lg:right-20 lg:bottom-16 z-10 hidden sm:block text-right">
              <p className="font-handwriting italic text-white text-2xl lg:text-3xl leading-snug tracking-wide drop-shadow-md">
                Same Roads.<br />
                Brighter<br />
                Tomorrows.
              </p>
              <div className="w-28 lg:w-32 h-[3px] bg-[#ff385c] mt-2 ml-auto rounded-full" />
            </div>
          </div>

          {/* Content on the Dark Left Side */}
          <div className="relative z-10 w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl lg:max-w-2xl xl:max-w-3xl flex flex-col items-start justify-center">
              <span className="text-sm uppercase tracking-widest text-brand font-bold block mb-2">
                Drive forward with confidence
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-extrabold text-white tracking-tight leading-tight mb-2 sm:mb-3">
                Safe Financing. A Brighter Tomorrow.
              </h2>

              <p className="text-slate-300 text-base leading-normal mb-5 sm:mb-6">
                Get the information you need and finance with peace of mind.
              </p>

              <div>
                <Link
                  href={"/financing"}
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-[#ff385c] hover:bg-brand active:bg-[#8e145a] text-white font-semibold text-[13.5px] sm:text-[14.5px] transition-colors duration-150 shadow-md"
                >
                  <span>Start my auto financing quiz</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}