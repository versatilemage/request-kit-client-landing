import Image from "next/image";
import RKClogo from "@/public/rkc-logo.png";

type LogoSize = "XS" | "S" | "M" | "L" | "XL";

const sizeMap: Record<LogoSize, number> = {
  XS: 24,
  S: 40,
  M: 64,
  L: 100,
  XL: 150,
};

const Logo = ({ size = "M" }: { size?: LogoSize }) => {
  const dimension = sizeMap[size];

  return (
    <Image
      src={RKClogo}
      alt="Request-kit-client"
      width={dimension}
      height={dimension}
    />
  );
};

export default Logo;
