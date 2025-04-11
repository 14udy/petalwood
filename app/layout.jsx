import localFont from "next/font/local"
import "@/styles/globals.css"
import { GoogleTagManager } from "@next/third-parties/google"
import Navbar from "@/components/navigation/Navbar"
import Footer from "@/components/navigation/Footer"

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
  title: "Grassholme Holiday Park",
  description:
    "Grassholme is a family ran holiday park, committed to providing a holiday ownership experience that is really special in terms of locations and service.",
  keywords: [
    "holiday homes for sale",
    "caravans for sale",
    "lodges for sale",
    "County Durham",
    "Grassholme Holiday Park",
    "affordable holiday homes",
    "pre-loved caravans",
    "new caravans",
    "static caravans",
    "holiday home ownership",
    "riverside holiday homes",
    "Teesdale",
    "holiday park",
    "UK holiday home manufacturers",
  ],
  openGraph: {
    url: "https://petalwood.com",
    type: "website",
    title: "Grassholme Holiday Park",
    description:
      "Grassholme is a family ran holiday park, committed to providing a holiday ownership experience that is really special in terms of locations and service.",
    images: [
      {
        url: "/logo.png",
        width: 1530,
        height: 804,
        alt: "Explore The Area at Grassholme Holiday Park",
      },
    ],
  },
  alternates: {
    canonical: "https://petalwood.com",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-MMKBJDCD" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${minionPro.variable} antialiased scroll-smooth`}
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
