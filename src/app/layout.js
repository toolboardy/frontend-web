// src/app/layout.js

import './globals.css'

//👇 Import Open Sans font
import { Poppins } from 'next/font/google'

//👇 Configure our font object
const poppins = Poppins({
  weight: ['400', '700'], // Agrega otros pesos según tus necesidades
  subsets: ['latin']
})

export default function RootLayout({ children }) {
  return (
    // 👇 Attach font to global JSX node
    <html lang="en" className={poppins.className}>
      <body>{children}</body>
    </html>
  )
}