import Link from "next/link"
import { useState } from "react"
import ServiceLinks from "./ServiceLinks"
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaSquareYoutube,
  FaTiktok,
} from "react-icons/fa6"

export default function MobileNavbar({ isOpen, setIsOpen }) {
  const [showDropdown, setShowDropdown] = useState(false)
  const handleLinkClick = () => {
    setIsOpen(false)
    setShowDropdown(false)
  }

  return (
    <ul
      className={` text-center space-y-2 ${
        isOpen ? "mt-[70px] block fixed inset-0 bg-black " : "hidden"
      }`}
    >
      <li>
        <Link href="/" onClick={() => setIsOpen(false)}>
          <span className="block py-2 px-4  hover:underline underline-offset-4">
            Home
          </span>
        </Link>
      </li>

      <li>
        <Link href="/our-park" onClick={() => setIsOpen(false)}>
          <span className="block py-2 px-4 hover:underline underline-offset-4">
            Our park
          </span>
        </Link>
      </li>

      <li>
        <Link href="/holiday-home-ownership" onClick={() => setIsOpen(false)}>
          <span className="block py-2 px-4 hover:underline underline-offset-4">
            Holiday Home Ownership
          </span>
        </Link>
      </li>
      <li>
        <Link href="/holiday-homes-for-sale" onClick={() => setIsOpen(false)}>
          <span className="block py-2 px-4 hover:underline underline-offset-4">
            Holiday Homes for Sale
          </span>
        </Link>
      </li>
      <li>
        <Link href="/explore-the-area" onClick={() => setIsOpen(false)}>
          <span className="block py-2 px-4 hover:underline underline-offset-4">
            Explore the Area
          </span>
        </Link>
      </li>

      <li>
        <Link href="/contact" onClick={() => setIsOpen(false)}>
          <span className="block py-2 px-4 hover:underline underline-offset-4">
            Contact Us
          </span>
        </Link>
      </li>
      <li className="py-3">
        <div className=" flex  gap-2 justify-center items-center">
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
         
        </div>
      </li>
    </ul>
  )
}
