"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = new FormData(e.target);
    const res = await fetch("https://formspree.io/f/xwpbylda", {
      method: "POST",
      body: form,
      headers: {
        Accept: "application/json",
      },
    });

    const data = await res.json();
    if (data.ok) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 pt-32 pb-20">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white/30 backdrop-blur-lg p-8 rounded-lg shadow-xl"
      >
        <p className="mb-4 text-white text-lg font-semibold">
          If you feel like you have any questions, please fill out the form and we’ll get back to you as soon as possible!
        </p>

        {status === "success" && (
          <p className="text-green-600 font-semibold mb-2">Thanks! We'll get back to you soon.</p>
        )}
        {status === "error" && (
          <p className="text-red-600 font-semibold mb-2">Oops! Something went wrong.</p>
        )}

        <div className="relative mb-6">
          <input
            type="text"
            name="name"
            required
            className="peer bg-transparent border-b-2 border-white w-full text-white placeholder-transparent focus:outline-none focus:border-black"
            placeholder="Name"
          />
          <label className="absolute left-0 top-0 text-white text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-focus:top-0 peer-focus:text-sm peer-focus:text-black">
            Name
          </label>
        </div>

        <div className="relative mb-6">
          <input
            type="email"
            name="email"
            required
            className="peer bg-transparent border-b-2 border-white w-full text-white placeholder-transparent focus:outline-none focus:border-black"
            placeholder="Email"
          />
          <label className="absolute left-0 top-0 text-white text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-focus:top-0 peer-focus:text-sm peer-focus:text-black">
            Email
          </label>
        </div>

        <div className="relative mb-6">
          <textarea
            name="message"
            required
            className="peer bg-transparent border-b-2 border-white w-full text-white placeholder-transparent focus:outline-none focus:border-black"
            placeholder="Message"
            rows="4"
          />
          <label className="absolute left-0 top-0 text-white text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-focus:top-0 peer-focus:text-sm peer-focus:text-black">
            Message
          </label>
        </div>

        <button
          type="submit"
          className="bg-white text-black px-6 py-2 rounded-lg hover:bg-black hover:text-white transition"
        >
          Send
        </button>
      </form>
    </div>
  );
}
