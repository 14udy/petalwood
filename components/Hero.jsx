import Image from "next/image"
import { FaLocationDot } from "react-icons/fa6"

export default function Hero({
  heading,
  tagline,
  imgUrl,
  quotes = true,
  location,
}) {
  return (
    <section className="relative w-full h-[60vh] ">
      <Image
        className="object-cover object-center z-[-1] w-auto h-full "
        priority
        // src={`${imgUrl}`}
        src={"https://media-public.canva.com/MADGyNcnzZY/4/screen_2x.jpg"}
        fill
        alt={`Image of ${heading}`}
        loading="eager"
      />
      <div className="absolute inset-0 bg-black opacity-50 z-[-1]"></div>
      {location && (
        <div className="absolute bottom-5 right-0">
          <div className="bg-primary text-white p-2 flex items-center gap-2 rounded-tl-lg rounded-bl-lg">
            {/* <FaLocationDot className="text-secondary" /> */}
            <h1>{location}</h1>
          </div>
        </div>
      )}

      <div className=" h-full flex flex-col justify-between">
        <div className="h-full  items-center flex flex-col justify-center text-center  text-white mt-[70px] space-y-2 lg:space-y-6">
          <h1 className="text-5xl md:text-8xl font-bold appear fancy">
            {heading}
          </h1>
          <div className="space-y-4 flex flex-col p-2">
            {" "}
            <h1 className="text-2xl lg:text-4xl font-bold fade-in delay-1 chewy">
              {tagline}
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}
