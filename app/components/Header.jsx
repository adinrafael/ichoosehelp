"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Menu from "./Menu";

export default function Header() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  // Close on outside click
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
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header" ref={wrapRef}>
      <button
        className={`menu-btn ${open ? "active" : ""}`}
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
      >
        <span></span><span></span><span></span>
      </button>

      <Link href="/" className="logo-btn" aria-label="Home">
        <img
          src="/logo-head-heart.png"
          alt="I Choose Help"
          className="home-icon"
          width="34"
          height="34"
        />
      </Link>

      <h1 className="header-title">I Choose Help</h1>

      <Menu open={open} onChoose={() => setOpen(false)} />
    </header>
  );
}
