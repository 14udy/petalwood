import React from "react"
import { FaCaravan } from "react-icons/fa6"

export default function loading() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="animate-pulse rounded-full  border-t-2 border-b-2 border-gray-900 dark:border-white">
        <FaCaravan className="text-green-700 text-7xl" />
      </div>
      <p className=" text-2xl ">Loading caravan details...</p>
    </div>
  )
}
