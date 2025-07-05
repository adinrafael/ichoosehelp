import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

export const metadata = {
  title: "I Choose Help",
  description: "Support for OCD, trauma, and phobias",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-cover bg-center bg-fixed bg-no-repeat min-h-screen flex flex-col justify-between`}
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <Header />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
