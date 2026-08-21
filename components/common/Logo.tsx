import Image from "next/image";

const Logo = () => {
  return (
    <span
      className="relative inline-block h-12 w-[140px] shrink-0 lg:h-24 lg:w-[175px]"
      aria-label="Carma Credit"
    >
      <Image
        src="https://img.carma.com.au/brand/carma-logo.svg"
        alt="Carma Credit"
        width={358}
        height={95}
        className="!h-full !w-full object-contain object-left-top"
        sizes="(max-width: 1024px) 140px, 175px"
        priority
        unoptimized
      />
    </span>
  );
};

export default Logo;