'use client';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 200);
      }
    }
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 text-white bg-gradient-to-bl from-slate-900 via-slate-800 to-slate-950">
      <div className="text-center mb-16 mt-20">
        <Image
          src="/ichoosehelp-logo.png"
          alt="I Choose Help Logo"
          width={150}
          height={150}
          className="mx-auto mb-4"
        />
        <h1 className="text-3xl font-bold">Coming Soon</h1>
      </div>

      {/* Contact Form */}
      <section id="contact" className="w-full max-w-xl bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20">
        <h2 className="text-2xl font-semibold text-white mb-4 text-center">Contact Us</h2>
        <form action="https://formspree.io/f/xwpbylda" method="POST" className="space-y-5">
          <div className="relative">
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full bg-transparent border-b border-white py-2 pl-2 text-white focus:outline-none focus:border-blue-300 peer placeholder-transparent"
              placeholder="Your Name"
            />
            <label
              htmlFor="name"
              className="absolute left-2 top-2 text-white text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-focus:top-2 peer-focus:text-sm peer-focus:text-white"
            >
              Name
            </label>
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full bg-transparent border-b border-white py-2 pl-2 text-white focus:outline-none focus:border-blue-300 peer placeholder-transparent"
              placeholder="Your Email"
            />
            <label
              htmlFor="email"
              className="absolute left-2 top-2 text-white text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-focus:top-2 peer-focus:text-sm peer-focus:text-white"
            >
              Email
            </label>
          </div>

          <div className="relative">
            <textarea
              name="message"
              id="message"
              rows="4"
              required
              className="w-full bg-transparent border-b border-white py-2 pl-2 text-white focus:outline-none focus:border-blue-300 peer placeholder-transparent"
              placeholder="Your Message"
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-2 top-2 text-white text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-focus:top-2 peer-focus:text-sm peer-focus:text-white"
            >
              Message
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white font-semibold shadow"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
