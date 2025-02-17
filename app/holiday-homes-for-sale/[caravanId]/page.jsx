import { supabase } from "@/Utils/Supabase/supabase"
import Image from "next/image"
import React from "react"
import { FaBed, FaPeopleGroup } from "react-icons/fa6"
import { RiMoneyPoundBoxLine } from "react-icons/ri"
import { RxWidth } from "react-icons/rx"

async function getCaravan(caravanId) {
  try {
    // Fetch caravans with their images
    const { data: caravan, error: caravanError } = await supabase
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
      .eq("id", caravanId) // Replace caravanId with the actual ID you want to fetch
      .single()

    if (caravanError) throw caravanError

    if (!caravan) {
      return notFound()
    }

    return caravan
  } catch (error) {
    console.error("Error fetching caravans:", error)
  }
}

export default async function page({ params }) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const caravan = await getCaravan(params.caravanId)
  console.log(caravan)
  return (
    <div className="container mx-auto px-4 py-8 space-y-4 mt-[70px] min-h-screen">
      <div className="flex items-center justify-between gap-2">
        <h1 className=" md:text-5xl text-3xl font-bold fancy">
          {caravan.name}{" "}
        </h1>
        <div className="bg-[#026db8] text-white px-3 py-1 rounded-full  md:text-2xl uppercase font-semibold fancy">
          {caravan.status === "COMING_SOON" ? "Coming Soon" : caravan.state}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          <div>
            <Image
              key={caravan.images[0].id}
              src={`${supabaseUrl}/storage/v1/object/public/images/${caravan.images[0].file_path}`}
              alt={caravan.name}
              width={1920}
              height={1080}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="hidden md:block mt-4">
            <div className="grid grid-cols-2 gap-3 text-gray-600">
              <div className="flex justify-center items-center gap-2 text-2xl ">
                <RxWidth className="text-green-700 text-4xl" />
                <span className="font-medium">{caravan.size}</span>
              </div>
              <div className="flex justify-center items-center gap-2 text-2xl">
                <RiMoneyPoundBoxLine className="text-green-700 text-4xl" />
                <span className="font-medium">
                  {caravan.price === 0
                    ? "POA"
                    : `£${new Intl.NumberFormat().format(caravan.price)}`}
                </span>
              </div>
              <div className="flex justify-center items-center gap-2 text-2xl">
                <FaPeopleGroup className="text-green-700 text-4xl" />
                <span className="font-medium">Sleeps {caravan.sleeps}</span>
              </div>
              <div className="flex justify-center items-center gap-2 text-2xl">
                <FaBed className="text-green-700 text-4xl" />
                <span className="font-medium">
                  {caravan.beds} Bed{caravan.beds > 1 && "s"}
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 md:hidden">
            {caravan.images.map((image) => (
              <Image
                key={image.id}
                src={`${supabaseUrl}/storage/v1/object/public/images/${image.file_path}`}
                alt={caravan.name}
                width={1920}
                height={1080}
                className="w-full h-full object-cover rounded-md"
              />
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div className="hidden md:grid grid-cols-3 gap-4">
            {caravan.images.map((image) => (
              <Image
                key={image.id}
                src={`${supabaseUrl}/storage/v1/object/public/images/${image.file_path}`}
                alt={caravan.name}
                width={1920}
                height={1080}
                className="w-full h-full object-cover rounded-md"
              />
            ))}
          </div>
          <div className=" md:hidden mt-4">
            <div className="grid grid-cols-2 gap-3 text-gray-600">
              <div className="flex justify-center items-center gap-2 text-2xl ">
                <RxWidth className="text-green-700 text-4xl" />
                <span className="font-medium">{caravan.size}</span>
              </div>
              <div className="flex justify-center items-center gap-2 text-2xl">
                <RiMoneyPoundBoxLine className="text-green-700 text-4xl" />
                <span className="font-medium">
                  {caravan.price === 0
                    ? "POA"
                    : `£${new Intl.NumberFormat().format(caravan.price)}`}
                </span>
              </div>
              <div className="flex justify-center items-center gap-2 text-2xl">
                <FaPeopleGroup className="text-green-700 text-4xl" />
                <span className="font-medium">Sleeps {caravan.sleeps}</span>
              </div>
              <div className="flex justify-center items-center gap-2 text-2xl">
                <FaBed className="text-green-700 text-4xl" />
                <span className="font-medium">
                  {caravan.beds} Bed{caravan.beds > 1 && "s"}
                </span>
              </div>
            </div>
          </div>
          <div>
            <p className="text-gray-600 whitespace-pre-wrap">
              {caravan.long_description}
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end gap-2">
        <button className="btn-secondary">Arrange a Tour</button>
      </div>
    </div>
  )
}
