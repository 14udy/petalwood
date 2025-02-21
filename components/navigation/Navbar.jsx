"use client"
import logo from "@/public/logo.webp"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import MobileNavbar from "./MobileNavbar"
import ServiceLinks from "./ServiceLinks"
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa6"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <nav className="w-full flex items-center justify-between bg-primary  z-50 text-white">
      <div className="flex ">
        <Link href="/" className="flex items-center justify-center s">
          <Image
            src={logo}
            height={688}
            width={629}
            alt="The Holiday Park People Icon"
            className="w-auto h-[70px]"
          />
        </Link>
        <ul className={`hidden lg:flex  lg:items-center  text-center gap-3`}>
          <li>
            <Link
              href="/our-park"
              onClick={() => setIsOpen(false)}
              className="nav-link"
            >
              Our park
            </Link>
          </li>
          <li>
            <Link
              href="/holiday-home-ownership"
              onClick={() => setIsOpen(false)}
              className="nav-link"
            >
              Holiday home ownership
            </Link>
          </li>

          <li>
            <Link
              href="/holiday-homes-for-sale"
              onClick={() => setIsOpen(false)}
              className="nav-link"
            >
              Holiday homes for sale
            </Link>
          </li>
          <li>
            <Link
              href="/explore-the-area"
              onClick={() => setIsOpen(false)}
              className="nav-link"
            >
              Explore the area
            </Link>
          </li>
        </ul>
        <MobileNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      <div className="hidden lg:flex gap-3 me-5">
        <div className=" flex  gap-2 items-center">
          <a
            className="hover:underline underline-offset-4"
            href="tel:+441833625879"
          >
            <FaPhone className="text-2xl" />
          </a>
          <a
            className="hover:underline underline-offset-4"
            href="mailto:hello@petalwood.co.uk"
          >
            <FaEnvelope className="text-2xl" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61568268581402"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to Facebook page"
          >
            <FaFacebook className="text-2xl" />
          </a>
          <a
            href="https://www.instagram.com/petalwood_limited/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to Instagram page"
          >
            <FaInstagram className="text-2xl " />
          </a>
          <a
            href="https://www.linkedin.com/company/petalwood/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to LinkedIn page"
          >
            <FaLinkedin className="text-2xl " />
          </a>
        </div>
        {/* <Link href="/contact">
          <span className="block py-2 px-4 nav-link me-5">Contact Us</span>
        </Link> */}
      </div>

      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none p-2"
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
    </nav>
  )
}
