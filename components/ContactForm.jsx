import ContactForm from "../../components/ContactForm";

export default function ContactUsPage() {
  return <ContactForm />;
}
import React, { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1000);
  };

  return (
    <div style={{ maxWidth: 600, margin: "60px auto", background: "#fff", padding: 32, borderRadius: 16 }}>
      <h2 style={{ fontWeight: "bold", marginBottom: 24 }}>Contact Us</h2>
      {status === "sent" ? (
        <p style={{ color: "green" }}>Thank you for reaching out!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input required name="name" placeholder="Your Name" style={{ width: "100%", marginBottom: 16, padding: 10, fontSize: 18 }} />
          <input required name="email" type="email" placeholder="Your Email" style={{ width: "100%", marginBottom: 16, padding: 10, fontSize: 18 }} />
          <textarea required name="message" placeholder="Your Message" rows={6} style={{ width: "100%", marginBottom: 16, padding: 10, fontSize: 18 }} />
          <button type="submit" style={{ padding: "12px 28px", fontSize: 18, fontWeight: 600 }}>Send</button>
        </form>
      )}
    </div>
  );
}
