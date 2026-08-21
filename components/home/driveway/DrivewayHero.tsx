"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { easeOut } from "./motion";
import { Search, DollarSign, Car, CheckCircle2 } from "lucide-react";
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
    <section className="relative min-h-[640px] w-full overflow-hidden bg-slate-950 text-white">
      {/* Background Image Container with Overlay */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <Image
          src={heroImg}
          alt="Carma car hauler truck with blue car"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-90 contrast-[1.05]"
        />
        {/* Gradient overlays to match contrast and legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 mx-auto flex max-w-[1480px] flex-col justify-between px-6 pb-8 pt-12 sm:px-12 md:pb-12 md:pt-16 xl:px-16">
        <div className="max-w-2xl">
          {/* Main Headline */}
          <motion.h1
            {...enter(0.05, 20)}
            className="text-3xl font-black uppercase leading-[1.02] tracking-tight text-white sm:text-5xl md:text-[54px]"
          >
            SELL AND <br />
            FINANCE QUALITY <br />
            USED CARS <br />
            ONLINE
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            {...enter(0.15)}
            className="mt-5 max-w-xl text-sm font-semibold text-slate-100 sm:text-base md:text-lg"
          >
            Compare financing options, or sell your car with a real offer from
            Carma experts.
          </motion.p>
        </div>

        {/* Feature Cards Grid */}
        <motion.div
          {...enter(0.35)}
          className="mt-12 grid gap-4 md:grid-cols-2"
        >
          {/* Blue Financing Card */}
          <div className="group flex cursor-pointer flex-col justify-between rounded-2xl bg-[#ff385c] p-5 shadow-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-[#ff3d68] hover:to-[#ffb3c1] hover:text-slate-900 sm:flex-row sm:items-center">
            <div className="flex items-center space-x-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#6632d6] text-white transition-colors duration-300 group-hover:bg-white group-hover:text-[#6632d6]">
                <DollarSign className="h-6 w-6 stroke-[2.5]" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white transition-colors duration-300 group-hover:text-slate-950 sm:text-lg">
                  Financing Made Simple
                </h3>
                <p className="text-wrap text-xs text-blue-100 transition-colors duration-300 group-hover:text-slate-800 sm:text-sm">
                  Apply online and review available options from our <br className="hidden lg:block"/> lending partners.
                </p>
              </div>
            </div>
            <Link
              href="/financing"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-[#6632d6] px-5 py-3 text-xs text-white transition-all duration-300 hover:scale-105 group-hover:bg-slate-950 group-hover:text-white sm:mt-0 sm:text-sm"
            >
              Get pre approved
            </Link>
          </div>

          {/* Purple Sell/Trade Card */}
          <div className="group flex cursor-pointer flex-col justify-between rounded-2xl bg-white p-5 text-black shadow-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-[#ff3d68] hover:to-[#ffb3c1] sm:flex-row sm:items-center">
            <div className="flex items-center space-x-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-black transition-colors duration-300 group-hover:bg-slate-950 group-hover:text-white">
                <Car className="h-6 w-6 stroke-[2.5]" />
              </div>
              <div>
                <h3 className="text-base font-bold transition-colors duration-300 group-hover:text-slate-950 sm:text-lg">
                  Sell or trade your car
                </h3>
                <p className="text-xs transition-colors duration-300 group-hover:text-slate-800 sm:text-sm">
                  Get a real offer in under 2 minutes
                </p>
              </div>
            </div>
            <Link
              href="/trade-in-my-car"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-[#6632d6] px-5 py-3 text-xs text-white transition-all duration-300 hover:scale-105 group-hover:bg-slate-950 group-hover:text-white sm:mt-0 sm:text-sm"
            >
              Sell my car
            </Link>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          {...enter(0.4)}
          className="mt-6 flex flex-wrap gap-6 text-xs font-bold text-white sm:text-sm"
        >
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="h-4 w-4 text-[#6632d6]" />
            <span>No hidden fees</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="h-4 w-4 text-[#6632d6]" />
            <span>Quality inspected</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="h-4 w-4 text-[#6632d6]" />
            <span>Extended warranties</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DrivewayHero;