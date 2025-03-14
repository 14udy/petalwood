"use client"
import React, { useState } from "react"

export default function ViewYouTubeModal({ url }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex flex-col items-center">
      {/* Button to open modal */}
      <button onClick={() => setIsOpen(true)} className="btn-secondary">
        Watch Video
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
              className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition z-20"
            >
              ✕
            </button>

            {/* YouTube iframe */}
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src={url}
                width="100%"
                height="100%"
                className="absolute top-0 left-0 w-full h-full rounded-md shadow-md"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
