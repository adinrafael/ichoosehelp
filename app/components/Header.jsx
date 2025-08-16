"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Menu from "./Menu";

export default function Header() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);
  const hideTimer = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    function onDocClick(e) {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target)) setOpen(false);
    }
    if (open) document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  // Close on ESC
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Helpers for auto-close after mouse leaves
  const scheduleClose = () => {
    clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setOpen(false), 600); // graceful delay
  };
  const cancelClose = () => {
    clearTimeout(hideTimer.current);
  };

  return (
    <header
      className="site-header"
      ref={wrapRef}
      onMouseLeave={scheduleClose}
      onMouseEnter={cancelClose}
    >
      {/* Hamburger */}
      <button
        className={`menu-btn ${open ? "active" : ""}`}
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
      >
        <span></span><span></span><span></span>
      </button>

      {/* Home / logo (PNG, not a heart icon) */}
      <Link href="/" className="logo-btn" aria-label="Home">
        <img
          src="/logo-head-heart.png"
          alt="I Choose Help"
          className="home-icon"
          width="28"
          height="28"
        />
      </Link>

      {/* Centered title */}
      <h1 className="header-title">I Choose Help</h1>

      {/* Drop-down (anchored under the header) */}
      <Menu
        open={open}
        onChoose={() => setOpen(false)}
        onMouseLeave={scheduleClose}
        onMouseEnter={cancelClose}
      />
    </header>
  );
}
