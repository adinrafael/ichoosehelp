import Link from "next/link";
import React, { useState } from "react";

const menuStyle = {
  background: "#a5a5a5",
  borderRadius: "18px",
  padding: "8px 0",
  width: "390px",
  position: "absolute",
  top: "76px",
  left: "24px",
  boxShadow: "0 8px 30px rgba(0,0,0,.12)",
};

const menuItemStyle = {
  padding: "18px 32px",
  fontSize: "2rem",
  color: "#fff",
  fontWeight: "400",
  background: "transparent",
  border: "none",
  cursor: "pointer",
  width: "100%",
  textAlign: "left",
  outline: "none",
  transition: "font-weight 0.2s",
};

const menuItemBold = {
  ...menuItemStyle,
  fontWeight: "700",
};

const items = [
  { label: "About Us", link: "/about-us" },
  { label: "OCD Information", link: "/ocd-information" },
  { label: "Phobia Information", link: "/phobia-information" },
  { label: "Trauma Information", link: "/trauma-information" },
  { label: "Contact Us", link: "/contact-us" },
  { label: "Book a Time", link: "/book-a-time" },
];

export default function Menu({ open, onClose }) {
  const [hovered, setHovered] = useState(-1);
  if (!open) return null;
  return (
    <div style={menuStyle} onMouseLeave={() => setHovered(-1)}>
      {items.map((item, idx) => (
        <Link key={item.label} href={item.link} passHref legacyBehavior>
          <a
            style={hovered === idx ? menuItemBold : menuItemStyle}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(-1)}
          >
            {item.label}
          </a>
        </Link>
      ))}
    </div>
  );
}
