"use client";
import { useState } from "react";
import { FaBars, FaHome } from "react-icons/fa";
import Menu from "./Menu";
import Image from "next/image";
import logo from "../public/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/30 backdrop-blur-lg shadow-md z-50 flex items-center justify-between px-4 py-2">
      <div className="flex items-center space-x-2">
        <button
          className={`p-2 rounded ${isOpen ? "bg-white/60 shadow-inner" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <FaBars className="text-white hover:text-black transition" size={24} />
        </button>
        <button
          className="p-2"
          onClick={() => (window.location.href = "/")}
          aria-label="Home"
        >
          <FaHome className="text-white hover:text-black transition" size={24} />
        </button>
      </div>

      <div className="flex items-center space-x-2 translate-x-[-40px]">
        <Image src={logo} alt="Logo" width={30} height={30} />
        <span className="text-white font-poppins text-[20px] tracking-wide">
          I Choose Help
        </span>
        <Image src={logo} alt="Logo" width={30} height={30} />
      </div>

      <Menu isOpen={isOpen} />
    </header>
  );
}
