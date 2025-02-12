import Image from "next/image"
import React from "react"

export default function ImageWithTextSection({ children }) {
  return (
    <div className="flex justify-center p-2">
      <section className="grid xl:grid-cols-2 py-16 container gap-4">
        {children}
      </section>
    </div>
  )
}
