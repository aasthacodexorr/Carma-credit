import Image from "next/image";
import Link from "next/link";
import { CarFront, ArrowRight, ArrowDown } from "lucide-react";

const HowItWorksSteps = () => {
  const steps = [
    {
      stepNum: "1",
      icon: "/images/icon_1.svg",
      title: "Take the 2-Minute Quiz",
      description:
        "Tell us a little about yourself and your current situation.",
    },
    {
      stepNum: "2",
      icon: "/images/icon_2.svg",
      title: "Talk to a Credit Specialist",
      description:
        "We'll understand your situation and walk you through your financing options.",
    },
    {
      stepNum: "3",
      icon: "/images/icon_3.svg",
      title: "We Work With Our Lenders",
      description:
        "We'll explore financing options that fit your budget and financial situation.",
    },
    {
      stepNum: "4",
      icon: null,
      title: "Find Your Car",
      description:
        "Choose your dream vehicle from our extensive inventory network.",
    },
  ];

  return (
    <section className="w-full bg-slate-50 py-10 text-slate-900">
      <div className="mx-auto max-w-[1480px] px-6 text-center sm:px-12 xl:px-16">
        {/* Section Header */}
        <span className="text-base font-bold uppercase tracking-widest text-brand">
          How It Works
        </span>

        <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
          Your Road Back Starts Here.
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-base font-medium text-slate-600">
          Getting back into the driver's seat shouldn't be stressful. Follow
          our simple 4-step process.
        </p>

        {/* Steps Grid */}
        <div className="mt-14 lg:mt-10 grid gap-24 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-8">
          {steps.map((item, index) => (
            <div
              key={item.stepNum}
              className="relative flex flex-col items-center px-4 pt-0 lg:px-8 lg:pt-10"
            >
              {/* Desktop Arrow */}
              {index < steps.length - 1 && (
                <ArrowRight
                  className="absolute -right-5 top-[84px] z-20 hidden h-7 w-7 text-slate-900 lg:block"
                  strokeWidth={2}
                />
              )}

              {/* Mobile Arrow */}
              {index < steps.length - 1 && (
                <ArrowDown
                  className="absolute bottom-[-53px] left-1/2 z-20 block h-6 w-6 -translate-x-1/2 text-slate-900 lg:hidden"
                  strokeWidth={2}
                />
              )}

              {/* Icon & Badge */}
              <div className="relative mt-2">
                {/* Step Badge */}
                <div className="absolute -top-3 left-1/2 z-10 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full bg-[#ff385c] text-xs font-black text-white shadow-md ring-4 ring-white">
                  {item.stepNum}
                </div>

                {/* Icon Container */}
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#FF385C]/20">
                  {item.icon ? (
                    <Image
                      src={item.icon}
                      alt=""
                      width={40}
                      height={40}
                      className="h-10 w-10 object-contain"
                    />
                  ) : (
                    <CarFront className="h-10 w-10 text-[#FF385C]" strokeWidth={1.5}  />
                  )}
                </div>
              </div>

              {/* Title */}
              <h3 className="mt-6 text-lg font-bold text-slate-950">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-2 max-w-xs text-base font-medium leading-relaxed text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12">
          <Link
            href="/financing"
            className="inline-flex items-center space-x-2 rounded-full bg-[#ff385c] px-8 py-4 text-base font-bold text-white shadow-xl shadow-[#ff385c]/30 transition-all duration-300 hover:bg-brand"
          >
            <span>Start My 2-Minute Quiz</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSteps;