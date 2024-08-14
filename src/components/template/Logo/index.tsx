import Image from "next/image";
import Link from "next/link";
import PhinnisiLogo from "@/assets/images/logo/phinnisi-logo.svg";

const Logo = () => {
  return <Image src={PhinnisiLogo} width={70} height={48} alt="waizly-logo" />;
};

export default Logo;
