"use client"

import ContactSection from "@/components/global/ContactSection/ContactSection"
import Hero from "@/components/Hero"
import React, { useState, useEffect } from "react"
import { supabase } from "@/Utils/Supabase/supabase"
import CaravanListItem from "@/components/CaravanList/CaravanListItem"
import Link from "next/link"

export default function HolidayHomesForSale() {
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

      if (caravansError) throw caravansError
      setCaravans(caravansData)
    } catch (error) {
      console.error("Error fetching caravans:", error)
    }
  }
  return (
    <div>
      <Hero
        heading={"A selection of holiday homes for sale "}
        tagline={""}
        imgUrl={"https://media-public.canva.com/QvlVw/MAFluWQvlVw/1/s2.jpg"}
      />
      <section>
        <div className="w-full flex justify-center py-12">
          <div className="container flex flex-col items-center space-y-12 p-2">
            <h2 className={`text-5xl md:text-6xl fancy text-start md:$ `}>
              New and pre-loved caravans and lodges for sale in County Durham
            </h2>
            <div className="space-y-6 text-lg text-start ">
              <p>
                We work with the UK&apos;s leading holiday home manufacturers to
                provide a have a great range of caravans and lodges for sale
                starting from £39,995. Whatever your taste, requirements or
                budget, we&apos;re sure to have the perfect option for you and
                your family. We have included a selection of holiday homes
                currently available or coming soon below. If you&apos;d like
                details on the full range available, don&apos;t hesitate to
                contact a member of our team.
              </p>
              <div className="flex justify-end">
                <Link
                  className="btn-secondary text-center fancy"
                  href={"/our-park"}
                >
                  Request more info
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center">
        <section className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 px-4 py-12">
          {caravans.map((caravan) => (
            <CaravanListItem key={caravan.id} caravan={caravan} />
          ))}
        </section>
      </div>
      <ContactSection />
    </div>
  )
}
