import React from "react"

export default function ContactSection() {
  return (
    <section className="flex flex-col justify-center items-center bg-primary text-white py-12 ">
      <div className="bg-[#026db8] w-11/12  h-[400px] rounded-xl space-y-6 p-4">
        <h3 className="text-3xl fancy">Contact Us</h3>
        <p>
          If you have any questions about owning a holiday home with us, please
          don&apos;t hesitate to get in touch.
        </p>
        <button className="btn-secondary">Contact Us</button>
      </div>
      {/* CARD SECTION */}
      <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-8 px-8"></div>
    </section>
  )
}
