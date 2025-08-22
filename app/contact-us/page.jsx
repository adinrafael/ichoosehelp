<form
  className="contact-form"
  action="https://formspree.io/f/xwpbylda"
  method="POST"
  autoComplete="off"
>
  <h2>Contact Us</h2>

  <input
    type="hidden"
    name="_subject"
    value="New message from I Choose Help"
  />

  {/* Redirect after success */}
  <input type="hidden" name="_next" value="/contact-us/thank-you" />

  {/* Honeypot */}
  <input
    type="text"
    name="_honey"
    tabIndex="-1"
    autoComplete="off"
    style={{ display: "none" }}
  />

  {/* Name */}
  <div className="input-group">
    <input type="text" name="name" id="name" required placeholder=" " />
    <label htmlFor="name">Your Name</label>
  </div>

  {/* Email */}
  <div className="input-group">
    <input type="email" name="email" id="email" required placeholder=" " />
    <label htmlFor="email">Your Email</label>
  </div>

  {/* Message */}
  <div className="input-group">
    <textarea name="message" id="message" required placeholder=" "></textarea>
    <label htmlFor="message">Your Message</label>
  </div>

  <button type="submit">Send Message</button>
</form>
