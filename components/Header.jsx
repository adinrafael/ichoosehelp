"use client";

import React from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import { FaBars, FaHome } from "react-icons/fa";

export default function Header({ toggleMenu }) {
  return (
    <header className={styles.header}>
      <div className={styles.leftIcons}>
        <button className={styles.iconButton} onClick={toggleMenu}>
          <FaBars />
        </button>
        <Link href="/">
          <button className={styles.iconButton}>
            <FaHome />
          </button>
        </Link>
      </div>

      <div className={styles.centerTitle}>
        <img
          src="/menu_logo.png"
          alt="Left Logo"
          className={styles.sideLogo}
        />
        <h1 className={styles.siteTitle}>I Choose Help</h1>
        <img
          src="/menu_logo.png"
          alt="Right Logo"
          className={styles.sideLogo}
        />
      </div>
    </header>
  );
}
