'use client';

import { useMemo, useState } from 'react';
import {
    Calculator,
    SlidersHorizontal,
    Gauge,
    Car,
    Percent,
    DollarSign,
    Landmark,
    CalendarDays,
    Info,
    Check,
} from 'lucide-react';
import { Footer, Header } from '../layout';
import Image from 'next/image';

// ---- Brand tokens (match the reference design) ----------------------------
const PINK = '#ff385c';
const NAVY = '#1B2A4E';
const PANEL_PINK = '#FCEEF4';
const SECTION_GRAY = '#F4F5F7';

const WRAPPER = 'max-w-[1480px] px-4 sm:px-12 xl:px-16 mx-auto';

const TERM_OPTIONS = [24, 36, 48, 60, 72];

// ---- Field limits (min/max + how many characters the user can type) ------
const FIELD_LIMITS = {
    vehiclePrice: { min: 5000, max: 100000, allowDecimal: false },
    downPayment: { min: 0, max: 50000, allowDecimal: false },
    apr: { min: 0, max: 29.99, allowDecimal: true },
} as const;

// maxLength is derived from how many characters the max value needs
// (e.g. "100000" -> 6, "50000" -> 5, "29.99" -> 5). This stops someone
// from physically typing something like "4546546546456.1".
const FIELD_MAX_LENGTH = {
    vehiclePrice: String(FIELD_LIMITS.vehiclePrice.max).length, // 6
    downPayment: String(FIELD_LIMITS.downPayment.max).length, // 5
    apr: String(FIELD_LIMITS.apr.max).length, // 5 ("29.99")
};

function formatCurrency(value: number, fractionDigits = 0) {
    return value.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: fractionDigits,
        maximumFractionDigits: fractionDigits,
    });
}

function calculateMonthlyPayment(principal: number, aprPercent: number, termMonths: number) {
    if (principal <= 0 || termMonths <= 0) return 0;
    const monthlyRate = aprPercent / 100 / 12;
    if (monthlyRate === 0) return principal / termMonths;
    const factor = Math.pow(1 + monthlyRate, termMonths);
    return (principal * monthlyRate * factor) / (factor - 1);
}

function clamp(value: number, min: number, max: number) {
    if (Number.isNaN(value)) return min;
    return Math.min(Math.max(value, min), max);
}

// Strips illegal characters, collapses leading zeros ("05" -> "5", but
// keeps a single "0" or "0." so the user can still type "0.5"), and caps
// the string length.
function sanitizeNumberInput(raw: string, allowDecimal: boolean, maxLength: number) {
    let val = raw.replace(allowDecimal ? /[^0-9.]/g : /[^0-9]/g, '');

    if (allowDecimal) {
        const firstDot = val.indexOf('.');
        if (firstDot !== -1) {
            val = val.slice(0, firstDot + 1) + val.slice(firstDot + 1).replace(/\./g, '');
        }
    }

    // Remove leading zeros unless it's "0" on its own or "0." for decimals
    val = val.replace(/^0+(?=\d)/, '');

    if (val.length > maxLength) {
        val = val.slice(0, maxLength);
    }

    return val;
}

const DEFAULTS = {
    vehiclePrice: 25000,
    downPayment: 2500,
    term: 48,
    apr: 9.99,
};

export default function PaymentCalculator() {
    // Each numeric field keeps a raw string (what's shown in the box) plus
    // the parsed number used for calculations. Clamping to min/max only
    // happens on blur, so the user isn't fighting the field while typing.
    const [vehiclePriceInput, setVehiclePriceInput] = useState<string>(String(DEFAULTS.vehiclePrice));
    const [downPaymentInput, setDownPaymentInput] = useState<string>(String(DEFAULTS.downPayment));
    const [aprInput, setAprInput] = useState<string>(String(DEFAULTS.apr));
    const [term, setTerm] = useState<number>(DEFAULTS.term);

    const vehiclePrice = parseFloat(vehiclePriceInput) || 0;
    const downPayment = parseFloat(downPaymentInput) || 0;
    const apr = parseFloat(aprInput) || 0;

    const amountFinanced = Math.max(vehiclePrice - downPayment, 0);
    const monthlyPayment = useMemo(
        () => calculateMonthlyPayment(amountFinanced, apr, term),
        [amountFinanced, apr, term]
    );

    const handleReset = () => {
        setVehiclePriceInput(String(DEFAULTS.vehiclePrice));
        setDownPaymentInput(String(DEFAULTS.downPayment));
        setAprInput(String(DEFAULTS.apr));
        setTerm(DEFAULTS.term);
    };

    // Generic change handler for a text-based number field
    const handleNumberChange =
        (setter: (v: string) => void, allowDecimal: boolean, maxLength: number) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setter(sanitizeNumberInput(e.target.value, allowDecimal, maxLength));
        };

    // Clamp + reformat on blur so the final value always respects min/max
    const handleNumberBlur =
        (setter: (v: string) => void, min: number, max: number, decimals: number) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const parsed = parseFloat(e.target.value);
            const clamped = clamp(parsed, min, max);
            setter(decimals > 0 ? clamped.toFixed(decimals) : String(clamped));
        };

    // Range sliders always show the clamped value, even while the text box
    // temporarily holds something out of range mid-typing.
    const vehiclePriceForSlider = clamp(vehiclePrice, FIELD_LIMITS.vehiclePrice.min, FIELD_LIMITS.vehiclePrice.max);
    const downPaymentForSlider = clamp(downPayment, FIELD_LIMITS.downPayment.min, FIELD_LIMITS.downPayment.max);
    const aprForSlider = clamp(apr, FIELD_LIMITS.apr.min, FIELD_LIMITS.apr.max);

    return (
        <>
            <Header />
            <div className="bg-white">
                {/* ---------------- Hero ---------------- */}
                <section className="relative w-full overflow-hidden bg-[#fff7fb] min-h-[420px] sm:min-h-[480px] lg:min-h-[540px] xl:min-h-[580px] flex items-center py-12 lg:py-0">
                    {/* RIGHT SIDE: Large Dealership Image */}
                    <div className="absolute inset-y-0 right-0 w-full lg:w-[60%] xl:w-[55%] overflow-hidden pointer-events-none opacity-20 lg:opacity-100">
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
                                src="/images/PC1.png"
                                alt="Carma Credit dealership building"
                                fill
                                priority
                                className="object-cover object-center lg:object-[left_center]"
                                sizes="100vw"
                            />
                        </div>

                        <div
                            className="absolute inset-0 pointer-events-none bg-transparent"
                            style={{
                                background:
                                    "linear-gradient(to right, #fff7fb 0%, rgba(255, 247, 251, 0.9) 5%, rgba(255, 247, 251, 0.55) 12%, rgba(255, 247, 251, 0.18) 22%, transparent 34%)",
                            }}
                            aria-hidden="true"
                        />
                    </div>

                    {/* LEFT CONTENT */}
                    <div className="relative z-20 w-full">
                        <div className={`${WRAPPER} grid grid-cols-1 lg:grid-cols-2 gap-10 items-center`}>
                            <div>
                                <p className="text-sm font-bold tracking-[0.09em] mb-3 text-brand">
                                    PAYMENT CALCULATOR
                                </p>
                                <h1
                                    className="text-3xl sm:text-4xl lg:text-[3.4rem] font-bold leading-[1.1] mb-4 sm:mb-5"
                                    style={{ color: NAVY }}
                                >
                                    See What Your Payments Could{' '}
                                    <span style={{ color: PINK }}>Look Like.</span>
                                </h1>
                                <p className="text-base sm:text-lg text-gray-600">
                                    Use our payment calculator to estimate your monthly payments.
                                    Adjust the numbers to see what works for your budget.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ---------------- Calculator ---------------- */}
                <section className="py-10 md:py-16">
                    <div className={`${WRAPPER} grid grid-cols-1 lg:grid-cols-3 gap-6`}>
                        {/* Form */}
                        <div className="lg:col-span-2 rounded-2xl border border-gray-200 p-6 sm:p-8">
                            <h2 className="text-2xl font-bold mb-6" style={{ color: NAVY }}>
                                Calculate Your Payment
                            </h2>

                            <div className="space-y-6">
                                {/* Vehicle Price */}
                                <div className="flex flex-col lg:flex-row gap-2 items-center justify-center">
                                    <div className="w-full lg:w-1/2">
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Vehicle Price
                                        </label>
                                        <div className="relative mb-3">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                                $
                                            </span>
                                            <input
                                                type="text"
                                                inputMode="numeric"
                                                maxLength={FIELD_MAX_LENGTH.vehiclePrice}
                                                value={vehiclePriceInput}
                                                onChange={handleNumberChange(
                                                    setVehiclePriceInput,
                                                    false,
                                                    FIELD_MAX_LENGTH.vehiclePrice
                                                )}
                                                onFocus={(e) => e.target.select()}
                                                onBlur={handleNumberBlur(
                                                    setVehiclePriceInput,
                                                    FIELD_LIMITS.vehiclePrice.min,
                                                    FIELD_LIMITS.vehiclePrice.max,
                                                    0
                                                )}
                                                className="w-full pl-7 pr-3 py-2.5 rounded-lg border border-gray-300 outline-none focus:ring-2"
                                                style={{ ['--tw-ring-color' as any]: PINK }}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-1/2 lg:mt-6">
                                        <input
                                            type="range"
                                            min={FIELD_LIMITS.vehiclePrice.min}
                                            max={FIELD_LIMITS.vehiclePrice.max}
                                            step={500}
                                            value={vehiclePriceForSlider}
                                            onChange={(e) => setVehiclePriceInput(e.target.value)}
                                            className="w-full"
                                            style={{ accentColor: PINK }}
                                        />
                                        <div className="flex justify-between text-xs text-gray-400 mt-1">
                                            <span>$5,000</span>
                                            <span>$100,000</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Down Payment */}
                                <div className="flex flex-col lg:flex-row gap-2 items-center justify-center w-full">
                                    <div className="w-full lg:w-1/2">
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Down Payment
                                        </label>
                                        <div className="relative mb-3">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                                $
                                            </span>
                                            <input
                                                type="text"
                                                inputMode="numeric"
                                                maxLength={FIELD_MAX_LENGTH.downPayment}
                                                value={downPaymentInput}
                                                onChange={handleNumberChange(
                                                    setDownPaymentInput,
                                                    false,
                                                    FIELD_MAX_LENGTH.downPayment
                                                )}
                                                onFocus={(e) => e.target.select()}
                                                onBlur={handleNumberBlur(
                                                    setDownPaymentInput,
                                                    FIELD_LIMITS.downPayment.min,
                                                    FIELD_LIMITS.downPayment.max,
                                                    0
                                                )}
                                                className="w-full pl-7 pr-3 py-2.5 rounded-lg border border-gray-300 outline-none focus:ring-2"
                                                style={{ ['--tw-ring-color' as any]: PINK }}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-1/2 lg:mt-6">
                                        <input
                                            type="range"
                                            min={FIELD_LIMITS.downPayment.min}
                                            max={FIELD_LIMITS.downPayment.max}
                                            step={500}
                                            value={downPaymentForSlider}
                                            onChange={(e) => setDownPaymentInput(e.target.value)}
                                            className="w-full"
                                            style={{ accentColor: PINK }}
                                        />
                                        <div className="flex justify-between text-xs text-gray-400 mt-1">
                                            <span>$0</span>
                                            <span>$50,000</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Loan Term */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                                        Loan Term
                                    </label>
                                    <div className="flex flex-wrap gap-2">
                                        {TERM_OPTIONS.map((m) => (
                                            <button
                                                key={m}
                                                type="button"
                                                onClick={() => setTerm(m)}
                                                className="px-4 py-2.5 rounded-lg border text-sm font-medium transition-colors"
                                                style={
                                                    term === m
                                                        ? {
                                                              borderColor: PINK,
                                                              color: PINK,
                                                              backgroundColor: PANEL_PINK,
                                                          }
                                                        : {
                                                              borderColor: '#D1D5DB',
                                                              color: '#374151',
                                                              backgroundColor: 'white',
                                                          }
                                                }
                                            >
                                                {m} Months
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* APR */}
                                <div className="flex flex-col lg:flex-row gap-2 items-center justify-center w-full">
                                    <div className="w-full lg:w-1/2">
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Interest Rate (APR)
                                        </label>
                                        <div className="relative mb-3">
                                            <input
                                                type="text"
                                                inputMode="decimal"
                                                maxLength={FIELD_MAX_LENGTH.apr}
                                                value={aprInput}
                                                onChange={(e) => {
                                                    const value = sanitizeNumberInput(
                                                        e.target.value,
                                                        true,
                                                        FIELD_MAX_LENGTH.apr
                                                    );

                                                    const numericValue = parseFloat(value);

                                                    if (!Number.isNaN(numericValue) && numericValue > FIELD_LIMITS.apr.max) {
                                                        // setAprInput(String(FIELD_LIMITS.apr.max));
                                                        return;
                                                    }
                                                    setAprInput(value);
                                                }}
                                                onFocus={(e) => e.target.select()}
                                                // onBlur={handleNumberBlur(
                                                //     setAprInput,
                                                //     FIELD_LIMITS.apr.min,
                                                //     FIELD_LIMITS.apr.max,
                                                //     2
                                                // )}
                                                className="w-full pl-3 pr-8 py-2.5 rounded-lg border border-gray-300 outline-none focus:ring-2"
                                                style={{ ['--tw-ring-color' as any]: PINK }}
                                            />
                                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                                                %
                                            </span>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-1/2 lg:mt-6">
                                        <input
                                            type="range"
                                            min={FIELD_LIMITS.apr.min}
                                            max={FIELD_LIMITS.apr.max}
                                            step={0.01}
                                            value={aprForSlider}
                                            onChange={(e) => setAprInput(e.target.value)}
                                            className="w-full"
                                            style={{ accentColor: PINK }}
                                        />
                                        <div className="flex justify-between text-xs text-gray-400 mt-1">
                                            <span>0%</span>
                                            <span>29.99%</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 pt-2">
                                    <button
                                        type="button"
                                        onClick={handleReset}
                                        className="text-sm font-medium text-gray-500 hover:text-gray-700"
                                    >
                                        ↺ Reset
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Output panel */}
                        <div
                            className="rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
                            style={{ backgroundColor: PANEL_PINK }}
                        >
                            <div>
                                <p className="text-base lg:text-2xl font-bold text-gray-600 mb-4">
                                    Your Estimated Payment
                                </p>
                                <h3 className="text-4xl sm:text-5xl font-extrabold mb-1 text-brand">
                                    {formatCurrency(monthlyPayment)}
                                </h3>
                                <p className="text-base mb-6 text-gray-600">per month</p>

                                <div className="divide-y divide-pink-100 border-t border-pink-100">
                                    <Row label="Vehicle Price" value={formatCurrency(vehiclePrice)} />
                                    <Row
                                        label="Down Payment"
                                        value={`- ${formatCurrency(downPayment)}`}
                                    />
                                    <Row
                                        label="Amount Financed"
                                        value={formatCurrency(amountFinanced)}
                                    />
                                    <Row label="APR (Interest Rate)" value={`${apr.toFixed(2)}%`} />
                                    <Row label="Term" value={`${term} Months`} />
                                </div>
                            </div>

                            <div className="mt-6 rounded-xl bg-white/70 p-4 flex gap-3">
                                <Info className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: PINK }} />
                                <p className="text-xs text-gray-600 leading-relaxed">
                                    This is an estimate only. Actual rates, terms and payments may
                                    vary based on your credit profile, income and lender approval.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ---------------- Feature cards ---------------- */}
                <section className="pb-10 md:pb-16">
                    <div className={`${WRAPPER} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8`}>
                        <FeatureCard
                            icon={<Calculator className="w-6 h-6" style={{ color: PINK }} />}
                            title="Plan With Confidence"
                            description="See how different prices, terms and rates can affect your payments."
                        />
                        <FeatureCard
                            icon={<SlidersHorizontal className="w-6 h-6" style={{ color: PINK }} />}
                            title="Explore Your Options"
                            description="Adjust the numbers to find what fits your budget."
                        />
                        <FeatureCard
                            icon={<Gauge className="w-6 h-6" style={{ color: PINK }} />}
                            title="No Credit Impact"
                            description="This calculator is a planning tool and does not affect your credit score."
                        />
                        <FeatureCard
                            icon={<Car className="w-6 h-6" style={{ color: PINK }} />}
                            title="One Step Closer"
                            description="When you're ready, take our 2-minute quiz to see your real options."
                        />
                    </div>
                </section>

                {/* ---------------- Factors ---------------- */}
                <section className="py-10 md:py-14 max-w-[1480px] mx-auto px-4 sm:px-12 xl:px-16">
                    <div
                        className={
                            'py-10 px-6  rounded-2xl  max-w-[1480px] mx-auto px-4 sm:px-12 xl:px-16'
                        }
                        style={{ backgroundColor: SECTION_GRAY }}
                    >
                        <h3 className="text-2xl font-bold mb-2" style={{ color: NAVY }}>
                            Factors That Can Affect Your Payment
                        </h3>
                        <p className="text-gray-600 mb-8">
                            Your actual payment may be different based on:
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                            <FactorItem
                                icon={<Gauge className="w-6 h-6" style={{ color: PINK }} />}
                                label="Your credit history"
                            />
                            <FactorItem
                                icon={<CalendarDays className="w-6 h-6" style={{ color: PINK }} />}
                                label="Loan term (length)"
                            />
                            <FactorItem
                                icon={<Percent className="w-6 h-6" style={{ color: PINK }} />}
                                label="Interest rate (APR)"
                            />
                            <FactorItem
                                icon={<DollarSign className="w-6 h-6" style={{ color: PINK }} />}
                                label="Down payment amount"
                            />
                            <FactorItem
                                icon={<Car className="w-6 h-6" style={{ color: PINK }} />}
                                label="Vehicle type (new or used)"
                            />
                            <FactorItem
                                icon={<Landmark className="w-6 h-6" style={{ color: PINK }} />}
                                label="Lender and program options"
                            />
                        </div>
                    </div>
                </section>

                {/* ---------------- CTA ---------------- */}
                <section className="relative w-full overflow-hidden bg-[#080b18] py-10 sm:py-12 lg:py-14">
                    <div className="absolute inset-y-0 right-0 w-full lg:w-[58%] overflow-hidden pointer-events-none opacity-40 lg:opacity-100">
                        <Image
                            src="/images/PC2.png"
                            alt="Carma Credit auto financing specialist meeting with customer"
                            fill
                            className="block w-full h-auto"
                            priority
                            unoptimized
                        />
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-[#080b18] via-[#080b18]/60 to-transparent"
                            aria-hidden="true"
                        />
                    </div>

                    <div className="relative z-10 w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-xl lg:max-w-2xl xl:max-w-3xl flex flex-col items-start justify-center">
                            <h2 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[34px] font-extrabold text-white tracking-tight leading-tight mb-2 sm:mb-3">
                                Ready to see what you could qualify for?
                            </h2>
                            <p className="text-white text-base leading-normal mb-5 sm:mb-6">
                                Our 2-minute auto financing quiz gives you personalized options with no impact to your credit score.
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

                            <div className="flex flex-col lg:flex-row flex-wrap items-start lg:items-center gap-y-3 gap-x-6 text-base text-white font-medium mt-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded-full bg-[#ff385c] flex items-center justify-center text-white shrink-0">
                                        <Check className="w-3 h-3 stroke-[3]" />
                                    </div>
                                    <span>No judgment.</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded-full bg-[#ff385c] flex items-center justify-center text-white shrink-0">
                                        <Check className="w-3 h-3 stroke-[3]" />
                                    </div>
                                    <span>No obligation.</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded-full bg-[#ff385c] flex items-center justify-center text-white shrink-0">
                                        <Check className="w-3 h-3 stroke-[3]" />
                                    </div>
                                    <span>Automotive financing only</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}

function Row({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex items-center justify-between py-3 text-base">
            <span className="text-gray-600 font-semibold">{label}</span>
            <span className="font-bold" style={{ color: NAVY }}>
                {value}
            </span>
        </div>
    );
}

function FeatureCard({
    icon,
    title,
    description,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
}) {
    return (
        <div className="text-center">
            <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: PANEL_PINK }}
            >
                {icon}
            </div>
            <h4 className="font-bold mb-2" style={{ color: NAVY }}>
                {title}
            </h4>
            <p className="text-sm text-gray-600 max-w-[220px] mx-auto">{description}</p>
        </div>
    );
}

function FactorItem({ icon, label }: { icon: React.ReactNode; label: string }) {
    return (
        <div className="flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                {icon}
            </div>
            <p className="text-sm font-medium text-gray-700">{label}</p>
        </div>
    );
}
    