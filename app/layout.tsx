import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'agenticly — AI-Powered Crypto Trading',
  description: 'Trade futures, spot markets, and deploy autonomous AI agents — all in one platform built natively on Base Chain.',
  icons: { icon: '/agenticly-logo.png' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}