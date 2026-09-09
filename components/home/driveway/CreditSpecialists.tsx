import Image from "next/image";

export default function CreditSpecialists() {
  const specialists = [
    {
      name: "Jas",
      role: "Auto Financing Specialist",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "“Here to find solutions together.”",
    },
    {
      name: "Simran",
      role: "Auto Financing Specialist",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      quote: "“Your goals are our priority.”",
    },
    {
      name: "Aman",
      role: "Auto Financing Specialist",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      quote: "“Let's get you back on the road.”",
    },
  ];

  return (
    <section className="bg-[#FAF4F5] py-16 px-6 md:px-8 lg:px-8 relative overflow-hidden">
      <div className="mx-auto max-w-[1480px] px-0 sm:px-12 xl:px-16">
        {/* Header Content */}
        <div className="text-center relative mb-16">
          <p className="text-xs md:text-sm font-semibold tracking-widest text-[#B83269] uppercase mb-2">
            Meet The Team
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A2E] tracking-tight">
            Your Auto Financing Specialists Are Here to Help.
          </h2>

          {/* Top Right Decorative Text & Underline */}
          <div className="hidden lg:block absolute -right-8 top-0 text-right">
            <p className="font-handwriting text-xl text-[#1A1A2E] italic transform rotate-3">
              Real People.
            </p>
            <p className="font-handwriting text-xl text-[#1A1A2E] italic transform rotate-3">
              Real Support.
            </p>
            <div className="w-24 h-1 bg-[#B83269] rounded-full mt-1 ml-auto transform -rotate-2" />
          </div>
        </div>

        {/* Specialists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-center">
          {specialists.map((person, index) => (
            <div key={index} className="flex flex-col items-center group">
              {/* Image & Quote Row Container */}
              <div className="flex items-center gap-4 w-full justify-center">
                {/* Photo Card */}
                <div className="relative w-full max-w-[240px] h-64 md:h-72 bg-gray-200 rounded-2xl overflow-hidden shadow-sm shrink-0">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>

                {/* Quote on the Right */}
                <div className="max-w-[130px]">
                  <p className="font-handwriting text-base md:text-lg text-[#1A1A2E] italic leading-tight">
                    {person.quote}
                  </p>
                </div>
              </div>

              {/* Details */}
              <div className="w-full max-w-[380px] mt-4 text-left px-2">
                <h3 className="text-xl font-bold text-[#1A1A2E]">
                  {person.name}
                </h3>
                <p className="text-sm text-gray-600 font-medium">
                  {person.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}