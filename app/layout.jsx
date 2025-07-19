import '../styles.css'
import Header from './components/Header'
import Menu from './components/Menu'

export const metadata = {
  title: 'I Choose Help',
  description: 'Support for OCD, Trauma, and Phobias.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Header always at top */}
        <Header />
        {/* Standalone Menu right under the header */}
        <Menu />

        <main>
          {children}
        </main>

        {/* Footer always at bottom */}
        <footer
          className="fixed bottom-0 left-0 w-full text-center py-2 text-gray-900"
          style={{
            background: 'rgba(240,240,240,0.5)',
            fontSize: '1.05rem',
            fontWeight: 400,
            backdropFilter: 'blur(5px)',
          }}
        >
          © 2025 I Choose Help. All rights reserved.
        </footer>
      </body>
    </html>
  )
}
