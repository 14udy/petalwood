import ContactSection from "@/components/global/ContactSection/ContactSection"
import Hero from "@/components/Hero"
import ExploreCard from "@/components/pages/ExploreTheArea/ExploreCard"
import React from "react"

export default function page() {
  return (
    <div>
      <Hero
        heading={"So much to see and do"}
        tagline={"in County Durham "}
        imgUrl={"https://media-public.canva.com/QvlVw/MAFluWQvlVw/1/s2.jpg"}
      />
      <section>
        <div className="w-full flex justify-center py-12">
          <div className="container flex flex-col items-center space-y-12">
            <div className="space-y-6 text-lg">
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
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 py-12">
        <ExploreCard
          imageUrl={
            "https://media-private.canva.com/MADapRPOxvY/1/screen.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20250209%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250209T181521Z&X-Amz-Expires=91054&X-Amz-Signature=cb72f5f6bad4d74d27750b7f5392cdd737b9dc99a59ea85235203501eb843e5a&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Mon%2C%2010%20Feb%202025%2019%3A32%3A55%20GMT"
          }
          title={"Explore the area"}
        >
          <div className="relative p-6 text-black flex flex-col  justify-between  text-center space-y-4">
            <p className="text-lg font-semibold">
              Teesdale Sailing Club is a community sailing and watersports club
              Grassholme Reservoir provides a fantastic location for dinghy
              sailing, canoeing and paddle-boarding. 49 hectares of water lined
              up with the prevailing wind allow plenty of space for learning,
              racing or cruising. The club welcomes new members of all
              abilities. You don't even need your own boat as the club maintains
              a fleet of dinghies available for members to use free of charge.
            </p>
            <div className="flex justify-end w-full">
              <a href="#" className="btn-secondary">
                Visit Website
              </a>
            </div>
          </div>
        </ExploreCard>
        <ExploreCard
          imageUrl={
            "https://media-private.canva.com/MAC9g45Yi0o/1/screen.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20250210%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250210T132728Z&X-Amz-Expires=21554&X-Amz-Signature=66965063ab1393b520bef189c0dee138e6038589b363e427d7a1402f66107fe8&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Mon%2C%2010%20Feb%202025%2019%3A26%3A42%20GMT"
          }
          title={"Explore the area"}
        >
          <div className="relative p-6 text-black flex flex-col h-full justify-between text-center space-y-4">
            <p className="text-lg font-semibold">
              Grassholme Holiday Park is just a stone's throw away from
              Grassholme Reservoir. It&apos;s the perfect place to enjoy the
              sights, sounds, and scents of Teesdale's countryside on your own
              wild adventure through a nature lover's paradise. Not only is it
              the perfect spot for fishing, walking, and family picnics,
              it&apos;s the perfect spot for the perfect night sky. On a clear
              night, you will be amazed at the wonders you can see from here.
            </p>
            <div className="flex justify-end w-full">
              <a href="#" className="btn-secondary">
                Visit Website
              </a>
            </div>
          </div>
        </ExploreCard>
        <ExploreCard
          imageUrl={
            "https://media-private.canva.com/MADApNOrH2k/1/screen.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20250209%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250209T145911Z&X-Amz-Expires=100649&X-Amz-Signature=639fe8e4adf550798b2636cca70d59166f4db238107bf60a07f601298fdf6dde&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Mon%2C%2010%20Feb%202025%2018%3A56%3A40%20GMT"
          }
          title={"Explore the area"}
        >
          <div className="relative p-6 text-black flex flex-col h-full justify-between text-center space-y-4">
            <p className="text-lg font-semibold">
              Low Force Waterfall is just a short drive from the park. Part of
              the River Tees in beautiful Upper Teesdale. Low Force tumbles over
              the Whin Sill, a layer of hard dolerite rock (known locally as
              whinstone). The Whin Sill formed 295 million years ago from molten
              rock, which cooled and solidified underground.The Pennine Way
              footpath route runs alongside the River at Low Force
            </p>
            <div className="flex justify-end w-full">
              <a href="#" className="btn-secondary">
                Visit Website
              </a>
            </div>
          </div>
        </ExploreCard>
        <ExploreCard
          imageUrl={
            "https://media-private.canva.com/MADaFKw5g6M/1/screen.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20250210%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250210T002835Z&X-Amz-Expires=69144&X-Amz-Signature=f3e5bad6e24f8f764861cfa9b41552c678d65a69e145c9ab6f599eb78d32a7c1&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Mon%2C%2010%20Feb%202025%2019%3A40%3A59%20GMT"
          }
          title={"Explore the area"}
        >
          <div className="relative p-6 text-black flex flex-col h-full justify-between text-center space-y-4">
            <p className="text-lg font-semibold">
              Barnard Castle is a spectacular fortress set on a high rock above
              the market town. Barnard Castle takes its own name from Bernard de
              Balliol, who began the stone fortress here in the 12th century.
              Stretching from the huge outer ward to the innermost stronghold
              towering above the gorge, there&apos;s lots to see and plenty of
              room to explore and play in this big castle.
            </p>
            <div className="flex justify-end w-full">
              <a href="#" className="btn-secondary">
                Visit Website
              </a>
            </div>
          </div>
        </ExploreCard>
        <ExploreCard
          imageUrl={
            "https://media-private.canva.com/MADapRPOxvY/1/screen.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20250209%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250209T181521Z&X-Amz-Expires=91054&X-Amz-Signature=cb72f5f6bad4d74d27750b7f5392cdd737b9dc99a59ea85235203501eb843e5a&X-Amz-SignedHeaders=host%3Bx-amz-expected-bucket-owner&response-expires=Mon%2C%2010%20Feb%202025%2019%3A32%3A55%20GMT"
          }
          title={"Explore the area"}
        >
          <div className="relative p-6 text-black flex flex-col   text-center space-y-4">
            <p className="text-lg font-semibold">
              Middleton-in-Teesdale is a picturesque market town that nestles by
              the River Tees. It serves as a gateway to the North Pennines and
              offers local shops, eateries, and access to scenic walking routes.
            </p>
          </div>
        </ExploreCard>
        <ExploreCard
          imageUrl={"https://media-public.canva.com/Q8SX4/MAEidMQ8SX4/1/s.jpg"}
          title={"Explore the area"}
        >
          <div className="relative p-6 text-black flex flex-col  text-center space-y-4">
            <p className="text-lg font-semibold">
              Many of our existing holiday home owners love exploring the
              endless walking routes that are close to the park. Grassholme
              Reservoir Circular Walk (4 miles) is one our favourites! A
              circular footpath that traces the shoreline of the Reservoir,
              provides magnificent views. The route is set within the North
              Pennines Area of Outstanding Natural Beauty and includes picnic
              sites along the way. Middleton-in-Teesdale to Grassholme Reservoir
              (8 miles) is a pleasant walk that offers lovely views through
              farmland and around Grassholme Reservoir. Harter Fell & Grassholme
              from Middleton-in-Teesdale (8 miles) includes Harter Fell,
              Grassholme Reservoir, and part of the Pennine Way, offering
              diverse landscapes and views.
            </p>
          </div>
        </ExploreCard>
      </section>
      <ContactSection />
    </div>
  )
}
