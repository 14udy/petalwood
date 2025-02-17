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

const minionPro = localFont({
  src: [
    { path: "./fonts/MinionPro-Bold.woff", weight: "700", style: "normal" },

    { path: "./fonts/MinionPro-BoldIt.woff", weight: "700", style: "italic" },
    { path: "./fonts/MinionPro-Medium.woff", weight: "500", style: "normal" },
    {
      path: "./fonts/MinionPro-MediumIt.woff",
      weight: "500",
      style: "italic",
    },
    { path: "./fonts/MinionPro-Semibold.woff", weight: "600", style: "normal" },
    {
      path: "./fonts/MinionPro-SemiboldIt.woff",
      weight: "600",
      style: "italic",
    },

    { path: "./fonts/MinionPro-Regular.woff", weight: "400", style: "normal" },
    { path: "./fonts/MinionPro-It.woff", weight: "400", style: "italic" },
  ],
  variable: "--font-minion-pro",
})

export const metadata = {
  title: "Petalwood",
  description: "Grassholme Holiday Park",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${minionPro.variable} antialiased`}
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
