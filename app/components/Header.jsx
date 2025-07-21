'use client'
import Image from 'next/image'
import Menu from './Menu'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="header-glass">
      <div className="site-logo" style={{marginRight: "30px"}}>
        <Image src="/logo.png" alt="Logo" width={48} height={48} priority />
        I CHOOSE HELP
      </div>
      <div
        className="menu-icon"
        onClick={() => setMenuOpen(open => !open)}
        aria-label="Open menu"
        tabIndex={0}
        role="button"
      >
        <div className="menu-icon-bar"></div>
        <div className="menu-icon-bar"></div>
        <div className="menu-icon-bar"></div>
      </div>
      <Menu open={menuOpen} setOpen={setMenuOpen} />
    </header>
  )
}
