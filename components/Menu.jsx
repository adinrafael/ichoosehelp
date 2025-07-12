'use client';

import React, { useState } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';
import Link from 'next/link';

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="text-white hover:text-blue-300 transition-colors duration-300"
        aria-label="Toggle menu"
      >
        {open ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
      </button>

      {open && (
        <div className="absolute top-10 left-0 mt-2 w-48 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20 z-50">
          <ul className="flex flex-col text-white">
            <li>
              <Link
                href="/ocd"
                className="block px-4 py-2 hover:bg-white/20 transition-colors duration-200"
                onClick={() => setOpen(false)}
              >
                OCD
              </Link>
            </li>
            <li>
              <Link
                href="/phobia"
                className="block px-4 py-2 hover:bg-white/20 transition-colors duration-200"
                onClick={() => setOpen(false)}
              >
                Phobia
              </Link>
            </li>
            <li>
              <Link
                href="/trauma"
                className="block px-4 py-2 hover:bg-white/20 transition-colors duration-200"
                onClick={() => setOpen(false)}
              >
                Trauma
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block px-4 py-2 hover:bg-white/20 transition-colors duration-200"
                onClick={() => setOpen(false)}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/book"
                className="block px-4 py-2 hover:bg-white/20 transition-colors duration-200"
                onClick={() => setOpen(false)}
              >
                Book a Time
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
