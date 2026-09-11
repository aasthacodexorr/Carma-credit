"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { easeOut } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Footer, Header } from "../layout";

const creditCards = [
  {
    title: "Rebuilding Credit",
    description: "Steps you can take to improve your credit over time.",
    image: "images/a2.png",
  },
  {
    title: "New to Canada",
    description: "Information and tips for newcomers looking to finance a vehicle.",
    image: "images/a4.png",
  },
  {
    title: "Limited Credit History",
    description: "See the documents and information required to apply.",
    image: "images/a3.png",
  },
  {
    title: "Challenged Credit",
    description: "Learn how credit works and what your score means.",
    image: "images/a5.png",
  },
  {
    title: "Previous Credit Challenges",
    description: "Learn how to protect yourself and your information.",
    image: "images/a6.png",
  },
  {
    title: "Non-Prime Financing",
    description: "A step-by-step guide to buying a car with confidence.",
    image: "images/a7.png",
  },
  {
    title: "Less-Than-Perfect Credit",
    description: "Tips to help you plan payments, insurance, and ownership costs.",
    image: "images/a8.png",
  },
  {
    title: "Car Ownership Tips",
    description: "Helpful advice to keep your vehicle running smoothly for the road ahead.",
    image: "images/a9.png",
  },
];

const features = [
  {
    icon: "BookOpen",
    title: "Educational Guides",
    description: "Learn at your own pace",
  },
  {
    icon: "Wrench",
    title: "Helpful Tools",
    description: "Plan and prepare",
  },
  {
    icon: "HelpCircle",
    title: "Common Questions",
    description: "Get clear answers",
  },
  {
    icon: "Users",
    title: "Expert Support",
    description: "We're here to help",
  },
];

export default function ResourcesPage() {
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
    <>
      <Header />
      <div className="bg-white text-slate-900 selection:bg-[#ff385c] selection:text-white">
        {/* SECTION 1: HERO */}
        <section className="relative w-full overflow-hidden bg-[#fff7fb] min-h-[480px] lg:min-h-[540px] xl:min-h-[500px] flex items-center">
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
                src="/images/a1.png"
                alt="Carma Credit documents checklist on desk with clipboard, car key, pen and coffee cup"
                fill
                className="block w-full h-full object-cover lg:h-auto"
                priority
                unoptimized
              />
            </div>

            {/* MOBILE WHITE OVERLAY: Applied strictly to the absolute image container on mobile only */}
            <div
              className="absolute inset-0 bg-white/80 lg:hidden pointer-events-none z-10"
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
          <div className="relative z-20 mx-auto w-full max-w-[1480px] px-6 py-0 sm:px-12 xl:px-16 lg:-mt-20 -mt-20">
            <div className="max-w-xl">
              {/* Small Top Tagline */}
              <motion.div {...enter(0.0, 10)} className="mb-2">
                <span className="text-[15px] font-bold tracking-[0.18em] text-brand uppercase">
                  Resources
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                {...enter(0.05, 20)}
                className="text-3xl font-black tracking-tight text-[#131b4d] sm:text-5xl md:text-[52px] leading-[1.08]"
              >
                Helpful Information <br />
                for <span className="text-[#ff385c]">Your Journey.</span>
              </motion.h1>

              {/* Subtitle / Description */}
              <motion.div {...enter(0.15)} className="mt-4 space-y-3">
                <p className="text-base font-normal text-[#131b4d] sm:text-base leading-relaxed max-w-lg">
                  Guides, tools and tips to help you make confident decisions about your auto financing and get the most out of your car ownership experience.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 2: FEATURES BAR */}
        <section className="bg-white border-b border-gray-200 py-6 -mt-28 lg:-mt-2 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-2 lg:flex lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-0">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4 w-full lg:w-auto relative group">
                <div className="w-5 h-5 lg:w-11 lg:h-11 bg-[#ff385c] text-white rounded-full flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold">{index + 1}</span>
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-gray-900 m-0">
                    {feature.title}
                  </h4>
                  <p className="text-base text-gray-800 m-0">
                    {feature.description}
                  </p>
                </div>
                {index < features.length - 1 && (
                  <div className="hidden lg:block absolute right-[-24px] top-1/2 -translate-y-1/2 h-9 w-[1px] bg-gray-200" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: GUIDES AND TOOLS GRID */}
        <section className="py-16 bg-white">
          <div className="max-w-[1480px] px-6 sm:px-12 xl:px-16 mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-brand font-bold text-md uppercase tracking-widest block mb-2">
                Explore Our Resources
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b] tracking-tight mb-3">
                WHO WE HELP
              </h2>
              <p className="text-slate-600 text-base">
                Practical information to help you move forward with confidence.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {creditCards.map((card) => (
                <div
                  key={card.title}
                  className="bg-white rounded-xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
                >
                  <div>
                    <div className="h-44 bg-slate-100 relative overflow-hidden">
                      <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-[#ff385c] transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-slate-600 text-base leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                  <div className="p-5 pt-0 flex justify-end">
                    <span className="w-8 h-8 rounded-full bg-[#fce7f3] text-[#ff385c] flex items-center justify-center group-hover:bg-[#ff385c] group-hover:text-white transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: QUICK LINKS */}
        <section className="py-16 bg-[#fce7f3]/60 border-t border-b border-slate-100">
          <div className="max-w-[1480px] px-6 sm:px-12 xl:px-16 mx-auto">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-brand font-bold text-md uppercase tracking-widest block mb-2">
                Quick Links
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1e1b4b] tracking-tight">
                Other Helpful Resources
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl border border-slate-200/70 shadow-sm flex flex-col justify-between group hover:border-[#ff385c]/30 transition-all">
                <div>
                  <h3 className="font-bold text-slate-900 text-base mb-1">Check Your Credit Score</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">View your score with no impact to your credit.</p>
                </div>
                <div className="mt-6 flex justify-end">
                  <span className="w-6 h-6 rounded-full bg-[#fce7f3] text-[#ff385c] flex items-center justify-center group-hover:bg-[#ff385c] group-hover:text-white transition-colors">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200/70 shadow-sm flex flex-col justify-between group hover:border-[#ff385c]/30 transition-all">
                <div>
                  <h3 className="font-bold text-slate-900 text-base mb-1">Payment Estimator</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Get an idea of what your payments could be.</p>
                </div>
                <div className="mt-6 flex justify-end">
                  <span className="w-6 h-6 rounded-full bg-[#fce7f3] text-[#ff385c] flex items-center justify-center group-hover:bg-[#ff385c] group-hover:text-white transition-colors">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200/70 shadow-sm flex flex-col justify-between group hover:border-[#ff385c]/30 transition-all">
                <div>
                  <h3 className="font-bold text-slate-900 text-base mb-1">Glossary of Terms</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Understand common auto financing terms.</p>
                </div>
                <div className="mt-6 flex justify-end">
                  <span className="w-6 h-6 rounded-full bg-[#fce7f3] text-[#ff385c] flex items-center justify-center group-hover:bg-[#ff385c] group-hover:text-white transition-colors">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200/70 shadow-sm flex flex-col justify-between group hover:border-[#ff385c]/30 transition-all">
                <div>
                  <h3 className="font-bold text-slate-900 text-base mb-1">FAQs</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Find quick answers to popular questions.</p>
                </div>
                <div className="mt-6 flex justify-end">
                  <span className="w-6 h-6 rounded-full bg-[#fce7f3] text-[#ff385c] flex items-center justify-center group-hover:bg-[#ff385c] group-hover:text-white transition-colors">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: SPECIALIST SUPPORT */}
        <section className="relative w-full py-12 sm:py-16 lg:py-0 bg-white">
          <div className="w-full max-w-full mx-auto px-4 sm:px-6 lg:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
              {/* Left Column: Specialist Photo with Script Overlay */}
              <div className="lg:col-span-6">
                <div className="relative w-full overflow-hidden shadow-md bg-slate-100">
                  <Image
                    src="/images/what_do_i_need_specialist_hd.png"
                    alt="Carma Credit auto financing specialist meeting with customer"
                    width={1730}
                    height={909}
                    className="block w-full h-auto"
                    priority
                    unoptimized
                  />
                </div>
              </div>

              <div className="lg:col-span-6 bg-slate-50 p-8 sm:p-12 rounded-2xl flex flex-col items-start justify-center">
                <span className="text-brand font-bold text-md uppercase tracking-widest block mb-2">
                  Still Have Questions?
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1e1b4b] tracking-tight mb-3">
                  We're Here to Help.
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Our team is ready to answer your questions and provide the support you need.
                </p>
                <Link
                  href="/financing"
                  className="inline-flex items-center space-x-2 rounded-full bg-[#ff385c] px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-[#ff385c]/20 transition-all duration-300 hover:bg-brand"
                >
                  <span>Talk to an Auto Financing Specialist</span>
                  <ArrowRight className="h-4 w-4 stroke-[2.5]" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: READY TO GET STARTED? (Dark Sunset Highway CTA Banner) */}
        <section className="relative w-full overflow-hidden bg-[#080b18] py-16 sm:py-20     w-full max-w-full mx-auto px-4 sm:px-6 lg:px-0">
          <div className="absolute inset-y-0 right-0 w-full lg:w-[58%] overflow-hidden pointer-events-none opacity-85 lg:opacity-100">
            <Image
              src="/images/what_do_i_need_sunset_hd.png"
              alt="Sunset Highway"
              width={1730}
              height={909}
              className="block w-full h-full object-cover"
              unoptimized
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#080b18] via-[#080b18]/60 to-transparent"
              aria-hidden="true"
            />
          </div>

          <div className="max-w-[1480px] px-6 sm:px-12 xl:px-16 mx-auto relative z-10">
            <div className="max-w-xl">
              <span className="text-md uppercase tracking-widest text-brand font-bold block mb-2">
                Same Roads. Brighter Tomorrows.
              </span>
              <h2 className="text-3xl sm:text-4xl text-white font-extrabold tracking-tight mb-3">
                Start Your Journey Today.
              </h2>
              <p className="text-slate-300 text-lg mb-8">
                It only takes 2 minutes. No judgment. No obligation.
              </p>
              <Link
                href="/financing"
                className="inline-flex items-center space-x-2 rounded-full bg-[#ff385c] px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-[#ff385c]/20 transition-all duration-300 hover:bg-brand"
              >
                <span>Start my auto financing quiz</span>
                <ArrowRight className="h-4 w-4 stroke-[2.5]" />
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}