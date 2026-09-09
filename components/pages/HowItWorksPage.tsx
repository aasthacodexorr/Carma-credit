"use client";
import { ArrowRight, Check } from "lucide-react";
import { Footer, Header } from "@/components/layout";

export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <main className="bg-white text-[#1a1b35] overflow-hidden">

        {/* ================= SECTION 1: HERO ================= */}
        <section className="bg-gradient-to-b from-[#fdf4f7] to-white py-16 lg:py-24">
          <div className="max-w-[1480px] px-0 sm:px-12 xl:px-16 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

              {/* Left Content */}
              <div className="lg:col-span-6 px-6 sm:px-0 ">
                <span className="text-[#ff385c] uppercase tracking-widest text-base font-bold lg:px-1  block">
                  HOW IT WORKS
                </span>
                <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-[#1a1b35] leading-tight mb-3">
                  From Application <br />
                  <span className="text-[#ff385c]">to Car Keys.</span>
                </h1>
                <p className="text-[#4a4b65] text-base sm:text-lg mb-8 leading-relaxed max-w-xl">
                  A simple process. Real people. Real support. Carma Credit helps you get approved for automotive financing and find the right vehicle — all in one place.
                </p>

                <div className="mb-8">
                  <button className="bg-[#ff385c] hover:bg-brand cursor-pointer text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 group">
                    Start My Auto Financing Quiz
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Feature Badges */}
                <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-sm text-[#4a4b65] font-medium">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#ff385c] flex items-center justify-center text-white">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>No judgment.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#ff385c] flex items-center justify-center text-white">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>No obligation.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#ff385c] flex items-center justify-center text-white">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>Automotive financing only</span>
                  </div>
                </div>
              </div>

              {/* Right Image / Graphic Simulation */}
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-900 h-[350px] sm:h-[420px]">
                  {/* Background Dealership Image */}
                  <div className="absolute inset-0 bg-cover bg-center opacity-70" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1000')` }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Floating Elements mimicking the hero image interaction */}
                  <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-base text-gray-500 font-semibold uppercase tracking-wider">Carma Credit</p>
                      <p className="text-sm font-bold text-[#1a1b35]">Same Roads. Brighter Tomorrows.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= SECTION 2: 4-STEP PROCESS ================= */}
        <section className="py-20 bg-white">
          <div className="max-w-[1480px] px-0 sm:px-12 xl:px-16 mx-auto px-6 sm:px-0">

            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-[#ff385c] uppercase tracking-widest text-base font-bold block">
                A SIMPLE 4-STEP PROCESS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1b35]">
                Getting You on the Road is Easy.
              </h2>
              <p className="text-gray-500 mt-2 text-base">Here’s how it works:</p>
            </div>

            <div className="relative">
              {/* Vertical Line connecting steps on desktop */}
              <div className="hidden lg:block absolute left-[31px] top-12 bottom-12 w-1 bg-[#f4d1e0] z-0" />

              <div className="space-y-12 lg:space-y-16 relative z-10">

                {/* Step 1 */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#fdf4f7]/60 lg:bg-transparent p-6 sm:p-8 lg:p-0 rounded-3xl">
                  <div className="lg:col-span-7 flex items-start gap-6">
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-[#ff385c] text-white flex items-center justify-center font-bold text-xl shadow-lg relative z-10">
                        1
                      </div>
                    </div>
                    <div>
                      <div className="w-14 h-14 rounded-2xl bg-[#f4d1e0] flex items-center justify-center text-[#ff385c] mb-4">
                        {/* Document/Quiz Icon */}
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                      </div>
                      <h3 className="text-2xl font-bold text-[#1a1b35] mb-3">Take the 2-Minute Quiz</h3>
                      <p className="text-[#4a4b65] leading-relaxed max-w-lg">
                        Tell us a few details about your situation and what you’re looking for in a vehicle. It’s quick, easy and with no obligation.
                      </p>
                    </div>
                  </div>
                  <div className="lg:col-span-5 flex justify-center lg:justify-end">
                    <div className="bg-white p-4 rounded-3xl shadow-xl border border-gray-100 max-w-[280px] w-full text-center relative">
                      <div className="bg-[#fdf4f7] rounded-2xl p-6 flex flex-col items-center justify-center h-48 border border-[#f4d1e0]">
                        <span className="font-bold text-[#ff385c] text-lg mb-1">CARMA</span>
                        <span className="text-base text-gray-400 mb-4">CREDIT</span>
                        <div className="bg-white py-2 px-4 rounded-full text-base font-bold text-[#ff385c] shadow-sm">
                          Start Quiz →
                        </div>
                      </div>
                      <span className="absolute -right-16 top-1/2 -translate-y-1/2 text-base font-bold text-[#ff385c] rotate-12 hidden sm:block">
                        It only takes 2 minutes.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#fdf4f7]/60 lg:bg-transparent p-6 sm:p-8 lg:p-0 rounded-3xl">
                  <div className="lg:col-span-7 flex items-start gap-6">
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-[#ff385c] text-white flex items-center justify-center font-bold text-xl shadow-lg relative z-10">
                        2
                      </div>
                    </div>
                    <div>
                      <div className="w-14 h-14 rounded-2xl bg-[#f4d1e0] flex items-center justify-center text-[#ff385c] mb-4">
                        {/* Chat Bubble Icon */}
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                      </div>
                      <h3 className="text-2xl font-bold text-[#1a1b35] mb-3">Meet Your Auto Financing Specialist</h3>
                      <p className="text-[#4a4b65] leading-relaxed max-w-lg">
                        A real person from our team will review your information, discuss your needs and explain your car loan options.
                      </p>
                    </div>
                  </div>
                  <div className="lg:col-span-5 flex justify-center lg:justify-end">
                    <div className="bg-white p-3 rounded-3xl shadow-xl border border-gray-100 max-w-[280px] w-full relative overflow-hidden">
                      <div className="h-40 rounded-2xl overflow-hidden relative">
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600')` }} />
                      </div>
                      <span className="absolute -right-16 top-1/2 -translate-y-1/2 text-base font-bold text-[#ff385c] rotate-12 hidden sm:block">
                        Real people. Real support.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#fdf4f7]/60 lg:bg-transparent p-6 sm:p-8 lg:p-0 rounded-3xl">
                  <div className="lg:col-span-7 flex items-start gap-6">
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-[#ff385c] text-white flex items-center justify-center font-bold text-xl shadow-lg relative z-10">
                        3
                      </div>
                    </div>
                    <div>
                      <div className="w-14 h-14 rounded-2xl bg-[#f4d1e0] flex items-center justify-center text-[#ff385c] mb-4">
                        {/* Handshake Icon */}
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                      </div>
                      <h3 className="text-2xl font-bold text-[#1a1b35] mb-3">We Work With Automotive Lenders</h3>
                      <p className="text-[#4a4b65] leading-relaxed max-w-lg">
                        We work with trusted automotive lending partners to find an option that fits your unique situation.
                      </p>
                    </div>
                  </div>
                  <div className="lg:col-span-5 flex justify-center lg:justify-end">
                    <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100 max-w-[280px] w-full text-center relative">
                      <div className="grid grid-cols-2 gap-4 items-center py-6">
                        <span className="font-extrabold text-red-600 tracking-tighter text-sm">Scotiabank</span>
                        <span className="font-extrabold text-emerald-700 tracking-tighter text-sm">TD</span>
                        <span className="font-extrabold text-blue-800 tracking-tighter text-sm">BMO</span>
                        <span className="font-extrabold text-blue-600 tracking-tighter text-base">RBC</span>
                      </div>
                      <p className="text-[10px] text-gray-400 mt-2">and more...</p>
                      <span className="absolute -right-20 top-1/2 -translate-y-1/2 text-base font-bold text-[#ff385c] rotate-12 hidden sm:block">
                        More opportunities for you.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#fdf4f7]/60 lg:bg-transparent p-6 sm:p-8 lg:p-0 rounded-3xl">
                  <div className="lg:col-span-7 flex items-start gap-6">
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-[#ff385c] text-white flex items-center justify-center font-bold text-xl shadow-lg relative z-10">
                        4
                      </div>
                    </div>
                    <div>
                      <div className="w-14 h-14 rounded-2xl bg-[#f4d1e0] flex items-center justify-center text-[#ff385c] mb-4">
                        {/* Car Icon */}
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" /></svg>
                      </div>
                      <h3 className="text-2xl font-bold text-[#1a1b35] mb-3">Find Your Vehicle</h3>
                      <p className="text-[#4a4b65] leading-relaxed max-w-lg">
                        Once you’re approved, we’ll help you find the right vehicle from our network of 2,500+ quality vehicles.
                      </p>
                    </div>
                  </div>
                  <div className="lg:col-span-5 flex justify-center lg:justify-end">
                    <div className="bg-white p-3 rounded-3xl shadow-xl border border-gray-100 max-w-[280px] w-full relative overflow-hidden">
                      <div className="h-40 rounded-2xl overflow-hidden relative">
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=600')` }} />
                      </div>
                      <span className="absolute -right-20 top-1/2 -translate-y-1/2 text-base font-bold text-[#ff385c] rotate-12 hidden sm:block">
                        From approval to keys.
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ================= SECTION 3: WHY CHOOSE CARMA CREDIT ================= */}
        <section className="bg-[#fdf4f7] py-20">
          <div className="max-w-[1480px] px-0 sm:px-12 xl:px-16 mx-auto px-6 sm:px-0">

            <h2 className="text-3xl font-extrabold text-center text-[#1a1b35] mb-12">
              Why Choose Carma Credit?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

              {/* Card 1 */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-pink-100 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-[#fdf4f7] flex items-center justify-center text-[#ff385c] mb-6">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div>
                <h3 className="font-bold text-lg text-[#1a1b35] mb-2">Real People Who Care</h3>
                <p className="text-base text-gray-500 leading-relaxed">
                  You’re more than a credit score to us.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-pink-100 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-[#fdf4f7] flex items-center justify-center text-[#ff385c] mb-6">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <h3 className="font-bold text-lg text-[#1a1b35] mb-2">Trusted Lending Partners</h3>
                <p className="text-base text-gray-500 leading-relaxed">
                  We work with major automotive lenders across Canada.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-pink-100 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-[#fdf4f7] flex items-center justify-center text-[#ff385c] mb-6">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="font-bold text-lg text-[#1a1b35] mb-2">Canadian and Local</h3>
                <p className="text-base text-gray-500 leading-relaxed">
                  Proudly helping Canadians get back on the road.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-pink-100 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-[#fdf4f7] flex items-center justify-center text-[#ff385c] mb-6">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
                <h3 className="font-bold text-lg text-[#1a1b35] mb-2">A Brighter Tomorrow</h3>
                <p className="text-base text-gray-500 leading-relaxed">
                  More than a car. More opportunities ahead.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ================= SECTION 4: READY TO GET STARTED BANNER ================= */}
        <section className="bg-[#1a1b35] py-20 relative overflow-hidden text-white">
          <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1600')` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1b35] via-[#1a1b35]/90 to-transparent" />

          <div className="max-w-[1480px] px-0 sm:px-12 xl:px-16 mx-auto px-6 sm:px-0 relative z-10">
            <div className="max-w-xl">
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-gray-300 text-sm sm:text-base mb-8">
                It only takes 2 minutes. No commitment. No judgment.
              </p>
              <button className="bg-[#ff385c] hover:bg-brand text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 group">
                Start My Auto Financing Quiz
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>


  );
}
