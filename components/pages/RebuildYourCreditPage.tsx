'use client';

import React, { useState } from 'react';
import {
  CheckCircle,
  ShieldCheck,
  Zap,
  CreditCard,
  Clock,
  FileText,
  Users,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { Footer, Header } from '../layout';
import Link from 'next/link';
import Image from 'next/image';

export default function UnderstandingCreditPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index: any) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    "Will checking my credit score affect it?",
    "What is a soft pull vs. a hard pull?",
    "What if I have no credit history?",
    "Can I get approved with bad credit?",
    "How can I improve my credit score?"
  ];

  return (
    <>
      <Header />
      <div className="bg-white text-slate-900 font-sans overflow-hidden">
        {/* SECTION 1: HERO */}
        <section className="relative w-full overflow-hidden bg-[#fff7fb] min-h-[480px] lg:min-h-[540px] xl:min-h-[580px] flex items-center">
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
                src="/images/rebuild.png"
                alt="Carma Credit documents checklist on desk with clipboard, car key, pen and coffee cup"
                width={1730}
                height={909}
                className="block w-full h-auto"
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
          </div>

          {/* LEFT CONTENT: Vertically centered on solid light background with no overlap */}
          <div className="relative z-20 w-full max-w-[1480px] mx-auto px-6 sm:px-10 lg:pl-16 xl:pl-24 py-14 sm:py-16 lg:py-20">


            <div className="lg:col-span-7 px-6 sm:px-0 max-w-[500px] xl:max-w-[600px] flex flex-col items-start justify-center">
              <span className="text-base sm:text-base font-bold tracking-widest text-[#ff385c] uppercase block">
                Understanding Your Credit
              </span>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-[#1a103c] tracking-tight leading-[1.15] mb-3">
                Knowledge <br /> <p className='text-[#ff385c]'>Puts You in the Driver’s Seat.</p>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
                Understand your credit, make informed decisions, and feel confident about your auto financing journey.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <Link href={"/financing"} className="bg-[#ff385c] hover:bg-brand text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-pink-500/25 transition-all flex items-center gap-2 group">
                  Check My Credit Score
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-6 mt-8 text-base font-medium text-slate-700">
                <div className="flex items-center gap-2">
                  <span className="text-[#ff385c] font-bold">✔</span> Soft pull
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#ff385c] font-bold">✔</span> No impact to your credit
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#ff385c] font-bold">✔</span> Instant results
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: WHAT IS A CREDIT SCORE */}
        <section className="py-16 lg:py-16 bg-white">
          <div className="max-w-[1480px] px-0 sm:px-12 xl:px-16 mx-auto text-center px-6">
            <span className="text-base font-bold tracking-widest text-[#ff385c] uppercase mb-2 block">
              The Basics
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a103c] mb-4">
              What Is A Credit Score?
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-base mb-12 leading-relaxed">
              Your credit score is a number that helps lenders understand how you’ve managed credit in the past. It’s based on your credit history and gives a snapshot of your financial habits.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div className="bg-pink-50/40 border border-pink-100/60 rounded-2xl p-6 text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center text-[#ff385c] mb-4">
                  <CreditCard className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-[#1a103c] text-lg mb-2">Payment History</h3>
                <p className="text-base sm:text-base text-slate-600 leading-normal">
                  Shows if you’ve paid bills on time.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-pink-50/40 border border-pink-100/60 rounded-2xl p-6 text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center text-[#ff385c] mb-4">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-[#1a103c] text-lg mb-2">Amounts Owed</h3>
                <p className="text-base sm:text-base text-slate-600 leading-normal">
                  How much of your available credit you’re using.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-pink-50/40 border border-pink-100/60 rounded-2xl p-6 text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center text-[#ff385c] mb-4">
                  <FileText className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-[#1a103c] text-lg mb-2">Length of Credit History</h3>
                <p className="text-base sm:text-base text-slate-600 leading-normal">
                  How long you’ve had credit accounts.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-pink-50/40 border border-pink-100/60 rounded-2xl p-6 text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center text-[#ff385c] mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-[#1a103c] text-lg mb-2">Types of Credit</h3>
                <p className="text-base sm:text-base text-slate-600 leading-normal">
                  A mix of credit accounts can be a positive.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: CREDIT SCORE RANGES */}
        <section className="py-16 lg:py-14 bg-gradient-to-b from-white to-pink-50/30">
          <div className="max-w-[1480px] px-0 sm:px-12 xl:px-16 mx-auto text-center px-6">
            <span className="text-base font-bold tracking-widest text-[#ff385c] uppercase mb-2 block">
              Credit Score Ranges
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a103c] mb-3">
              What Does Your Score Mean?
            </h2>
            <p className="text-slate-600 text-base sm:text-base mb-12">
              Credit scores typically fall within the following ranges:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Range 1 */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-slate-800 text-base mb-1">300 – 579</h4>
                  <span className="text-base font-bold text-red-500 uppercase tracking-wider block mb-4">Poor</span>
                </div>
                <p className="text-base text-slate-500 leading-relaxed">
                  May be considered a higher risk, but auto financing may still be possible.
                </p>
              </div>

              {/* Range 2 */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-slate-800 text-base mb-1">580 – 669</h4>
                  <span className="text-base font-bold text-amber-500 uppercase tracking-wider block mb-4">Fair</span>
                </div>
                <p className="text-base text-slate-500 leading-relaxed">
                  You may have some options for auto financing.
                </p>
              </div>

              {/* Range 3 */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-slate-800 text-base mb-1">670 – 739</h4>
                  <span className="text-base font-bold text-yellow-500 uppercase tracking-wider block mb-4">Good</span>
                </div>
                <p className="text-base text-slate-500 leading-relaxed">
                  More financing options may be available.
                </p>
              </div>

              {/* Range 4 */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-slate-800 text-base mb-1">740 – 799</h4>
                  <span className="text-base font-bold text-emerald-500 uppercase tracking-wider block mb-4">Very Good</span>
                </div>
                <p className="text-base text-slate-500 leading-relaxed">
                  You may qualify for better rates and terms.
                </p>
              </div>

              {/* Range 5 */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between sm:col-span-2 lg:col-span-1">
                <div>
                  <h4 className="font-bold text-slate-800 text-base mb-1">800 – 900</h4>
                  <span className="text-base font-bold text-[#00c853] uppercase tracking-wider block mb-4">Excellent</span>
                </div>
                <p className="text-base text-slate-500 leading-relaxed">
                  You’re in a strong position with many options.
                </p>
              </div>
            </div>

            <p className="text-[18px] text-slate-400 mt-8">
              * Score ranges may vary slightly between credit bureaus and lenders.
            </p>
          </div>
        </section>

        {/* SECTION 4: FAQ / COMMON QUESTIONS */}
        <section className="py-16 lg:py-14 bg-white">
          <div className="max-w-[1480px] px-0 sm:px-12 xl:px-16 mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-base font-bold tracking-widest text-[#ff385c] uppercase mb-2 block">
                Common Questions
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a103c]">
                Your Credit Questions, Answered.
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-slate-200/80 rounded-xl overflow-hidden transition-all bg-white"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center font-semibold text-[#1a103c] text-base sm:text-base hover:bg-slate-50/55 transition-colors"
                  >
                    <span>{faq}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-5 text-slate-600 text-base leading-relaxed border-t border-slate-100 pt-3">
                      Here is detailed information regarding your inquiry. Understanding how this works helps you make empowered decisions throughout your auto financing application.
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: STILL HAVE QUESTIONS BANNER */}
        <section className="py-12 bg-white">
          <div className="max-w-[1480px] px-0 sm:px-12 xl:px-16 mx-auto px-6">
            <div className="bg-pink-50/60 border border-pink-100 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-5 text-center md:text-left flex-col md:flex-row">
                <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center text-[#ff385c] flex-shrink-0">
                  <MessageSquare className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-base font-bold tracking-widest text-[#ff385c] uppercase mb-1 block">
                    Still Have Questions?
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#1a103c] mb-1">
                    We’re Here to Help.
                  </h3>
                  <p className="text-slate-600 text-base sm:text-base">
                    Talk to one of our auto-financing specialists and get clear answers about your credit and next steps.
                  </p>
                </div>
              </div>
              <Link href={"/Financing"} className="bg-[#ff385c] hover:bg-brand text-white font-semibold px-6 py-3.5 rounded-full shadow-md text-base whitespace-nowrap transition-all">
                Talk to a Credit Specialist →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 6: READY TO MOVE FORWARD FOOTER CTA */}
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
              <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] text-slate-300 uppercase mb-2 sm:mb-2.5">
                Ready To Get Started?
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-extrabold text-white tracking-tight leading-tight mb-2 sm:mb-3 whitespace-normal lg:whitespace-nowrap">
                Your Next Car is Closer Than You Think.
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm lg:text-[15px] leading-normal mb-5 sm:mb-6">
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

      </div>
      <Footer />
    </>

  );
}