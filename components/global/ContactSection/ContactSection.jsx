import React from "react"
import ContactForm from "./ContactForm"

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center bg-primary text-white py-12 "
    >
      <div className="bg-secondary w-11/12 2xl:w-6/12 grid grid-cols-1 md:grid-cols-2 gap-8  rounded-xl  p-4">
        <div className="flex flex-col justify-between p-2  gap-2 text-center md:text-start">
          <div className="space-y-4">
            <h3 className="text-3xl md:text-5xl fancy ">Contact Us</h3>
            <p>
              Our friendly team is on hand to help with all our questions.
              Please complete the contact form and a member of the Grassholme
              team will be in touch.
            </p>
          </div>
          
        </div>

        <ContactForm />
      </div>
      {/* CARD SECTION */}
    </section>
  )
}
