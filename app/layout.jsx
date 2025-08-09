import Header from "./components/Header";
import "../styles.css"; // This should be at the top-level of your project (not in /app/public!)

export const metadata = {
  title: "I Choose Help",
  description: "Support for OCD, trauma, phobias and more",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <div className="copyright">
          © 2025 I Choose Help. All rights reserved.
        </div>
      </body>
    </html>
  );
}
