import React from "react";

const TrustPerksBar = () => {
  const perks = [
    {
      icon: "/images/car.png",
      title: "2,500+ Vehicles",
    },
    {
      icon: "/images/people.png",
      // Using a non-breaking space between Lending and Partners forces them onto the second line together
      title: "Trusted Lending\u00A0Partners",
    },
    {
      icon: "/images/deal.png",
      title: "Across Canada",
    },
    {
      icon: "/images/verified.png",
      title: "Real People Who Care",
    },
  ];

  return (
    <section className="w-full bg-white border-b border-slate-200 py-6 shadow-sm">
      <div className="mx-auto max-w-[1480px] px-2 sm:px-12 xl:px-16">
        {/* Forces 4 columns across all screens with vertical dividers on desktop */}
        <div className="grid grid-cols-4 gap-2 lg:gap-6 lg:divide-x lg:divide-slate-200">
          {perks.map((perk, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center justify-center space-y-2 lg:px-6 first:lg:pl-0 last:lg:pr-0"
            >
              <div className="flex w-9 h-9 sm:w-12 sm:h-12 lg:h-14 lg:w-14 shrink-0 p-1 items-center justify-center rounded-xl">
                <img
                  src={perk.icon}
                  alt={perk.title}
                  className="h-full w-full object-contain"
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(34%) sepia(95%) saturate(3637%) hue-rotate(328deg) brightness(101%) contrast(101%)",
                  }}
                />
              </div>
              <div>
                {/* Expanded max-w and adjusted text size to ensure it neatly breaks into exactly 2 lines */}
                <p className="text-[11px] text-center sm:text-sm lg:text-lg font-medium lg:font-bold text-[#131b4d] leading-tight max-w-[70px] sm:max-w-[130px] lg:max-w-[150px]">
                  {perk.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustPerksBar;