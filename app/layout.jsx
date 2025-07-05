import "../app/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ minHeight: "100vh", background: "#222", margin: 0, padding: 0 }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
