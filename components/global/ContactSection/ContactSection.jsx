import React from "react"
import ContactForm from "./ContactForm"

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center bg-primary text-white py-12 "
    >
      <div className="bg-[#026db8] w-11/12 grid grid-cols-1 md:grid-cols-2 gap-8  rounded-xl  p-4">
        <div className="flex flex-col justify-between p-2  gap-2 text-center md:text-start">
          <div className="space-y-4">
            <h3 className="text-5xl md:text-6xl fancy ">Contact Us</h3>
            <p>
              Whether you&apos;re dreaming of owning your own holiday home,
              planning your next getaway, or just have a quick question,
              we&apos;re here to help.
            </p>
            <p>
              No question is too big or too small—our friendly team is happy to
              chat and provide all the information you need.
            </p>
            <p>
              Get in touch today and let’s make your perfect holiday experience
              a reality!
            </p>
          </div>
          <small className="text-white">
            Petalwood uses the contact information you provide to us to contact
            you about our products and services. You may unsubscribe from these
            communications at any time. For information on how to unsubscribe,
            as well as our privacy practices and commitment to protecting your
            privacy, please review our Privacy Policy.
          </small>
        </div>

        <ContactForm />
      </div>
      {/* CARD SECTION */}
    </section>
  )
}
