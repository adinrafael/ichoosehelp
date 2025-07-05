export default function Footer() {
  return (
    <footer className="w-full bg-white/30 backdrop-blur-md py-2 shadow-inner fixed bottom-0 left-0 flex justify-center items-center text-sm h-[30px] z-40">
      <p className="text-white font-light">
        &copy; {new Date().getFullYear()} I Choose Help. All rights reserved.
      </p>
    </footer>
  );
}
