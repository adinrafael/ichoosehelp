import Image from 'next/image'

export default function HomePage() {
  return (
    <div
      className="
        flex flex-col items-center justify-center
        text-center
        min-h-[70vh]
      "
    >
      <Image
        src="/logo.png"
        alt="I Choose Help logo"
        width={120}
        height={120}
        className="mb-6"
        priority
      />
      <h1 className="castellar mb-2">
        Welcome to I Choose Help
      </h1>
      <p className="text-lg text-gray-200">COMING SOON</p>
    </div>
  )
}
