// /app/page.jsx
import Image from 'next/image';


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[85vh] w-full relative">
      <Image
        src="/logo.png"
        alt="I Choose Help Logo"
        width={240}
        height={240}
        priority
        className="mx-auto my-10"
        style={{ filter: 'drop-shadow(0 8px 32px #000b)' }}
      />
      <div className="mt-2 text-3xl font-extrabold text-white bg-black/40 px-6 py-3 rounded-2xl shadow-xl">
        Coming Soon
      </div>
    </main>
  );
}
