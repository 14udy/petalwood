import ContactSection from "@/components/global/ContactSection/ContactSection"
import ImageCarousel from "@/components/Home/HolidayHomesForSaleSection/ImageCarousel"
import ViewMatterPort from "@/components/pages/HolidayHomesForSale/ViewMatterPort"
import ViewYouTubeModal from "@/components/pages/HolidayHomesForSale/ViewYoutubeModal"
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
  const pageParams = await params
  const caravan = await getCaravan(pageParams.caravanId)

  const youtubeUrl = caravan.youtube_url
  console.log(youtubeUrl)

  return (
    <div>
      <div className="xl:container mx-auto px-4 py-8 space-y-4 mt-[70px] ">
        <div className="flex items-center justify-between gap-2">
          <h1 className=" md:text-5xl text-3xl  fancy">{caravan.name} </h1>{" "}
          <div className="hidden md:block bg-[#026db8] text-white px-3 pt-1 rounded-full  md:text-2xl uppercase font-semibold fancy">
            {caravan.status === "COMING_SOON" ? "Coming Soon" : caravan.state}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="relative h-[200px] xl:h-[500px]">
              <ImageCarousel images={caravan.images} />
              <div className="md:hidden absolute top-2 right-2 z-20  gap-2">
                {" "}
                <div className="bg-[#026db8] text-white px-3 pt-1 rounded-full  md:text-2xl uppercase font-semibold fancy flex flex-col items-center justify-center ">
                  <p className="text-center">
                    {caravan.status === "COMING_SOON"
                      ? "Coming Soon"
                      : caravan.state}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-3 ">
                <div className="flex justify-center items-center gap-2 text-xl ">
                  <RxWidth className="text-green-700 text-4xl" />
                  <span className="font-medium">{caravan.size}</span>
                </div>
                <div className="flex justify-center items-center gap-2 text-xl">
                  <RiMoneyPoundBoxLine className="text-green-700 " />
                  <span className="font-medium">
                    {caravan.price === 0
                      ? "POA"
                      : `£${new Intl.NumberFormat().format(caravan.price)}`}
                  </span>
                </div>
                <div className="flex justify-center items-center gap-2 text-xl">
                  <FaPeopleGroup className="text-green-700 text-4xl" />
                  <span className="font-medium">Sleeps {caravan.sleeps}</span>
                </div>
                <div className="flex justify-center items-center gap-2 text-xl">
                  <FaBed className="text-green-700 text-4xl" />
                  <span className="font-medium">
                    {caravan.beds} Bed{caravan.beds > 1 && "s"}
                  </span>
                </div>
              </div>
              <div>
                <p className=" whitespace-pre-wrap">
                  {caravan.long_description}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              {caravan.matterport_url && (
                <ViewMatterPort url={caravan.matterport_url} />
              )}
              {caravan.youtube_url && (
                <ViewYouTubeModal url={caravan.youtube_url} />
              )}

              {/* https://www.youtube.com/embed/dQw4w9WgXcQ */}
            </div>

            <div className="flex items-center justify-end gap-2">
              <a className="btn-secondary" href={"#contact"}>
                Arrange a Tour
              </a>
            </div>
          </div>
        </div>
      </div>
      <ContactSection />
    </div>
  )
}
