"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper/modules"
import Image from "next/image"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

export default function ImageCarousel({ images }) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  return (
    <div className="relative w-full h-[200px] [&_.swiper-button-next]:text-white [&_.swiper-button-next]:scale-50 [&_.swiper-button-prev]:text-white [&_.swiper-button-prev]:scale-50 [&_.swiper-pagination-bullet]:bg-white">
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation={true}
        className="h-full w-full rounded-t-lg"
      >
        {images?.map((image, index) => (
          <SwiperSlide key={image.id}>
            <Image
              src={`${supabaseUrl}/storage/v1/object/public/images/${image.file_path}`}
              alt={`Caravan image ${index + 1}`}
              fill
              className="object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
