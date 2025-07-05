import React from "react";
import menuLogo from "../public/menu_logo.png";
import logo from "../public/logo.png";
import Image from "next/image";

const headerStyle = {
  height: "66px", // 2/3 of typical 100px header
  background: "#111",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  width: "100%",
  zIndex: 10,
};

const iconStyle = {
  width: "57px", // slightly bigger than before
  height: "57px",
  margin: "0 32px",
};

const houseStyle = {
  width: "57px",
  height: "57px",
  margin: "0 32px",
  cursor: "pointer",
};

export default function Header({ onMenuClick, onHomeClick }) {
  return (
    <header style={headerStyle}>
      <div style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "center" }}>
        <div style={iconStyle}>
          <Image src={menuLogo} alt="Menu" width={57} height={57} priority onClick={onMenuClick} style={{ cursor: "pointer" }} />
        </div>
        <div style={houseStyle}>
          <svg viewBox="0 0 60 60" fill="#fff" onClick={onHomeClick} style={{ width: "100%", height: "100%", cursor: "pointer" }}>
            <path d="M30 10L10 28h5v17h30V28h5L30 10z" />
          </svg>
        </div>
        <h1 style={{ color: "#fff", fontSize: "3rem", fontWeight: "bold", margin: "0 32px" }}>I Choose Help</h1>
        <div style={iconStyle}>
          <Image src={logo} alt="Logo" width={57} height={57} priority />
        </div>
      </div>
    </header>
  );
}
