// MarqueeRow.jsx
import React from "react"

export default function MarqueeRow({ children, reverse = false, delay = 0 }) {
  return (
    <div className="relative flex gap-4 ">
      <div
        className={`flex shrink-0 gap-4 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
        style={{ animationDelay: `${delay}s` }}
      >
        {children}
        {/* Duplicate the children to create a seamless loop */}
        {children}
      </div>
    </div>
  )
}
