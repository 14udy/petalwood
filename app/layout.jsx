import localFont from "next/font/local"
import "@/styles/globals.css"
import Navbar from "@/components/navigation/Navbar"
import Footer from "@/components/navigation/Footer"
import { ToastContainer } from "react-toastify"
import ToastProvider from "@/components/ToastProvider"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata = {
  title: "Petalwood",
  description: "Grassholme Holiday Park",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ToastProvider>
          <Navbar />
          {children}
          <Footer />
        </ToastProvider>
      </body>
    </html>
  )
}
