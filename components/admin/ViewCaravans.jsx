"use client"
import React, { useEffect, useState } from "react"
import { supabase } from "../../Utils/Supabase/supabase"
import CreateCaravan from "./CreateCaravan"
import CaravanListItem from "../CaravanList/CaravanListItem"

export default function ViewCaravans({ session }) {
  const [caravans, setCaravans] = useState([])

  useEffect(() => {
    fetchCaravans()
  }, [])

  const fetchCaravans = async () => {
    try {
      // Fetch caravans with their images
      const { data: caravansData, error: caravansError } = await supabase.from(
        "caravans"
      ).select(`
          *,
          images (
            id,
            file_path
          )
        `)

      if (caravansError) throw caravansError
      setCaravans(caravansData)
    } catch (error) {
      console.error("Error fetching caravans:", error)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="w-full flex justify-between">
        {" "}
        <h1 className="text-3xl font-bold mb-6">Our Caravans</h1>
        <CreateCaravan setCaravans={setCaravans} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {caravans.map((caravan) => (
          <CaravanListItem
            key={caravan.id}
            caravan={caravan}
            setCaravans={setCaravans}
            session={session}
          />
        ))}
      </div>
    </div>
  )
}
