import Link from "next/link";

export default function Menu({ onClose }) {
  return (
    <nav className="dropdown-menu open">
      <ul>
        <li><Link href="/about-us">About Us</Link></li>
        <li><Link href="/ocd-information">OCD Information</Link></li>
        <li><Link href="/phobia-information">Phobia Information</Link></li>
        <li><Link href="/trauma-information">Trauma Information</Link></li>
        <li><Link href="/contact-us">Contact Us</Link></li>
        <li><Link href="/book-a-time">Book a Time</Link></li>
      </ul>
    </nav>
  );
}
