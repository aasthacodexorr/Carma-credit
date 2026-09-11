"use client";

import React, { useState } from 'react';
import {
  CreditCard,
  Clock,
  FileText,
  Users,
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { Footer, Header } from '@/components/layout';
import Link from 'next/link';
import Image from 'next/image';
import { FaqAccordion } from '@/components/common';

export default function UnderstandingCreditPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index: any) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Will checking my credit score affect it?",
      a: (
        <p>
          Checking your own credit score is a soft inquiry and does not affect your credit score.
        </p>
      ),
    },
    {
      q: "What is a soft pull vs. a hard pull?",
      a: (
        <p>
          A soft pull does not affect your credit score, while a hard pull may have a small temporary impact and is typically used when applying for credit.
        </p>
      ),
    },
    {
      q: "What if I have no credit history?",
      a: (
        <p>
          Having no credit history does not necessarily prevent you from getting approved. There may be financing options available for first-time borrowers.
        </p>
      ),
    },
    {
      q: "Can I get approved with less than perfect credit?",
      a: (
        <p>
          Yes. Having less than perfect credit does not automatically mean you cannot get approved. Your available options will depend on your overall financial situation and lender requirements.
        </p>
      ),
    },
    {
      q: "How can I improve my credit score?",
      a: (
        <p>
          You can improve your credit score by making payments on time, keeping your credit utilization low, limiting new credit applications, and maintaining a healthy credit history.
        </p>
      ),
    },
  ];

  return (
    <>
      <Header />
      <main className="bg-white text-[#1a1b35] overflow-hidden">

        {/* ================= SECTION 1: HERO ================= */}
        <section className="relative w-full overflow-hidden bg-[#fff7fb] min-h-[480px] lg:min-h-[540px] xl:min-h-[580px] flex items-center">
          {/* RIGHT SIDE: Large Image starting right next to the text and extending to the right edge */}
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
                src="/images/rebuild.png"
                alt="Carma Credit documents checklist on desk with clipboard, car key, pen and coffee cup"
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
                UNDERSTANDING YOUR CREDIT
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[50px] font-extrabold tracking-tight leading-[1.12] mb-5">
                <span className="text-[#1a1b35] block">Knowledge Puts You</span>
                <span className="text-[#ff385c] block">in the Driver’s Seat.</span>
              </h1>

              <p className=" text-[#4a4b65] text-xl  lg:text-base leading-[1.65] mb-8">
                Understand your credit, make informed decisions, and feel confident about your auto financing journey.
              </p>

              <div className="mb-8">
                <Link href={"/financing"} className="bg-[#ff385c] w-fit hover:bg-brand cursor-pointer text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 group">
                  Check My Credit Score
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Feature Badges */}
              <div className="flex flex-col lg:flex-row flex-wrap items-start lg:items-center gap-y-4 lg:gap-y-3 gap-x-6 text-xl lg:text-base text-[#4a4b65]  lg:font-medium">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#ff385c] flex items-center justify-center text-white shrink-0">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <span>Soft pull</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#ff385c] flex items-center justify-center text-white shrink-0">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <span>No impact to your credit</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#ff385c] flex items-center justify-center text-white shrink-0">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <span>Instant results</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 2: WHAT IS A CREDIT SCORE ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-[1480px] px-6 sm:px-12 xl:px-16 mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-brand uppercase tracking-widest text-base font-bold block mb-2">
                THE BASICS
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1a1b35] mb-4">
                What Is A Credit Score?
              </h2>
              <p className="text-[#4a4b65] text-base leading-relaxed">
                Your credit score is a number that helps lenders understand how you’ve managed credit in the past. It’s based on your credit history and gives a snapshot of your financial habits.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1 */}
              <div className="bg-[#fdf4f7] p-8 rounded-3xl shadow-sm border border-pink-100 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-[#ff385c] mb-6 shadow-sm">
                  <CreditCard className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-lg text-[#1a1b35] mb-2">Payment History</h3>
                <p className="text-base text-gray-500 leading-relaxed">
                  Shows if you’ve paid bills on time.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#fdf4f7] p-8 rounded-3xl shadow-sm border border-pink-100 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-[#ff385c] mb-6 shadow-sm">
                  <Clock className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-lg text-[#1a1b35] mb-2">Amounts Owed</h3>
                <p className="text-base text-gray-500 leading-relaxed">
                  How much of your available credit you’re using.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-[#fdf4f7] p-8 rounded-3xl shadow-sm border border-pink-100 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-[#ff385c] mb-6 shadow-sm">
                  <FileText className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-lg text-[#1a1b35] mb-2">Length of Credit History</h3>
                <p className="text-base text-gray-500 leading-relaxed">
                  How long you’ve had credit accounts.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-[#fdf4f7] p-8 rounded-3xl shadow-sm border border-pink-100 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-[#ff385c] mb-6 shadow-sm">
                  <Users className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-lg text-[#1a1b35] mb-2">Types of Credit</h3>
                <p className="text-base text-gray-500 leading-relaxed">
                  A mix of credit accounts can be a positive.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: CREDIT SCORE RANGES ================= */}
        <section className="py-20 bg-[#fdf4f7]">
          <div className="max-w-[1480px] px-6 sm:px-12 xl:px-16 mx-auto text-center">
            <span className="text-base font-bold tracking-widest text-brand uppercase mb-2 block">
              CREDIT SCORE RANGES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1b35] mb-3">
              What Does Your Score Mean?
            </h2>
            <p className="text-[#4a4b65] text-base mb-12">
              Credit scores typically fall within the following ranges:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {/* Range 1 */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-pink-100 flex flex-col justify-between text-left">
                <div className=''>
                  <h4 className="font-bold text-[#1a1b35] text-xl mb-1">300 – 579</h4>
                  <span className="text-sm font-bold text-red-500 uppercase tracking-wider block mb-4">Poor</span>
                </div>
                <p className="text-base text-gray-500 leading-relaxed">
                  May be considered a higher risk, but auto financing may still be possible.
                </p>
              </div>

              {/* Range 2 */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-pink-100 flex flex-col justify-between text-left">
                <div>
                  <h4 className="font-bold text-[#1a1b35] text-xl mb-1">580 – 669</h4>
                  <span className="text-sm font-bold text-amber-500 uppercase tracking-wider block mb-4">Fair</span>
                </div>
                <p className="text-base text-gray-500 leading-relaxed">
                  You may have some options for auto financing.
                </p>
              </div>

              {/* Range 3 */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-pink-100 flex flex-col justify-between text-left">
                <div>
                  <h4 className="font-bold text-[#1a1b35] text-xl mb-1">670 – 739</h4>
                  <span className="text-sm font-bold text-yellow-500 uppercase tracking-wider block mb-4">Good</span>
                </div>
                <p className="text-base text-gray-500 leading-relaxed">
                  More financing options may be available.
                </p>
              </div>

              {/* Range 4 */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-pink-100 flex flex-col justify-between text-left">
                <div>
                  <h4 className="font-bold text-[#1a1b35] text-xl mb-1">740 – 799</h4>
                  <span className="text-sm font-bold text-emerald-500 uppercase tracking-wider block mb-4">Very Good</span>
                </div>
                <p className="text-base text-gray-500 leading-relaxed">
                  You may qualify for better rates and terms.
                </p>
              </div>

              {/* Range 5 */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-pink-100 flex flex-col justify-between text-left sm:col-span-2 lg:col-span-1">
                <div>
                  <h4 className="font-bold text-[#1a1b35] text-xl mb-1">800 – 900</h4>
                  <span className="text-sm font-bold text-[#00c853] uppercase tracking-wider block mb-4">Excellent</span>
                </div>
                <p className="text-base text-gray-500 leading-relaxed">
                  You’re in a strong position with many options.
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-400 mt-8">
              * Score ranges may vary slightly between credit bureaus and lenders.
            </p>
          </div>
        </section>

        {/* ================= SECTION 4: FAQ / COMMON QUESTIONS ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-[1480px] px-6 sm:px-12 xl:px-16 mx-auto">
            <div className="text-center mb-12">
              <span className="text-base font-bold tracking-widest text-brand uppercase mb-2 block">
                COMMON QUESTIONS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1b35]">
                Your Credit Questions, Answered.
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              <FaqAccordion faqs={faqs} />
            </div>
          </div>
        </section>

        {/* ================= SECTION 5: STILL HAVE QUESTIONS BANNER ================= */}
        <section className="py-12 bg-white">
          <div className="max-w-[1480px] px-6 sm:px-12 xl:px-16 mx-auto">
            <div className="bg-[#fdf4f7] border border-pink-100 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-5 text-center md:text-left flex-col md:flex-row">
                <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center text-[#ff385c] flex-shrink-0">
                  <MessageSquare className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-base font-bold tracking-widest text-brand uppercase mb-1 block">
                    Still Have Questions?
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#1a1b35] mb-1">
                    We’re Here to Help.
                  </h3>
                  <p className="text-[#4a4b65] text-base">
                    Talk to one of our auto-financing specialists and get clear answers about your credit and next steps.
                  </p>
                </div>
              </div>
              <Link href={"/financing"} className="bg-[#ff385c] hover:bg-brand text-white font-semibold px-6 py-3.5 rounded-full shadow-md text-base whitespace-nowrap transition-all">
                Talk to a Credit Specialist →
              </Link>
            </div>
          </div>
        </section>

        {/* ================= SECTION 6: READY TO MOVE FORWARD FOOTER CTA ================= */}
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
              <span className="text-sm uppercase tracking-widest font-bold block mb-2 text-brand">
                Ready to move forward?
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-extrabold text-white tracking-tight leading-tight mb-2 sm:mb-3">
                Start Your Auto Financing Journey Today.
              </h2>

              <p className="text-slate-300 text-base leading-normal mb-5 sm:mb-6">
                It only takes 2 minutes. No judgment. No obligation.
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