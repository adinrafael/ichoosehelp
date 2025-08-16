import "../styles.css";
import Header from "./components/Header";

export const metadata = {
  title: "I Choose Help",
  description: "Support for OCD, trauma, phobias and more",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="page-shell">{children}</main>
        <div className="copyright">
          © 2025 I Choose Help. All rights reserved.
        </div>
      </body>
    </html>
  );
}
