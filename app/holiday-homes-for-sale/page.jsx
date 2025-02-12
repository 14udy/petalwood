"use client"

import ContactSection from "@/components/global/ContactSection/ContactSection"
import Hero from "@/components/Hero"
import React, { useState, useEffect } from "react"
import { supabase } from "@/Utils/Supabase/supabase"
import CaravanListItem from "@/components/CaravanList/CaravanListItem"

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
        heading={"Holiday homes for sale"}
        tagline={"in County Durham "}
        imgUrl={"https://media-public.canva.com/QvlVw/MAFluWQvlVw/1/s2.jpg"}
      />
      <section>
        <div className="w-full flex justify-center py-12">
          <div className="container flex flex-col items-center space-y-12">
            <div className="space-y-6 text-lg text-center ">
              <p>
                At Grassholme Holiday Park, we are proud to offer an exceptional
                range of holiday homes for sale, tailored to suit a variety of
                lifestyles and preferences. Whether you&apos;re dreaming of a
                peaceful retreat in the heart of the countryside or a vibrant
                community where you can make lifelong memories, we have the
                perfect holiday home for you. Our holiday homes are designed
                with comfort and convenience in mind, offering modern interiors,
                spacious living areas, and all the amenities you need to unwind
                and enjoy your time away from the hustle and bustle of everyday
                life. From cozy caravans to luxurious lodges, each home provides
                the perfect base for exploring the natural beauty and
                attractions surrounding Grassholme Holiday Park.
              </p>
              <p>
                Owning a holiday home at Grassholme Holiday Park means you can
                escape whenever you like and enjoy the stunning scenery of
                Teesdale at your leisure. Whether you&apos;re planning weekend
                getaways, extended holidays, or a long-term stay, our holiday
                homes offer the flexibility and freedom to make the most of
                every moment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 px-8 py-12">
        {caravans.map((caravan) => (
          <CaravanListItem key={caravan.id} caravan={caravan} />
        ))}
      </section>
      <ContactSection />
    </div>
  )
}
