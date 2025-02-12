import ContactSection from "@/components/global/ContactSection/ContactSection"
import ImageWithTextContent from "@/components/global/ImageWithTextSection/ImageWithTextContent"
import ImageWithTextImageCon from "@/components/global/ImageWithTextSection/ImageWithTextImageCon"
import ImageWithTextSection from "@/components/global/ImageWithTextSection/ImageWithTextSection"
import Hero from "@/components/Hero"
import HhfsSection from "@/components/Home/HolidayHomesForSaleSection/HhfsSection"
import Link from "next/link"
import React from "react"

export default function page() {
  return (
    <div>
      <Hero
        heading={"A peaceful bolthole"}
        tagline={"to enjoy endless holidays"}
        imgUrl={
          "https://media-private.canva.com/F8ILg/MAEioFF8ILg/1/s3.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20250212%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250212T090846Z&X-Amz-Expires=39747&X-Amz-Signature=a2ac747cb0fa831f6a1188296be7eba5bcb456f143e54c9875a827a0f23cf162&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Wed%2C%2012%20Feb%202025%2020%3A11%3A13%20GMT"
        }
        position="object-center"
      />

      <ImageWithTextSection>
        <ImageWithTextContent
          alignText="text-start"
          title="Find the perfect place for you and your family"
        >
          <div className="space-y-6 text-lg text-center md:text-start">
            <p>
              Petalwood is committed to creating special places for holiday home
              owners to truly relax and embrace holiday home ownership with
              like-minded people. Your holiday home should be a special place
              where you can unwind and make memories with your loved ones.
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
        <ImageWithTextImageCon url="https://media-private.canva.com/MABz2f9zEB0/1/screen_2x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20250212%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250212T121832Z&X-Amz-Expires=28062&X-Amz-Signature=6b4ed234c0f9fa662250fa4e7aabdb496dd60f5bcc7d07e8946e42d8fb9d5d42&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Wed%2C%2012%20Feb%202025%2020%3A06%3A14%20GMT" />
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
            <Link
              className="btn-secondary w-full text-center"
              href={"/explore-the-area"}
            >
              Arrange a park visit
            </Link>
            {/* <button className="btn-secondary w-full font-mono">
                  Explore The Area
                </button> */}
          </div>
        </ImageWithTextContent>
        <ImageWithTextImageCon url="https://media-private.canva.com/MADmIiihIlc/1/screen_2x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20250211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250211T180555Z&X-Amz-Expires=93740&X-Amz-Signature=31b9dcf5adbaab6aecad20c60ce4f868d88c04537ec5b508d22eb85679fa5f87&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Wed%2C%2012%20Feb%202025%2020%3A08%3A15%20GMT" />
      </ImageWithTextSection>

      <ContactSection />
    </div>
  )
}
