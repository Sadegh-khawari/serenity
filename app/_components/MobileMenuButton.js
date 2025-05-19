"use client";

import { useState, useEffect } from "react";

export default function MobileMenuButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    const menu = document.querySelector(".nav-menu");
    if (!isOpen) {
      menu.classList.remove("translate-x-full");
      menu.classList.remove("opacity-0");
      menu.classList.remove("pointer-events-none");
    } else {
      menu.classList.add("translate-x-full");
      menu.classList.add("opacity-0");
      menu.classList.add("pointer-events-none");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = document.querySelector(".nav-menu");
      const button = document.querySelector(".mobile-menu-button");

      if (
        isOpen &&
        !menu?.contains(event.target) &&
        !button?.contains(event.target)
      ) {
        setIsOpen(false);
        menu?.classList.add("translate-x-full");
        menu?.classList.add("opacity-0");
        menu?.classList.add("pointer-events-none");
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  return (
    <button
      className={`mobile-menu-button sm:hidden p-2 relative z-50 ${
        isOpen ? "hidden" : "block"
      }`}
      onClick={toggleMenu}
      aria-label="Toggle menu"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </button>
  );
}
