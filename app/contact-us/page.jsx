"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = new FormData(e.target);
    const response = await fetch("https://formspree.io/f/xwpbylda", {
      method: "POST",
      body: form,
      headers: {
        Accept: "application/json",
      },
    });

    const data = await response.json();
    if (data.ok || response.status === 200) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4 pt-28">
      <form
        onSubmit={handleSubmit}
        className="glass p-8 w-full max-w-md text-white"
      >
        <h1 className="text-3xl font-semibold mb-6 text-center">Contact Us</h1>

        <label className="block mb-4">
          <span className="text-sm font-medium">Your Name</span>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 mt-1 rounded bg-white bg-opacity-20 backdrop-blur placeholder-white text-white outline-none focus:ring-2 ring-white"
            placeholder="Enter your name"
          />
        </label>

        <label className="block mb-4">
          <span className="text-sm font-medium">Email Address</span>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 mt-1 rounded bg-white bg-opacity-20 backdrop-blur placeholder-white text-white outline-none focus:ring-2 ring-white"
            placeholder="you@example.com"
          />
        </label>

        <label className="block mb-4">
          <span className="text-sm font-medium">Message</span>
          <textarea
            name="message"
            required
            rows="4"
            className="w-full px-4 py-2 mt-1 rounded bg-white bg-opacity-20 backdrop-blur placeholder-white text-white outline-none focus:ring-2 ring-white"
            placeholder="Write your message..."
          ></textarea>
        </label>

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full py-2 mt-4 bg-white text-gray-900 font-semibold rounded hover:bg-opacity-80 transition"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-green-300 mt-4 text-center">Message sent!</p>
        )}
        {status === "error" && (
          <p className="text-red-300 mt-4 text-center">Something went wrong. Try again.</p>
        )}
      </form>
    </div>
  );
}
