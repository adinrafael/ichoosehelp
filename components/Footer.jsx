export default function Footer() {
  return (
    <footer style={{
      width: "100%",
      textAlign: "center",
      background: "#111",
      color: "#fff",
      fontSize: 20,
      padding: "18px 0",
      position: "fixed",
      left: 0,
      bottom: 0,
      zIndex: 10,
    }}>
      © {new Date().getFullYear()} iChooseHelp. All rights reserved.
    </footer>
  );
}
