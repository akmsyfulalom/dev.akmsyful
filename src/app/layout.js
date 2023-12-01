import { Montserrat } from 'next/font/google';

import './globals.css'
import Navbar from '@/components/Shared/Navbar';
import Footer from '@/components/Shared/Footer';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: "--font-mont"
  
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-light w-full min-h-screen dark:bg-dark`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
