export const metadata = { title: "Contact Us – I Choose Help" };

export default function ContactPage() {
  return (
    <section className="center-wrap">
      <form
        className="contact-card"
        action="https://formspree.io/f/xwpbylda"
        method="POST"
      >
        <h2>Contact Us</h2>

        <div className="form-row">
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
            className="contact-input"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="contact-input"
          />
        </div>

        <textarea
          name="message"
          placeholder="Message"
          required
          className="contact-textarea"
        />

        <button type="submit" className="contact-submit">
          Send Message
        </button>
      </form>
    </section>
  );
}
