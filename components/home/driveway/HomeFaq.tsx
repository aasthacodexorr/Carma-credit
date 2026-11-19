"use client";

import { FaqAccordion, Reveal } from "@/components/common";
import { FAQS } from "@/constants/faqs";

const HomeFaq = () => {
  return (
    <section id="faq" className="dw-font w-full px-4 py-2 sm:px-6 md:px-10 md:py-0 mb-10 lg:mb-16">
      <div className="max-w-[1480px] px-4 sm:px-12 xl:px-16 mx-auto">
        <Reveal className="mb-8 text-center md:mb-10">
          <h2 className="text-[clamp(1.75rem,3.8vw,2.75rem)] font-bold leading-[1.15] tracking-[-0.03em] text-[#121212]">
            Frequently asked questions
          </h2>
        </Reveal>

        <FaqAccordion faqs={FAQS} />
      </div>
    </section>
  );
};

export default HomeFaq;
