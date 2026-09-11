import Link from "next/link";
import { FileText, MessageSquare, Handshake, CarFront, ArrowRight } from "lucide-react";

const HowItWorksSteps = () => {
  const steps = [
    {
      stepNum: "1",
      icon: <FileText className="h-10 w-10 text-white" />,
      title: "Take the 2-Minute Quiz",
      description: "Tell us a little about yourself and your current situation.",
    },
    {
      stepNum: "2",
      icon: <MessageSquare className="h-10 w-10 text-white" />,
      title: "Talk to a Credit Specialist",
      description: "We'll understand your situation and walk you through your financing options.",
    },
    {
      stepNum: "3",
      icon: <Handshake className="h-10 w-10 text-white" />,
      title: "We Work With Our Lenders",
      description: "We'll explore financing options that fit your budget and financial situation.",
    },
    {
      stepNum: "4",
      icon: <CarFront className="h-10 w-10 text-white" />,
      title: "Find Your Car",
      description: "Choose your dream vehicle from our extensive inventory network.",
    },
  ];

  return (
    <section className="w-full bg-slate-50 py-10 text-slate-900">
      <div className="mx-auto max-w-[1480px] px-6 sm:px-12 xl:px-16 text-center">

        {/* Section Header */}
        <span className="text-base font-bold text-brand uppercase tracking-widest">
          How It Works
        </span>
        <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
          Your Road Back Starts Here.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-base font-medium text-slate-600 sm:text-base">
          Getting back into the driver's seat shouldn't be stressful. Follow our simple 4-step process.
        </p>

        {/* Steps Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center p-8 pt-10"
            >
              {/* Icon & Badge Group Container */}
              <div className="relative mt-2">
                {/* Step Badge Overlapping Above Icon */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-[#ff385c] text-xs font-black text-white shadow-md ring-4 ring-white">
                  {item.stepNum}
                </div>

                {/* Icon Container */}
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#6632d6] shadow-lg shadow-[#6632d6]/30">
                  {item.icon}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="mt-6 text-lg font-bold text-slate-950">
                {item.title}
              </h3>
              <p className="mt-2 text-base font-medium text-slate-600 sm:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
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