import ContactSection from "@/components/global/ContactSection/ContactSection"
import ImageWithTextContent from "@/components/global/ImageWithTextSection/ImageWithTextContent"
import ImageWithTextImageCon from "@/components/global/ImageWithTextSection/ImageWithTextImageCon"
import ImageWithTextSection from "@/components/global/ImageWithTextSection/ImageWithTextSection"
import Hero from "@/components/Hero"
import HhfsSection from "@/components/Home/HolidayHomesForSaleSection/HhfsSection"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Hero
        heading={"A holiday home retreat "}
        tagline={"in the heart of Teesdale"}
        imgUrl={"https://media-public.canva.com/MADGyNcnzZY/4/screen_2x.jpg"}
      />
      <ImageWithTextSection>
        <ImageWithTextContent
          alignText="text-start"
          title="Welcome to your home away from home"
        >
          <div className="space-y-6 text-lg text-center md:text-start">
            <p>
              Petalwood is a privately owned holiday park operator committed to
              providing quality holiday parks and a holiday ownership experience
              that is really special in terms of locations and service.
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
              className="btn-secondary w-full text-center"
              href={"/our-park"}
            >
              View our park
            </Link>
          </div>
        </ImageWithTextContent>
        <ImageWithTextImageCon url="https://media-private.canva.com/MAChiftUfA0/1/screen_2x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20250210%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250210T092405Z&X-Amz-Expires=33973&X-Amz-Signature=37b08a904d97ee880a2835385e05d50f9b1a9eed7822a2348a67ce57662b6292&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Mon%2C%2010%20Feb%202025%2018%3A50%3A18%20GMT" />
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
              className="btn-secondary w-full text-center"
              href={"/holiday-home-ownership"}
            >
              Discover More
            </Link>
          </div>
        </ImageWithTextContent>
        <ImageWithTextImageCon url="https://media-private.canva.com/MABeUxn6LFw/1/screen_2x.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20250210%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250210T140826Z&X-Amz-Expires=17798&X-Amz-Signature=c9487147dffccaef741f565fdc32d1fef005d68dbacfdf626b2e3e301a986808&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Mon%2C%2010%20Feb%202025%2019%3A05%3A04%20GMT" />
      </ImageWithTextSection>

      <div className="flex justify-center">
        <section className="py-16 container space-y-12 p-2">
          <h2 className="text-5xl md:text-6xl fancy text-center md:text-start ">
            Explore the County Durham countryside
          </h2>
          <div className="flex flex-col xl:flex-row gap-6">
            <div className="w-full xl:w-4/12">
              <Image
                src="https://media-private.canva.com/2Ylew/MAEE9R2Ylew/1/s.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20250209%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250209T215212Z&X-Amz-Expires=77944&X-Amz-Signature=070813b7f0dd8349f19546039cd6603b77c997046f660deacbad37274551be39&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Mon%2C%2010%20Feb%202025%2019%3A31%3A16%20GMT"
                alt="Grassholme Holiday Park"
                width={1920}
                height={1080}
                className="rounded-2xl md:h-[400px] object-cover object-bottom"
              />
            </div>
            <div className="w-full xl:w-8/12">
              <Image
                src="https://media.canva.com/v2/image-resize/format:PNG/height:992/quality:100/uri:s3%3A%2F%2Fmedia-private.canva.com%2FrC5DE%2FMAGcwrrC5DE%2F1%2Fp.png/watermark:F/width:1600?csig=AAAAAAAAAAAAAAAAAAAAAK5i2luUmGqE1txyOX_Wm1Ki5WoRQNFYvW7EZkYrqVPt&exp=1739213856&osig=AAAAAAAAAAAAAAAAAAAAAD729k8VvPVLsEAKsBdnEPXiiegX3mj5OvBvaQv00gD0&signer=media-rpc&x-canva-quality=screen_2x"
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
                className="btn-secondary w-full text-center"
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
