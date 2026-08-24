import Image from "next/image";
import logo from "@/assets/brand/carma.jpg"

const Logo = () => {
  return (
    <span
      className="relative inline-block h-12 w-[140px] shrink-0 lg:h-24 lg:w-[175px]"
      aria-label="Carma Credit"
    >
      <Image
        src={logo?.src}
        alt="Carma Credit"
        width={358}
        height={95}
        className="!h-full !w-full object-contain"
        priority
        unoptimized
      />
    </span>
  );
};

export default Logo;