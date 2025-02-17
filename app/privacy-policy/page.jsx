import React from "react"

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 mt-[70px]">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-lg mb-4">February 2025</p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">1. Introduction</h2>
        <p>
          Petalwood Limited (&apos;we&apos;, &apos;our&apos;, &apos;us&apos;). We are committed to protecting
          and respecting your privacy. This Privacy Policy explains how we
          collect, use, disclose, and safeguard your information when you visit
          our website
          <a href="https://www.petalwood.co.uk" className="text-blue-500">
            www.petalwood.co.uk
          </a>{" "}
          or use our services.
        </p>
        <p>
          Please read this policy carefully to understand our views and
          practices regarding your personal data and how we will treat it.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
        <ul className="list-disc ml-6">
          <li>
            <strong>Personal Identification Information:</strong> Name, email
            address, phone number, and other contact details.
          </li>
          <li>
            <strong>Financial Information:</strong> Bank account details.
          </li>
          <li>
            <strong>Technical Data:</strong> IP address, browser type and
            version, time zone setting, browser plug-in types and versions,
            operating system, and platform.
          </li>
          <li>
            <strong>Usage Data:</strong> Information about how you use our
            website, products, and services.
          </li>
          <li>
            <strong>Marketing and Communications Data:</strong> Your preferences
            in receiving marketing from us and your communication preferences.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">3. How We Collect Your Data</h2>
        <ul className="list-disc ml-6">
          <li>
            <strong>Direct interactions:</strong> You may provide us with your
            identity, contact, and financial data by filling in forms or by
            corresponding with us by post, phone, email, or otherwise.
          </li>
          <li>
            <strong>Automated technologies:</strong> As you interact with our
            website, we may automatically collect technical data about your
            equipment, browsing actions, and patterns via cookies, server logs,
            and other technologies.
          </li>
          <li>
            <strong>Third parties:</strong> We may receive personal data about
            you from analytics providers, advertising networks, and search
            information providers.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">4. How We Use Your Data</h2>
        <ul className="list-disc ml-6">
          <li>To meet our contractual obligations.</li>
          <li>
            To improve our services and ensure our website is user-friendly.
          </li>
          <li>
            To communicate with you and provide you with requested information.
          </li>
          <li>For marketing purposes, with your explicit consent.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">
          5. Data Sharing and Disclosure
        </h2>
        <ul className="list-disc ml-6">
          <li>
            We will not share your personal information except where legally
            required.
          </li>
          <li>
            Service providers assisting us in business operations may access
            your data under strict protection measures.
          </li>
          <li>
            If we sell or buy a business, we may disclose your data to
            prospective buyers or sellers.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">6. International Transfers</h2>
        <p>
          We ensure an adequate level of data protection when transferring data
          outside the UK.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">7. Data Security</h2>
        <p>
          We implement appropriate security measures to protect your personal
          data from unauthorized access or loss.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">8. Data Retention</h2>
        <p>
          We retain personal data only as long as necessary to fulfill legal and
          business obligations.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">9. Your Legal Rights</h2>
        <p>
          You have rights under GDPR and the Data Protection Act 2018,
          including:
        </p>
        <ul className="list-disc ml-6">
          <li>Right to access your personal data.</li>
          <li>
            Right to request correction or deletion of your personal data.
          </li>
          <li>Right to object to processing or restrict processing.</li>
          <li>Right to data portability and withdrawal of consent.</li>
        </ul>
        <p>
          If you wish to exercise these rights, contact us at{" "}
          <a href="mailto:hello@petalwood.co.uk" className="text-blue-500">
            hello@petalwood.co.uk
          </a>
          .
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">10. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy. Changes will be posted on this
          page.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold">11. Contact Us</h2>
        <p>For questions, contact us at:</p>
        <address>
          Petalwood Limited
          <br />
          TC Group - Celixir House Stratford Business and Tech Park
          <br />
          Banbury Rd, Stratford On Avon, CV37 7GZ
          <br />
          Email:{" "}
          <a href="mailto:hello@petalwood.co.uk" className="text-blue-500">
            hello@petalwood.co.uk
          </a>
        </address>
      </section>
    </div>
  )
}
