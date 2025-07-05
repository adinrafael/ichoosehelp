"use client";

import "./globals.css";
import React, { useState } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

export const metadata = {
  title: "I Choose Help",
  description: "Support for OCD, trauma, and phobias.",
};

export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body>
        <Header toggleMenu={() => setMenuOpen((prev) => !prev)} />
        <Menu isOpen={menuOpen} toggleMenu={setMenuOpen} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
