import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 sm:gap-4 z-10">
      <Image
        src={logo}
        height="40"
        width="40"
        quality={100}
        className="h-8 w-8 sm:h-[60px] sm:w-[60px]"
        alt="The Serenity Stays Logo"
      />
      <span className="text-lg sm:text-xl font-semibold text-primary-100">
        The Serenity Stays
      </span>
    </Link>
  );
}

export default Logo;
