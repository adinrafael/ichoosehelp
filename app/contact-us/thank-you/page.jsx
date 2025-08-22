import Link from "next/link";

export const metadata = { title: "Thank You – I Choose Help" };

export default function ThankYouPage() {
  return (
    <div className="content-card">
      <h1>Thank You!</h1>
      <p>Your message has been sent successfully. We’ll be in touch soon.</p>

      <Link href="/" className="return-home-btn">
        Return Home
      </Link>
    </div>
  );
}
