import React from "react"
import CaravanListItem from "../../CaravanList/CaravanListItem"
import { supabase } from "@/Utils/Supabase/supabase"

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
    console.log(caravansData)
    return caravansData
  } catch (error) {
    console.error("Error fetching caravans:", error)
  }
}

export default async function HhfsSection() {
  const caravansData = await fetchCaravans()
  console.log(caravansData)
  return (
    <section className="bg-primary text-white py-12 space-y-12">
      <div>
        <h3 className=" text-3xl md:text-5xl text-center fancy">
          Holiday Homes for Sale
        </h3>
      </div>
      {/* CARD SECTION */}
      <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-8 px-8">
        {caravansData.map((caravan) => (
          <CaravanListItem key={caravan.id} caravan={caravan} session={null} />
        ))}
      </div>
    </section>
  )
}
