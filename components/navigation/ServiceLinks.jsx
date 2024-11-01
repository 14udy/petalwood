import Link from "next/link"

export default function ServiceLinks({ setIsOpen, setShowDropdown }) {
  const handleLinkClick = () => {
    setIsOpen(false)
    setShowDropdown(false)
  }

  return (
    <>
      <li>
        <Link
          href="/our-services/holiday-home-sales"
          onClick={handleLinkClick}
          className="nav-link"
        >
          Holiday Home Sales
        </Link>
      </li>
      <li>
        <Link
          href="/our-services/holiday-sales"
          onClick={handleLinkClick}
          className="nav-link"
        >
          Holiday Sales
        </Link>
      </li>
      <li>
        <Link
          href="/our-services/marketing"
          onClick={handleLinkClick}
          className="nav-link"
        >
          Marketing
        </Link>
      </li>
      <li>
        <Link
          href="/our-services/training"
          onClick={handleLinkClick}
          className="nav-link"
        >
          Training
        </Link>
      </li>
      <li>
        <Link
          href="/our-services/events"
          onClick={handleLinkClick}
          className="nav-link"
        >
          Events
        </Link>
      </li>
      <li>
        <Link
          href="/our-services/pitch-yield"
          onClick={handleLinkClick}
          className="nav-link"
        >
          Pitch Yield
        </Link>
      </li>
    </>
  )
}
