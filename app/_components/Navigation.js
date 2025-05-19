import Link from "next/link";
import { auth } from "../_lib/auth";
import MobileMenuButton from "./MobileMenuButton";

export default async function Navigation() {
  const session = await auth();
  console.log(session);

  return (
    <nav className="z-10 text-xl relative">
      <div className="flex items-center">
        <MobileMenuButton />

        {/* Navigation menu */}
        <ul className="nav-menu hidden sm:flex flex-col sm:flex-row gap-4 sm:gap-16 items-center absolute sm:static top-full right-0 bg-primary-950 sm:bg-transparent w-48 sm:w-auto p-4 sm:p-0 shadow-lg sm:shadow-none">
          <li>
            <Link
              href="/cabins"
              className="hover:text-accent-400 transition-colors block py-2 sm:py-0"
            >
              Cabins
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-accent-400 transition-colors block py-2 sm:py-0"
            >
              About
            </Link>
          </li>
          <li>
            {session?.user?.image ? (
              <Link
                href="/account"
                className="hover:text-accent-400 transition-colors flex items-center gap-4"
              >
                <img
                  className="h-8 rounded-full"
                  alt={session.user.name}
                  src={session.user.image}
                  referrerPolicy="no-referrer"
                />
                <span className="hidden sm:inline">Guest area</span>
              </Link>
            ) : (
              <Link
                href="/account"
                className="hover:text-accent-400 transition-colors block py-2 sm:py-0"
              >
                Guest area
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
