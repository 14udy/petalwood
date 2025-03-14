"use client"
import React, { useState } from "react"

export default function ViewMatterPort() {
  const [isOpen, setIsOpen] = useState(false)
  const testLink = "https://my.matterport.com/show/?m=RmP6zZ2X5xQ"

  return (
    <div className="flex flex-col items-center">
      {/* Button to open modal */}
      <button onClick={() => setIsOpen(true)} className="btn-secondary">
        3d Tour
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)} // Close when clicking outside
        >
          <div
            className="bg-white p-4 rounded-lg shadow-lg relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full hover:bg-red-700 transition"
            >
              ✕
            </button>

            {/* Matterport iframe */}
            <iframe
              src={testLink}
              width="100%"
              height="500px"
              allowFullScreen
              className="rounded-md shadow-md"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  )
}
