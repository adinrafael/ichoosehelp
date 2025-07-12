import '../styles.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'I Choose Help',
  description: 'Support for OCD, trauma, and phobias.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white pt-16 pb-8">
        <Header />
        <main className="container mx-auto px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

