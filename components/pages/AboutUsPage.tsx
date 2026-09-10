import Image from "next/image";
import { Footer, Header } from "../layout";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full overflow-hidden bg-white">

        <section className="relative w-full overflow-hidden bg-[#fff7fb] min-h-[480px] lg:min-h-[540px] xl:min-h-[580px] flex items-center">
          {/* RIGHT SIDE: Large Dealership Image starting right next to the text and extending to the right edge */}
          <div className="absolute inset-y-0 right-0 w-full lg:w-[60%] xl:w-[58%] overflow-hidden pointer-events-none">
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
                src="/images/hero-building.jpg"
                alt="Carma Credit dealership building"
                fill
                priority
                className="object-cover object-center lg:object-[left_center]"
                sizes="100vw"
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
            <div className="max-w-[480px] xl:max-w-[510px] flex flex-col items-start justify-center">
              <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#ff385c] uppercase mb-4">
                About Carma Credit
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[50px] font-extrabold tracking-tight leading-[1.12] mb-5">
                <span className="text-[#131b4d] block">Real People.</span>
                <span className="text-[#ff385c] block">A Brighter Tomorrow.</span>
              </h1>

              <p className="text-[#4b5563] text-base leading-[1.65] mb-8">
                Carma Credit helps Canadians with all types of credit get approved for automotive
                financing and find the right vehicle. Because everyone deserves a second chance on
                the road.
              </p>

              <div>
                <a
                  href="#quiz"
                  className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-[#ff385c] hover:bg-brand active:bg-[#8e145a] text-white font-semibold text-[15px] transition-colors duration-150 shadow-sm"
                >
                  <span>Start My Auto Financing Quiz</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: OUR MISSION */}
        {/* ========================================================================= */}
        <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-white">
          <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Top Mission Content (Centered) */}
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
              <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#ff385c] uppercase block mb-3">
                Our Mission
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#131b4d] tracking-tight leading-[1.15] mb-4">
                Changing Lives Through
                <br />
                Auto Financing.
              </h2>
              <p className="text-[#4b5563] text-base leading-[1.65] max-w-2xl mx-auto">
                We believe a car can do more than get you from A to B – it can help you get to work,
                take care of your family, and create new opportunities. Our mission is to make
                automotive financing simple, transparent and accessible for all Canadians.
              </p>
            </div>

            {/* Clean 3-Column Values Card (Single rounded light-pink card, no shapes) */}
            <div className="w-full rounded-2xl sm:rounded-3xl bg-[#fdf5f9] border border-[#f8dfea] p-6 sm:p-8 lg:py-12 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#f2d2e1] gap-8 md:gap-0">
                {/* Column 1: People First */}
                <div className="flex flex-col items-center text-center px-4 sm:px-6">
                  <div className="w-16 h-16 rounded-full bg-[#fae2ef] flex items-center justify-center text-[#ff385c] mb-5">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      <circle cx="5" cy="9" r="2.5" />
                      <path d="M5 13.5c-1.6 0-4.5.8-4.5 2.4V18h3.3v-2.1c0-.9.4-1.7 1.2-2.4z" />
                      <circle cx="19" cy="9" r="2.5" />
                      <path d="M19 13.5c1.6 0 4.5.8 4.5 2.4V18h-3.3v-2.1c0-.9-.4-1.7-1.2-2.4z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#131b4d] mb-2">
                    People First
                  </h3>
                  <p className="text-[#4b5563] text-sm leading-[1.6] max-w-[240px]">
                    We treat every customer with respect, honesty and care.
                  </p>
                </div>

                {/* Column 2: Real Solutions */}
                <div className="flex flex-col items-center text-center px-4 sm:px-6 pt-6 md:pt-0">
                  <div className="w-16 h-16 rounded-full bg-[#fae2ef] flex items-center justify-center text-[#ff385c] mb-5">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M21.5 9.5l-3.32-3.32a2 2 0 00-2.83 0L14.2 7.33l-1.07-1.07a2 2 0 00-2.83 0L2.5 14.07a2 2 0 000 2.83l3.32 3.32a2 2 0 002.83 0l3.05-3.05 1.1 1.1a2 2 0 002.83 0l5.87-5.87a2 2 0 000-2.9zM7.24 18.81L3.91 15.5l5.87-5.87 3.32 3.32-5.86 5.86zm12.85-7.85l-5.87 5.87-2.32-2.32 2.32-2.32a1 1 0 000-1.41l-1.9-1.9 1.15-1.15a.5.5 0 01.7 0l5.92 5.92c.2.2.2.51 0 .71z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#131b4d] mb-2">
                    Real Solutions
                  </h3>
                  <p className="text-[#4b5563] text-sm leading-[1.6] max-w-[250px]">
                    We work with trusted automotive lending partners to find options that fit your situation.
                  </p>
                </div>

                {/* Column 3: Brighter Tomorrows */}
                <div className="flex flex-col items-center text-center px-4 sm:px-6 pt-6 md:pt-0">
                  <div className="w-16 h-16 rounded-full bg-[#fae2ef] flex items-center justify-center text-[#ff385c] mb-5">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.04 3H5.81l1.04-3zM19 17H5v-4.66l.12-.34h13.77l.11.34V17z" />
                      <circle cx="7.5" cy="14.5" r="1.5" />
                      <circle cx="16.5" cy="14.5" r="1.5" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#131b4d] mb-2">
                    Brighter Tomorrows
                  </h3>
                  <p className="text-[#4b5563] text-sm leading-[1.6] max-w-[240px]">
                    We help you get back on the road and move forward with confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: WHY WE DO IT / WE'VE BEEN THERE TOO. */}
        {/* ========================================================================= */}
        <section className="relative w-full py-16 sm:py-24 bg-white">
          <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Dealership Cars Image with Script Overlay */}
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="relative mx-auto w-full aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-slate-100 border border-slate-100">
                  <Image
                    src="/images/dealership-cars.jpg"
                    alt="Row of clean modern vehicles in dealership lot"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />

                  {/* Dark gradient at the bottom for script contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

                  {/* Bottom Left Script Overlay: 'Real People. Real Second Chances.' */}
                  <div className="absolute bottom-8 left-8 text-left max-w-xs pointer-events-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                    <p className="font-script text-white text-3xl sm:text-4xl font-semibold leading-tight tracking-wide transform rotate-[-3deg]">
                      Real People.
                    </p>
                    <p className="font-script text-white text-3xl sm:text-4xl font-semibold leading-tight tracking-wide transform rotate-[-3deg]">
                      Real Second Chances.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Narrative Content */}
              <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start space-y-6">
                <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#ff385c] uppercase">
                  Why We Do It
                </span>

                <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#131b4d] tracking-tight leading-[1.15]">
                  We&apos;ve Been
                  <br />
                  There Too.
                </h2>

                <div className="space-y-5 text-[#4b5563] text-base leading-[1.65]">
                  <p>
                    We know life happens. Whether it&apos;s a tough financial situation, unexpected
                    expenses or simply a lack of credit history, it can feel like the odds are stacked
                    against you. That&apos;s why we&apos;re here.
                  </p>
                  <p>
                    At Carma Credit, we&apos;re passionate about helping people move forward. We&apos;ve
                    seen firsthand how the right vehicle can make a real difference — and we&apos;re
                    committed to giving more Canadians the opportunity to a better tomorrow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: FINAL CTA ("READY TO TAKE THE NEXT STEP?") */}
        {/* (Meet the team is omitted per instruction) */}
        {/* ========================================================================= */}
        <section
          id="quiz"
          className="relative w-full py-20 sm:py-28 lg:py-32 bg-gradient-to-b from-white via-[#fef7fb] to-[#fdf1f7] overflow-hidden"
        >
          {/* Subtle Decorative Curved Pink Waves/Lines in Background matching screenshot */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <svg
              className="absolute -bottom-20 -left-20 w-[450px] h-[450px] text-[#f5c7df]"
              viewBox="0 0 400 400"
              fill="none"
            >
              <circle
                cx="200"
                cy="200"
                r="180"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="4 6"
              />
              <circle
                cx="200"
                cy="200"
                r="140"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle
                cx="200"
                cy="200"
                r="100"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
            <svg
              className="absolute -bottom-24 -right-24 w-[500px] h-[500px] text-[#f5c7df]"
              viewBox="0 0 500 500"
              fill="none"
            >
              <circle
                cx="250"
                cy="250"
                r="230"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="5 7"
              />
              <circle
                cx="250"
                cy="250"
                r="180"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle
                cx="250"
                cy="250"
                r="130"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center flex flex-col items-center">
            <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#ff385c] uppercase mb-4">
              Ready To Take The Next Step?
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-[#131b4d] tracking-tight leading-[1.15] mb-4">
              Let&apos;s Get You Approved.
            </h2>

            <p className="text-[#4b5563] text-base leading-[1.65] max-w-2xl mb-8">
              It only takes 2 minutes to get started. No judgment. No obligation.
            </p>

            <div>
              <a
                href="#quiz-start"
                className="group inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-[#ff385c] hover:bg-brand active:bg-[#8e145a] text-white font-semibold text-base sm:text-lg transition-all duration-200 shadow-md hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Start My Auto Financing Quiz</span>
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>

  );
}
