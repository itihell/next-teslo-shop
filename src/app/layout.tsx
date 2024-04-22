import type { Metadata } from 'next'
import { inter } from '@/config/fonts'

import './globals.css'



export const metadata: Metadata = {
  title: {
    template:'%s - Teslo | Shop',
    default: 'Home - Teslo | Shop',
  },
  description: 'Una tienda de productos de calidad',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
