import { auth } from "../_lib/auth";
import MobileMenuButton from "./MobileMenuButton";
import NavLink from "./NavLink";

export default async function Navigation() {
  const session = await auth();

  return (
    <nav className="z-50 text-xl relative">
      <div className="flex items-center">
        <MobileMenuButton />

        {/* Navigation menu */}
        <ul className="nav-menu sm:flex flex-col sm:flex-row gap-4 sm:gap-16 items-center fixed sm:static top-0 right-0 h-screen sm:h-auto w-64 sm:w-auto bg-primary-950 sm:bg-transparent p-4 pt-0 sm:p-0 shadow-lg sm:shadow-none transform translate-x-full sm:translate-x-0 transition-all duration-300 ease-in-out opacity-0 sm:opacity-100 pointer-events-none sm:pointer-events-auto">
          <div className="flex flex-col w-full sm:mt-0 sm:flex-row sm:items-center sm:gap-16">
            {session?.user?.image ? (
              <li className="w-full border-b border-primary-800 sm:border-none">
                <NavLink
                  href="/account"
                  className="hover:text-accent-400 transition-colors flex items-center justify-between py-4 sm:py-0"
                >
                  <span className="text-lg sm:text-xl">Guest area</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    alt={session.user.name}
                    src={session.user.image}
                    referrerPolicy="no-referrer"
                  />
                </NavLink>
              </li>
            ) : (
              <li className="w-full border-b border-primary-800 sm:border-none">
                <NavLink
                  href="/account"
                  className="hover:text-accent-400 transition-colors block py-4 sm:py-0 text-lg sm:text-xl"
                >
                  Guest area
                </NavLink>
              </li>
            )}
            <li className="w-full border-b border-primary-800 sm:border-none">
              <NavLink
                href="/cabins"
                className="hover:text-accent-400 transition-colors block py-4 sm:py-0 text-lg sm:text-xl"
              >
                Cabins
              </NavLink>
            </li>
            <li className="w-full border-b border-primary-800 sm:border-none">
              <NavLink
                href="/about"
                className="hover:text-accent-400 transition-colors block py-4 sm:py-0 text-lg sm:text-xl"
              >
                About
              </NavLink>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
}
