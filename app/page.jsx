import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="hero-content">
      <Image
        src="/logo.png"
        alt="I Choose Help logo"
        width={120}
        height={120}
        className="hero-logo"
        priority
      />
      <div className="hero-title">Welcome to<br />I Choose Help</div>
      <div className="hero-sub">COMING SOON</div>
    </div>
  )
}
