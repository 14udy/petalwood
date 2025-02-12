import Image from "next/image"
import React from "react"

export default function ExploreCard({ children, imageUrl, title }) {
  return (
    <div className="relative bg-white rounded-lg overflow-hidden shadow-md">
      {/* Image Background */}
      <Image
        src={imageUrl}
        alt={title}
        width={1920}
        height={1080}
        className="absolute inset-0 object-cover object-center w-full h-full"
      />

      {/* Overlay Gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div> */}
      <div className="absolute inset-0 bg-white opacity-70 w-full h-full"></div>
      {/* Text Content */}
      {children}
    </div>
  )
}
