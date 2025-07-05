"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "../styles/Menu.module.css";

export default function Menu({ isOpen, toggleMenu }) {
  const menuRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        toggleMenu(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, toggleMenu]);

  if (!isOpen) return null;

  return (
    <div ref={menuRef} className={styles.menuContainer}>
      <ul className={styles.menuList}>
        <li>
          <Link href="/about-us" onClick={() => toggleMenu(false)}>
            About Us
          </Link>
        </li>
        <li>
          <Link href="/ocd-info" onClick={() => toggleMenu(false)}>
            OCD Information
          </Link>
        </li>
        <li>
          <Link href="/phobia-info" onClick={() => toggleMenu(false)}>
            Phobia Information
          </Link>
        </li>
        <li>
          <Link href="/trauma-info" onClick={() => toggleMenu(false)}>
            Trauma Information
          </Link>
        </li>
        <li>
          <Link href="/contact-us" onClick={() => toggleMenu(false)}>
            Contact Us
          </Link>
        </li>
        <li>
          <Link href="/book" onClick={() => toggleMenu(false)}>
            Book a Time
          </Link>
        </li>
      </ul>
    </div>
  );
}
