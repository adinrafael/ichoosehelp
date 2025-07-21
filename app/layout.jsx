import './styles.css'
import Header from './components/Header'

export const metadata = {
  title: 'I Choose Help',
  description: 'Support for OCD, Trauma, and Phobias.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main style={{ minHeight: '100vh', paddingBottom: '58px' }}>
          {children}
        </main>
        <footer>
          © 2025 I Choose Help. All rights reserved.
        </footer>
      </body>
    </html>
  )
}
