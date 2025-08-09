"use client";
import Link from "next/link";

export default function Menu({ open, setOpen }) {
  return (
    <nav className={`menu-drawer ${open ? "open" : ""}`}>
      <Link href="/about-us" className="menu-link" onClick={() => setOpen(false)}>About Us</Link>
      <Link href="/ocd-information" className="menu-link" onClick={() => setOpen(false)}>OCD Information</Link>
      <Link href="/phobia-information" className="menu-link" onClick={() => setOpen(false)}>Phobia Information</Link>
      <Link href="/trauma-information" className="menu-link" onClick={() => setOpen(false)}>Trauma Information</Link>
      <Link href="/contact-us" className="menu-link" onClick={() => setOpen(false)}>Contact Us</Link>
      <Link href="/book-a-time" className="menu-link" onClick={() => setOpen(false)}>Book a Time</Link>
    </nav>
  );
}
