import Link from "next/link"
import { useState } from "react"
import ServiceLinks from "./ServiceLinks"
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
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
        <div className="w-full flex justify-center items-center hover:underline underline-offset-4">
          <span className=" py-2 px-4   flex items-center gap-2">
            <Link href="/our-services" onClick={() => handleLinkClick()}>
              <span className="block py-2 px-4  hover:underline underline-offset-4">
                Our Services
              </span>
            </Link>
            <button
              className="group-hover:rotate-180 transition-all duration-300"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </span>
        </div>
      </li>
      {showDropdown && (
        <ul className="bg-gray-700">
          <ServiceLinks
            setIsOpen={setIsOpen}
            setShowDropdown={setShowDropdown}
          />
        </ul>
      )}
      <li>
        <Link href="/our-team" onClick={() => setIsOpen(false)}>
          <span className="block py-2 px-4 hover:underline underline-offset-4">
            Our Team
          </span>
        </Link>
      </li>

      <li>
        <Link href="/our-blog" onClick={() => setIsOpen(false)}>
          <span className="block py-2 px-4 hover:underline underline-offset-4">
            Our Blog
          </span>
        </Link>
      </li>
      <li>
        <Link href="/our-story" onClick={() => setIsOpen(false)}>
          <span className="block py-2 px-4 hover:underline underline-offset-4">
            Our Story
          </span>
        </Link>
      </li>
      {/* <li>
        <Link href="/our-clients" onClick={() => setIsOpen(false)}>
          <span className="block py-2 px-4 hover:underline underline-offset-4">
            Our Clients
          </span>
        </Link>
      </li>
      <li>
        <Link href="/our-network" onClick={() => setIsOpen(false)}>
          <span className="block py-2 px-4 hover:underline underline-offset-4">
            Our Network
          </span>
        </Link>
      </li> */}
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
            href="https://www.facebook.com/people/The-Holiday-Park-People/61563980614141"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to Facebook page"
          >
            <FaFacebook className="text-2xl" />
          </a>
          <a
            href="https://www.instagram.com/theholidayparkpeople"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to Instagram page"
          >
            <FaInstagram className="text-2xl " />
          </a>
          <a
            href="https://www.linkedin.com/company/the-holiday-park-people/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to LinkedIn page"
          >
            <FaLinkedin className="text-2xl " />
          </a>
          <a
            href="https://www.youtube.com/@theholidayparkpeople"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to Youtube page"
          >
            <FaSquareYoutube className="text-2xl " />
          </a>
          <a
            href="https://www.tiktok.com/@holidayparkpeople"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to TikTok page"
          >
            <FaTiktok className="text-2xl " />
          </a>
        </div>
      </li>
    </ul>
  )
}
