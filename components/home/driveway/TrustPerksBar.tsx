import React from "react";

const TrustPerksBar = () => {
  const perks = [
    {
      icon: "/images/car.png",
      title: "2,500+ Vehicles",
    },
    {
      icon: "/images/people.png",
      title: "Trusted Lending Partners",
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
    <section className="w-full border-b border-slate-200 bg-white py-6 shadow-sm">
      <div className="mx-auto max-w-[1480px] px-2 sm:px-12 xl:px-16">
        <div className="grid grid-cols-4 gap-2 lg:gap-6 lg:divide-x lg:divide-slate-200">
          {perks.map((perk, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-start text-center lg:px-6 first:lg:pl-0 last:lg:pr-0"
            >
              {/* Icon Container */}
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full sm:h-12 sm:w-12 lg:h-16 lg:w-16 bg-[#ff385c]/20">
                <div
                  className="h-full w-full bg-[#ff385c]"
                  style={{
                    maskImage: `url(${perk.icon})`,
                    WebkitMaskImage: `url(${perk.icon})`,
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                    maskSize: "50%", // Uniform scaling for all icons
                    WebkitMaskSize: "45%",
                  }}
                />
              </div>

              {/* Text Container with fixed height/flex alignment to match start lines */}
              <div className="mt-2 flex h-10 sm:h-12 items-start justify-center">
                <p className="w-full max-w-[90px] text-[11px] font-medium leading-tight text-[#131b4d] sm:max-w-[135px] sm:text-sm lg:text-base lg:font-bold">
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