import ContactSection from "@/components/global/ContactSection/ContactSection"
import ImageWithTextContent from "@/components/global/ImageWithTextSection/ImageWithTextContent"
import ImageWithTextSection from "@/components/global/ImageWithTextSection/ImageWithTextSection"
import Hero from "@/components/Hero"
import HhfsSection from "@/components/Home/HolidayHomesForSaleSection/HhfsSection"
import Image from "next/image"
import Link from "next/link"
import React from "react"

import heroImage from "@/public/assets/images/OurPark/hero.webp"
import castle from "@/public/assets/images/ExploreTheArea/castle.webp"
import tranquil from "@/public/assets/images/OurPark/tranquil.webp"
import holidayHomes from "@/public/assets/images/OurPark/holiday-homes.webp"

export default function OurPark() {
  return (
    <div>
      <Hero
        heading={"A riverside retreat"}
        tagline={"near Grassholme"}
        imgUrl={heroImage}
        position="object-top"
        addLogo={true}
      />
      <ImageWithTextSection>
        <ImageWithTextContent
          alignText="text-start"
          title="A tranquil, countryside park near Barnard Castle"
        >
          <div className="space-y-6 text-lg text-center md:text-start">
            <p>
              Situated in an Area of Outstanding Natural Beauty, Grassholme
              Holiday Park is hidden in a valley with wonderful countryside and
              river views. Whether you&apos;re looking for a retreat to explore
              market towns such as Barnard Castle, explore endless miles of
              countryside walks, enjoy watersports or marvel at the Dark Sky
              Discovery Site at Grassholme Reservoir, Grassholme Holiday park is
              the perfect base.
            </p>
          </div>
        </ImageWithTextContent>
        <div className="w-full flex justify-center">
          <div className="max-w-xl flex flex-col items-center">
            <Image
              src={tranquil}
              alt="Grassholme Holiday Park"
              width={1920}
              height={1080}
              className="rounded-2xl h-full object-cover object-center"
            />
          </div>
        </div>
      </ImageWithTextSection>

      <ImageWithTextSection alignText="text-end">
        <div className="w-full flex order-2 md:order-1">
          <div className="max-w-xl flex flex-col items-center">
            <Image
              src={holidayHomes}
              alt="Grassholme Holiday Park"
              width={1920}
              height={1080}
              className="rounded-2xl h-full object-cover object-center"
            />
          </div>
        </div>
        <div className="order-1">
          <ImageWithTextContent
            alignText="text-end"
            title="Holiday home options for every taste and budget"
            text="At Grassholme Holiday Park we have a range for used and new caravans available for sale for every taste and budget. The park has undergone recent investment to offer enhanced pitch locations for holiday home owners including exclusive river view pitches. Every holiday home location benefits from countryside views and parking as standard"
          >
            <div className="space-y-6 text-lg text-center md:text-start">
              <p>
                At Grassholme Holiday Park we have a range for used and new
                caravans available for sale for every taste and budget. The park
                has undergone recent investment to offer enhanced pitch
                locations for holiday home owners including exclusive river view
                pitches. Every holiday home location benefits from countryside
                views and parking as standard.
              </p>
            </div>
          </ImageWithTextContent>
        </div>
      </ImageWithTextSection>

      <HhfsSection />

      <ImageWithTextSection>
        <ImageWithTextContent
          alignText="text-start"
          title="Things to do nearby"
        >
          <div className="space-y-6 text-lg text-center md:text-start">
            <p>
              Middleton-in-Teesdale and Barnard Castle are just two of the many
              areas to explore when you own a holiday home at Grassholme.
              Middelton-in-Teesdale is a haven for outdoor enthusiasts and
              anglers, surrounded by rolling hills and walking trails. Nearby,
              Barnard Castle, a historic market town, takes its name from its
              iconic medieval fortress perched above the River Tees.
            </p>

            <div className="w-full flex ">
              <Link
                className="btn-secondary w-full text-center"
                href={"/explore-the-area"}
              >
                Explore the area
              </Link>
            </div>
          </div>
        </ImageWithTextContent>
        <div className="w-full flex justify-center">
          <div className="max-w-xl flex flex-col items-center">
            <Image
              src={castle}
              alt="Grassholme Holiday Park"
              width={1920}
              height={1080}
              className="rounded-2xl h-full object-cover object-center"
            />
          </div>
        </div>
      </ImageWithTextSection>
      <ContactSection />
    </div>
  )
}
