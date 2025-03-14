import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(req) {
  const body = await req.text() // Read the request body as text
  const data = JSON.parse(body) // Parse the JSON data

  // Destructure required fields from the incoming data
  const { firstname, lastname, email, message, phone } = data

  console.log(data)

  // Basic validation to ensure required fields are filled
  if (!firstname || !lastname || !email || !message || !phone) {
    return NextResponse.json(
      { message: "Please fill in all required fields" },
      { status: 400 }
    )
  }

  try {
    const resend = new Resend("re_JBDw1kSX_KGhGUH9iVvMA3JwbSmUQULSF")

    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "petalwooddb@gmail.com",
      subject: "New Contact Form Submission",
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 20px auto; border: 1px solid #ddd; padding: 20px; border-radius: 5px;">
          <h2 style="color: #007BFF;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${firstname} ${lastname}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #007BFF;">${email}</a></p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong></p>
          <blockquote style="background: #f9f9f9; padding: 10px; border-left: 4px solid #007BFF;">
            ${message}
          </blockquote>
          <hr>
          <p style="font-size: 12px; color: #777;">This email was sent automatically from your website contact form.</p>
        </div>
      `,
    })

    console.log(response)
    // Handle the response
    if (response.error) {
      return NextResponse.json(
        {
          message:
            "Error submitting form. Please contact support using our contact details at the bottom of the page.",
        },
        { status: response.error?.statusCode || 400 }
      )
    }

    // Success response
    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    )
  } catch (error) {
    // Return a generic error message with a 500 status
    console.log(error.message)
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    )
  }
}
