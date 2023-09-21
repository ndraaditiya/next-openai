import Navbar from '@/components/Navbar'
import Providers from '@/components/Providers'
import { Toaster } from '@/components/ui/Toast'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang='en'
      className={cn('bg-white text-slate-900 antialiased', inter.className)}
      suppressHydrationWarning
    >
      <body className='min-h-screen bg-slate-50 dark:bg-slate-900 antialiased'>
        <Providers>
          <Navbar />
          <Toaster position='bottom-right' />
          <main>{children}</main>
        </Providers>

        {/* Allow for mor height on mobile devices */}
        <div className='h-40 md:hidden' />
      </body>
    </html>
  )
}
