import React from "react"

export default function ReviewCard({ author, rating, content }) {
  return (
    <div className="w-80 shrink-0 bg-white rounded-lg shadow-lg p-4">
      <div className="flex items-center gap-2 mb-2">
        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center font-semibold text-blue-600">
          {author.charAt(0)}
        </div>
        <span className="font-semibold text-gray-800">{author}</span>
      </div>
      <div className="flex gap-1 mb-2">
        {Array(rating)
          .fill(0)
          .map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 text-yellow-400 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
      </div>
      <p className="text-sm ">{content}</p>
    </div>
  )
}
