'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="glass-header">
      <div className="header-inner">
        {/* Hamburger Menu Button */}
        <button
          className={`menu-btn${open ? ' active' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Open menu"
        >
          <span className="menu-icon">
            <span />
            <span />
            <span />
          </span>
        </button>

        {/* Head Icon Button */}
        <Link href="/">
          <button className="logo-btn" aria-label="Home">
            <img src="/logo-head-heart.svg" className="logo-img" alt="I Choose Help logo" />
          </button>
        </Link>

        {/* Title */}
        <span className="header-title">I Choose Help</span>
      </div>
      {/* Dropdown Menu */}
      <nav className={`dropdown-menu${open ? ' open' : ''}`}>
        <ul>
          <li><Link href="/about-us" onClick={() => setOpen(false)}>About Us</Link></li>
          <li><Link href="/ocd-information" onClick={() => setOpen(false)}>OCD Information</Link></li>
          <li><Link href="/phobia-information" onClick={() => setOpen(false)}>Phobia Information</Link></li>
          <li><Link href="/trauma-information" onClick={() => setOpen(false)}>Trauma Information</Link></li>
          <li><Link href="/contact-us" onClick={() => setOpen(false)}>Contact Us</Link></li>
          <li><Link href="/book-a-time" onClick={() => setOpen(false)}>Book a Time</Link></li>
        </ul>
      </nav>
    </header>
  );
}
