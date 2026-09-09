import React from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function CreditScoreBanner() {
  return (
    <section className="w-full bg-[#FFF0F3] py-12 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      <div className="max-w-[1480px] px-0 sm:px-12 xl:px-16 mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* Left Content Area */}
        <div className="flex-1 max-w-xl text-center lg:text-left">
          {/* Top Subtitle */}
          <p className="text-xs font-bold tracking-widest text-[#ff385c] uppercase mb-3">
            KNOW YOUR CREDIT BEFORE YOU SHOP
          </p>

          {/* Main Headline */}
          <h1 className="text-2xl sm:text-4xl lg:text-[40px] font-extrabold text-[#111827] leading-[1.15] mb-4 tracking-tight">
            Check Your Credit Score.{' '}
            <span className="text-[#ff385c] block sm:inline mt-1 sm:mt-0">(No Impact to Your Credit.)</span>
          </h1>

          {/* Description Paragraph */}
          <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed">
            See where your credit stands before starting your auto financing journey. It's a quick, secure soft credit check with no impact to your credit score.
          </p>

          {/* CTA Button */}
          <div className="mb-8">
            <Link href="/financing" className="inline-flex items-center justify-center bg-[#ff385c] hover:bg-brand text-white font-semibold py-3.5 px-8 rounded-full shadow-lg transition-all duration-200 transform hover:-translate-y-0.5">
              Check My Credit Score
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          {/* Feature Checkmarks List */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-gray-800 font-medium text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#4A1D59]" />
              <span>Soft Pull</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#4A1D59]" />
              <span>No Impact</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#4A1D59]" />
              <span>Instant Results</span>
            </div>
          </div>
        </div>

        {/* Right Visual Area (Phone + Side Text aligned horizontally without overlap) */}
        <div className="relative flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 w-full lg:w-auto mt-8 lg:mt-0">

          {/* Background glowing soft pink circle effect behind phone */}
          <div className="absolute w-72 h-72 bg-[#ffe4ec] rounded-full blur-2xl -z-10" />

          {/* Phone Mockup Container */}
          <div className="relative w-[280px] sm:w-[300px] bg-[#1a1a1a] rounded-[42px] p-3 shadow-2xl border-[3px] border-gray-800 shrink-0">
            {/* Phone Screen */}
            <div className="bg-white rounded-[32px] overflow-hidden p-5 flex flex-col items-center text-center">

              {/* Dynamic Island / Notch Mockup */}
              <div className="w-20 h-4 bg-black rounded-full mb-3" />

              <p className="text-xs font-semibold text-gray-500 mb-4">Your Credit Score</p>

              {/* Semi-circle Gauge Mockup */}
              <div className="relative w-44 h-24 mb-3 overflow-hidden flex items-end justify-center">
                <div className="absolute top-0 w-44 h-44 rounded-full border-[14px] border-gray-100 border-t-[#22c55e] border-r-[#22c55e] rotate-[-45deg]"></div>
                <div className="relative z-10 flex flex-col items-center">
                  <span className="text-3xl font-extrabold text-[#111827] leading-none">720</span>
                  <span className="text-xs font-semibold text-gray-500 mt-1">Good</span>
                </div>
              </div>

              {/* Bottom Badge inside Phone */}
              <div className="w-full mt-3 bg-white border border-gray-100 shadow-sm rounded-xl py-2 px-3 flex items-center justify-center gap-2 text-xs text-gray-800 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#ff385c] shrink-0" />
                <span>No impact to your credit</span>
              </div>
            </div>
          </div>

          {/* Right Side Text Block (Properly aligned next to phone instead of absolute overlapping) */}
          <div className="max-w-[220px] text-left shrink-0">
            <p className="text-[#2D1B4E] text-xl sm:text-[22px] leading-snug font-bold font-serif italic tracking-wide">
              Know your score.<br />
              Understand your<br />
              car loan options.<br />
              Shop with<br />
              confidence.
            </p>
            {/* Hand-drawn style brush underline accent */}
            <div className="mt-3 w-32 h-2.5 bg-[#ff385c] rounded-full transform -rotate-1 opacity-90" />
          </div>

        </div>

      </div>
    </section>
  );
}