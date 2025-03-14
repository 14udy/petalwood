"use client"
import React, { useEffect, useState } from "react"
import CaravanListItem from "../../CaravanList/CaravanListItem"
import { supabase } from "@/Utils/Supabase/supabase"
import Link from "next/link"

export default function HhfsSection() {
  const [caravans, setCaravans] = useState([])

  useEffect(() => {
    fetchCaravans()
  }, [])

  const fetchCaravans = async () => {
    try {
      // Fetch caravans with their images
      const { data: caravansData, error: caravansError } = await supabase
        .from("caravans")
        .select(
          `
          *,
          images (
            id,
            file_path
          )
        `
        )
        .limit(5)

      if (caravansError) throw caravansError
      setCaravans(caravansData)
    } catch (error) {
      console.error("Error fetching caravans:", error)
    }
  }

  return (
    <section className="bg-primary text-white py-12 space-y-12">
      <div>
        <h3 className=" text-3xl md:text-5xl fancy text-center">
          Holiday Homes for Sale
        </h3>
      </div>
      {/* CARD SECTION */}
      <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-8 px-8">
        {caravans.map((caravan) => (
          <CaravanListItem key={caravan.id} caravan={caravan} session={null} />
        ))}
      </div>
      <div className="flex justify-end">
        <Link
          className="btn-secondary text-center fancy"
          href={"/holiday-homes-for-sale"}
        >
          View All
        </Link>
      </div>
    </section>
  )
}
