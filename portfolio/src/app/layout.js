import '../styles/globals.css';
import { Fira_Code } from 'next/font/google';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import BackToTop from '../components/ui/BackToTop';

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={firaCode.className}>
      <body className="flex flex-col min-h-screen bg-gray-50 font-mono">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
