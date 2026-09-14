import { Sprout } from "lucide-react";
import { Users, Car, MapPin, Headphones, CarFront } from "lucide-react";

const TrustPerksBar = () => {
  const perks = [
    {
      icon: "/images/people.png",
      title: "Trusted Lending Partners",
    },
    {
      icon: "/images/car.png",
      title: "2,500+ Vehicles",
    },
    {
      icon: "/images/deal.png",
      title: "Dealer Network Across Canada",
    },
    {
      icon: "/images/specialist.png",
      title: "Real Credit Specialists",
    },
  ];

  return (
    <section className="w-full bg-white border-b border-slate-200 py-6 shadow-sm">
      <div className="mx-auto max-w-[1480px] px-6 sm:px-12 xl:px-16">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:divide-x lg:divide-slate-200">
          {perks.map((perk, index) => (
            <div key={index} className="flex items-center space-x-3 lg:px-6 first:lg:pl-0 last:lg:pr-0">
              <div className="flex h-18 w-18 shrink-0 p-1 items-center justify-center rounded-xl bg-slate-100">
                <img src={perk.icon} className="text-green-500"/>
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 sm:text-base leading-tight">
                  {perk.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustPerksBar;