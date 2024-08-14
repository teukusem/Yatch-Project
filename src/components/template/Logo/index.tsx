import Image from "next/image";
import Link from "next/link";
import PhinnisiLogo from "@/assets/images/logo/phinnisi-logo.svg";

interface LogoProps {
  width?: number;
  height?: number;
}

const Logo = ({ width = 70, height = 48 }: LogoProps) => {
  return <Image quality={100} priority={true} src={PhinnisiLogo} width={width} height={height} alt="waizly-logo" />;
};

export default Logo;
