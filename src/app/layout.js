import { Montserrat } from 'next/font/google';
import Script from "next/script"
import './globals.css'
import Navbar from '@/components/Shared/Navbar';
import Footer from '@/components/Shared/Footer';
import LayoutProvider from './LayoutProvider';
const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: "--font-mont"
  
})

export const metadata = {
  title: 'AKM SYFUL ALOM',
  description: 'As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in Full Stack Web App Development.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-light w-full min-h-screen dark:bg-dark`}>
      <Script id="theme-switcher" strategy='beforeInteractive'>
          {`
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark');
            } else {
              document.documentElement.classList.remove('dark');
            }
          `}
        </Script>
        <Navbar />
        <LayoutProvider>
        {children}
        </LayoutProvider>
        <Footer />
      </body>
    </html>
  )
}
