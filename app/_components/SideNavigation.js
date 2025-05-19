"use client";

import Link from "next/link";
import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";
import SignOutButton from "./SignOutButton";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="h-5 w-5" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5" />,
  },
];

function SideNavigation() {
  const pathname = usePathname();

  return (
    <nav className="md:border-r border-primary-900">
      <ul className="flex md:flex-col gap-2 h-full text-lg">
        {navLinks.map((link) => (
          <li key={link.name} className="flex-1 md:flex-none">
            <Link
              className={`flex items-center justify-center md:justify-start gap-3 py-3 px-4 md:px-5 font-medium transition-all duration-200
                ${
                  pathname === link.href
                    ? "bg-accent-500 text-primary-800 md:bg-primary-900 md:text-primary-100"
                    : "text-primary-200 hover:bg-primary-900 hover:text-primary-100"
                }
                ${
                  pathname === link.href
                    ? "md:border-l-4 md:border-accent-500"
                    : ""
                }
                rounded-lg md:rounded-none md:border-l-4 md:border-transparent`}
              href={link.href}
            >
              <span className="text-current">{link.icon}</span>
              <span className="hidden md:inline">{link.name}</span>
            </Link>
          </li>
        ))}

        <li className="flex-1 md:flex-none md:mt-auto">
          <div className="md:hidden">
            <Link
              href="/api/auth/signout"
              className="flex items-center justify-center gap-3 py-3 px-4 font-medium transition-all duration-200 text-primary-200 hover:bg-primary-900 hover:text-primary-100 rounded-lg"
            >
              <ArrowRightOnRectangleIcon className="h-5 w-5" />
            </Link>
          </div>
          <div className="hidden md:block">
            <SignOutButton />
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
