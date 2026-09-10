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

export default function AutoLoanFraudPage() {
  return (
    <div className=" ">
      {/* Header wrapped to match full width */}
      <div className="w-full bg-white border-b border-slate-100 sticky top-0 z-50">
          <Header />
      </div>

      <main className="flex-grow bg-white text-slate-800 font-sans antialiased overflow-hidden min-h-screen flex flex-col  ">
        {/* SECTION 1: Hero Section */}
        <section className="w-full bg-white py-12 md:py-16">
          <div className="max-w-[1480px] px-6 sm:px-12 xl:px-16 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Text Column */}
              <div>
                <span className="text-[#9333ea] uppercase tracking-wider text-base font-bold block mb-3">
                  PREVENTING AUTO LOAN FRAUD
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1e1b4b] leading-tight mb-6">
                  Stay Informed.<br />
                  <p className='text-[#ff385c]'>Stay Protected.</p>
                </h1>
                <p className="text-slate-600 text-base sm:text-lg mb-8 leading-relaxed">
                  Your safety matters. Learn how to spot, avoid and prevent auto loan fraud so you can finance your vehicle with confidence.
                </p>
                <button className="bg-[#ff385c] hover:bg-opacity-90 text-white font-semibold px-8 py-3.5 rounded-full inline-flex items-center gap-2 transition-colors shadow-sm">
                  Get Started Safely <ArrowRight size={18} />
                </button>
              </div>

              {/* Right Image/Banner Column */}
              <div className="relative h-[320px] sm:h-[380px] lg:h-[420px] rounded-3xl overflow-hidden bg-slate-900 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent z-10" />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-2xl">
                  <div className="w-32 h-44 bg-slate-900 rounded-xl border border-slate-700 p-3 flex flex-col justify-between items-center text-white shadow-inner">
                    <div className="w-8 h-1 bg-slate-700 rounded-full" />
                    <div className="grid grid-cols-2 gap-2 w-full px-2">
                      <div className="w-6 h-6 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center text-[10px]">🔓</div>
                      <div className="w-6 h-6 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center text-[10px]">🔒</div>
                    </div>
                    <div className="text-[9px] text-slate-400 tracking-widest">CARMA</div>
                  </div>
                </div>
                <div className="absolute right-6 bottom-6 z-20 text-right text-white">
                  <p className="text-base tracking-widest text-slate-300 uppercase">Same Roads.</p>
                  <p className="text-lg font-bold">Brighter Tomorrows.</p>
                </div>
              </div>
            </div>

            {/* Feature Indicator Badges Sub-Bar */}
            <div className="mt-12 pt-8 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-pink-50 text-[#ff385c]"><ShieldCheck size={28} /></div>
                <div>
                  <h4 className="font-bold text-base text-[#1e1b4b]">Be Aware</h4>
                  <p className="text-base text-slate-500">Learn the risks</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-pink-50 text-[#ff385c]"><Search size={28} /></div>
                <div>
                  <h4 className="font-bold text-base text-[#1e1b4b]">Know the Signs</h4>
                  <p className="text-base text-slate-500">Spot red flags</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-pink-50 text-[#ff385c]"><FileText size={28} /></div>
                <div>
                  <h4 className="font-bold text-base text-[#1e1b4b]">Protect Your Information</h4>
                  <p className="text-base text-slate-500">Keep your data safe</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-pink-50 text-[#ff385c]"><CheckCircle2 size={28} /></div>
                <div>
                  <h4 className="font-bold text-base text-[#1e1b4b]">Finance with Confidence</h4>
                  <p className="text-base text-slate-500">Work with trusted professionals</p>
                </div>
              </div>
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
        <section className="w-full bg-white py-16">
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
        <section className="w-full bg-slate-50 py-16">
          <div className="max-w-[1480px] px-6 sm:px-12 xl:px-16 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative bg-slate-900 rounded-3xl overflow-hidden min-h-[340px] flex items-end p-8 shadow-md">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent z-10" />
                <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop")' }} />
                <div className="relative z-20">
                  <p className="text-[#ff385c] font-bold text-base tracking-wider uppercase mb-1">Real People.</p>
                  <p className="text-white text-2xl font-extrabold">Real Support.</p>
                </div>
              </div>

              <div>
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
                  <button className="bg-[#ff385c] hover:bg-opacity-90 text-white font-semibold text-base px-6 py-3 rounded-full inline-flex items-center gap-2 transition-colors shadow-sm">
                    Talk to Our Team <ArrowRight size={16} />
                  </button>
                  <p className="text-[11px] text-slate-400 mt-4">Your security is important to us</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* SECTION 6: Bottom Banner Section */}
        <section className="w-full bg-white py-12">
          <div className="max-w-[1480px] px-6 sm:px-12 xl:px-16 mx-auto">
            <div className="relative rounded-3xl overflow-hidden bg-slate-900 text-white p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row justify-between items-center gap-8 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/40 z-10" />

              <div className="relative z-20 max-w-xl text-center lg:text-left">
                <span className="text-[#ff385c] uppercase tracking-wider text-base font-bold block mb-2">
                  DRIVE FORWARD WITH CONFIDENCE
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
                  Safe Financing. A Brighter Tomorrow.
                </h2>
                <p className="text-slate-300 text-base">
                  Get the information you need and finance with peace of mind.
                </p>
              </div>

              <div className="relative z-20 shrink-0">
                <button className="bg-[#ff385c] hover:bg-opacity-90 text-white font-semibold px-8 py-3.5 rounded-full inline-flex items-center gap-2 transition-colors shadow-md">
                  Start My Auto Financing Quiz <ArrowRight size={18} />
                </button>
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