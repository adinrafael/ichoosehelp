export const metadata = {
  title: "Contact Us – I Choose Help",
};

export default function ContactPage() {
  return (
    <div className="centered-card-wrapper">
      <div className="card dark max-w-lg w-full p-8 shadow-xl rounded-2xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white text-center">Contact Us</h2>
        <form
          action="https://formspree.io/f/xwpbylda"
          method="POST"
          className="space-y-6"
        >
          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full px-4 py-3 bg-transparent border border-gray-300 rounded-lg text-gray-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 peer"
              placeholder=" "
              required
              autoComplete="email"
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-3 text-gray-400 pointer-events-none transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:left-4 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:left-3 peer-focus:text-xs peer-focus:text-indigo-600 bg-white dark:bg-transparent px-1"
            >
              Your Email
            </label>
          </div>

          {/* Message Field */}
          <div className="relative">
            <textarea
              name="message"
              id="message"
              rows={6}
              className="block w-full px-4 py-3 bg-transparent border border-gray-300 rounded-lg text-gray-900 dark:text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="message"
              className="absolute left-4 top-3 text-gray-400 pointer-events-none transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:left-4 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:left-3 peer-focus:text-xs peer-focus:text-indigo-600 bg-white dark:bg-transparent px-1"
            >
              Your Message
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold shadow transition-all duration-150"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
