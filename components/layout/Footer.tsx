// components/layout/Footer.tsx

import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 px-6 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <h2 className="text-xl font-bold text-blue-600 mb-2">StayFinder</h2>
          <p className="text-sm">
            Find the best accommodations across the world with comfort, safety,
            and affordability.
          </p>
        </div>

        {/* Explore Links */}
        <div>
          <h3 className="font-semibold mb-2">Explore</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="#">Rooms</Link></li>
            <li><Link href="#">Mansions</Link></li>
            <li><Link href="#">Countryside</Link></li>
            <li><Link href="#">Beachfront</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-2">Resources</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="#">Help Center</Link></li>
            <li><Link href="#">Blog</Link></li>
            <li><Link href="#">Community</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-sm">support@stayfinder.com</p>
          <p className="text-sm mt-1">+1 (800) 123-4567</p>
          <div className="flex gap-3 mt-3">
            <Link href="#"><span className="text-blue-600 hover:underline">Twitter</span></Link>
            <Link href="#"><span className="text-blue-600 hover:underline">Instagram</span></Link>
          </div>
        </div>
      </div>

      <div className="text-center text-xs mt-8 text-gray-500">
        © {new Date().getFullYear()} StayFinder. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
