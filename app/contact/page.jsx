'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const formData = new FormData(e.target);
    const res = await fetch('https://formspree.io/f/xwpbylda', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: formData,
    });

    const result = await res.json();
    if (result.ok || result.success) {
      setStatus('Message sent successfully!');
      e.target.reset();
    } else {
      setStatus('Something went wrong. Try again.');
    }
  };

  return (
    <main className="min-h-screen p-8 bg-black text-white flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
        <div className="relative">
          <input
            type="text"
            name="name"
            required
            className="peer w-full border-b-2 border-white bg-transparent text-white placeholder-transparent focus:outline-none focus:border-cyan-400 transition-all"
            placeholder="Name"
          />
          <label className="absolute left-0 top-2 text-white text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-cyan-400">
            Name
          </label>
        </div>

        <div className="relative">
          <input
            type="email"
            name="email"
            required
            className="peer w-full border-b-2 border-white bg-transparent text-white placeholder-transparent focus:outline-none focus:border-cyan-400 transition-all"
            placeholder="Email"
          />
          <label className="absolute left-0 top-2 text-white text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-cyan-400">
            Email
          </label>
        </div>

        <div className="relative">
          <textarea
            name="message"
            rows="4"
            required
            className="peer w-full border-b-2 border-white bg-transparent text-white placeholder-transparent focus:outline-none focus:border-cyan-400 transition-all"
            placeholder="Message"
          ></textarea>
          <label className="absolute left-0 top-2 text-white text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-cyan-400">
            Message
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded transition-all"
        >
          Send Message
        </button>

        {status && <p className="mt-2 text-sm text-center">{status}</p>}
      </form>
    </main>
  );
}
