"use client";
import Link from "next/link";

export default function Menu({ isOpen }) {
  return (
    <nav
      className={`absolute top-full left-0 w-full bg-white/30 backdrop-blur-md transition-all duration-500 ease-in-out overflow-hidden rounded-b-xl shadow-lg ${
        isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
      }`}
    >
      <ul className="flex flex-col items-start px-6 space-y-4">
        <li>
          <Link
            href="/"
            className="text-white hover:text-black font-semibold transition-all duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/ocd-info"
            className="text-white hover:text-black font-semibold transition-all duration-300"
          >
            OCD Information
          </Link>
        </li>
        <li>
          <Link
            href="/phobia-info"
            className="text-white hover:text-black font-semibold transition-all duration-300"
          >
            Phobia Information
          </Link>
        </li>
        <li>
          <Link
            href="/trauma-info"
            className="text-white hover:text-black font-semibold transition-all duration-300"
          >
            Trauma Information
          </Link>
        </li>
        <li>
          <Link
            href="/contact-us"
            className="text-white hover:text-black font-semibold transition-all duration-300"
          >
            Contact Us
          </Link>
        </li>
        <li>
          <Link
            href="/book"
            className="text-white hover:text-black font-semibold transition-all duration-300"
          >
            Book a Time
          </Link>
        </li>
      </ul>
    </nav>
  );
}
