"use client";

import Link from "next/link";

export default function NavLink({ href, className, children }) {
  const handleClick = () => {
    const menu = document.querySelector(".nav-menu");
    menu?.classList.add("translate-x-full");
    menu?.classList.add("opacity-0");
    menu?.classList.add("pointer-events-none");
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
