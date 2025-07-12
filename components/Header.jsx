'use client';

import React from 'react';
import { MenuIcon, Home } from 'lucide-react';
import Menu from './Menu';

export default function Header() {
  return (
    <header className="backdrop-blur-md bg-white/10 text-white shadow-md fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-4 sm:px-8">
      <div className="flex items-center gap-4">
        <a href="/">
          <Home className="w-6 h-6 hover:text-blue-300 transition-colors duration-300" />
        </a>
        <Menu />
      </div>

      <div className="flex items-center gap-2 text-center">
        <span className="text-[20px] font-semibold font-[Poppins]">
          <span role="img" aria-label="logo">💠</span> I Choose Help <span role="img" aria-label="logo">💠</span>
        </span>
      </div>

      <div className="w-6 h-6 opacity-0">{/* placeholder for alignment */}</div>
    </header>
  );
}
