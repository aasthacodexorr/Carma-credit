import Link from "next/link";
import { FileText, MessageSquare, Handshake, CarFront, ArrowRight } from "lucide-react";

const HowItWorksSteps = () => {
  const steps = [
    {
      stepNum: "1",
      icon: <FileText className="h-8 w-8 text-white" />,
      title: "Take the 2-Minute Quiz",
      description: "Tell us a little about yourself and your current situation.",
    },
    {
      stepNum: "2",
      icon: <MessageSquare className="h-8 w-8 text-white" />,
      title: "Talk to a Credit Specialist",
      description: "We'll understand your situation and walk you through transparent options.",
    },
    {
      stepNum: "3",
      icon: <Handshake className="h-8 w-8 text-white" />,
      title: "We Work With Our Lenders",
      description: "We'll explore customized financing plans that match your financial comfort.",
    },
    {
      stepNum: "4",
      icon: <CarFront className="h-8 w-8 text-white" />,
      title: "Find Your Car",
      description: "Choose your dream vehicle from our extensive inventory network.",
    },
  ];

  return (
    <section className="w-full bg-slate-50 py-10 text-slate-900">
      <div className="mx-auto max-w-[1480px] px-6 sm:px-12 xl:px-16 text-center">

        {/* Section Header */}
        <span className="text-xs font-bold uppercase tracking-widest text-[#6632d6]">
          How It Works
        </span>
        <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
          Your Road Back Starts Here.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm font-medium text-slate-600 sm:text-base">
          Getting back into the driver's seat shouldn't be stressful. Follow our simple 4-step process.
        </p>

        {/* Steps Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/50 border border-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Step Badge */}
              <div className="absolute -top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#ff385c] text-xs font-black text-white shadow-md">
                {item.stepNum}
              </div>

              {/* Icon Container */}
              <div className="mt-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#6632d6] shadow-lg shadow-[#6632d6]/30">
                {item.icon}
              </div>

              {/* Title & Description */}
              <h3 className="mt-6 text-lg font-bold text-slate-950">
                {item.title}
              </h3>
              <p className="mt-2 text-xs font-medium text-slate-600 sm:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="mt-12">
          <Link
            href="/financing"
            className="inline-flex items-center space-x-2 rounded-full bg-[#ff385c] px-8 py-4 text-sm font-bold text-white shadow-xl shadow-[#ff385c]/30 transition-all duration-300 hover:bg-brand"
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