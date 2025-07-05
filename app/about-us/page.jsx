// /app/about-us/page.jsx

export default function AboutUs() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-8">
      <div className="bg-white/90 rounded-xl shadow-lg max-w-xl w-full p-8">
        <h1 className="text-3xl font-bold mb-4 text-center">About Us</h1>
        <p className="text-lg text-gray-700 text-center">
          Welcome to I Choose Help. Our mission is to provide professional, compassionate support for people living with OCD, phobias, and trauma.  
          <br /><br />
          We believe everyone deserves access to reliable information and the chance to book professional help when needed. This site is built for those seeking understanding, relief, and real hope.
        </p>
      </div>
    </main>
  );
}
