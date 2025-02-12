import React from "react"
import MarqueeRow from "./MarqueeRow"
import ReviewCard from "./ReviewCard"

export default function ReviewMarquee() {
  const reviews = [
    {
      author: "Alice Smith",
      rating: 5,
      content: "Absolutely fantastic service! Could not be happier.",
    },
    {
      author: "Bob Johnson",
      rating: 4,
      content: "Great experience overall. Will definitely return.",
    },
    {
      author: "Carol White",
      rating: 5,
      content: "The best customer service I&apos;ve ever experienced.",
    },
    {
      author: "David Brown",
      rating: 5,
      content: "Exceeded all my expectations. Highly recommended!",
    },
    {
      author: "Eve Wilson",
      rating: 4,
      content: "Very professional and efficient service.",
    },
    {
      author: "Frank Davis",
      rating: 5,
      content: "Outstanding quality and attention to detail.",
    },
  ]
  return (
    <div className="space-y-12 py-4">
      {/* Staggered Rows with alternating directions */}
      <MarqueeRow delay={0}>
        {reviews.map((review, i) => (
          <ReviewCard key={`row1-${i}`} {...review} />
        ))}
      </MarqueeRow>

      <MarqueeRow reverse delay={5}>
        {reviews.map((review, i) => (
          <ReviewCard key={`row2-${i}`} {...review} />
        ))}
      </MarqueeRow>

      <MarqueeRow delay={0}>
        {reviews.map((review, i) => (
          <ReviewCard key={`row3-${i}`} {...review} />
        ))}
      </MarqueeRow>
    </div>
  )
}
