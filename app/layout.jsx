import "../styles.css";
import Header from "./components/Header";

export const metadata = {
  title: "I Choose Help",
  description: "Support for OCD, trauma, and phobias",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="site-wrapper">
          <Header />
          <main className="site-content">{children}</main>
          <footer className="site-footer">
            © 2025 I Choose Help. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
