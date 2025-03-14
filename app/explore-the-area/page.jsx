import ContactSection from "@/components/global/ContactSection/ContactSection"
import ImageWithTextImageCon from "@/components/global/ImageWithTextSection/ImageWithTextImageCon"
import Hero from "@/components/Hero"
import ExploreCard from "@/components/pages/ExploreTheArea/ExploreCard"
import Image from "next/image"
import React from "react"

import hero from "@/public/assets/images/ExploreTheArea/hero.jpg"
import sailingClub from "@/public/assets/images/ExploreTheArea/sailing-club.webp"
import reservoir from "@/public/assets/images/ExploreTheArea/reservoir.webp"
import waterfall from "@/public/assets/images/ExploreTheArea/waterfall.webp"
import castle from "@/public/assets/images/ExploreTheArea/castle.webp"
import hiking from "@/public/assets/images/ExploreTheArea/hiking.jpg"

export default function page() {
  return (
    <div>
      <Hero
        heading={"So much to see and do"}
        tagline={"in County Durham "}
        imgUrl={hero}
        position="object-center"
      />
      <section className="p-2">
        <div className="w-full flex justify-center py-12">
          <div className="container flex flex-col items-center space-y-12">
            <div className="space-y-6 text-lg text-center md:text-start">
              <p>
                We understand the area in which your holiday home is located
                makes a huge difference to you and your loved ones and should
                enhance your stay whenever you visit your holiday home. County
                Durham is easily accessible from Scotland and Southern England
                and is popular with couples, families and dogs alike. 
              </p>
              <p>
                Below we&apos;ve included some of the best sights, attractions
                and places to explore when you own a holiday home at Grassholme
                Holiday Park. 
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid xl:grid-cols-2  gap-4 bg-primary py-4">
        <div className=" w-full flex justify-center p-4">
          <div className=" max-w-xl flex flex-col items-center max-h-[300px]">
            <Image
              src={reservoir}
              alt="Grassholme Reservoir"
              width={1920}
              height={1080}
              className="rounded-2xl h-full object-cover object-center"
            />
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <p className="text-white text-lg font-semibold p-6">
            Grassholme Holiday Park is just a stone&apos;s throw away from
            Grassholme Reservoir. It&apos;s the perfect place to enjoy the
            sights, sounds and scents of Teasdale&apos;s countryside on your own
            wild adventure through a nature lover&apos;s paradise. Not only is
            it the perfect spot for fishing, walking and family picnics,
            it&apos;s the perfect spot for the perfect night sky. On a clear
            night, you will be amazed at the wonders you can see from here.
          </p>
          <div className="flex justify-end ">
            <a
              className="btn-secondary  text-center fancy "
              href={"https://www.watersideparksuk.com/park/grassholme/"}
            >
              Visit website
            </a>
          </div>
        </div>
      </section>

      <section className="grid xl:grid-cols-2  gap-4  py-4">
        <div className="order-2 md:order-1 flex flex-col justify-between">
          <p className=" text-lg font-semibold p-6">
            Teesdale Sailing Club is a community sailing and watersports club
            Grassholme Reservoir provides a fantastic location for dinghy
            sailing, canoeing and paddle-boarding. 49 hectares of water lined up
            with the prevailing wind allow plenty of space for learning, racing
            or cruising. The club welcomes new members of all abilities. You
            don&apos;t even need your own boat as the club maintains a fleet of
            dinghies available for members to use free of charge.
          </p>
          <div className="flex justify-end ">
            <a
              className="btn-secondary  text-center fancy "
              href={"https://www.tdswc.org.uk/"}
            >
              Visit website
            </a>
          </div>
        </div>
        <div className=" order-1 md:order-2 w-full flex justify-center p-4">
          <div className="max-w-xl flex flex-col items-center max-h-[300px]">
            <Image
              src={sailingClub}
              alt="Teesdale Sailing Club"
              width={1920}
              height={1080}
              className="rounded-2xl h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      <section className="grid xl:grid-cols-2  gap-4 bg-primary py-4">
        <div className=" w-full flex justify-center p-4">
          <div className="max-w-xl flex flex-col items-center max-h-[300px]">
            <Image
              src={castle}
              alt="Barnard Castle"
              width={1920}
              height={1080}
              className="rounded-2xl h-full object-cover object-center"
            />
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <p className="text-white text-lg font-semibold p-6">
            Barnard Castle is a spectacular fortress set on a high rock above
            the market town. Barnard Castle takes its own name from Bernard de
            Balliol, who began the stone fortress here in the 12th century.
            Stretching from the huge outer ward to the innermost stronghold
            towering above the gorge, there&apos;s lots to see and plenty of
            room to explore and play in this big castle.
          </p>
          <div className="flex justify-end ">
            <a
              className="btn-secondary  text-center fancy "
              href={
                "https://www.english-heritage.org.uk/visit/places/barnard-castle/"
              }
            >
              Visit website
            </a>
          </div>
        </div>
      </section>

      <section className="grid xl:grid-cols-2  gap-4  py-4">
        <div className="order-2 md:order-1 flex flex-col justify-between">
          <p className=" text-lg font-semibold p-6">
            Middleton-in-Teesdale is a picturesque market town that nestles by
            the River Tees. It serves as a gateway to the North Pennines and
            offers local shops, eateries, and access to scenic walking routes.
            Many of our existing holiday home owners love exploring the endless
            walking routes that are close to the park. Grassholme Reservoir
            Circular Walk (4 miles) is one our favourites! A circular footpath
            that traces the shoreline of the Reservoir, provides magnificent
            views. The route is set within the North Pennines Area of
            Outstanding Natural Beauty and includes picnic sites along the way.
            Middleton-in-Teesdale to Grassholme Reservoir (8 miles) is a
            pleasant walk that offers lovely views through farmland and around
            Grassholme Reservoir. Harter Fell & Grassholme from
            Middleton-in-Teesdale (8 miles) includes Harter Fell, Grassholme
            Reservoir, and part of the Pennine Way, offering diverse landscapes
            and views.
          </p>
        </div>
        <div className="order-1 md:order-2 w-full flex justify-center p-4">
          <div className="max-w-xl flex flex-col items-center max-h-[300px]">
            <Image
              src={hiking}
              alt="Grassholme Holiday Park"
              width={1920}
              height={1080}
              className="rounded-2xl h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      <section className="grid xl:grid-cols-2  gap-4 bg-primary py-4">
        <div className=" w-full flex justify-center p-4">
          <div className="max-w-xl flex flex-col items-center max-h-[300px]">
            <Image
              src={waterfall}
              alt="Grassholme Holiday Park"
              width={1920}
              height={1080}
              className="rounded-2xl h-full object-cover object-center"
            />
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <p className="text-white text-lg font-semibold p-6">
            Low Force Waterfall is just a short drive from the park. Part of the
            River Tees in beautiful Upper Teesdale. Low Force tumbles over the
            Whin Sill, a layer of hard dolerite rock (known locally as
            whinstone). The Whin Sill formed 295 million years ago from molten
            rock, which cooled and solidified underground.The Pennine Way
            footpath route runs alongside the River at Low Force
          </p>
        </div>
      </section>

      <ContactSection />
    </div>
  )
}
