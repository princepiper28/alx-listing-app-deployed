import Link from "next/link";
import { FC } from "react";

const Header: FC = () => {
  const navLinks = [
    "Rooms",
    "Mansion",
    "Countryside",
    "Beach",
    "Mountain",
    "City",
    "Forest",
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4 md:flex-col lg:flex-col">
        {/* Top bar: Logo | Search | Auth */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            StayFinder
          </Link>
         {/* Search bar */}
           <input
          type="text"
          placeholder="Search"
            className="w-full sm:w-32 px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Sign In / Sign Up */}
          <div className="flex gap-2">
            <Link
              href="/signin"
              className="text-sm px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-50"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="text-sm px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* Bottom nav: accommodation types */}
        <nav className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
          {navLinks.map((type) => (
            <Link
              key={type}
              href="#"
              className="hover:text-blue-500 transition-colors"
            >
              {type}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
