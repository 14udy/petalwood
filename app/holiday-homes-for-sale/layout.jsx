import React from "react"

export const metadata = {
  title: "Holiday Homes For Sale | Grassholme Holiday Park",
  description:
    "Browse our selection of new and pre-loved caravans and lodges for sale in County Durham. Quality holiday homes starting from £39,995.",
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
    url: "https://petalwood.com/holiday-homes-for-sale",
    type: "website",
    title: "Holiday Homes For Sale | Grassholme Holiday Park",
    description:
      "Browse our selection of new and pre-loved caravans and lodges for sale in County Durham, starting from £39,995.",
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
    canonical: "https://petalwood.com/holiday-homes-for-sale",
  },
}

export default function HolidayHomesForSaleLayout({ children }) {
  return <>{children}</>
}
