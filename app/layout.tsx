import type { Metadata } from 'next'
import React from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'DISYGO - Digital Agency For Your Business',
  description: 'Professional digital marketing and web development services to grow your business online.',
  keywords: 'digital agency, web development, digital marketing, SEO, graphic design',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Doto:wght,ROND@100..900,0..100&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-black text-gray-100">
        {children}
      </body>
    </html>
  )
} 