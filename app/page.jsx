import ContactSection from "@/components/global/ContactSection/ContactSection"
import ImageWithTextContent from "@/components/global/ImageWithTextSection/ImageWithTextContent"
import ImageWithTextImageCon from "@/components/global/ImageWithTextSection/ImageWithTextImageCon"
import ImageWithTextSection from "@/components/global/ImageWithTextSection/ImageWithTextSection"
import Hero from "@/components/Hero"
import HhfsSection from "@/components/Home/HolidayHomesForSaleSection/HhfsSection"
import Image from "next/image"
import Link from "next/link"

import headerImage from "@/public/assets/images/page1-header.webp"
import image1 from "@/public/assets/images/page1-img1.webp"
import image2 from "@/public/assets/images/page1-img2.webp"
import image3 from "@/public/assets/images/page1-img3.webp"
import image4 from "@/public/assets/images/page1-img4.webp"

export default function Home() {
  return (
    <div>
      <Hero
        heading={"A holiday home retreat "}
        tagline={"in the heart of Teesdale"}
        imgUrl={headerImage}
      />
      <ImageWithTextSection>
        <ImageWithTextContent
          alignText="text-start"
          title="Welcome to your home away from home"
        >
          <div className=" space-y-6 text-lg text-center md:text-start">
            <p>
              Grassholme is a privately owned holiday park, committed to
              providing a holiday ownership experience that is really special in
              terms of locations and service.
            </p>
            <p>
              When you own a holiday home at Grassholme Holiday Park, you and
              your loved ones can escape to the Teesdale countryside at a
              moment&apos;s notice. Whether you want to relax in your holiday
              home in our peaceful surroundings or explore the local area
              including Grassholme Reservoir and Grassholme Observatory,
              Grassholme holiday park is the perfect place to relax and enjoy
              quality family time
            </p>
          </div>
          <div className="flex w-full">
            <Link
              className="btn-secondary w-full text-center fancy"
              href={"/our-park"}
            >
              View Grassholme Leisure Park
            </Link>
          </div>
        </ImageWithTextContent>
        <ImageWithTextImageCon url={image1} />
      </ImageWithTextSection>

      <HhfsSection />

      <ImageWithTextSection>
        <ImageWithTextContent
          alignText="text-start"
          title="Benefits of ownership with Petalwood"
        >
          <div className="space-y-6 text-lg text-center md:text-start">
            <p>
              When you choose to own a holiday home with us, you can relax in
              the knowledge that we&apos;re committed to making your experience
              as special as possible.
            </p>
            <p>
              You can jump in the car and escape to your riverside retreat at a
              moment&apos;s notice, with our dedicated team on hand to ensure
              you arrive to the highest of standards and service that exceeds
              your expectations every time you and your loved ones visit.
            </p>
          </div>
          <div className="flex w-full">
            <Link
              className="btn-secondary w-full text-center fancy "
              href={"/holiday-home-ownership"}
            >
              Discover more
            </Link>
          </div>
        </ImageWithTextContent>
        <ImageWithTextImageCon url={image2} />
      </ImageWithTextSection>

      <div className="flex justify-center">
        <section className="py-16 container space-y-12 p-2">
          <h2 className="text-5xl md:text-6xl fancy text-center md:text-start ">
            Explore the County Durham countryside
          </h2>
          <div className="flex flex-col xl:flex-row gap-6">
            <div className="w-full xl:w-4/12">
              <Image
                src={image3}
                alt="Grassholme Holiday Park"
                width={1920}
                height={1080}
                className="rounded-2xl md:h-[400px] object-cover object-bottom"
              />
            </div>
            <div className="w-full xl:w-8/12">
              <Image
                src={image4}
                alt="Grassholme Holiday Park"
                width={1920}
                height={1080}
                className="rounded-2xl md:h-[400px] object-cover object-bottom"
              />
            </div>
          </div>
          <div className="w-full flex flex-col xl:flex-row gap-4 ">
            <p className="text-lg xl:w-8/12 text-center md:text-start">
              From Grassholme Reservoir, to a huge Area of Outstanding Beauty to
              explore, hiking, country pubs and so many historical sites such as
              Barnard Castle, there&apos;s so much to see and do on the doorstep
              of Grassholme Holiday Park. Not to mention Grassholme Observatory,
              a magical visitor attraction under the dark skies of Teesdale,
              which is located next to the park.
            </p>
            <div className="flex justify-end md:justify-center md:items-center md:w-4/12">
              <Link
                className="btn-secondary w-full text-center fancy"
                href={"/explore-the-area"}
              >
                Explore the area
              </Link>
            </div>
          </div>
        </section>
      </div>
      <ContactSection />
    </div>
  )
}
