"use client"
import { showToast } from "@/Utils/toastUtils"
import { useState } from "react"
import { FaSpinner } from "react-icons/fa6"

import FormInput from "@/components/Inputs/FormInput"
import ConfettiComponent from "@/components/ConfettiComponent"

export default function ContactForm() {
  //loading state
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
    phone: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const contact = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(form),
      })

      if (!response.ok) {
        const errorMessage = await response.json() // Extract error message from response body
        throw new Error(errorMessage.message || "An error occurred")
      }

      setForm({
        firstname: "",
        lastname: "",
        email: "",
        message: "",
        phone: "",
      })
      setSubmitted(true)
    } catch (error) {
      showToast(error.message, "error")
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="relative text-white h-[450px] p-4">
        <div className="flex flex-col justify-center items-center gap-2 h-full w-full rounded-lg ">
          <h1 className=" text-xl md:text-2xl font-bold fancy">
            Thanks for your enquiry!
          </h1>
          <h1 className="md:text-xl font-bold fancy">
            We&apos;ll be in touch soon.
          </h1>
        </div>
        <ConfettiComponent triggerConfetti={submitted} />
      </div>
    )
  }

  return (
    <form onSubmit={contact} className=" space-y-3  rounded-lg  p-4">
      <div className="grid xl:grid-cols-2 gap-3">
        <FormInput
          label={"First Name"}
          name={"firstname"}
          placeholder="Enter name"
          required
          type={"text"}
          value={form.firstname}
          handleChange={(e) => setForm({ ...form, firstname: e.target.value })}
          className=" text-white"
        />
        <FormInput
          label={"Last Name"}
          name={"lastname"}
          placeholder="Enter last name"
          required
          type={"text"}
          value={form.lastname}
          handleChange={(e) => setForm({ ...form, lastname: e.target.value })}
        />
      </div>
      <div className="grid xl:grid-cols-2 gap-3">
        <FormInput
          label={"Email"}
          name={"email"}
          placeholder="Enter email"
          required
          type={"email"}
          value={form.email}
          handleChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <FormInput
          label={"Phone"}
          name={"phone"}
          placeholder="Enter phone number"
          required
          type={"tel"}
          value={form.phone}
          handleChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
      </div>

      <FormInput
        label={"Message"}
        name={"message"}
        placeholder="Enter message"
        required
        type={"text"}
        value={form.message}
        handleChange={(e) => setForm({ ...form, message: e.target.value })}
        textArea
      />

      <div className="flex justify-between">
        <div className="grid gap-2">
          <small className="text-white">
            <span className="text-red-500">*</span> required information
          </small>
        </div>
        <button
          type="submit"
          className=" btn-secondary  flex justify-center fancy"
          style={{
            backgroundColor: "#026db8",
          }}
        >
          {loading ? <FaSpinner className="animate-spin text-xl" /> : "Submit"}
        </button>
      </div>
    </form>
  )
}
