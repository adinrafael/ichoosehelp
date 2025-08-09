export default function ContactPage() {
  return (
    <div className="contact-form-container">
      <div className="contact-form-box">
        <div className="contact-form-title">Contact Us</div>
        <form
          className="contact-form"
          action="https://formspree.io/f/xwpbylda"
          method="POST"
        >
          <input className="contact-input" name="name" type="text" placeholder="Your Name" required />
          <input className="contact-input" name="email" type="email" placeholder="Email" required />
          <textarea className="contact-textarea" name="message" placeholder="Message" required />
          <button className="contact-submit" type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
