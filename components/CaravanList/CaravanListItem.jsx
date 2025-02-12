import DeleteCaravan from "@/components/admin/DeleteCaravan"
import EditCaravan from "@/components/admin/EditCaravan"
import React from "react"
import { FaBed, FaPeopleGroup } from "react-icons/fa6"
import { RiMoneyPoundBoxLine } from "react-icons/ri"
import { RxWidth } from "react-icons/rx"
import ImageCarousel from "../Home/HolidayHomesForSaleSection/ImageCarousel"

export default function CaravanListItem({
  caravan,
  setCaravans,
  session = false,
}) {
  return (
    <div
      key={caravan.id}
      className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl "
    >
      <div className="relative h-48">
        <ImageCarousel images={caravan.images} />
      </div>

      <div className="p-4  space-y-4">
        <div>
          <div>
            <h2 className="text-gray-600 text-2xl fancy font-semibold tracking-tight">
              {caravan.name}
            </h2>
            <p className="text-gray-600 text-sm line-clamp-4 mt-1 h-20">
              {caravan.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-gray-600">
            <div className="flex items-center gap-2 text-sm ">
              <RxWidth className="text-green-700 text-xl" />
              <span className="font-medium">{caravan.size}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <RiMoneyPoundBoxLine className="text-green-700 text-xl" />
              <span className="font-medium">
                £{new Intl.NumberFormat().format(caravan.price)}
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <FaPeopleGroup className="text-green-700 text-xl" />
              <span className="font-medium">Sleeps {caravan.sleeps}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <FaBed className="text-green-700 text-xl" />
              <span className="font-medium">
                {caravan.beds} Bed{caravan.beds > 1 && "s"}
              </span>
            </div>
          </div>
        </div>
        <div>
          {session ? (
            <>
              <div className="flex justify-end gap-2 pt-2 border-t">
                <EditCaravan caravan={caravan} setCaravans={setCaravans} />
                <DeleteCaravan caravan={caravan} setCaravans={setCaravans} />
              </div>
            </>
          ) : (
            <div className="flex justify-end gap-2 pt-2  border-t">
              <button className="btn-secondary">View Caravan</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
