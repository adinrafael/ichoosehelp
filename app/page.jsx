import Image from "next/image";
import logo from "../public/logo.png"; // Make sure the logo is in /public/logo.png

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center text-white px-4 pt-32">
      <Image
        src={logo}
        alt="Site Logo"
        className="w-40 h-40 mb-6"
        priority
      />
      <h1 className="text-4xl font-bold tracking-wide drop-shadow-lg">COMING SOON</h1>
    </div>
  );
}
