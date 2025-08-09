"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Menu from "./Menu";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Close menu on route change (optional nicety)
  useEffect(() => {
    const onPopState = () => setOpen(false);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  return (
    <>
      <header className="header">
        <div className="header-left">
          {/* Hamburger */}
          <button
            className="icon-btn"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(v => !v)}
          >
            <span className="menu-icon">&#9776;</span>
          </button>

          {/* Logo */}
          <Link href="/" className="logo-link" aria-label="Home">
            <img
              src="/favicon.png"        // put your head icon file here (e.g. /favicon.png or /logo-head-heart.png)
              alt="I Choose Help"
              className="header-logo"
              draggable="false"
            />
          </Link>
        </div>

        <h1 className="header-title">I Choose Help</h1>
      </header>

      {/* Slide-out menu */}
      <Menu open={open} setOpen={setOpen} />
    </>
  );
}
