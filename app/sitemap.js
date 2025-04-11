import { services } from "../data/services"
import { blogs } from "../data/blogs"
import { teamMembers } from "../data/teamMembers"

export default function sitemap() {
  const today = new Date()

  return [
    {
      url: "https://petalwood.com",
      lastModified: today,
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://petalwood.com/holiday-home-ownership",
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://petalwood.com/holiday-homes-for-sale",
      lastModified: today,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: "https://petalwood.com/our-park",
      lastModified: today,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://petalwood.com/privacy-policy",
      lastModified: today,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: "https://petalwood.com/terms-and-conditions",
      lastModified: today,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ]
}
