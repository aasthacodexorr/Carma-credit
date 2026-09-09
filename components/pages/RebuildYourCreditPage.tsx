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

export default function UnderstandingCreditPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index:any) => {
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
        <section className="relative bg-gradient-to-r from-pink-50/60 via-purple-50/30 to-white pt-12 pb-16 lg:py-24">
          <div className="max-w-[1480px] px-0 sm:px-12 xl:px-16 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 px-6 sm:px-0">
              <span className="text-base sm:text-base font-bold tracking-widest text-[#ff385c] uppercase block">
                Understanding Your Credit
              </span>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-[#1a103c] tracking-tight leading-[1.15] mb-3">
                Knowledge Puts You in the Driver’s Seat.
              </h1>
              <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
                Understand your credit, make informed decisions, and feel confident about your auto financing journey.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <button className="bg-[#ff385c] hover:bg-brand text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-pink-500/25 transition-all flex items-center gap-2 group">
                  Check My Credit Score
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
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

            <div className="lg:col-span-5 relative flex justify-center lg:justify-end px-6 sm:px-0">
              <div className="relative w-full max-w-[340px] aspect-[9/19] bg-[#1a103c] rounded-[40px] p-3 shadow-2xl border-4 border-slate-900">
                {/* Simulated Phone Screen */}
                <div className="w-full h-full bg-white rounded-[32px] p-5 flex flex-col justify-between relative overflow-hidden">
                  <div>
                    <div className="flex justify-between items-center text-base text-slate-400 mb-6">
                      <span className="font-bold text-slate-700">Your Credit Score</span>
                      <span>10:24</span>
                    </div>
                    <div className="text-center my-4">
                      <div className="inline-block relative w-44 h-24 overflow-hidden mb-2">
                        {/* Gauge Mock */}
                        <div className="absolute top-0 left-0 w-44 h-44 rounded-full border-[16px] border-slate-100 border-t-[#00c853] border-r-[#00c853] -rotate-45"></div>
                      </div>
                      <h3 className="text-4xl font-black text-slate-800">720</h3>
                      <span className="text-base font-bold text-[#00c853] uppercase tracking-wider">Good</span>
                    </div>
                    <div className="bg-pink-50 rounded-xl p-3 flex items-center gap-3 mt-4">
                      <div className="w-2 h-2 rounded-full bg-[#ff385c]"></div>
                      <span className="text-base font-semibold text-[#1a103c]">No impact to your credit</span>
                    </div>
                  </div>
                  <div className="text-[10px] text-center text-slate-400">
                    🔄 Updated today
                  </div>
                </div>
              </div>
              {/* Background Graphic text accent */}
              <div className="absolute top-1/2 -right-10 text-slate-800 font-serif italic text-lg hidden xl:block pointer-events-none">
                A clearer picture.<br />A brighter tomorrow.
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: WHAT IS A CREDIT SCORE */}
        <section className="py-16 lg:py-24 bg-white">
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
        <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-pink-50/30">
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
        <section className="py-16 lg:py-24 bg-white">
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
              <button className="bg-[#ff385c] hover:bg-brand text-white font-semibold px-6 py-3.5 rounded-full shadow-md text-base whitespace-nowrap transition-all">
                Talk to a Credit Specialist →
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 6: READY TO MOVE FORWARD FOOTER CTA */}
        <section className="relative bg-[#1a103c] text-white py-16 lg:py-20 overflow-hidden">
          {/* Background Overlay image mockup for car dashboard */}
          <div className="absolute inset-0 opacity-20 bg-cover bg-center pointer-events-none" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop')` }}></div>

          <div className="max-w-[1480px] px-0 sm:px-12 xl:px-16 mx-auto relative z-10 px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-base font-bold tracking-widest text-[#ff385c] uppercase mb-2 block">
                Ready to Move Forward?
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">
                Start Your Auto Financing Journey.
              </h2>
              <p className="text-slate-300 text-base sm:text-base max-w-xl mb-6">
                It only takes 2 minutes. No judgment. No obligation.
              </p>
              <Link href={"/financing"} className="bg-[#ff385c] w-fit hover:bg-brand text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-all flex items-center gap-2">
                Start My Auto Financing Quiz →
              </Link>
            </div>

            <div className="hidden lg:block text-right font-serif italic text-slate-400 text-xl">
              Same roads.<br />Brighter Tomorrows.
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>

  );
}