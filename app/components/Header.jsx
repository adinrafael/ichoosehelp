"use client"
import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header
      className="w-full fixed top-0 left-0 z-50 flex items-center justify-between px-8"
      style={{
        height: '90px',
        background: "url('/header-pattern.png') no-repeat center center",
        backgroundSize: 'cover',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #ececec',
        boxShadow: '0 6px 32px rgba(0,0,0,0.08)',
      }}
    >
      {/* Left: Logo & Home */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="Logo"
            style={{
              width: '56px',
              height: '56px',
            }}
          />
          <span className="castellar text-xl text-white font-bold hidden sm:block">Home</span>
        </Link>
      </div>
      {/* Centered Title */}
      <div className="flex-1 flex justify-center">
        <span
          className="castellar text-2xl font-bold select-none"
          style={{ color: '#fff', textShadow: '0 2px 16px #2228' }}
        >
          I CHOOSE HELP
        </span>
      </div>
      {/* Placeholder for menu button/right side */}
      <div style={{ width: '80px' }}></div>
    </header>
  )
}
