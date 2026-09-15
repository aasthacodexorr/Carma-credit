/* =========================
   Reviews Component (Home)
   Instagram-story-style customer review carousel.
========================= */

"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

import { getConstants } from "@/constants";
import { useAppConfig } from "@/app/providers";
import { Reveal } from "@/components/common";

type Review = {
  name: string;
  location?: string;
  vehicle: string;
  image: string;
  text: string;
};

const reviews: Review[] = [
  {
    name: "Sarah K.",
    vehicle: "2024 Toyota RAV4",
    image: "/images/r3.png",
    text: "I was turned down before and honestly didn't think I'd get approved. Carma Credit made everything easy. I still can't believe I got the car I wanted!",
  },
  {
    name: "Michael T.",
    vehicle: "2024 Ford F-150",
    image: "/images/r1.png",
    text: "I needed a truck for work but my credit wasn't perfect. They were just focused on helping me get approved and into the right truck. Loving my F-150!",
  },
  {
    name: "Danielle R.",
    vehicle: "2024 Nissan Rogue",
    image: "/images/r5.png",
    text: "As a mom, I needed something reliable with room for my kids. Carma Credit listened to what I needed and helped me get into my Rogue. So thankful!",
  },
  {
    name: "Andre & Nicole B.",
    vehicle: "2024 Genesis",
    image: "/images/r4.png",
    text: "We thought our credit situation would limit our options. The team explained everything and helped us find a beautiful Genesis. The whole experience was better than we expected.",
  },
  {
    name: "Marcus & Jayden W.",
    vehicle: "2024 RAM",
    image: "/images/r2.png",
    text: "My son and I came in not knowing what was possible. They worked with us, kept it simple and got us into this RAM. Can't believe we got the truck!",
  },
  {
    name: "Maria S.",
    location: "North York, ON",
    vehicle: "2024 Toyota Corolla",
    image: "/images/toyota.png",
    text: "I just wanted a reliable car and a payment that worked for me. They made the process so easy and helped me get my Corolla. Thank you Carma Credit!",
  },
  {
    name: "Tanya J.",
    location: "Etobicoke, ON",
    vehicle: "2024 GMC Terrain",
    image: "/images/r6.png",
    text: "I work long shifts and really needed a dependable SUV. I had some credit challenges, but they treated me with respect and helped me get approved for my Terrain.",
  },
  {
    name: "Chris & Ashley M.",
    location: "Hamilton, ON",
    vehicle: "2024 Jeep Wrangler Rubicon",
    image: "/images/r7.png",
    text: "We always wanted a Wrangler but didn’t think we could make it work. Carma Credit helped us understand our options and got us into our dream Jeep!",
  },
  {
    name: "Brianna C.",
    vehicle: "2024 Mercedes-Benz GLC",
    image: "/images/r8.png",
    text: "I still can't believe this is my car! I thought my credit meant I had to settle. Carma Credit helped me get approved and into the Mercedes I really wanted.",
  },
  {
    name: "Jennifer L.",
    vehicle: "2024 Nissan Sentra",
    image: "/images/r9.png",
    text: "I needed a safe, reliable car for me and my daughter. They didn't judge my situation — they just helped. Now we have our Sentra and I couldn't be happier.",
  },
];

const Reviews = () => {
  const appConfig = useAppConfig();
  const { SITE_CONFIG } = getConstants(appConfig);

  const scrollRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);
  const paused = useRef(false);

  const [slidesToShow, setSlidesToShow] = useState(3);
  const [activeDot, setActiveDot] = useState(0);

  const duplicatedReviews = [...reviews, ...reviews, ...reviews];
  const totalDots = Math.ceil(reviews.length / slidesToShow);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 767) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getScrollAmount = () => {
    if (!scrollRef.current) return 0;

    const firstChild = scrollRef.current.querySelector("[data-slide]");

    return firstChild
      ? (firstChild as HTMLElement).clientWidth
      : scrollRef.current.clientWidth / slidesToShow;
  };

  const updateActiveDot = () => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = getScrollAmount();
    if (!scrollAmount) return;

    const singleSetWidth = scrollAmount * reviews.length;

    const normalizedScroll =
      ((container.scrollLeft - singleSetWidth) % singleSetWidth + singleSetWidth) %
      singleSetWidth;

    const cardIndex =
      Math.round(normalizedScroll / scrollAmount) % reviews.length;

    setActiveDot(cardIndex);
  };

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current || isScrolling.current) return;

    const container = scrollRef.current;
    const scrollAmount = getScrollAmount();

    if (!scrollAmount) return;

    const targetScrollLeft =
      dir === "left"
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

    isScrolling.current = true;

    container.scrollTo({
      left: targetScrollLeft,
      behavior: "smooth",
    });

    // Keep the lock only for the duration of the smooth scroll.
    window.setTimeout(() => {
      isScrolling.current = false;
      updateActiveDot();
    }, 500);
  };

  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    const scrollAmount = getScrollAmount();

    if (!scrollAmount) return;

    const singleSetWidth = scrollAmount * reviews.length;

    // Start on the middle copy.
    container.style.scrollBehavior = "auto";
    container.scrollLeft = singleSetWidth;

    setActiveDot(0);

    const handleScroll = () => {
      updateActiveDot();

      const currentScrollAmount = getScrollAmount();
      const currentSetWidth = currentScrollAmount * reviews.length;

      if (!currentSetWidth) return;

      // Infinite carousel — jump back to the middle copy.
      if (container.scrollLeft >= currentSetWidth * 2 - 10) {
        container.style.scrollBehavior = "auto";
        container.scrollLeft -= currentSetWidth;
        container.style.scrollBehavior = "smooth";
      } else if (container.scrollLeft <= currentScrollAmount) {
        container.style.scrollBehavior = "auto";
        container.scrollLeft += currentSetWidth;
        container.style.scrollBehavior = "smooth";
      }

      updateActiveDot();
    };

    container.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [slidesToShow, totalDots]);

  useEffect(() => {
    if (window.location.hash !== "#reviews") return;

    const timer = window.setTimeout(() => {
      document
        .getElementById("reviews")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 80);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) {
        scroll("right");
      }
    }, 6000);

    return () => clearInterval(id);
  }, [slidesToShow]);

  const arrowClass =
    "flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full border border-black/10 bg-white text-[#121212] transition-transform hover:scale-105 hover:border-[#ff385c] hover:text-[#ff385c]";

  return (
    <section
      id="reviews"
      className="dw-font w-full scroll-mt-[72px] py-12 md:py-16 lg:scroll-mt-[80px] xl:scroll-mt-[93px]"
      onMouseEnter={() => {
        paused.current = true;
      }}
      onMouseLeave={() => {
        paused.current = false;
      }}
    >
      <div className="mx-auto max-w-[1480px] px-5 sm:px-12 xl:px-14">
        <Reveal className="mb-8 flex flex-col items-start justify-between gap-4 md:mb-10 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-[13px] font-bold uppercase tracking-[1.5px] text-brand">
              Real Customers. Real Stories.
            </p>

            <h2 className="max-w-[560px] text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold leading-[1.15] tracking-[-0.6px] text-[#0F1B3D]">
              People Like You. Approved for What&apos;s Next.
            </h2>
          </div>
        </Reveal>

        <div className="relative px-0 md:px-4">
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Previous review"
            className={`${arrowClass} absolute left-0 top-[38%] z-10 hidden -translate-y-1/2 md:flex`}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div
            ref={scrollRef}
            className="w-full snap-x snap-mandatory bg-white shadow-2xl shadow-white overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <div className="flex w-full items-stretch py-1">
              {duplicatedReviews.map((r, index) => (
                <div
                  key={`${r.name}-${index}`}
                  data-slide
                  className={`snap-center shrink-0 px-2.5 ${slidesToShow === 1
                    ? "w-full"
                    : slidesToShow === 2
                      ? "w-1/2"
                      : "w-1/3"
                    }`}
                >
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-md transition-shadow ">
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={r.image}
                        alt={r.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex flex-1 flex-col p-5">
                      <p className="text-[14.5px] leading-relaxed text-[#3a3a3a]">
                        &ldquo;{r.text}&rdquo;
                      </p>

                      <div className="mt-auto pt-4">
                        <span className="block h-[3px] w-8 rounded-full bg-[#ff385c]" />

                        <h3 className="mt-3 text-[15px] font-bold text-[#0F1B3D]">
                          {r.name}
                        </h3>

                        {r.location && (
                          <p className="text-[13px] text-[#6b6b6b]">
                            {r.location}
                          </p>
                        )}

                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Next review"
            className={`${arrowClass} absolute right-0 top-[38%] z-10 hidden -translate-y-1/2 md:flex`}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-5 flex items-center justify-center gap-4 md:hidden">
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Previous review"
            className={arrowClass}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Next review"
            className={arrowClass}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dot pagination */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {Array.from({ length: reviews.length }).map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full transition-colors duration-300 ${i === activeDot ? "bg-[#ff385c]" : "bg-[#d9d9d9]"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;