import ContactSection from "@/components/global/ContactSection/ContactSection"
import ImageWithTextContent from "@/components/global/ImageWithTextSection/ImageWithTextContent"
import ImageWithTextImageCon from "@/components/global/ImageWithTextSection/ImageWithTextImageCon"
import ImageWithTextSection from "@/components/global/ImageWithTextSection/ImageWithTextSection"
import Hero from "@/components/Hero"
import HhfsSection from "@/components/Home/HolidayHomesForSaleSection/HhfsSection"
import Link from "next/link"
import React from "react"

import heroImage from "@/public/assets/images/HolidayHomeOwnership/hero.webp"
import river from "@/public/assets/images/HolidayHomeOwnership/river.webp"
import dam from "@/public/assets/images/HolidayHomeOwnership/dam.webp"

export default function HolidayHomeOwnership() {
  return (
    <div>
      <Hero
        heading={"A peaceful escape"}
        tagline={"to enjoy endless holidays"}
        imgUrl={heroImage}
        position="object-top"
      />

      <ImageWithTextSection>
        <ImageWithTextContent
          alignText="text-start"
          title="Find the perfect place for you and your family"
        >
          <div className="space-y-6 text-lg text-center md:text-start">
            <p>
              At Grassholme holiday park, we are committed to creating special
              places for holiday home owners to truly relax and embrace holiday
              home ownership with like-minded people. Your holiday home should
              be a special place where you can unwind and make memories with
              your loved ones. 
            </p>
            <p>
              We understand that finding the perfect park can feel daunting. Our
              friendly, experienced team is on hand to help. Moving at your own
              pace, we&apos;ll be supportive and transparent every step of the
              way. We&apos;ll help you ensure our park is the right location for
              you and your family and we&apos;ll support you in choosing the
              perfect pitch, and holiday home though our journey to ownership.{" "}
            </p>
            <div className="w-full flex ">
              <Link
                className="btn-secondary w-full text-center"
                href={"/explore-the-area"}
              >
                Download our guide to ownership
              </Link>
            </div>
          </div>
        </ImageWithTextContent>
        <ImageWithTextImageCon url={river} />
      </ImageWithTextSection>

      <HhfsSection />

      <ImageWithTextSection>
        <ImageWithTextContent
          alignText="text-start"
          title="Come visit this beautiful part of North East England"
        >
          <div className="space-y-6 text-lg text-center md:text-start">
            <p>
              As a family owned business that is focused around unique
              experiences and excellent service, our friendly team is on hand to
              help. In our experience, the best way for you to discover whether
              or not Grassholme Holiday Park is the perfect place for you and
              your family, is to visit. Meet with our team, we&apos;ll show you
              around, tell you all about the park, the area and the benefits of
              ownership. We can also show you a selection of holiday homes and
              pitch locations available.
            </p>
            <p>
              Your visit will be informative and relaxed and we&apos;ll move at
              your pace. We&apos;d recommend that you explore the local area
              too, there&apos;s so much to see!
            </p>
          </div>
          <div className="w-full flex ">
            <a className="btn-secondary w-full text-center" href={"#contact"}>
              Arrange a park visit
            </a>
          </div>
        </ImageWithTextContent>
        <ImageWithTextImageCon url={dam} />
      </ImageWithTextSection>

      <ContactSection />
    </div>
  )
}
