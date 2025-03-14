import React from "react"

export default function ImageWithTextContent({ title, alignText, children }) {
  return (
    <div className={` w-full flex justify-center `}>
      <div className="max-w-2xl flex flex-col space-y-6 md:space-y-12">
        <h2
          className={`text-3xl md:text-5xl fancy text-center md:${alignText} `}
        >
          {title}
        </h2>
        {children}
      </div>
    </div>
  )
}
