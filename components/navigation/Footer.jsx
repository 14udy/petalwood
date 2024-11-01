import Image from "next/image"

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaSquareYoutube,
  FaTiktok,
} from "react-icons/fa6"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full   bg-[#181e34] text-white grid md:grid-cols-2 lg:grid-cols-4 p-2 gap-3 border-t border-slate-600 py-6 ">
      <div className="flex flex-col justify-between gap-2">
        <div>
          <Image
            src="/images/hpp-logo-t.webp"
            alt="Holiday Park People Logo"
            height={627}
            width={455}
            className="h-[100px] w-auto"
          />
        </div>
        <p className="text-sm">
          Expert support for the UK holiday park sector <br />
        </p>
        <p className="text-sm">
          Copyright © 2024 The Holiday Park People. All Rights Reserved
        </p>
      </div>
      <div>
        <h3 className="text-3xl text-secondary chewy ">Our Details</h3>
        <section className="space-y-1">
          <div>
            <p>Holiday Park People Limited</p>
            <p>2/4 Coastal Road</p>
            <p>Hest Bank</p>
            <p>Lancaster</p>
            <p>LA2 6HN</p>
            {/* <p>
              <a
                className="hover:underline underline-offset-4"
                href="tel:+441461600540"
              >
                01461 600 540
              </a>
            </p> */}
            <p>
              {" "}
              <a
                className="hover:underline underline-offset-4"
                href="mailto:hey@holidayparkpeople.co.uk"
              >
                hey@holidayparkpeople.co.uk
              </a>
            </p>
          </div>
          <div className=" flex  gap-2 items-center">
            <a
              href="https://www.facebook.com/people/The-Holiday-Park-People/61563980614141"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to Facebook page"
            >
              <FaFacebook className="text-xl" />
            </a>
            <a
              href="https://www.instagram.com/theholidayparkpeople"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to Instagram page"
            >
              <FaInstagram className="text-xl " />
            </a>
            <a
              href="https://www.linkedin.com/company/the-holiday-park-people/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to LinkedIn page"
            >
              <FaLinkedin className="text-xl " />
            </a>
            <a
              href="https://www.youtube.com/@theholidayparkpeople"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to Youtube page"
            >
              <FaSquareYoutube className="text-xl " />
            </a>
            <a
              href="https://www.tiktok.com/@holidayparkpeople"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Link to TikTok page"
            >
              <FaTiktok className="text-xl " />
            </a>
          </div>
        </section>
      </div>
      <div>
        <h3 className="text-3xl text-secondary chewy  ">Quick links</h3>
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
      </div>
      <div>
        <h3 className="text-3xl text-secondary chewy  ">The Important Bits</h3>
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
