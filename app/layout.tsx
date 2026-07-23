import type { Metadata } from 'next'
import { Geist, Geist_Mono, Cormorant } from 'next/font/google'
import './globals.css'
import SmoothScroll from '@/shared/components/sectionIndicator/SmoothScroll'
import SectionIndicator from '@/shared/components/sectionIndicator/SectionIndicator'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

const cormorant = Cormorant({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Tourism Landing',
  description:
    'Cinematic tourism landing page built with Next.js, TypeScript, GSAP and Lenis.',
  keywords: ['Next.js', 'GSAP', 'Lenis', 'TypeScript', 'Landing Page'],
  authors: [{ name: 'Facundo Robert' }]
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} h-full antialiased`}
    >
      <head>
        <link rel='preload' as='image' href='/images/home/heroBackground.png' />
      </head>
      <body className='min-h-full flex flex-col'>
        <SmoothScroll />
        <SectionIndicator />
        {children}
      </body>
    </html>
  )
}
