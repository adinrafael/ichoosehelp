"use client";
import Link from "next/link";

export default function Menu({ open, onChoose }) {
  return (
    <nav
      className={`dropdown ${open ? "open" : ""}`}
      aria-hidden={!open}
      role="menu"
    >
      <div className="dropdown-inner">
        <Link href="/about-us" className="menu-link" onClick={onChoose}>
          About Us
        </Link>
        <Link href="/ocd-information" className="menu-link" onClick={onChoose}>
          OCD Information
        </Link>
        <Link href="/phobia-information" className="menu-link" onClick={onChoose}>
          Phobia Information
        </Link>
        <Link href="/trauma-information" className="menu-link" onClick={onChoose}>
          Trauma Information
        </Link>
        <Link href="/contact-us" className="menu-link" onClick={onChoose}>
          Contact Us
        </Link>
        <Link href="/book-a-time" className="menu-link" onClick={onChoose}>
          Book a Time
        </Link>
      </div>
    </nav>
  );
}
