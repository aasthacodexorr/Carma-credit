"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { easeOut } from "./motion";
import { CheckCircle2, ArrowRight, Check } from "lucide-react";

const DrivewayHero = () => {
  const reduce = useReducedMotion();

  const enter = (delay = 0, y = 24, x = 0) =>
    reduce
      ? undefined
      : {
        initial: { opacity: 0, y, x },
        animate: { opacity: 1, y: 0, x: 0 },
        transition: { duration: 0.65, delay, ease: easeOut },
      };

  return (
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
            src="/images/h2.png"
            alt="Carma Credit documents checklist on desk with clipboard, car key, pen and coffee cup"
            width={1730}
            height={909}
            className="block w-full h-full object-cover lg:h-auto"
            priority
            unoptimized
          />
        </div>

        {/* MOBILE BLACK OVERLAY: Applied strictly to the absolute image container on mobile only */}
        <div
          className="absolute inset-0 bg-black/50 lg:hidden pointer-events-none z-10"
          aria-hidden="true"
        />

        {/* SOFT HORIZONTAL FADE: Seamless transition located right nearby the text */}
        <div
          className="absolute inset-0 pointer-events-none hidden lg:block z-10"
          style={{
            background:
              "linear-gradient(to right, #fff7fb 0%, rgba(255, 247, 251, 0.9) 5%, rgba(255, 247, 251, 0.55) 12%, rgba(255, 247, 251, 0.18) 22%, transparent 34%)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Main Container */}
      <div className="relative z-20 mx-auto w-full max-w-[1480px] px-6 py-12 sm:px-12 xl:px-16">
        <div className="max-w-xl">

          {/* Small Top Tagline */}
          <motion.div {...enter(0.0, 10)} className="mb-2">
            <span className="text-[15px] font-bold tracking-[0.18em] text-[#ff385c] uppercase">
              Real People. Real Opportunities.
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            {...enter(0.05, 20)}
            className="text-3xl font-black tracking-tight text-white lg:text-[#131b4d] sm:text-5xl md:text-[52px] leading-[1.08]"
          >
            Everyone Deserves <br />
            a <span className="text-[#ff385c]">Second Chance.</span>
          </motion.h1>

          {/* Subtitle / Description */}
          <motion.div {...enter(0.15)} className="mt-4 space-y-3">
            <p className="text-base font-semibold text-white/90 lg:text-[#131b4d] sm:text-base">
              Bad credit? No credit? Bankruptcy or consumer proposal?
            </p>
            <p className="text-base font-normal text-white/90 lg:text-[#131b4d] sm:text-base leading-relaxed max-w-lg">
              Carma Credit helps Canadians explore auto financing options and get back on the road.
            </p>
          </motion.div>

          {/* Call to Action Button */}
          <motion.div {...enter(0.25)} className="mt-14 lg:mt-7">
            <Link
              href="/financing"
              className="inline-flex items-center space-x-2 rounded-full bg-[#ff385c] px-7 py-3.5 text-base sm:text-base font-bold text-white shadow-lg shadow-[#ff385c]/20 transition-all duration-300 hover:bg-brand"
            >
              <span>Start My 2-Minute Quiz</span>
              <ArrowRight className="h-4 w-4 stroke-[2.5]" />
            </Link>
          </motion.div>

          {/* Trust Check Items */}
          <div className="flex flex-col lg:flex-row flex-wrap items-start lg:items-center gap-y-3 gap-x-6 text-base text-white/90 lg:text-[#4a4b65] font-medium mt-6">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-[#ff385c] flex items-center justify-center text-white shrink-0">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
              <span>No judgment.</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-[#ff385c] flex items-center justify-center text-white shrink-0">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
              <span>No obligation.</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-[#ff385c] flex items-center justify-center text-white shrink-0">
                <Check className="w-3 h-3 stroke-[3]" />
              </div>
              <span>Automotive financing only</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DrivewayHero;