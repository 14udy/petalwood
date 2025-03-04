import Image from "next/image"
import { FaLocationDot } from "react-icons/fa6"

import logo from "@/public/logo.png"

export default function Hero({
  heading,
  tagline,
  imgUrl,

  location,
  position = "object-center",
  addLogo = false,
}) {
  return (
    <section className="relative w-full h-[60vh] ">
      <Image
        className={`object-cover ${position}  z-[-1] w-auto h-full `}
        priority
        // src={`${imgUrl}`}

        src={imgUrl}
        fill
        alt={`Image of ${heading}`}
        loading="eager"
      />
      <div className="absolute inset-0 bg-black opacity-30 z-[-1]"></div>
      {location && (
        <div className="absolute bottom-5 right-0">
          <div className="bg-primary text-white p-2 flex items-center gap-2 rounded-tl-lg rounded-bl-lg">
            {/* <FaLocationDot className="text-secondary" /> */}
            <h1>{location}</h1>
          </div>
        </div>
      )}

      <div className=" h-full flex flex-col justify-between">
        <div className="h-full flex flex-col items-center justify-center xl:items-start xl:justify-start  xl:ps-10 xl:pt-28 text-center xl:text-start   text-white mt-[70px] space-y-2 lg:space-y-6">
          <h1 className="text-6xl md:text-8xl font-bold appear fancy ">
            {heading}
          </h1>

          <h1 className="text-3xl lg:text-6xl font-bold appear delay-1 fancy">
            {tagline}
          </h1>
        </div>
      </div>
    </section>
  )
}
