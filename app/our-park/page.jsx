import ContactSection from "@/components/global/ContactSection/ContactSection"
import ImageWithTextContent from "@/components/global/ImageWithTextSection/ImageWithTextContent"
import ImageWithTextSection from "@/components/global/ImageWithTextSection/ImageWithTextSection"
import Hero from "@/components/Hero"
import HhfsSection from "@/components/Home/HolidayHomesForSaleSection/HhfsSection"
import Image from "next/image"
import Link from "next/link"
import React from "react"

export default function OurPark() {
  return (
    <div>
      <Hero
        heading={"A riverside retreat"}
        tagline={"near Grassholme"}
        imgUrl={
          "https://media-private.canva.com/FDPSQ/MAEJOXFDPSQ/1/s3.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20250212%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250212T015028Z&X-Amz-Expires=65087&X-Amz-Signature=d17b0eea3d74faafa2f4ddb6cc1b05b4d27586c54bfd7d41bac36d59128fb94a&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Wed%2C%2012%20Feb%202025%2019%3A55%3A15%20GMT"
        }
        position="object-top"
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
              src="https://media-private.canva.com/hwkVU/MAED99hwkVU/1/s.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20250212%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250212T105538Z&X-Amz-Expires=34049&X-Amz-Signature=828d7c0b7bca36ec36a200aca060e4d9111292b17ddeec92018a023484a92753&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Wed%2C%2012%20Feb%202025%2020%3A23%3A07%20GMT"
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
              src="https://media-private.canva.com/hwkVU/MAED99hwkVU/1/s.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20250212%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250212T105538Z&X-Amz-Expires=34049&X-Amz-Signature=828d7c0b7bca36ec36a200aca060e4d9111292b17ddeec92018a023484a92753&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Wed%2C%2012%20Feb%202025%2020%3A23%3A07%20GMT"
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
          <div className="space-y-6 text-lg text-start">
            <p>
              Grassholme and Barnard Castle are just two of the many areas to
              explore when you own a holiday home at Grassholme. Grassholme is
              known for its serene reservoir, surrounded by rolling hills and
              walking trails, making it a haven for outdoor enthusiasts and
              anglers. Nearby, Barnard Castle, a historic market town, takes its
              name from its iconic medieval fortress perched above the River
              Tees.
            </p>
            <p>
              The town boasts cobbled streets, independent shops, and
              attractions such as The Bowes Museum, renowned for its art and
              history collections. The area offers a blend of natural beauty and
              rich heritage, making Grassholme Holiday Park the perfect holiday
              home escape.
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
              src="https://media-private.canva.com/MADaFKw5g6M/1/screen_2x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20250211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250211T162020Z&X-Amz-Expires=99074&X-Amz-Signature=7ea19348b71f377d1d8e25701cdb5f5c8352ad7670866f92cde841a970e63ed4&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Wed%2C%2012%20Feb%202025%2019%3A51%3A34%20GMT"
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
