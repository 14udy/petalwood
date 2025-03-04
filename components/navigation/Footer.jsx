import Image from "next/image"
import logo from "@/public/logo.png"
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full   bg-primary text-white grid md:grid-cols-2 lg:grid-cols-4 p-2 gap-3 border-t border-slate-600 py-6 ">
      <div className="flex flex-col justify-between gap-2  p-4 rounded ">
        <div>
          <Image
            src={logo}
            alt="Petalwood Logo"
            height={627}
            width={455}
            className="h-[100px] w-auto"
          />
        </div>

        <p className="text-sm">
          Copyright © {new Date().getFullYear()} Petalwood. All Rights Reserved
        </p>
      </div>
      <div className="flex flex-col justify-between gap-2 border border-white p-4 rounded">
        <h3 className="text-3xl  fancy ">Contact Details</h3>
        <section className="space-y-1">
          <div className="flex  gap-2">
            <div className="py-2">
              <FaLocationDot />
            </div>
            <div>
              {" "}
              <p>Petalwood Limited</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <FaPhone />
            </div>
            <p>
              <a
                className="hover:underline underline-offset-4"
                href="tel:+441833 625879"
              >
                01833 625879
              </a>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <FaEnvelope />
            </div>
            <p>
              <a
                className="hover:underline underline-offset-4"
                href="mailto:hello@petalwood.co.uk"
              >
                hello@petalwood.co.uk
              </a>
            </p>
          </div>
        </section>
      </div>
      {/* <div>
        <h3 className="text-3xl text-secondary fancy  ">Quick links</h3>
        <ul>
          <li>
            <Link
              className="hover:underline underline-offset-4"
              href={"/"}
              aria-label="Link to home page"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover:underline underline-offset-4"
              href={"/meet-the-team"}
              aria-label="Link to about page"
            >
              Meet The Team
            </Link>
          </li>

          <li>
            <Link
              className="hover:underline underline-offset-4"
              href={"/our-services"}
              aria-label="Link to the Business Consultancy services page"
            >
              Our Services
            </Link>
          </li>

          <li>
            <Link
              className="hover:underline underline-offset-4"
              href={"/blog"}
              aria-label="Link to services page"
            >
              Blog
            </Link>
          </li>

          <li>
            <Link
              className="hover:underline underline-offset-4"
              href={"/our-story"}
              aria-label="Link to contact page"
            >
              Our Story
            </Link>
          </li>
          <li>
            <Link
              className="hover:underline underline-offset-4"
              href={"/contact"}
              aria-label="Link to contact page"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div> */}

      <div className="flex flex-col justify-between gap-2 border border-white p-4 rounded">
        <h3 className="text-3xl  fancy">Social Media</h3>
        <div className=" flex  gap-2 items-center">
          <a
            href="https://www.facebook.com/profile.php?id=61568268581402"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to Facebook page"
          >
            <FaFacebook className="text-4xl" />
          </a>
          <a
            href="https://www.instagram.com/petalwood_limited/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to Instagram page"
          >
            <FaInstagram className="text-4xl " />
          </a>
          <a
            href="https://www.linkedin.com/company/petalwood/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to LinkedIn page"
          >
            <FaLinkedin className="text-4xl " />
          </a>
        </div>
        <div>
          <p className="bg-[#026db8] text-white p-2 text-center rounded-full">
            Tag us in your posts #petalwood
          </p>
        </div>
      </div>
      <div className="flex flex-col  gap-2 border border-white p-4 rounded">
        <h3 className="text-3xl  fancy  ">Important Information</h3>
        <ul>
          {/* <li>
            <Link
              className="hover:underline underline-offset-4"
              href={""}
              aria-label="Link to privacy policy page"
            >
              Cookie Policy
            </Link>
          </li> */}
          <li>
            <Link
              className="hover:underline underline-offset-4"
              href={"/privacy-policy"}
              aria-label="Link to privacy policy page"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              className="hover:underline underline-offset-4"
              href={"/terms-and-conditions"}
              aria-label="Link to privacy policy page"
            >
              Terms & Conditions
            </Link>
          </li>
          <li>
            <Link
              className="hover:underline underline-offset-4"
              href={"/sitemap.xml"}
              aria-label="Link to privacy policy page"
            >
              Site Map
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
