'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="backdrop-blur-md bg-white/10 text-white shadow-inner fixed bottom-0 left-0 right-0 h-8 flex items-center justify-center text-sm z-50">
      © {new Date().getFullYear()} IChooseHelp.com — All rights reserved.
    </footer>
  );
}
