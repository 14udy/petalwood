import React from "react"

export default function TermsAndConditions() {
  return (
    <div className="container mx-auto px-4 py-8 mt-[70px]">
      <h1 className="text-4xl font-bold mb-6">Terms and Conditions</h1>
      <p className="text-lg mb-4">February 2025</p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">1. Introduction</h2>
        <p>
          Welcome to
          <a href="https://www.petalwood.co.uk" className="text-blue-500">
            {" "}
            www.petalwood.co.uk{" "}
          </a>
          , operated by Petalwood Limited (&apos;we&apos;, &apos;our&apos;,
          &apos;us&apos;). By accessing and using our website, you agree to
          comply with these terms and conditions. If you do not accept them,
          please refrain from using our website.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">2. Website Use</h2>
        <p>
          While most areas of our website are accessible without registration,
          some sections may require you to register. By using this website, you
          agree not to:
        </p>
        <ul className="list-disc ml-6">
          <li>
            Post or send any unlawful, discriminatory, or offensive material.
          </li>
          <li>Upload harmful software, viruses, or malware.</li>
          <li>Use the website in a way that breaches UK laws.</li>
        </ul>
        <p>
          If you identify any content in breach of these terms, please notify us
          at
          <a href="mailto:hello@petalwood.co.uk" className="text-blue-500">
            {" "}
            hello@petalwood.co.uk
          </a>
          .
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">3. Service Availability</h2>
        <p>
          We aim to keep the website available 24/7. However, unforeseen events
          like technical issues, maintenance, or system failures may cause
          downtime, for which we do not take responsibility.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">
          4. Links to Third-Party Websites
        </h2>
        <p>
          Links to external websites are provided for your convenience. We do
          not endorse or take responsibility for any external websites, and
          accessing them is at your own risk.
        </p>
        <p>You may link to our website provided that:</p>
        <ul className="list-disc ml-6">
          <li>You do not alter or misrepresent our logo.</li>
          <li>
            You do not imply our endorsement of your services or products.
          </li>
          <li>
            The linked website does not contain offensive or illegal content.
          </li>
        </ul>
        <p>
          We reserve the right to request the removal of links that violate
          these terms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">5. Disclaimer</h2>
        <p>
          We strive to ensure the accuracy of information on this website, but
          we do not guarantee its completeness or correctness. We reserve the
          right to make changes to the content without notice.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">6. Liability</h2>
        <p>
          We do not accept liability for any loss or damage resulting from the
          use of this website, except for liability that cannot be excluded
          under UK law, such as for death or personal injury caused by
          negligence.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">7. Governing Law</h2>
        <p>
          These terms are governed by the laws of England and Wales, and any
          disputes arising from them will be subject to the exclusive
          jurisdiction of the courts in England and Wales.
        </p>
      </section>
    </div>
  )
}
