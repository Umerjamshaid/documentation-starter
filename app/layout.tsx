import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { SiteHeader } from '@/components/site-header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'YourProduct - Build Amazing Products',
  description: 'A modern platform for building and deploying applications',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

