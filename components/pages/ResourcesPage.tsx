import React from 'react';
import Image from 'next/image';
import {
    BookOpen,
    Wrench,
    HelpCircle,
    Users,
    ArrowRight,
    Calculator,
    FileText,
    MessageCircle,
    ShieldCheck
} from 'lucide-react';
import { Footer, Header } from '../layout';
import Link from 'next/link';

export default function ResourcesPage() {
    return (
        <>
            <Header />
            <div className="bg-white text-slate-900 font-sans selection:[#ff385c] selection:text-[#ff385c]">

                {/* SECTION 1: HERO */}
                <section className="bg-[#fcf8fa] pt-12 pb-16 border-b border-slate-100">
                    <div className="max-w-[1480px] px-0 sm:px-12 xl:px-16 mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                            {/* Left Content */}
                            <div className="lg:col-span-6 px-6 sm:px-0">
                                <span className="text-[#ff385c] font-bold text-md uppercase tracking-widest block px-1">
                                    RESOURCES
                                </span>
                                <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-[#1e1b4b] tracking-tight leading-[1.15] mb-3">
                                    Helpful Information <br />
                                    <span className="text-[#ff385c]">for Your Journey.</span>
                                </h1>
                                <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
                                    Guides, tools and tips to help you make confident decisions about your auto financing and get the most out of your car ownership experience.
                                </p>
                            </div>

                            {/* Right Image / Graphic mock */}
                            <div className="lg:col-span-6 relative">
                                <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white relative">
                                    {/* Simulated Laptop & Setup Graphic */}
                                    <div className="h-[280px] sm:h-[340px] bg-slate-100 relative flex items-center justify-center overflow-hidden">
                                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#98105d_1px,transparent_1px)] [background-size:16px_16px]"></div>
                                        {/* Decorative elements representing image content */}
                                        <div className="text-center z-10 p-6 bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-slate-100 max-w-sm mx-4">
                                            <p className="font-serif italic text-xl font-bold text-slate-800 mb-1">“Knowledge Drives Better Choices.”</p>
                                            <p className="text-md text-[#ff385c] font-semibold tracking-wider uppercase">Credit • Car Buying • Financing</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Quick Sub-navigation Bar */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-200/60 px-6 sm:px-0">
                            <div className="flex items-center space-x-3 group cursor-pointer">
                                <div className="w-10 h-10 rounded-full bg-[#fce7f3] text-[#ff385c] flex items-center justify-center group-hover:bg-[#ff385c] group-hover:text-white transition-colors">
                                    <BookOpen className="w-8 h-8" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-900 leading-tight">Educational Guides</h4>
                                    <p className="text-md text-slate-500">Learn at your own pace</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3 group cursor-pointer">
                                <div className="w-10 h-10 rounded-full bg-[#fce7f3] text-[#ff385c] flex items-center justify-center group-hover:bg-[#ff385c] group-hover:text-white transition-colors">
                                    <Wrench className="w-8 h-8" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-900 leading-tight">Helpful Tools</h4>
                                    <p className="text-md text-slate-500">Plan and prepare</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3 group cursor-pointer">
                                <div className="w-10 h-10 rounded-full bg-[#fce7f3] text-[#ff385c] flex items-center justify-center group-hover:bg-[#ff385c] group-hover:text-white transition-colors">
                                    <HelpCircle className="w-8 h-8" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-900 leading-tight">Common Questions</h4>
                                    <p className="text-md text-slate-500">Get clear answers</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3 group cursor-pointer">
                                <div className="w-10 h-10 rounded-full bg-[#fce7f3] text-[#ff385c] flex items-center justify-center group-hover:bg-[#ff385c] group-hover:text-white transition-colors">
                                    <Users className="w-8 h-8" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-900 leading-tight">Expert Support</h4>
                                    <p className="text-md text-slate-500">We're here to help</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* SECTION 2: GUIDES AND TOOLS GRID */}
                <section className="py-16 bg-white">
                    <div className="max-w-[1480px] px-0 sm:px-12 xl:px-16 mx-auto">

                        <div className="text-center max-w-2xl mx-auto mb-12 px-6 sm:px-0">
                            <span className="text-[#ff385c] font-bold text-md uppercase tracking-widest block mb-2">
                                EXPLORE OUR RESOURCES
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e1b4b] tracking-tight mb-3">
                                Guides and Tools for Every Step.
                            </h2>
                            <p className="text-slate-600 text-base">
                                Practical information to help you move forward with confidence.
                            </p>
                        </div>

                        {/* Cards Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 sm:px-0">

                            {/* Card 1 */}
                            <div className="bg-white rounded-xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
                                <div>
                                    <div className="h-44 bg-slate-100 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400 font-medium text-lg">
                                            {/* Placeholder image representation */}
                                            <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                                                <span className="text-md text-slate-500 font-semibold">[Understanding Credit Image]</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-[#ff385c] transition-colors">
                                            Understanding Your Credit
                                        </h3>
                                        <p className="text-slate-600 text-lg leading-relaxed">
                                            Learn how credit works and what your score means.
                                        </p>
                                    </div>
                                </div>
                                <div className="p-5 pt-0 flex justify-end">
                                    <span className="w-8 h-8 rounded-full bg-[#fce7f3] text-[#ff385c] flex items-center justify-center group-hover:bg-[#ff385c] group-hover:text-white transition-colors">
                                        <ArrowRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white rounded-xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
                                <div>
                                    <div className="h-44 bg-slate-100 relative overflow-hidden flex items-center justify-center">
                                        <span className="text-md text-slate-500 font-semibold">[What Do I Need Image]</span>
                                    </div>
                                    <div className="p-5">
                                        <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-[#ff385c] transition-colors">
                                            What Do I Need?
                                        </h3>
                                        <p className="text-slate-600 text-lg leading-relaxed">
                                            See the documents and information required to apply.
                                        </p>
                                    </div>
                                </div>
                                <div className="p-5 pt-0 flex justify-end">
                                    <span className="w-8 h-8 rounded-full bg-[#fce7f3] text-[#ff385c] flex items-center justify-center group-hover:bg-[#ff385c] group-hover:text-white transition-colors">
                                        <ArrowRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white rounded-xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
                                <div>
                                    <div className="h-44 bg-slate-100 relative overflow-hidden flex items-center justify-center">
                                        <span className="text-md text-slate-500 font-semibold">[Preventing Fraud Image]</span>
                                    </div>
                                    <div className="p-5">
                                        <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-[#ff385c] transition-colors">
                                            Preventing Auto Loan Fraud
                                        </h3>
                                        <p className="text-slate-600 text-lg leading-relaxed">
                                            Learn how to protect yourself and your information.
                                        </p>
                                    </div>
                                </div>
                                <div className="p-5 pt-0 flex justify-end">
                                    <span className="w-8 h-8 rounded-full bg-[#fce7f3] text-[#ff385c] flex items-center justify-center group-hover:bg-[#ff385c] group-hover:text-white transition-colors">
                                        <ArrowRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </div>

                            {/* Card 4 */}
                            <div className="bg-white rounded-xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
                                <div>
                                    <div className="h-44 bg-slate-100 relative overflow-hidden flex items-center justify-center">
                                        <span className="text-md text-slate-500 font-semibold">[Car Buying Process Image]</span>
                                    </div>
                                    <div className="p-5">
                                        <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-[#ff385c] transition-colors">
                                            The Car Buying Process
                                        </h3>
                                        <p className="text-slate-600 text-lg leading-relaxed">
                                            A step-by-step guide to buying a car with confidence.
                                        </p>
                                    </div>
                                </div>
                                <div className="p-5 pt-0 flex justify-end">
                                    <span className="w-8 h-8 rounded-full bg-[#fce7f3] text-[#ff385c] flex items-center justify-center group-hover:bg-[#ff385c] group-hover:text-white transition-colors">
                                        <ArrowRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </div>

                            {/* Card 5 */}
                            <div className="bg-white rounded-xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
                                <div>
                                    <div className="h-44 bg-slate-100 relative overflow-hidden flex items-center justify-center">
                                        <span className="text-md text-slate-500 font-semibold">[Budgeting Image]</span>
                                    </div>
                                    <div className="p-5">
                                        <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-[#ff385c] transition-colors">
                                            Budgeting for a Car
                                        </h3>
                                        <p className="text-slate-600 text-lg leading-relaxed">
                                            Tips to help you plan payments, insurance, and ownership costs.
                                        </p>
                                    </div>
                                </div>
                                <div className="p-5 pt-0 flex justify-end">
                                    <span className="w-8 h-8 rounded-full bg-[#fce7f3] text-[#ff385c] flex items-center justify-center group-hover:bg-[#ff385c] group-hover:text-white transition-colors">
                                        <ArrowRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </div>

                            {/* Card 6 */}
                            <div className="bg-white rounded-xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
                                <div>
                                    <div className="h-44 bg-slate-100 relative overflow-hidden flex items-center justify-center">
                                        <span className="text-md text-slate-500 font-semibold">[Newcomers Image]</span>
                                    </div>
                                    <div className="p-5">
                                        <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-[#ff385c] transition-colors">
                                            Newcomers to Canada
                                        </h3>
                                        <p className="text-slate-600 text-lg leading-relaxed">
                                            Information and tips for newcomers looking to finance a vehicle.
                                        </p>
                                    </div>
                                </div>
                                <div className="p-5 pt-0 flex justify-end">
                                    <span className="w-8 h-8 rounded-full bg-[#fce7f3] text-[#ff385c] flex items-center justify-center group-hover:bg-[#ff385c] group-hover:text-white transition-colors">
                                        <ArrowRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </div>

                            {/* Card 7 */}
                            <div className="bg-white rounded-xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
                                <div>
                                    <div className="h-44 bg-slate-100 relative overflow-hidden flex items-center justify-center">
                                        <span className="text-md text-slate-500 font-semibold">[Building Credit Image]</span>
                                    </div>
                                    <div className="p-5">
                                        <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-[#ff385c] transition-colors">
                                            Building or Rebuilding Your Credit
                                        </h3>
                                        <p className="text-slate-600 text-lg leading-relaxed">
                                            Steps you can take to improve your credit over time.
                                        </p>
                                    </div>
                                </div>
                                <div className="p-5 pt-0 flex justify-end">
                                    <span className="w-8 h-8 rounded-full bg-[#fce7f3] text-[#ff385c] flex items-center justify-center group-hover:bg-[#ff385c] group-hover:text-white transition-colors">
                                        <ArrowRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </div>

                            {/* Card 8 */}
                            <div className="bg-white rounded-xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group">
                                <div>
                                    <div className="h-44 bg-slate-100 relative overflow-hidden flex items-center justify-center">
                                        <span className="text-md text-slate-500 font-semibold">[Car Ownership Image]</span>
                                    </div>
                                    <div className="p-5">
                                        <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-[#ff385c] transition-colors">
                                            Car Ownership Tips
                                        </h3>
                                        <p className="text-slate-600 text-lg leading-relaxed">
                                            Helpful advice to keep your vehicle running smoothly for the road ahead.
                                        </p>
                                    </div>
                                </div>
                                <div className="p-5 pt-0 flex justify-end">
                                    <span className="w-8 h-8 rounded-full bg-[#fce7f3] text-[#ff385c] flex items-center justify-center group-hover:bg-[#ff385c] group-hover:text-white transition-colors">
                                        <ArrowRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

                {/* SECTION 3: OTHER HELPFUL RESOURCES (QUICK LINKS) */}
                <section className="py-16 bg-[#fcf8fa] border-t border-b border-slate-100">
                    <div className="max-w-[1480px] px-0 sm:px-12 xl:px-16 mx-auto">

                        <div className="text-center max-w-xl mx-auto mb-10 px-6 sm:px-0">
                            <span className="text-[#ff385c] font-bold text-md uppercase tracking-widest block mb-2">
                                QUICK LINKS
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1e1b4b] tracking-tight">
                                Other Helpful Resources
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 sm:px-0">

                            {/* Quick Link 1 */}
                            <div className="bg-white p-6 rounded-xl border border-slate-200/70 shadow-sm flex flex-col justify-between group hover:border-[#ff385c]/30 transition-all">
                                <div>
                                    <div className="w-10 h-10 rounded-full bg-[#fce7f3] text-[#ff385c] flex items-center justify-center mb-4 group-hover:bg-[#ff385c] group-hover:text-white transition-colors">
                                        <Calculator className="w-8 h-8" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 text-base mb-1">Check Your Credit Score</h3>
                                    <p className="text-slate-600 text-md leading-relaxed">View your score with no impact to your credit.</p>
                                </div>
                                <div className="mt-6 flex justify-end">
                                    <span className="w-6 h-6 rounded-full bg-[#fce7f3] text-[#ff385c] flex items-center justify-center group-hover:bg-[#ff385c] group-hover:text-white transition-colors">
                                        <ArrowRight className="w-3 h-3" />
                                    </span>
                                </div>
                            </div>

                            {/* Quick Link 2 */}
                            <div className="bg-white p-6 rounded-xl border border-slate-200/70 shadow-sm flex flex-col justify-between group hover:border-[#ff385c]/30 transition-all">
                                <div>
                                    <div className="w-10 h-10 rounded-full bg-[#fce7f3] text-[#ff385c] flex items-center justify-center mb-4 group-hover:bg-[#ff385c] group-hover:text-white transition-colors">
                                        <FileText className="w-8 h-8" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 text-base mb-1">Payment Estimator</h3>
                                    <p className="text-slate-600 text-md leading-relaxed">Get an idea of what your payments could be.</p>
                                </div>
                                <div className="mt-6 flex justify-end">
                                    <span className="w-6 h-6 rounded-full bg-[#fce7f3] text-[#ff385c] flex items-center justify-center group-hover:bg-[#ff385c] group-hover:text-white transition-colors">
                                        <ArrowRight className="w-3 h-3" />
                                    </span>
                                </div>
                            </div>

                            {/* Quick Link 3 */}
                            <div className="bg-white p-6 rounded-xl border border-slate-200/70 shadow-sm flex flex-col justify-between group hover:border-[#ff385c]/30 transition-all">
                                <div>
                                    <div className="w-10 h-10 rounded-full bg-[#fce7f3] text-[#ff385c] flex items-center justify-center mb-4 group-hover:bg-[#ff385c] group-hover:text-white transition-colors">
                                        <BookOpen className="w-8 h-8" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 text-base mb-1">Glossary of Terms</h3>
                                    <p className="text-slate-600 text-md leading-relaxed">Understand common auto financing terms.</p>
                                </div>
                                <div className="mt-6 flex justify-end">
                                    <span className="w-6 h-6 rounded-full bg-[#fce7f3] text-[#ff385c] flex items-center justify-center group-hover:bg-[#ff385c] group-hover:text-white transition-colors">
                                        <ArrowRight className="w-3 h-3" />
                                    </span>
                                </div>
                            </div>

                            {/* Quick Link 4 */}
                            <div className="bg-white p-6 rounded-xl border border-slate-200/70 shadow-sm flex flex-col justify-between group hover:border-[#ff385c]/30 transition-all">
                                <div>
                                    <div className="w-10 h-10 rounded-full bg-[#fce7f3] text-[#ff385c] flex items-center justify-center mb-4 group-hover:bg-[#ff385c] group-hover:text-white transition-colors">
                                        <MessageCircle className="w-8 h-8" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 text-base mb-1">FAQs</h3>
                                    <p className="text-slate-600 text-md leading-relaxed">Find quick answers to popular questions.</p>
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





            </div>
            {/* SECTION 4: YOU'RE NOT ALONE — We're Here to Help (Specialist Two-Column) */}
            {/* ========================================================================= */}
            <section className="relative w-full py-12 sm:py-16 lg:py-0 lg:mt-10 bg-white">
                <div className="w-full max-w-full mx-auto px-4 sm:px-6 lg:px-0">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
                        {/* Left Column: Specialist Photo with Script Overlay */}
                        <div className="lg:col-span-6">
                            <div className="relative w-full overflow-hidden">
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

                        {/* Right Column: Narrative & CTA */}
                        <div className="lg:col-span-6 bg-slate-50/70  p-8 rounded-2xl flex flex-col items-start justify-center">
                            <span className="text-[#ff385c] font-bold text-md uppercase tracking-widest block mb-2">
                                STILL HAVE QUESTIONS?
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1e1b4b] tracking-tight mb-3">
                                We're Here to Help.
                            </h3>
                            <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                Our team is ready to answer your questions and provide the support you need.
                            </p>
                            <Link href={"/financing"} className="bg-[#ff385c] hover:bg-brand text-white font-bold px-6 py-3 rounded-full text-lg shadow-sm transition-colors flex items-center space-x-2">
                                <span>Talk to an Auto Financing Specialist</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================================================= */}
            {/* SECTION 5: READY TO GET STARTED? (Dark Sunset Highway CTA Banner) */}
            {/* ========================================================================= */}
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
                <div className="max-w-[1480px] px-0 sm:px-12 xl:px-16 mx-auto relative z-10">
                    <div className="flex flex-col items-start justify-start gap-8 px-6 sm:px-0">

                        <div>
                            <span className="text-md uppercase tracking-widest text-pink-300 font-bold block mb-2">
                                SAME ROADS. BRIGHTER TOMORROWS.
                            </span>
                            <h2 className="text-3xl sm:text-4xl text-white font-extrabold tracking-tight mb-3">
                                Start Your Journey Today.
                            </h2>
                            <p className="text-slate-300 text-lg">
                                It only takes 2 minutes. No judgment. No obligation.
                            </p>
                        </div>

                        <div>
                            <Link href={"/financing"} className="bg-[#ff385c] hover:bg-brand text-white font-bold px-6 py-3 rounded-full text-lg shadow-sm transition-colors flex items-center space-x-2">
                                <span>Start my auto financing quiz</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}