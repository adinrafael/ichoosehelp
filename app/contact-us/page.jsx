export default function ContactPage() {
  return (
    <main className="center-main">
      <div className="contact-card">
        <h2>Contact Us</h2>
        <form
          className="contact-form"
          action="https://formspree.io/f/xwpbylda"
          method="POST"
        >
          <input name="name" type="text" placeholder="Your Name" required />
          <input name="email" type="email" placeholder="Email" required />
          <textarea name="message" placeholder="Message" required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </main>
  );
}

