import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { inter } from '@/app/font'
import { ThemeProvider } from './theme-provider'
import './globals.css'


export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Lefia",
    template: "%s | Lefia"
  },
  description: 'Exploring the realms of learning.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='zh-TW'>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className='max-w-5xl mx-auto px-[2rem] py-8 sm:py-10 md:py-12'>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
