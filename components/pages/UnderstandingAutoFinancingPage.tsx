import {
  ShieldCheck,
  Search,
  FileText,
  CheckCircle2,
  UserX,
  FileSpreadsheet,
  Cpu,
  UserCheck,
  AlertTriangle,
  Megaphone,
  ArrowRight
} from 'lucide-react';
import { Footer, Header } from '../layout';
import Image from 'next/image';
import Link from 'next/link';

export default function AutoLoanFraudPage() {
  return (
    <div className=" ">
      {/* Header wrapped to match full width */}
      <div className="w-full bg-white border-b border-slate-100 sticky top-0 z-50">
        <Header />
      </div>

      <main className="flex-grow bg-white text-slate-800  antialiased overflow-hidden min-h-screen flex flex-col  ">
        {/* SECTION 1: Hero Section */}


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
                src="/images/autoFinance.png"
                alt="Carma Credit documents checklist on desk with clipboard, car key, pen and coffee cup"
                width={1730}
                height={909}
                className="block w-full h-auto"
                priority
                unoptimized
              />
            </div>

            {/* SOFT HORIZONTAL FADE: Seamless transition located right nearby the text */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to right, #fff7fb 0%, rgba(255, 247, 251, 0.9) 5%, rgba(255, 247, 251, 0.55) 12%, rgba(255, 247, 251, 0.18) 22%, transparent 34%)",
              }}
              aria-hidden="true"
            />
          </div>

          {/* LEFT CONTENT: Vertically centered on solid light background with no overlap */}
          <div className="relative z-20 w-full max-w-[1480px] mx-auto px-6 sm:px-10 lg:pl-16 xl:pl-24 py-14 sm:py-16 lg:py-20">


            <div className="max-w-[500px] xl:max-w-[540px] flex flex-col items-start justify-center">
              <span className="text-[#ff385c] uppercase tracking-wider text-base font-bold block px-2">
                PREVENTING AUTO LOAN FRAUD
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1e1b4b] leading-tight mb-2">
                Stay Informed.<br />
                <p className='text-[#ff385c]'>Stay Protected.</p>
              </h1>
              <p className="text-slate-600 text-base sm:text-lg mb-8 leading-relaxed">
                Your safety matters. Learn how to spot, avoid and prevent auto loan fraud so you can finance your vehicle with confidence.
              </p>
              <Link href={"/financing"} className="bg-[#ff385c] hover:bg-brand text-white font-semibold px-8 py-3.5 rounded-full inline-flex items-center gap-2 transition-colors shadow-sm">
                Get Started Safely <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>


        {/* SECTION 2: What is Auto Loan Fraud? (Full-width light background tint) */}
        <section className="w-full bg-[#fdf2f8]/40 py-16">
          <div className="max-w-[1480px] px-6 sm:px-12 xl:px-16 mx-auto">
            <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-pink-100 shadow-sm">
              <div className="lg:col-span-7">
                <span className="text-[#ff385c] uppercase tracking-wider text-base font-bold block mb-2">
                  WHAT IS AUTO LOAN FRAUD?
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b] mb-6">
                  It’s More Common<br />
                  <p className='text-[#ff385c]'>Than You Think.</p>
                </h2>
                <p className="text-slate-600 text-base leading-relaxed mb-4">
                  Auto loan fraud happens when someone provides false information or uses someone else’s identity to obtain a vehicle loan. It can affect your credit, your finances and your peace of mind.
                </p>
                <p className="text-slate-600 text-base leading-relaxed">
                  Understanding the risks can help you protect yourself and ensure a smooth, secure financing experience.
                </p>
              </div>

              <div className="lg:col-span-5 bg-[#fdf2f8]/60 p-8 rounded-2xl border border-pink-100 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white text-[#ff385c] rounded-full flex items-center justify-center mb-4 shadow-sm">
                  <UserX size={32} />
                </div>
                <h3 className="font-bold text-lg text-[#1e1b4b] mb-2">Fraud can happen to anyone.</h3>
                <p className="text-slate-600 text-base">Knowledge is your best protection.</p>
              </div>
            </div>
          </div>
        </section>


        {/* SECTION 3: Types of Auto Loan Fraud */}
        <section className="w-full bg-white py-12">
          <div className="max-w-[1480px] px-6 sm:px-12 xl:px-16 mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[#ff385c] uppercase tracking-wider text-base font-bold block mb-2">
                TYPES OF AUTO LOAN FRAUD
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b] mb-3">
                Know the Common Types.
              </h2>
              <p className="text-slate-600 text-base">
                Being aware of how fraud happens can help you spot it early.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col text-center items-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-white text-[#ff385c] rounded-xl shadow-sm flex items-center justify-center mb-4">
                  <FileSpreadsheet size={36} />
                </div>
                <h3 className="font-bold text-lg text-[#1e1b4b] mb-2">Identity Theft</h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  Someone uses your personal information to apply for a loan without your consent.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col text-center items-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-white text-[#ff385c] rounded-xl shadow-sm flex items-center justify-center mb-4">
                  <FileText size={36} />
                </div>
                <h3 className="font-bold text-lg text-[#1e1b4b] mb-2">Income Fraud</h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  False or altered income documents are provided to qualify for a loan.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col text-center items-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-white text-[#ff385c] rounded-xl shadow-sm flex items-center justify-center mb-4">
                  <Cpu size={36} />
                </div>
                <h3 className="font-bold text-lg text-[#1e1b4b] mb-2">Synthetic Identity Fraud</h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  A mix of real and fake information is used to create a new identity.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col text-center items-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-white text-[#ff385c] rounded-xl shadow-sm flex items-center justify-center mb-4">
                  <UserCheck size={36} />
                </div>
                <h3 className="font-bold text-lg text-[#1e1b4b] mb-2">Straw Buyer</h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  A loan is obtained using someone else’s name, even if they don’t intend to keep the vehicle.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* SECTION 4: Tips to Stay Safe */}
        <section className="relative w-full py-12 sm:py-16 lg:py-10 bg-white">
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

              <div className='lg:col-span-6 flex flex-col items-start justify-center'>
                <span className="text-[#ff385c] uppercase tracking-wider text-base font-bold block mb-2">
                  HOW TO PROTECT YOURSELF
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b] mb-4">
                  Tips to Stay Safe.
                </h2>
                <p className="text-slate-600 text-base mb-8">
                  Follow these simple steps to reduce your risk of fraud.
                </p>

                <ul className="space-y-4">
                  {[
                    "Keep your personal information private.",
                    "Only work with licensed and reputable dealerships.",
                    "Review all documents carefully before signing.",
                    "Make sure the information on your application is accurate.",
                    "Monitor your credit report regularly.",
                    "Report any suspicious activity immediately."
                  ].map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-[#ff385c] mt-0.5"><CheckCircle2 size={18} /></span>
                      <span className="text-slate-700 text-base font-medium">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>


        {/* SECTION 5: Watch for Red Flags & See Something Suspicious */}
        <section className="w-full bg-white py-16">
          <div className="max-w-[1480px] px-6 sm:px-12 xl:px-16 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7">
                <span className="text-[#ff385c] uppercase tracking-wider text-base font-bold block mb-2">
                  WARNING SIGNS
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1e1b4b] mb-2">
                  Watch for Red Flags.
                </h2>
                <p className="text-slate-600 text-base mb-6">
                  Be cautious if you notice any of the following:
                </p>

                <ul className="space-y-3">
                  {[
                    "You’re asked to sign blank or incomplete documents.",
                    "The terms of the loan are unclear or seem too good to be true.",
                    "A dealer or third party pressures you to provide false information.",
                    "You’re asked to use someone else’s name or income.",
                    "You’re not given a copy of your signed documents.",
                    "The vehicle, loan details or lender information don’t match."
                  ].map((flag, idx) => (
                    <li key={idx} className="flex items-start gap-3 bg-pink-50/40 p-3 rounded-xl border border-pink-100/50">
                      <span className="text-[#ff385c] mt-0.5 shrink-0"><AlertTriangle size={18} /></span>
                      <span className="text-slate-700 text-base font-medium">{flag}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="bg-[#fdf2f8]/70 border border-pink-200 rounded-3xl p-8 text-center flex flex-col items-center h-full justify-center">
                  <div className="w-14 h-14 bg-white text-[#ff385c] rounded-2xl shadow-sm flex items-center justify-center mb-4">
                    <Megaphone size={28} />
                  </div>
                  <h3 className="text-xl font-extrabold text-[#1e1b4b] mb-3">See Something Suspicious?</h3>
                  <p className="text-slate-600 text-base leading-relaxed mb-6">
                    If you think you’ve been targeted by fraud or notice suspicious activity, contact us right away. We’re here to help and guide you through the next steps.
                  </p>
                  <Link href={"/contact-us"} className="bg-[#ff385c] hover:bg-brand text-white font-semibold text-base px-6 py-3 rounded-full inline-flex items-center gap-2 transition-colors shadow-sm">
                    Talk to Our Team <ArrowRight size={16} />
                  </Link>
                  <p className="text-[15px] text-slate-400 mt-4">Your security is important to us</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* SECTION 6: Bottom Banner Section */}
        <section className="relative w-full overflow-hidden bg-[#080b18] py-10 sm:py-12 lg:py-14">
          {/* Background Image on Right Side */}
          <div className="absolute inset-y-0 right-0 w-full lg:w-[58%] overflow-hidden pointer-events-none opacity-85 lg:opacity-100">
            <Image
              src="/images/what_do_i_need_sunset_hd.png"
              alt="Carma Credit auto financing specialist meeting with customer"
              width={1730}
              height={909}
              className="block w-full h-auto"
              priority
              unoptimized
            />

            {/* Smooth gradient blend into the dark left side */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#080b18] via-[#080b18]/60 to-transparent"
              aria-hidden="true"
            />
          </div>

          {/* Content on the Dark Left Side */}
          <div className="relative z-10 w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl lg:max-w-2xl xl:max-w-3xl flex flex-col items-start justify-center">
              <span className="text-[15px] sm:text-[12px] font-bold tracking-[0.2em] text-slate-300 uppercase mb-2 sm:mb-2.5">
                Ready To Get Started?
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-extrabold text-white tracking-tight leading-tight mb-2 sm:mb-3 whitespace-normal lg:whitespace-nowrap">
                Your Next Car is Closer Than You Think.
              </h2>

              <p className="text-slate-300 text-base sm:text-base lg:text-[15px] leading-normal mb-5 sm:mb-6">
                It only takes 2 minutes. No judgment. No obligation.
              </p>

              <div>
                <a
                  href="/financing"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-[#ff385c] hover:bg-brand active:bg-[#8e145a] text-white font-semibold text-[13.5px] sm:text-[14.5px] transition-colors duration-150 shadow-md"
                >
                  <span>Start My Auto Financing Quiz</span>
                  <span className="text-base leading-none">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer wrapped to match full width */}
      <div className="w-full bg-slate-900 text-white mt-auto">
        <Footer />
      </div>
    </div>
  );
}