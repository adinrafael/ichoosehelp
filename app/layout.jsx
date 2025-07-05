import "./globals.css";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

// ✅ Export metadata from a Server Component
export const metadata = {
  title: "I Choose Help",
  description: "Support for OCD, trauma, and phobias.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Menu />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
