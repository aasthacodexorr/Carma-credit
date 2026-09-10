import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function CreditScoreBanner() {
  return (
    <section className="w-full bg-[#FFF5F7] py-12 px-4 sm:px-6 lg:px-8  overflow-hidden">
      <div className="max-w-[1480px] px-0 sm:px-12 xl:px-16 mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* Left Content Area */}
        <div className="flex-1 max-w-xl text-center lg:text-left">
          {/* Top Subtitle */}
          <p className="text-base font-bold tracking-widest text-[#ff385c] uppercase px-1">
            KNOW YOUR CREDIT BEFORE YOU SHOP
          </p>

          {/* Main Headline */}
          <h1 className="text-2xl sm:text-4xl lg:text-[40px] font-extrabold text-[#111827] leading-[1.15] mb-4 tracking-tight">
            Check Your Credit Score.{' '}<br/>
            <span className="text-[#ff385c] block sm:inline mt-1 sm:mt-0">(No Impact to Your Credit.)</span>
          </h1>

          {/* Description Paragraph */}
          <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed">
            See where your credit stands before starting your auto financing journey. It's a quick, secure soft credit check with no impact to your credit score.
          </p>

          {/* CTA Button */}
          <div className="mb-8 flex justify-center lg:justify-start">
            <Link 
              href="/financing" 
              className="inline-flex items-center justify-center bg-[#ff385c] hover:bg-brand text-white font-semibold py-3.5 px-8 rounded-full shadow-md transition-all duration-200 transform hover:-translate-y-0.5 text-base"
            >
              Check My Credit Score <ArrowRight className="ml-2 w-5 h-5" />
            </Link> 
          </div>

          {/* Feature Checkmarks List */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-gray-800 font-semibold text-base">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-[#ff385c] flex items-center justify-center text-white">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <span>Soft Pull</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-[#ff385c] flex items-center justify-center text-white">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <span>No Impact</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-[#ff385c] flex items-center justify-center text-white">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <span>Instant Results</span>
            </div>
          </div>
        </div>

        {/* Right Visual Area (Phone + Side Text) */}
        <div className="relative flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 w-full lg:w-auto mt-8 lg:mt-0">

          {/* Background glowing soft pink circle effect behind phone */}
          <div className="absolute w-72 h-72 bg-[#ffd1dc] rounded-full blur-3xl -z-10 opacity-70" />

          {/* Phone Mockup Container */}
          <div className="relative w-full max-w-[280px] sm:max-w-[320px] flex justify-center">
            <div className="relative w-full overflow-hidden">
              <Image
                src="/images/h1.png"
                alt="Carma Credit score preview on phone mockup"
                width={800}
                height={1000}
                className="block w-full h-auto drop-shadow-xl"
                priority
                unoptimized
              />
            </div>
          </div>

          {/* Right Side Text Block */}
          <div className="max-w-[220px] text-left shrink-0">
            <p className="text-[#1e102e] text-xl sm:text-[22px] leading-snug font-semibold tracking-wide" style={{ fontFamily: 'Caveat, cursive, sans-serif' }}>
              Know your score.<br />
              Understand your<br />
              car loan options.<br />
              Shop with<br />
              confidence.
            </p>
            {/* Hand-drawn style brush underline accent */}
            <div className="mt-2 w-32 h-2 bg-[#ff385c] rounded-full transform -rotate-2 opacity-90" />
          </div>

        </div>

      </div>
    </section>
  );
}