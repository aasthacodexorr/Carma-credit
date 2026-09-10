import Image from "next/image";

export default function CreditSpecialists() {
  const specialists = [
    {
      name: "Jas",
      role: "Auto Financing Specialist",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      quote: "“Here to find solutions together.”",
    },
    {
      name: "Simran",
      role: "Auto Financing Specialist",
      image: "https://images.unsplash.com/photo-1560087637-bf797bc7796a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      quote: "“Your goals are our priority.”",
    },
    {
      name: "Aman",
      role: "Auto Financing Specialist",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      quote: "“Let's get you back on the road.”",
    },
  ];

  return (
    <section className="bg-[#FAF4F5] py-16 lg:py-10 px-6 md:px-8 lg:px-8 relative overflow-hidden">
      <div className="mx-auto max-w-[1480px] px-0 sm:px-12 xl:px-16">
        {/* Header Content */}
        <div className="text-center relative mb-8">
          <p className="text-base md:text-base font-semibold tracking-widest text-brand uppercase">
            Meet The Team
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-[#1A1A2E] tracking-tight">
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
            <div className="w-24 h-1 bg-[#ff385c] rounded-full mt-1 ml-auto transform -rotate-2" />
          </div>
        </div>

        {/* Specialists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-center">
          {specialists.map((person, index) => (
            <div key={index} className="flex flex-col items-center group">
              {/* Image & Quote Row Container */}
              <div className="flex items-center gap-4 w-full justify-center">
                {/* Photo Card */}
                <div className="relative w-full max-w-[270px] h-64 md:h-72 bg-gray-200 rounded-2xl overflow-hidden shadow-sm shrink-0">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-fit"
                    unoptimized
                  />
                </div>

                {/* Quote on the Right */}
                <div className="max-w-[130px]">
                  <p className="hidden lg:block font-handwriting text-base md:text-lg text-[#1A1A2E] italic leading-tight">
                    {person.quote}
                  </p>
                </div>
              </div>

              {/* Details */}
              <div className="w-full max-w-[380px] mt-4 text-left px-2">
                <h3 className="text-xl font-bold text-[#1A1A2E]">
                  {person.name}
                </h3>
                <p className="text-base text-gray-600 font-medium">
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