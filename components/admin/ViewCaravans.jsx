"use client"
import React, { useEffect, useState } from "react"
import { supabase } from "../../Utils/Supabase/supabase"
import CaravanListItem from "../CaravanList/CaravanListItem"
import EditCaravan from "./EditCaravan"
import Link from "next/link"

export default function ViewCaravans({ session }) {
  const [caravans, setCaravans] = useState([])
  const [caravanToEdit, setCaravanToEdit] = useState(null)

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

  console.log(caravans)

  return (
    <div className="container mx-auto px-4 py-8 space-y-4">
      <div className="w-full flex justify-between items-center">
        {" "}
        <h1 className="text-3xl font-bold ">
          {caravanToEdit ? "Edit Caravan" : "Our Caravans"}
        </h1>
        <div>
          <Link href="/admin/create-caravan" className="btn-secondary">
            Create caravan
          </Link>
        </div>
      </div>
      {caravanToEdit ? (
        <EditCaravan
          caravan={caravanToEdit}
          setCaravans={setCaravans}
          setCaravanToEdit={setCaravanToEdit}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {caravans.map((caravan) => (
            <CaravanListItem
              key={caravan.id}
              caravan={caravan}
              setCaravans={setCaravans}
              session={session}
              setCaravanToEdit={setCaravanToEdit}
            />
          ))}
        </div>
      )}
    </div>
  )
}
