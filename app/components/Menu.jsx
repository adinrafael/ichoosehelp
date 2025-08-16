"use client";
import Link from "next/link";

export default function Menu({ open, onChoose, onMouseLeave, onMouseEnter }) {
  return (
    <nav
      className={`dropdown ${open ? "open" : ""}`}
      aria-hidden={!open}
      role="menu"
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
    >
      <div className="dropdown-inner">
        {/* Removed the "Menu" title per your request */}

        <Link href="/about-us" className="menu-link" role="menuitem" onClick={onChoose}>
          About Us
        </Link>
        <Link href="/ocd-information" className="menu-link" role="menuitem" onClick={onChoose}>
          OCD Information
        </Link>
        <Link href="/phobia-information" className="menu-link" role="menuitem" onClick={onChoose}>
          Phobia Information
        </Link>
        <Link href="/trauma-information" className="menu-link" role="menuitem" onClick={onChoose}>
          Trauma Information
        </Link>
        <Link href="/contact-us" className="menu-link" role="menuitem" onClick={onChoose}>
          Contact Us
        </Link>
        <Link href="/book-a-time" className="menu-link" role="menuitem" onClick={onChoose}>
          Book a Time
        </Link>
      </div>
    </nav>
  );
}
