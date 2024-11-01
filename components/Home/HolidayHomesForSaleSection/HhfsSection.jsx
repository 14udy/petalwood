import React from "react"
import HhfsSectionCard from "./HhfsSectionCard"

export default function HhfsSection() {
  return (
    <section className="bg-primary text-white py-12 space-y-12">
      <div>
        <h3 className="text-5xl text-center fancy">Holiday Homes for Sale</h3>
      </div>
      {/* CARD SECTION */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 px-8">
        <HhfsSectionCard />
        <HhfsSectionCard />
        <HhfsSectionCard />
        <HhfsSectionCard />
      </div>
    </section>
  )
}
