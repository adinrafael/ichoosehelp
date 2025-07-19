"use client"
import React from 'react'
import Link from 'next/link'

export default function Menu() {
  return (
    <nav className="w-full flex justify-center mt-[90px] mb-2 z-40">
      <div className="flex flex-wrap gap-4 bg-white/70 backdrop-blur rounded-xl px-6 py-3 shadow-md">
        <Link href="/about" className="font-medium hover:font-bold transition">About Us</Link>
        <Link href="/ocd" className="font-medium hover:font-bold transition">OCD Information</Link>
        <Link href="/phobias" className="font-medium hover:font-bold transition">Phobia Information</Link>
        <Link href="/trauma" className="font-medium hover:font-bold transition">Trauma Information</Link>
        <Link href="/contact" className="font-medium hover:font-bold transition">Contact Us</Link>
        <Link href="/book" className="font-medium hover:font-bold transition">Book a Time</Link>
      </div>
    </nav>
  )
}
