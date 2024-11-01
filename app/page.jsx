import Hero from "@/components/Hero"
import HhfsSection from "@/components/Home/HolidayHomesForSaleSection/HhfsSection"
import ReviewMarquee from "@/components/Home/ReviewSection/ReviewMarquee"
import Image from "next/image"

export default function Home() {
  return (
    <div>
      <Hero heading={"Grassholme Holiday Park"} />
      <div className="flex justify-center">
        <section className="grid xl:grid-cols-2 py-16 container">
          <div className="w-full flex justify-center">
            <div className="max-w-xl flex flex-col items-center space-y-12">
              <h2 className="text-7xl fancy">
                Welcome to your home away from home
              </h2>
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="max-w-xl flex flex-col items-center">
              <Image
                src="https://media-public.canva.com/MADGyNcnzZY/4/screen_2x.jpg"
                alt="Grassholme Holiday Park"
                width={1920}
                height={1080}
                className="rounded-2xl h-full"
              />
            </div>
          </div>
        </section>
      </div>
      <HhfsSection />
      <div className="flex justify-center">
        <section className="grid xl:grid-cols-2 py-16 container gap-4">
          <div className="w-full flex justify-center">
            <div className="max-w-xl flex flex-col items-center space-y-12">
              <h2 className="text-7xl fancy">Benefits of ownership</h2>
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
              <div>
                <button className="btn-secondary"> Discover More</button>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="max-w-xl flex flex-col items-center">
              <Image
                src="https://media-public.canva.com/MADGyNcnzZY/4/screen_2x.jpg"
                alt="Grassholme Holiday Park"
                width={1920}
                height={1080}
                className="rounded-2xl h-full"
              />
            </div>
          </div>
        </section>
      </div>
      <div className="flex justify-center">
        <section className="py-16 container space-y-12">
          <h2 className="text-7xl text-center fancy">Discover Teesdale</h2>
          <div className="flex flex-col xl:flex-row gap-6">
            <div className="w-full xl:w-4/12">
              <Image
                src="https://media-public.canva.com/MADGyNcnzZY/4/screen_2x.jpg"
                alt="Grassholme Holiday Park"
                width={1920}
                height={1080}
                className="rounded-2xl h-[500px]"
              />
            </div>
            <div className="w-full xl:w-8/12">
              <Image
                src="https://media-public.canva.com/MADGyNcnzZY/4/screen_2x.jpg"
                alt="Grassholme Holiday Park"
                width={1920}
                height={1080}
                className="rounded-2xl h-[500px]"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-2 ">
            <p className="text-lg xl:w-8/12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <div className="flex justify-center items-center w-4/12">
              <button className="btn-secondary"> Discover More</button>
            </div>
          </div>
        </section>
      </div>
      <HhfsSection />

      <div className="flex justify-center">
        <section className="py-16 container space-y-12 overflow-hidden">
          <h2 className="text-7xl text-center fancy">Enjoyed by Many</h2>
          <ReviewMarquee />
        </section>
      </div>
    </div>
  )
}
