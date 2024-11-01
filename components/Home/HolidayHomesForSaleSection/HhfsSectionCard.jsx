import Image from "next/image"
import React from "react"

export default function HhfsSectionCard() {
  return (
    <div className="bg-[#ffffff] text-black  rounded-lg shadow-lg">
      <Image
        src="https://media-public.canva.com/MADGyNcnzZY/4/screen_2x.jpg"
        alt="Card Image 1"
        width={300}
        height={200}
        className="rounded-t-lg w-full"
      />
      <div className="p-4">
        <h4 className="text-2xl mt-4 fancy">Card Title 1</h4>
        <p className="mt-2">Description for card 1.</p>
        <p className="mt-2">From £39,995</p>
        <div className="flex justify-end">
          <button className="mt-4 bg-secondary text-white py-2 px-4 rounded">
            Find out more
          </button>
        </div>
      </div>
    </div>
  )
}
