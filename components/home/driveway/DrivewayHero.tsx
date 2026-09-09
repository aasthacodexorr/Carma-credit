"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { easeOut } from "./motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import heroImg from "@/assets/cars/heroImg.jpg";

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
    <section className="relative min-h-[560px] lg:min-h-[400px] w-full overflow-hidden bg-[#0d151c] text-white flex items-center">
      {/* Background Image Container with Overlay */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <Image
          src={heroImg}
          alt="Happy driver holding car keys"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-95 contrast-[1.05]"
        />
        {/* Soft dark gradient overlays mimicking the exact reference banner */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1218] via-[#0b1218]/80 to-transparent lg:w-[65%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1218] via-transparent to-[#0b1218]/40" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1480px] px-6 py-12 sm:px-12 xl:px-16">
        <div className="max-w-xl">

          {/* Small Top Tagline */}
          <motion.div {...enter(0.0, 10)} className="mb-2">
            <span className="text-[11px] font-bold tracking-[0.18em] text-[#ff385c] uppercase">
              Real People. Real Opportunities.
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            {...enter(0.05, 20)}
            className="text-3xl font-black tracking-tight text-white sm:text-5xl md:text-[52px] leading-[1.08]"
          >
            Everyone Deserves <br />
            a <span className="text-[#ff385c]">Second Chance.</span>
          </motion.h1>

          {/* Subtitle / Description */}
          <motion.div {...enter(0.15)} className="mt-4 space-y-3">
            <p className="text-sm font-semibold text-white/90 sm:text-base">
              Bad credit? No credit? Bankruptcy or consumer proposal?
            </p>
            <p className="text-xs font-normal text-slate-300 sm:text-sm leading-relaxed max-w-lg">
              Carma Credit helps Canadians explore auto financing options and get back on the road.
            </p>
          </motion.div>

          {/* Call to Action Button */}
          <motion.div {...enter(0.25)} className="mt-7">
            <Link
              href="/financing"
              className="inline-flex items-center space-x-2 rounded-full bg-[#ff385c] px-7 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#ff385c]/20 transition-all duration-300 hover:bg-brand hover:scale-105"
            >
              <span>Start My 2-Minute Quiz</span>
              <ArrowRight className="h-4 w-4 stroke-[2.5]" />
            </Link>
          </motion.div>

          {/* Trust Check Items */}
          <motion.div
            {...enter(0.35)}
            className="mt-6 flex flex-wrap items-center gap-6 text-xs font-medium text-slate-200"
          >
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="h-4 w-4 text-[#ff385c]" />
              <span>No judgment</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="h-4 w-4 text-[#ff385c]" />
              <span>No obligation</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="h-4 w-4 text-[#ff385c]" />
              <span>Just options</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default DrivewayHero;