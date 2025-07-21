'use client'
import Link from 'next/link'

const MENU = [
  {
    label: 'About Us',
    href: '/about',
  },
  {
    label: 'OCD Info',
    href: '/ocd',
    sub: [
      { label: 'What is OCD?', href: '/ocd/what-is' },
      { label: 'Treatments', href: '/ocd/treatments' },
      { label: 'Resources', href: '/ocd/resources' },
    ],
  },
  {
    label: 'Phobia Info',
    href: '/phobia',
    sub: [
      { label: 'Types of Phobias', href: '/phobia/types' },
      { label: 'Help & Recovery', href: '/phobia/help' },
    ],
  },
  {
    label: 'Trauma Info',
    href: '/trauma',
    sub: [
      { label: 'Understanding Trauma', href: '/trauma/understanding' },
      { label: 'Healing', href: '/trauma/healing' },
    ],
  },
  {
    label: 'Contact',
    href: '/contact',
  },
  {
    label: 'Book a Time',
    href: '/book',
  },
]

export default function Menu({ open, setOpen }) {
  return (
    <nav className={`site-menu${open ? ' open' : ''}`}>
      {MENU.map((item, idx) => (
        <div className="menu-item" key={item.label}>
          <Link href={item.href} onClick={() => setOpen && setOpen(false)}>
            {item.label}
          </Link>
          {item.sub && (
            <div className="dropdown">
              {item.sub.map(sub => (
                <Link href={sub.href} key={sub.href} onClick={() => setOpen && setOpen(false)}>
                  {sub.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  )
}
