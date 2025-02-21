import Image from "next/image"
import React from "react"

export default function ImageWithTextImageCon({ url }) {
  return (
    <div className="order-1 md:order-2 w-full flex justify-center">
      <div className="max-w-xl flex flex-col items-center">
        <Image
          src={url}
          alt="Grassholme Holiday Park"
          width={1920}
          height={1080}
          className="rounded-2xl h-full object-cover object-center"
        />
      </div>
    </div>
  )
}
