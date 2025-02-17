import { useEffect, useRef } from "react"
import confetti from "canvas-confetti"

export default function ConfettiComponent({ triggerConfetti }) {
  const canvasRef = useRef(null) // Ref for the canvas

  useEffect(() => {
    if (triggerConfetti && canvasRef.current) {
      const canvas = canvasRef.current

      // Initialize the confetti animation on this specific canvas
      canvas.confetti =
        canvas.confetti || confetti.create(canvas, { resize: true })

      // Trigger the confetti to come from the bottom (or adjust 'origin' as needed)
      canvas.confetti({
        spread: 70,
        origin: { y: 1 }, // Adjust this value to control where the confetti comes from
      })
    }
  }, [triggerConfetti]) // Re-run when triggerConfetti becomes true

  return (
    <canvas
      id="my-canvas"
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none"
    ></canvas>
  )
}
